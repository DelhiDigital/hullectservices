const API_BASE_URL = "http://localhost:5000/api"

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
    return handleResponse(response)
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

  // Admin endpoints
  getAdminJobs: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/jobs/admin/my-jobs?${queryString}`, {
      headers: getAuthHeaders(),
    })
    return handleResponse(response)
  },

  createJob: async (jobData) => {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(jobData),
    })
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
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: "POST",
      body: formData, // FormData object for file upload
    })
    return handleResponse(response)
  },

  // Admin endpoints
  getApplications: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/applications?${queryString}`, {
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
