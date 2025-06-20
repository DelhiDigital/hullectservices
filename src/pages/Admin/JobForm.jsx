"use client"

import { useState } from "react"
import "./Admin.css"

const JobForm = ({ job, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: job?.title || "",
    company: job?.company || "",
    location: job?.location || "",
    type: job?.type || "Full-time",
    description: job?.description || "",
    requirements: job?.requirements || [""],
    responsibilities: job?.responsibilities || [""],
    closingDate: job?.closingDate ? new Date(job.closingDate).toISOString().split("T")[0] : "",
    isActive: job?.isActive !== undefined ? job.isActive : true,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleArrayChange = (index, value, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }))
  }

  const addArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }))
  }

  const removeArrayItem = (index, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Filter out empty requirements and responsibilities
      const cleanedData = {
        ...formData,
        requirements: formData.requirements.filter((req) => req.trim() !== ""),
        responsibilities: formData.responsibilities.filter((resp) => resp.trim() !== ""),
      }

      await onSave(cleanedData)
    } catch (error) {
      console.error("Error saving job:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="job-form-container">
      <div className="job-form-header">
        <h3>{job ? "Edit Job" : "Create New Job"}</h3>
        <button onClick={onCancel} className="job-form-close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="job-form">
        <div className="job-form-grid">
          <div className="job-form-group">
            <label htmlFor="title">Job Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="e.g. Senior Software Engineer"
            />
          </div>

          <div className="job-form-group">
            <label htmlFor="company">Company *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="e.g. TechCorp Inc."
            />
          </div>

          <div className="job-form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="e.g. San Francisco, CA"
            />
          </div>

          <div className="job-form-group">
            <label htmlFor="type">Job Type *</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} required disabled={loading}>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="job-form-group">
            <label htmlFor="closingDate">Application Deadline *</label>
            <input
              type="date"
              id="closingDate"
              name="closingDate"
              value={formData.closingDate}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="job-form-group">
            <label className="job-form-checkbox">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                disabled={loading}
              />
              <span className="checkmark"></span>
              Active Job Posting
            </label>
          </div>
        </div>

        <div className="job-form-group full-width">
          <label htmlFor="description">Job Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            disabled={loading}
            rows="6"
            placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
          />
        </div>

        <div className="job-form-group full-width">
          <label>Requirements</label>
          <div className="job-form-array">
            {formData.requirements.map((requirement, index) => (
              <div key={index} className="job-form-array-item">
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => handleArrayChange(index, e.target.value, "requirements")}
                  placeholder="e.g. 5+ years of experience with React"
                  disabled={loading}
                />
                {formData.requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, "requirements")}
                    className="job-form-remove-btn"
                    disabled={loading}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("requirements")}
              className="job-form-add-btn"
              disabled={loading}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Requirement
            </button>
          </div>
        </div>

        <div className="job-form-group full-width">
          <label>Responsibilities</label>
          <div className="job-form-array">
            {formData.responsibilities.map((responsibility, index) => (
              <div key={index} className="job-form-array-item">
                <input
                  type="text"
                  value={responsibility}
                  onChange={(e) => handleArrayChange(index, e.target.value, "responsibilities")}
                  placeholder="e.g. Lead development of new features"
                  disabled={loading}
                />
                {formData.responsibilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, "responsibilities")}
                    className="job-form-remove-btn"
                    disabled={loading}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("responsibilities")}
              className="job-form-add-btn"
              disabled={loading}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Responsibility
            </button>
          </div>
        </div>

        <div className="job-form-actions">
          <button type="button" onClick={onCancel} className="job-form-cancel" disabled={loading}>
            Cancel
          </button>
          <button type="submit" className="job-form-submit" disabled={loading}>
            {loading ? (
              <>
                <div className="job-form-spinner"></div>
                {job ? "Updating..." : "Creating..."}
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9,11 12,14 22,4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                {job ? "Update Job" : "Create Job"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobForm
