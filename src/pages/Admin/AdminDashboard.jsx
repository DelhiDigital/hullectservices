"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { jobsAPI } from "../../services/api"
import JobForm from "./JobForm"
import "./Admin.css"

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [showJobForm, setShowJobForm] = useState(false)
  const [currentJob, setCurrentJob] = useState(null)
  const [pagination, setPagination] = useState({})
  const navigate = useNavigate()

  // Check authentication on component mount
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("adminAuth"))
    if (!authData || !authData.isAuthenticated) {
      navigate("/admin/login")
      return
    }

    loadJobs()
  }, [navigate])

  const loadJobs = async () => {
    try {
      setLoading(true)
      const response = await jobsAPI.getAdminJobs()

      if (response.success) {
        setJobs(response.data.jobs)
        setPagination(response.data.pagination)
      }
    } catch (error) {
      setError(error.message || "Failed to load jobs")
      console.error("Load jobs error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminToken")
    navigate("/admin/login")
  }

  const handleCreateJob = () => {
    setCurrentJob(null)
    setShowJobForm(true)
  }

  const handleEditJob = (job) => {
    setCurrentJob(job)
    setShowJobForm(true)
  }

  const handleDeleteJob = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      try {
        await jobsAPI.deleteJob(jobId)
        await loadJobs() // Reload jobs after deletion
      } catch (error) {
        alert(error.message || "Failed to delete job")
      }
    }
  }

  const handleToggleActive = async (jobId) => {
    try {
      await jobsAPI.toggleJobStatus(jobId)
      await loadJobs() // Reload jobs after status change
    } catch (error) {
      alert(error.message || "Failed to update job status")
    }
  }

  const handleSaveJob = async (jobData) => {
    try {
      if (currentJob) {
        // Update existing job
        await jobsAPI.updateJob(currentJob._id, jobData)
      } else {
        // Create new job
        await jobsAPI.createJob(jobData)
      }

      setShowJobForm(false)
      await loadJobs() // Reload jobs after save
    } catch (error) {
      alert(error.message || "Failed to save job")
    }
  }

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="admin-logout-button">
            Logout
          </button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-container">
          {error && <div className="error-message">{error}</div>}

          <div className="admin-actions">
            <h2>Job Management</h2>
            <button onClick={handleCreateJob} className="admin-create-button">
              Create New Job
            </button>
          </div>

          {showJobForm ? (
            <JobForm job={currentJob} onSave={handleSaveJob} onCancel={() => setShowJobForm(false)} />
          ) : (
            <div className="admin-jobs-list">
              <h3>Current Job Listings</h3>

              {jobs.length === 0 ? (
                <p className="admin-no-jobs">No job listings found. Create your first job posting!</p>
              ) : (
                <table className="admin-jobs-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Company</th>
                      <th>Location</th>
                      <th>Type</th>
                      <th>Posted Date</th>
                      <th>Closing Date</th>
                      <th>Applications</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job._id} className={job.isActive ? "" : "inactive-job"}>
                        <td>{job.title}</td>
                        <td>{job.company}</td>
                        <td>{job.location}</td>
                        <td>{job.type}</td>
                        <td>{new Date(job.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(job.closingDate).toLocaleDateString()}</td>
                        <td>{job.applicationCount || 0}</td>
                        <td>
                          <span className={`status-badge ${job.isActive ? "active" : "inactive"}`}>
                            {job.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="admin-actions-cell">
                          <button onClick={() => handleEditJob(job)} className="admin-action-button edit">
                            Edit
                          </button>
                          <button
                            onClick={() => handleToggleActive(job._id)}
                            className={`admin-action-button ${job.isActive ? "deactivate" : "activate"}`}
                          >
                            {job.isActive ? "Deactivate" : "Activate"}
                          </button>
                          <button onClick={() => handleDeleteJob(job._id)} className="admin-action-button delete">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
