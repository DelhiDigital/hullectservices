"use client"

import { useState, useEffect } from "react"
import "./admin.css"

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

  // If editing an existing job, populate the form
  useEffect(() => {
    if (job) {
      setFormData({
        ...job,
        // Ensure arrays are properly initialized
        requirements: job.requirements || [""],
        responsibilities: job.responsibilities || [""],
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

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.title || !formData.company || !formData.location) {
      alert("Please fill in all required fields")
      return
    }

    // Filter out empty requirements and responsibilities
    const cleanedData = {
      ...formData,
      requirements: formData.requirements.filter((item) => item.trim() !== ""),
      responsibilities: formData.responsibilities.filter((item) => item.trim() !== ""),
    }

    onSave(cleanedData)
  }

  return (
    <div className="admin-job-form-container">
      <h3>{job ? "Edit Job Posting" : "Create New Job Posting"}</h3>

      <form onSubmit={handleSubmit} className="admin-job-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Job Title *</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company *</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Job Type *</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} required>
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
              />
              <button
                type="button"
                className="list-item-button remove"
                onClick={() => removeListItem("requirements", index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="list-item-button add" onClick={() => addListItem("requirements")}>
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
              />
              <button
                type="button"
                className="list-item-button remove"
                onClick={() => removeListItem("responsibilities", index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="list-item-button add" onClick={() => addListItem("responsibilities")}>
            Add Responsibility
          </button>
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="submit-button">
            {job ? "Update Job" : "Create Job"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobForm
