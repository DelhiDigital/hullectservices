"use client"

import { useState, useEffect } from "react"
import "./Admin.css"

const JobForm = ({ job, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full Time",
    closingDate: "",
    description: "",
    requirements: [""],
    responsibilities: [""],
    isActive: true,
  })
  const [loading, setLoading] = useState(false)

  // If editing an existing job, populate the form
  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || "",
        company: job.company || "",
        location: job.location || "",
        type: job.type || "Full Time",
        closingDate: job.closingDate ? job.closingDate.split("T")[0] : "",
        description: job.description || "",
        requirements: job.requirements && job.requirements.length > 0 ? job.requirements : [""],
        responsibilities: job.responsibilities && job.responsibilities.length > 0 ? job.responsibilities : [""],
        isActive: job.isActive !== undefined ? job.isActive : true,
      })
    }
  }, [job])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleListItemChange = (type, index, value) => {
    const updatedList = [...formData[type]]
    updatedList[index] = value
    setFormData({
      ...formData,
      [type]: updatedList,
    })
  }

  const addListItem = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], ""],
    })
  }

  const removeListItem = (type, index) => {
    if (formData[type].length > 1) {
      const updatedList = formData[type].filter((_, i) => i !== index)
      setFormData({
        ...formData,
        [type]: updatedList,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Basic validation
    if (!formData.title || !formData.company || !formData.location || !formData.description) {
      alert("Please fill in all required fields")
      setLoading(false)
      return
    }

    // Validate closing date
    const closingDate = new Date(formData.closingDate)
    if (closingDate <= new Date()) {
      alert("Closing date must be in the future")
      setLoading(false)
      return
    }

    try {
      // Filter out empty requirements and responsibilities
      const cleanedData = {
        ...formData,
        requirements: formData.requirements.filter((item) => item.trim() !== ""),
        responsibilities: formData.responsibilities.filter((item) => item.trim() !== ""),
      }

      await onSave(cleanedData)
    } catch (error) {
      console.error("Save job error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-job-form-container">
      <h3>{job ? "Edit Job Posting" : "Create New Job Posting"}</h3>

      <form onSubmit={handleSubmit} className="admin-job-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Job Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Job Type *</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} required disabled={loading}>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
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

          <div className="form-group">
            <label htmlFor="isActive">Status</label>
            <select
              id="isActive"
              name="isActive"
              value={formData.isActive}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isActive: e.target.value === "true",
                })
              }
              disabled={loading}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Job Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            disabled={loading}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Requirements</label>
          {formData.requirements.map((req, index) => (
            <div key={`req-${index}`} className="list-item-row">
              <input
                type="text"
                value={req}
                onChange={(e) => handleListItemChange("requirements", index, e.target.value)}
                placeholder="Enter a requirement"
                disabled={loading}
              />
              <button
                type="button"
                className="list-item-button remove"
                onClick={() => removeListItem("requirements", index)}
                disabled={loading || formData.requirements.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="list-item-button add"
            onClick={() => addListItem("requirements")}
            disabled={loading}
          >
            Add Requirement
          </button>
        </div>

        <div className="form-group">
          <label>Responsibilities</label>
          {formData.responsibilities.map((resp, index) => (
            <div key={`resp-${index}`} className="list-item-row">
              <input
                type="text"
                value={resp}
                onChange={(e) => handleListItemChange("responsibilities", index, e.target.value)}
                placeholder="Enter a responsibility"
                disabled={loading}
              />
              <button
                type="button"
                className="list-item-button remove"
                onClick={() => removeListItem("responsibilities", index)}
                disabled={loading || formData.responsibilities.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="list-item-button add"
            onClick={() => addListItem("responsibilities")}
            disabled={loading}
          >
            Add Responsibility
          </button>
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-button" disabled={loading}>
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Saving..." : job ? "Update Job" : "Create Job"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobForm
