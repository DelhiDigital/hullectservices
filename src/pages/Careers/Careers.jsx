"use client";

import { useState, useEffect, useRef } from "react";
import { jobsAPI, applicationsAPI } from "../../services/api";
import "./Careers.css";

// Mock data for cities - you can replace this with your actual cities API
const initialCities = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "Charlotte, NC",
  "San Francisco, CA",
  "Indianapolis, IN",
  "Seattle, WA",
  "Denver, CO",
  "Boston, MA",
  "El Paso, TX",
  "Detroit, MI",
  "Nashville, TN",
  "Portland, OR",
  "Memphis, TN",
  "Oklahoma City, OK",
  "Las Vegas, NV",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeywords, setSearchKeywords] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const locationInputRef = useRef(null);
  const [cities, setCities] = useState(initialCities);

  // Application form state
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

  // Load jobs on component mount
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

        // Extract unique cities from job locations
        const uniqueCities = [
          ...new Set(
            response.data.jobs
              .map((job) => job.location)
              .filter((location) => location)
          ),
        ];
        setCities(uniqueCities);

        console.log("Loaded cities:", uniqueCities);
        console.log("Loaded jobs:", response.data.jobs);
      }
    } catch (error) {
      console.error("Failed to load jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle location input change and show suggestions
  const handleLocationChange = (value) => {
    setSearchLocation(value);
    if (value.length > 0) {
      const suggestions = cities
        .filter((city) => city.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setLocationSuggestions(suggestions);
      setShowLocationSuggestions(true);
    } else {
      setShowLocationSuggestions(false);
    }
  };

  // Handle search functionality with API
  const handleSearch = async () => {
    try {
      const params = { isActive: true };

      // Only add search params if they have values
      if (searchKeywords && searchKeywords.trim()) {
        params.search = searchKeywords.trim();
      }
      if (searchLocation && searchLocation.trim()) {
        params.location = searchLocation.trim();
      }

      const response = await jobsAPI.getJobs(params);

      if (response.success) {
        setFilteredJobs(response.data.jobs);
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  // Handle location suggestion selection
  const selectLocationSuggestion = (city) => {
    setSearchLocation(city);
    setShowLocationSuggestions(false);
  };

  // Handle job modal
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

  // Handle form input changes
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

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationInputRef.current &&
        !locationInputRef.current.contains(event.target)
      ) {
        setShowLocationSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-trigger search when search terms change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 300); // Debounce search by 300ms

    return () => clearTimeout(timeoutId);
  }, [searchKeywords, searchLocation]);

  if (loading) {
    return (
      <div className="careers-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="careers-container">
      {/* Hero Section */}
      <div className="banner-section">
        <div className="banner-content">
          <h1>
            Welcome to
            <br />
            <span className="brand-text">Hullect Job portal </span>
          </h1>
          <p>
            At <strong>Hullect Services Private Limited</strong>, we specialize
            in Recruitment, Staffing, and Managed HR Services across diverse
            industries. Our mission is to connect top talent with the right
            opportunities, supporting businesses with flexible workforce
            solutions and job seekers with meaningful career paths.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-form">
            <div className="search-row">
              {/* Keywords Search */}
              <div className="input-group">
                <label htmlFor="keywords" className="input-label">
                  What are you looking for?
                </label>
                <div className="input-wrapper">
                  <svg
                    className="input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input
                    id="keywords"
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchKeywords}
                    onChange={(e) => setSearchKeywords(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              {/* Location Search with Suggestions */}
              <div
                className="input-group location-group"
                ref={locationInputRef}
              >
                <label htmlFor="location" className="input-label">
                  Where?
                </label>
                <div className="input-wrapper">
                  <svg
                    className="input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <input
                    id="location"
                    type="text"
                    placeholder="City, state, or zip code"
                    value={searchLocation}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className="search-input"
                  />
                  <svg
                    className="dropdown-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>

                {/* Location Suggestions Dropdown */}
                {showLocationSuggestions && locationSuggestions.length > 0 && (
                  <div className="suggestions-dropdown">
                    {locationSuggestions.map((city, index) => (
                      <button
                        key={index}
                        onClick={() => selectLocationSuggestion(city)}
                        className="suggestion-item"
                      >
                        <svg
                          className="suggestion-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{city}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search and Clear Buttons */}
              <div className="search-buttons">
                <button onClick={handleSearch} className="search-button">
                  FIND JOBS
                </button>
                {(searchKeywords || searchLocation) && (
                  <button
                    onClick={() => {
                      setSearchKeywords("");
                      setSearchLocation("");
                      setShowLocationSuggestions(false);
                    }}
                    className="clear-button"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="jobs-section">
        <div className="jobs-header">
          <h2 className="jobs-title">
            {filteredJobs.length} Job{filteredJobs.length !== 1 ? "s" : ""}{" "}
            Found
          </h2>
          <p className="jobs-subtitle">
            {searchKeywords || searchLocation
              ? `Showing results for ${
                  searchKeywords ? `"${searchKeywords}"` : ""
                } ${searchKeywords && searchLocation ? "in" : ""} ${
                  searchLocation ? `"${searchLocation}"` : ""
                }`
              : "Browse all available positions"}
          </p>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="no-jobs">
            <div className="no-jobs-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <h3>No jobs found</h3>
            <p>Try adjusting your search criteria or browse all jobs.</p>
          </div>
        ) : (
          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="job-card"
                onClick={() => openJobModal(job)}
              >
                <div className="job-header">
                  <div className="job-info">
                    <p className="admin-job-id">Job ID: {job?.jobId}</p>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-company">
                      <svg
                        className="company-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M3 21h18"></path>
                        <path d="M5 21V7l8-4v18"></path>
                        <path d="M19 21V11l-6-4"></path>
                      </svg>
                      <span>{job.company}</span>
                    </div>
                    <div className="job-location">
                      <svg
                        className="location-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="job-meta">
                    <span
                      className={`job-type ${job.type
                        ?.toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="job-description">
                  <p>
                    {job.description && job.description.length > 150
                      ? `${job.description.substring(0, 150)}...`
                      : job.description}
                  </p>
                </div>
                <div className="job-footer">
                  <div className="job-posted">
                    <svg
                      className="clock-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>
                      Posted {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="job-applicants">
                    <svg
                      className="users-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>{job.applicationCount || 0} applicants</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
                  <div className="meta-grid">
                    <div className="meta-item">
                      <strong>Company:</strong> {selectedJob.company}
                    </div>
                    <div className="meta-item">
                      <strong>Location:</strong> {selectedJob.location}
                    </div>
                    <div className="meta-item">
                      <strong>Type:</strong>
                      <span
                        className={`job-type ${selectedJob.type
                          ?.toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {selectedJob.type}
                      </span>
                    </div>
                    <div className="meta-item">
                      <strong>Posted:</strong>{" "}
                      {new Date(selectedJob.createdAt).toLocaleDateString()}
                    </div>
                    <div className="meta-item">
                      <strong>Deadline:</strong>{" "}
                      {new Date(selectedJob.closingDate).toLocaleDateString()}
                    </div>
                    <div className="meta-item">
                      <strong>Applications:</strong>{" "}
                      {selectedJob.applicationCount || 0}
                    </div>
                  </div>
                </div>

                <div className="job-description-full">
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
