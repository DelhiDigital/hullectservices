"use client";

import { useState, useEffect } from "react";
import { jobsAPI, applicationsAPI } from "../../services/api";
import "./Careers.css";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeywords, setSearchKeywords] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationData, setApplicationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    coverLetter: "",
    resume: null,
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const response = await jobsAPI.getJobs({ isActive: true });

      if (response.success) {
        setJobs(response.data.jobs);
        setFilteredJobs(response.data.jobs);
        console.log("Loaded jobs:", response.data.jobs);
      }
    } catch (error) {
      console.error("Failed to load jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      const params = {};
      if (searchKeywords) params.search = searchKeywords;
      if (searchLocation) params.location = searchLocation;
      params.isActive = true;

      const response = await jobsAPI.getJobs(params);

      if (response.success) {
        setFilteredJobs(response.data.jobs);
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const openJobModal = (job) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const closeJobModal = () => {
    setShowJobModal(false);
    setSelectedJob(null);
  };

  const openApplyModal = () => {
    setShowJobModal(false);
    setShowApplyModal(true);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    setApplicationData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      coverLetter: "",
      resume: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setApplicationData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("jobId", selectedJob._id);
      formData.append("firstName", applicationData.firstName);
      formData.append("lastName", applicationData.lastName);
      formData.append("email", applicationData.email);
      formData.append("phone", applicationData.phone);
      formData.append("address", applicationData.address);
      formData.append("city", applicationData.city);
      formData.append("state", applicationData.state);
      formData.append("zipCode", applicationData.zipCode);
      formData.append("coverLetter", applicationData.coverLetter);
      formData.append("resume", applicationData.resume);

      const response = await applicationsAPI.submitApplication(formData);

      if (response.success) {
        alert(
          "Application submitted successfully! You will receive a confirmation email shortly."
        );
        closeApplyModal();
      }
    } catch (error) {
      alert(error.message || "Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="careers-container">
        <div className="loading-container">
          <p>Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="careers-container">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-content">
          <h1>
            Welcome to
            <br />
            CAREERPAGE
          </h1>
          <p>
            CareerPage is your first source for jobs in broadcasting because
            these jobs are posted by the source – broadcasters from across the
            country. This comprehensive listing of open positions provides you
            with a wide range of career opportunities. Below, check to see what
            kinds of jobs are available in broadcasting and what's involved in
            getting those positions.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-form">
        <div className="search-row">
          <div className="input-group">
            <input
              type="text"
              placeholder="Keywords"
              value={searchKeywords}
              onChange={(e) => setSearchKeywords(e.target.value)}
              className="search-input"
            />
            <input
              type="text"
              placeholder="City"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="search-input"
            />
          </div>
          <button onClick={handleSearch} className="search-button">
            Search Jobs
          </button>
        </div>
      </div>

      {/* Jobs Listing Section */}
      <div className="jobs-section">
        <div className="jobs-container">
          {filteredJobs.length === 0 ? (
            <p className="no-jobs">No jobs found matching your criteria.</p>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job._id}
                className="job-card"
                onClick={() => openJobModal(job)}
              >
                <div className="job-header">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    
                    <p className="job-company">Company: {job.company}</p>
                    <p className="">
                      <b>Description</b>
                    </p>
                    <p className="job-description">
                      {job.description.split(" ").slice(0, 30).join(" ")}...
                    </p>
                  </div>
                  <div className="job-meta">
                    <span className="job-location"><span style={{color: "#6b7280"}}>Location:</span>{job.location}</span>
                  
                    <span
                      className={`job-type ${job.type
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                       {job.type}
                    </span>
                  </div>
                </div>
                <div className="job-footer">
                  <span className="job-posted">
                    Posted {new Date(job.createdAt).toLocaleDateString()}
                  </span>
                  <span className="job-closes">
                    Closes: {new Date(job.closingDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Job Details Modal */}
      {showJobModal && selectedJob && (
        <div className="modal-overlay" onClick={closeJobModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedJob.title}</h2>
              <button className="close-button" onClick={closeJobModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="job-details">
                <div className="job-meta-details">
                  <p>
                    <strong>Company:</strong> {selectedJob.company}
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedJob.location}
                  </p>
                  <p>
                    <strong>Type:</strong> {selectedJob.type}
                  </p>
                  <p>
                    <strong>Posted:</strong>{" "}
                    {new Date(selectedJob.createdAt).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Application Deadline:</strong>{" "}
                    {new Date(selectedJob.closingDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Applications:</strong>{" "}
                    {selectedJob.applicationCount || 0}
                  </p>
                </div>

                <div className="job-description">
                  <h3>Job Description</h3>
                  <p>{selectedJob.description}</p>
                </div>

                {selectedJob.requirements &&
                  selectedJob.requirements.length > 0 && (
                    <div className="job-requirements">
                      <h3>Requirements</h3>
                      <ul>
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                {selectedJob.responsibilities &&
                  selectedJob.responsibilities.length > 0 && (
                    <div className="job-responsibilities">
                      <h3>Responsibilities</h3>
                      <ul>
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="apply-button" onClick={openApplyModal}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplyModal && selectedJob && (
        <div className="modal-overlay" onClick={closeApplyModal}>
          <div
            className="modal-content application-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Apply for {selectedJob.title}</h2>
              <button className="close-button" onClick={closeApplyModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={handleSubmitApplication}
                className="application-form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={applicationData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={applicationData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={applicationData.address}
                    onChange={handleInputChange}
                    disabled={submitting}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={applicationData.city}
                      onChange={handleInputChange}
                      disabled={submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      value={applicationData.state}
                      onChange={handleInputChange}
                      disabled={submitting}
                    />
                  </div>
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={applicationData.zipCode}
                      onChange={handleInputChange}
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us why you're interested in this position..."
                    disabled={submitting}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Resume *</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    disabled={submitting}
                  />
                  <small>Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={closeApplyModal}
                    className="cancel-button"
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
