"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import JobForm from "./JobForm"
import "./admin.css"

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([])
  const [showJobForm, setShowJobForm] = useState(false)
  const [currentJob, setCurrentJob] = useState(null)
  const navigate = useNavigate()

  // Check authentication on component mount
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("adminAuth"))
    if (!authData || !authData.isAuthenticated) {
      navigate("/admin/login")
    }

    // Load sample jobs data
    setJobs([
      {
        id: "1",
        title: "Multi-Media Journalist",
        company: "KOAM NEWS NOW",
        location: "Pittsburg",
        type: "Full Time",
        postedDate: "2023-06-01",
        closingDate: "2023-07-31",
        description: "We are seeking a dynamic Multi-Media Journalist to join our news team.",
        requirements: ["Bachelor's degree in Journalism", "Minimum 2 years of experience"],
        responsibilities: ["Research and develop news stories", "Conduct interviews with sources"],
        isActive: true,
      },
      {
        id: "2",
        title: "Part-time News Reporter",
        company: "WMUK-FM",
        location: "Kalamazoo",
        type: "Part Time",
        postedDate: "2023-06-01",
        closingDate: "2023-07-04",
        description: "Public radio station seeking a part-time news reporter.",
        requirements: ["Experience in radio or print journalism", "Strong research and writing skills"],
        responsibilities: ["Cover local news events", "Conduct interviews"],
        isActive: false,
      },
    ])
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
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

  const handleDeleteJob = (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      setJobs(jobs.filter((job) => job.id !== jobId))
    }
  }

  const handleToggleActive = (jobId) => {
    setJobs(jobs.map((job) => (job.id === jobId ? { ...job, isActive: !job.isActive } : job)))
  }

  const handleSaveJob = (jobData) => {
    if (currentJob) {
      // Update existing job
      setJobs(jobs.map((job) => (job.id === currentJob.id ? { ...jobData, id: job.id } : job)))
    } else {
      // Create new job with random ID (replace with API-generated ID later)
      const newJob = {
        ...jobData,
        id: Date.now().toString(),
        postedDate: new Date().toISOString().split("T")[0],
      }
      setJobs([...jobs, newJob])
    }
    setShowJobForm(false)
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
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id} className={job.isActive ? "" : "inactive-job"}>
                        <td>{job.title}</td>
                        <td>{job.company}</td>
                        <td>{job.location}</td>
                        <td>{job.type}</td>
                        <td>{job.postedDate}</td>
                        <td>{job.closingDate}</td>
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
                            onClick={() => handleToggleActive(job.id)}
                            className={`admin-action-button ${job.isActive ? "deactivate" : "activate"}`}
                          >
                            {job.isActive ? "Deactivate" : "Activate"}
                          </button>
                          <button onClick={() => handleDeleteJob(job.id)} className="admin-action-button delete">
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
