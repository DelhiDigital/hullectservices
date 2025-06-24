"use client"

import { useState } from "react"
import "./Admin.css"
import { BASE_URL } from "../../services/api"

const ApplicationsModal = ({ jobData, onClose }) => {
  const [selectedApplication, setSelectedApplication] = useState(null)

  
  const handleDownloadResume = (application) => {
    // Implement resume download logic
    if (application.resumeUrl) {
      const downloadUrl = application.resumeUrl?.startsWith("http")
          ? application.resumeUrl
          : `${BASE_URL}${application.resumeUrl}`
      window.open(downloadUrl, "_blank")
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="applications-modal-overlay" onClick={onClose}>
      <div className="applications-modal" onClick={(e) => e.stopPropagation()}>
        <div className="applications-modal-header">
          <div>
            <h2>Applications for: {jobData.job.title}</h2>
            <p>{jobData.applications.length} applications received</p>
          </div>
          <button onClick={onClose} className="applications-close-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="applications-content">
          {jobData.applications.length === 0 ? (
            <div className="applications-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3>No applications yet</h3>
              <p>Applications will appear here when candidates apply for this position.</p>
            </div>
          ) : (
            <div className="applications-list">
              {jobData.applications.map((application) => (
                <div key={application._id} className="application-card">
                  <div className="application-header">
                    <div className="applicant-info">
                      <div className="applicant-avatar">
                        {application.firstName.charAt(0)}
                        {application.lastName.charAt(0)}
                      </div>
                      <div>
                        <h3>
                          {application.firstName} {application.lastName}
                        </h3>
                        <p>{application.email}</p>
                        <span className="application-date">Applied {formatDate(application.createdAt)}</span>
                      </div>
                    </div>
                    <div className="application-actions">
                      <button
                        onClick={() => handleDownloadResume(application)}
                        className="action-btn download"
                        title="Download Resume"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7,10 12,15 17,10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setSelectedApplication(selectedApplication?._id === application._id ? null : application)
                        }
                        className="action-btn view"
                        title="View Details"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {selectedApplication?._id === application._id && (
                    <div className="application-details">
                      <div className="details-grid">
                        <div className="detail-item">
                          <label>Phone</label>
                          <span>{application.phone}</span>
                        </div>
                        <div className="detail-item">
                          <label>Address</label>
                          <span>
                            {application.address && `${application.address}, `}
                            {application.city && `${application.city}, `}
                            {application.state} {application.zipCode}
                          </span>
                        </div>
                      </div>

                      {application.coverLetter && (
                        <div className="cover-letter">
                          <label>Cover Letter</label>
                          <div className="cover-letter-content">{application.coverLetter}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicationsModal
