export const BASE_URL = "https://hullectservices-backend.vercel.app/"  //base url for backend API for downloading files

const API_BASE_URL = "https://hullectservices-backend.vercel.app/api"
// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }

  return data
}

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("adminToken")
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}

// Auth API
export const authAPI = {
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
    const data = await handleResponse(response)

    // Return the correct structure based on your backend
    return {
      token: data.data.token,
      user: data.data.admin,
    }
  },

  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },

  changePassword: async (passwordData) => {
    const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(passwordData),
    })
    return handleResponse(response)
  },
}

// Jobs API
export const jobsAPI = {
  // Public endpoints
  getJobs: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/jobs?${queryString}`)
    return handleResponse(response)
  },

  getJob: async (id) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`)
    return handleResponse(response)
  },

  // Admin endpoints - Fixed the endpoint path
  getAdminJobs: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    const url = `${API_BASE_URL}/jobs/admin/my-jobs${queryString ? `?${queryString}` : ""}`
    const response = await fetch(url, {
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },

  createJob: async (jobData) => {
    // Get the admin ID from localStorage
    const authData = JSON.parse(localStorage.getItem("adminAuth") || "{}")
    console.log("Auth Data:", authData) // Debug log to check auth data;
    
    const adminId = authData?.user?.id || authData?.data?.admin?._id
    console.log("Admin ID:", adminId) // Debug log to check admin ID  

    if (!adminId) {
      throw new Error("Admin ID not found. Please login again.")
    }

    // Map frontend job types to backend enum values
    const jobTypeMapping = {
      "Full-time": "Full Time",
      "Part-time": "Part Time",
      Contract: "Contract",
      Internship: "Internship",
      Temporary: "Temporary",
    }

    // Format the data to match backend expectations
    const formattedData = {
      jobId: jobData.jobId?.trim(),
      title: jobData.title,
      company: jobData.company,
      location: jobData.location,
      type: jobTypeMapping[jobData.type] || jobData.type, // Map the job type
      description: jobData.description,
      requirements: Array.isArray(jobData.requirements) ? jobData.requirements : [jobData.requirements],
      responsibilities: Array.isArray(jobData.responsibilities) ? jobData.responsibilities : [jobData.responsibilities],
      closingDate: jobData.closingDate,
      isActive: jobData.isActive !== undefined ? jobData.isActive : true,
      createdBy: adminId, // Add the required createdBy field
    }

    console.log("Sending job data:", formattedData) // Debug log

    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(formattedData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Job creation error:", errorData)
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    return handleResponse(response)
  },

  updateJob: async (id, jobData) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(jobData),
    })
    return handleResponse(response)
  },

  deleteJob: async (id) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },

  toggleJobStatus: async (id) => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}/toggle-status`, {
      method: "PATCH",
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },
}

// Applications API
export const applicationsAPI = {
  // Public endpoint
  submitApplication: async (formData) => {
    const token = localStorage.getItem("adminToken")
    const headers = {}
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: "POST",
      headers,
      body: formData, // FormData object for file upload
    })
    return handleResponse(response)
  },

  // Admin endpoints
  getApplications: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    const url = `${API_BASE_URL}/applications${queryString ? `?${queryString}` : ""}`
    const response = await fetch(url, {
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },

  getJobApplications: async (jobId) => {
    const response = await fetch(`${API_BASE_URL}/applications?jobId=${jobId}`, {
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },

  getApplication: async (id) => {
    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },

  updateApplicationStatus: async (id, status) => {
    const response = await fetch(`${API_BASE_URL}/applications/${id}/status`, {
      method: "PATCH",
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    })
    return handleResponse(response)
  },

  deleteApplication: async (id) => {
    const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },
}
