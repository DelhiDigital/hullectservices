const BASE_URL =  "http://localhost:3000/api"

const handleResponse = async (response) => {
  const contentType = response.headers.get("content-type")
  let data

  if (contentType && contentType.includes("application/json")) {
    data = await response.json()
  } else {
    data = await response.text()
  }

  if (!response.ok) {
    const message = (data && data.message) || response.statusText
    return Promise.reject(new Error(message))
  }

  return data
}

export const authAPI = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to login:", error)
      throw error
    }
  },
}

export const jobsAPI = {
  getJobs: async (params = {}) => {
    const queryParams = new URLSearchParams(params)
    const url = `${BASE_URL}/jobs?${queryParams}`

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to get jobs:", error)
      throw error
    }
  },

  getAdminJobs: async () => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`${BASE_URL}/admin/jobs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to get admin jobs:", error)
      throw error
    }
  },

  createJob: async (jobData) => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`${BASE_URL}/admin/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to create job:", error)
      throw error
    }
  },

  updateJob: async (jobId, jobData) => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`${BASE_URL}/admin/jobs/${jobId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to update job:", error)
      throw error
    }
  },

  deleteJob: async (jobId) => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`${BASE_URL}/admin/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to delete job:", error)
      throw error
    }
  },

  toggleJobStatus: async (jobId) => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`${BASE_URL}/admin/jobs/${jobId}/toggle`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to toggle job status:", error)
      throw error
    }
  },
}

export const applicationsAPI = {
  submitApplication: async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/applications`, {
        method: "POST",
        body: formData,
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to submit application:", error)
      throw error
    }
  },

  getJobApplications: async (jobId) => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`${BASE_URL}/admin/jobs/${jobId}/applications`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await handleResponse(response)
      return { success: true, data: data }
    } catch (error) {
      console.error("Failed to get job applications:", error)
      throw error
    }
  },
}
