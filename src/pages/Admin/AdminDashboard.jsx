"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { jobsAPI, applicationsAPI } from "../../services/api"
import JobForm from "./JobForm"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ApplicationsModal from "./ApplicationsModal"
import "./Admin.css"
import { BASE_URL } from "../../services/api"
import { ShieldUser } from 'lucide-react';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [showJobForm, setShowJobForm] = useState(false)
  const [currentJob, setCurrentJob] = useState(null)
  const [showApplications, setShowApplications] = useState(false)
  const [selectedJobApplications, setSelectedJobApplications] = useState(null)
  const [activeTab, setActiveTab] = useState("jobs")
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    totalApplications: 0,
    pendingApplications: 0,
  })
  const navigate = useNavigate()

  // Check authentication on component mount
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("adminAuth"))
    if (!authData || !authData.isAuthenticated) {
      navigate("/admin/login")
      return
    }

    loadData()
  }, [navigate])

  //update whole stats when jobs or applications change
  useEffect(() => {
    if (jobs.length > 0 || applications.length > 0) {
      calculateStats(jobs, applications)
    }
  }, [jobs, applications])

  // data loading function
  const loadData = async () => {
    try {
      setLoading(true)
      setError("")
      console.log("Loading all data...")

      const [jobsResponse, applicationsResponse] = await Promise.all([
        jobsAPI.getAdminJobs(),
        applicationsAPI.getApplications(),
      ])

      const jobsArray = Array.isArray(jobsResponse.data?.jobs) ? jobsResponse.data.jobs : jobsResponse.data || []

      const applicationsArray = Array.isArray(applicationsResponse.data?.applications)
        ? applicationsResponse.data.applications
        : applicationsResponse.data || []

      console.log("Jobs loaded:", jobsArray.length)
      console.log("Applications loaded:", applicationsArray.length)

      setJobs(jobsArray)
      setApplications(applicationsArray)

      // Stats will be calculated by useEffect automatically
    } catch (error) {
      console.error("Load data error:", error)
      setError("Failed to load dashboard data")
      toast.error("Failed to load dashboard data")
    } finally {
      setLoading(false)
    }
  }

  const loadJobs = async () => {
    try {
      setLoading(true)
      setError("")
      console.log("Loading jobs...")

      const response = await jobsAPI.getAdminJobs()
      console.log("Jobs response:", response)

      if (response.success && response.data) {
        // Handle the response structure from your backend
        let jobsArray = []

        if (Array.isArray(response.data.jobs)) {
          jobsArray = response.data.jobs
        } else if (Array.isArray(response.data)) {
          jobsArray = response.data
        } else {
          console.warn("Unexpected response structure:", response.data)
          jobsArray = []
        }

        setJobs(jobsArray)
        // Don't calculate stats here - let useEffect handle it
      } else {
        setJobs([])
        setError("Failed to load jobs")
      }
    } catch (error) {
      console.error("Load jobs error:", error)
      setError(error.message || "Failed to load jobs")
      setJobs([])
    } finally {
      setLoading(false)
    }
  }

  const loadApplications = async () => {
    try {
      const response = await applicationsAPI.getApplications()
      console.log("Applications response:", response)

      if (response.success && response.data) {
        let applicationsArray = []

        if (Array.isArray(response.data.applications)) {
          applicationsArray = response.data.applications
        } else if (Array.isArray(response.data)) {
          applicationsArray = response.data
        } else {
          console.warn("Unexpected applications response structure:", response.data)
          applicationsArray = []
        }

        setApplications(applicationsArray)
      } else {
        setApplications([])
      }
    } catch (error) {
      console.error("Load applications error:", error)
      setApplications([])
    }
  }

  // FIXED: Enhanced stats calculation with better logging
  const calculateStats = (jobsArray, applicationsArray) => {
    try {
      const totalApplications = jobsArray.reduce((sum, job) => sum + (job.applicationCount || 0), 0)

      const pendingApplications = applicationsArray.filter((app) => app.status === "pending").length

      const newStats = {
        totalJobs: jobsArray.length,
        activeJobs: jobsArray.filter((job) => job.isActive).length,
        totalApplications,
        pendingApplications,
      }

      console.log("Calculating stats:")
      console.log("Jobs array length:", jobsArray.length)
      console.log("Applications array length:", applicationsArray.length)
      console.log("New stats:", newStats)

      setStats(newStats)
    } catch (error) {
      console.error("Calculate stats error:", error)
      setStats({
        totalJobs: 0,
        activeJobs: 0,
        totalApplications: 0,
        pendingApplications: 0,
      })
    }
  }

  const handleLogout = () => {
    // Clear all admin-related data from localStorage
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminToken")
    localStorage.removeItem("admin")
    localStorage.removeItem("token")

    // Clear any other potential admin data
    Object.keys(localStorage).forEach((key) => {
      if (key.toLowerCase().includes("admin")) {
        localStorage.removeItem(key)
      }
    })

    // Redirect to login page
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

  // FIXED: Use loadData instead of loadJobs to update stats
  const handleDeleteJob = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      try {
        await jobsAPI.deleteJob(jobId)
        toast.success("Job deleted successfully!")
        await loadData() // FIXED: Load all data to update stats
      } catch (error) {
        alert(error.message || "Failed to delete job")
        toast.error(error.message || "Failed to delete job")
      }
    }
  }

  // FIXED: Use loadData instead of loadJobs to update stats
  const handleToggleActive = async (jobId) => {
    try {
      await jobsAPI.toggleJobStatus(jobId)
      toast.success("Job status updated successfully!")
      await loadData() // FIXED: Load all data to update stats
    } catch (error) {
      alert(error.message || "Failed to update job status")
      toast.error(error.message || "Failed to update job status")
    }
  }

  // FIXED: Use loadData instead of loadJobs to update stats
  const handleSaveJob = async (jobData) => {
    try {
      if (currentJob) {
        await jobsAPI.updateJob(currentJob._id, jobData)
        alert("Job updated successfully!")
        toast.success("Job updated successfully!")
      } else {
        await jobsAPI.createJob(jobData)
        alert("Job created successfully!")
        toast.success("Job created successfully!")
      }

      setShowJobForm(false)
      await loadData() // FIXED: Load all data to update stats
    } catch (error) {
      alert(error.message || "Failed to save job")
      toast.error(error.message || "Failed to save job")
    }
  }

  const handleViewApplications = async (job) => {
    try {
      const response = await applicationsAPI.getJobApplications(job._id)
      if (response.success && response.data) {
        let applicationsArray = []

        if (Array.isArray(response.data.applications)) {
          applicationsArray = response.data.applications
        } else if (Array.isArray(response.data)) {
          applicationsArray = response.data
        } else {
          console.warn("Unexpected applications response structure:", response.data)
          applicationsArray = []
        }

        setSelectedJobApplications({
          job: job,
          applications: applicationsArray,
        })
        setShowApplications(true)
      }
    } catch (error) {
      alert(error.message || "Failed to load applications")
      toast.error(error.message || "Failed to load applications")
    }
  }

  // FIXED: Use loadData instead of loadApplications to update stats
  const handleUpdateApplicationStatus = async (applicationId, status) => {
    try {
      await applicationsAPI.updateApplicationStatus(applicationId, status)
      toast.success("Application status updated!")
      await loadData() // FIXED: Load all data to update stats
    } catch (error) {
      alert(error.message || "Failed to update application status")
      toast.error(error.message || "Failed to update application status")
    }
  }

  // FIXED: Use loadData instead of loadApplications to update stats
  const handleDeleteApplication = async (applicationId) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        await applicationsAPI.deleteApplication(applicationId)
        toast.success("Application deleted successfully!")
        await loadData() // FIXED: Load all data to update stats
      } catch (error) {
        alert(error.message || "Failed to delete application")
        toast.error(error.message || "Failed to delete application")
      }
    }
  }

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="admin-loading">
          <div className="admin-spinner-large"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-content">
          <div className="admin-header-left">
            <div className="admin-logo-small">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div>
              <h1>Admin Dashboard</h1>
              <p>Manage jobs and applications</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {(() => {
              const authData = JSON.parse(localStorage.getItem("adminAuth") || "{}")
              const userEmail = authData?.user?.email || authData?.data?.admin?.email || "admin@example.com"
              const userName = authData?.user?.name || authData?.data?.admin?.name || "Admin"

              return (
                <div className="admin-user-info">
                  <div className="admin-user-avatar">{userName.charAt(0).toUpperCase()}</div>
                  <div className="admin-user-details">
                    <span className="admin-user-email">{userEmail}</span>
                    <span className="admin-user-role">Administrator</span>
                  </div>
                </div>
              )
            })()}
            <button onClick={handleLogout} className="admin-logout-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16,17 21,12 16,7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards - FIXED: Now shows correct stats that update on every action */}
      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-icon jobs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.totalJobs}</h3>
            <p>Total Jobs</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
            </svg>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.activeJobs}</h3>
            <p>Active Jobs</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon applications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.totalApplications}</h3>
            <p>Total Applications</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon pending">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.pendingApplications}</h3>
            <p>Pending Reviews</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-container">
          {error && (
            <div className="admin-error-message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              {error}
            </div>
          )}

          {/* Tab Navigation */}
          <div className="admin-tabs">
            <button
              className={`admin-tab ${activeTab === "jobs" ? "active" : ""}`}
              onClick={() => setActiveTab("jobs")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              Job Management
            </button>
            <button
              className={`admin-tab ${activeTab === "applications" ? "active" : ""}`}
              onClick={() => setActiveTab("applications")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Applications
            </button>

            {/* under development */}
            {/* <button
              className={`admin-tab ${activeTab === "users" ? "active" : ""}`}
              onClick={() => setActiveTab("users")}
            >
              <ShieldUser className="lucide-icon" width={28} height={28} />

              Users
            </button> */}
          </div>

          {/* Jobs Tab Content */}
          {activeTab === "jobs" && (
            <>
              <div className="admin-section-header">
                <h2>Job Listings</h2>
                <button onClick={handleCreateJob} className="admin-create-button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Create New Job
                </button>
              </div>

              {showJobForm ? (
                <JobForm job={currentJob} onSave={handleSaveJob} onCancel={() => setShowJobForm(false)} />
              ) : (
                <div className="admin-jobs-container">
                  {jobs.length === 0 ? (
                    <div className="admin-empty-state">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <h3>No job listings found</h3>
                      <p>Create your first job posting to get started!</p>
                      <button onClick={handleCreateJob} className="admin-create-button">
                        Create New Job
                      </button>
                    </div>
                  ) : (
                    <div className="admin-jobs-grid">
                      {jobs.map((job) => (
                        <div key={job._id} className={`admin-job-card ${!job.isActive ? "inactive" : ""}`}>
                          <div className="admin-job-header">
                            <div className="admin-job-title">
                              <h3>{job.title}</h3>
                              <span className={`admin-status-badge ${job.isActive ? "active" : "inactive"}`}>
                                {job.isActive ? "Active" : "Inactive"}
                              </span>
                            </div>

                            <div className="admin-job-actions">
                              <button
                                onClick={() => handleViewApplications(job)}
                                className="admin-action-btn view"
                                title="View Applications"
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span className="admin-applications-count">{job.applicationCount || 0}</span>
                              </button>
                              <button
                                onClick={() => handleEditJob(job)}
                                className="admin-action-btn edit"
                                title="Edit Job"
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                              </button>
                              <button
                                onClick={() => handleToggleActive(job._id)}
                                className={`admin-action-btn ${job.isActive ? "deactivate" : "activate"}`}
                                title={job.isActive ? "Deactivate" : "Activate"}
                              >
                                {job.isActive ? (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                ) : (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="9,11 12,14 22,4"></polyline>
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                  </svg>
                                )}
                              </button>
                              <button
                                onClick={() => handleDeleteJob(job._id)}
                                className="admin-action-btn delete"
                                title="Delete Job"
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <polyline points="3,6 5,6 21,6"></polyline>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="admin-job-details">
                            <div className="admin-job-meta">
                              <span className="admin-job-company">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path d="M3 21h18"></path>
                                  <path d="M5 21V7l8-4v18"></path>
                                  <path d="M19 21V11l-6-4"></path>
                                </svg>
                                {job.company}
                              </span>
                              <span className="admin-job-location">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                  <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                {job.location}
                              </span>
                              <span className="admin-job-type">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12,6 12,12 16,14"></polyline>
                                </svg>
                                {job.type}
                              </span>
                            </div>

                            <div className="admin-job-dates">
                              <span>Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
                              <span>Closes: {new Date(job.closingDate).toLocaleDateString()}</span>
                            </div>
                            <p className="admin-job-id">Job ID: {job?.jobId}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* Applications Tab Content */}
          {activeTab === "applications" && (
            <>
              <div className="admin-section-header">
                <h2>All Applications</h2>
              </div>

              <div className="admin-applications-container">
                {applications.length === 0 ? (
                  <div className="admin-empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3>No applications found</h3>
                    <p>Applications will appear here when candidates apply for jobs.</p>
                  </div>
                ) : (
                  <div className="admin-applications-list">
                    {applications.map((application) => {
                      const downloadUrl = application.resumeUrl?.startsWith("http")
                        ? application.resumeUrl
                        : `${BASE_URL}${application.resumeUrl}`

                      return (
                        <div key={application._id} className="admin-application-card">
                          <div className="admin-application-header">
                            <div className="admin-applicant-info">
                              <div className="admin-applicant-avatar">
                                {application.firstName?.charAt(0)}
                                {application.lastName?.charAt(0)}
                              </div>
                              <div>
                                <h3>
                                  {application.firstName} {application.lastName}
                                </h3>
                                <p>{application.email}</p>
                                <span className="admin-application-job">
                                  Applied for: {application.jobId?.title || "Unknown Job"}
                                </span>
                              </div>
                            </div>

                            <div className="admin-application-status">
                              <select
                                value={application.status}
                                onChange={(e) => handleUpdateApplicationStatus(application._id, e.target.value)}
                                className="admin-status-select"
                              >
                                <option value="pending">Pending</option>
                                <option value="reviewed">Reviewed</option>
                                <option value="shortlisted">Shortlisted</option>
                                <option value="rejected">Rejected</option>
                              </select>
                            </div>

                            <div className="admin-application-actions">
                              <button
                                onClick={() => {
                                  console.log("Resume URL:", downloadUrl)
                                  window.open(downloadUrl, "_blank")
                                }}
                                className="admin-action-btn download"
                                title="Download Resume"
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <polyline points="7,10 12,15 17,10"></polyline>
                                  <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                              </button>

                              <button
                                onClick={() => handleDeleteApplication(application._id)}
                                className="admin-action-btn delete"
                                title="Delete Application"
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <polyline points="3,6 5,6 21,6"></polyline>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="admin-application-details">
                            <div className="admin-application-meta">
                              <span>Phone: {application.phone}</span>
                              <span>Applied: {new Date(application.createdAt).toLocaleDateString()}</span>
                            </div>

                            {application.coverLetter && (
                              <div className="admin-cover-letter">
                                <strong>Cover Letter:</strong>
                                <p>{application.coverLetter}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Applications Modal */}
      {showApplications && selectedJobApplications && (
        <ApplicationsModal jobData={selectedJobApplications} onClose={() => setShowApplications(false)} />
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default AdminDashboard
