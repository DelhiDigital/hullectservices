"use client"

import { useState, useEffect } from "react"
import "./careers.css"

const Careers = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [searchKeywords, setSearchKeywords] = useState("")
  const [searchLocation, setSearchLocation] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)
  const [showJobModal, setShowJobModal] = useState(false)
  const [showApplyModal, setShowApplyModal] = useState(false)
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
  })

  // Sample job data
  const sampleJobs = [
    {
      id: "MMJ001",
      title: "Multi-Media Journalist",
      company: "KOAM NEWS NOW",
      location: "Pittsburg",
      type: "Full Time",
      postedTime: "15 hours ago",
      closingDate: "July 31, 2025",
      description:
        "We are seeking a dynamic Multi-Media Journalist to join our news team. The ideal candidate will be responsible for researching, writing, and presenting news stories across multiple platforms.",
      requirements: [
        "Bachelor's degree in Journalism, Communications, or related field",
        "Minimum 2 years of experience in broadcast journalism",
        "Strong writing and communication skills",
        "Proficiency in video editing software",
        "Ability to work under tight deadlines",
      ],
      responsibilities: [
        "Research and develop news stories",
        "Conduct interviews with sources",
        "Write and edit news scripts",
        "Present news on-air",
        "Operate camera and editing equipment",
      ],
    },
    {
      id: "NR002",
      title: "Part-time News Reporter",
      company: "WMUK-FM",
      location: "Kalamazoo",
      type: "Part Time",
      postedTime: "17 hours ago",
      closingDate: "July 4, 2025",
      description:
        "Public radio station seeking a part-time news reporter to cover local news and events in the Kalamazoo area.",
      requirements: [
        "Experience in radio or print journalism",
        "Strong research and writing skills",
        "Knowledge of AP style",
        "Reliable transportation",
      ],
      responsibilities: [
        "Cover local news events",
        "Conduct interviews",
        "Write news stories for radio broadcast",
        "Attend city council and school board meetings",
      ],
    },
    {
      id: "MMJ003",
      title: "MMJ/Reporter",
      company: "WSFA 12 News",
      location: "Montgomery",
      type: "Full Time",
      postedTime: "19 hours ago",
      closingDate: "August 15, 2025",
      description: "WSFA 12 News is looking for a Multi-Media Journalist/Reporter to join our award-winning news team.",
      requirements: [
        "Bachelor's degree preferred",
        "Previous MMJ experience required",
        "Strong storytelling abilities",
        "Social media savvy",
      ],
      responsibilities: [
        "Shoot, write, and edit daily news stories",
        "Develop story ideas and sources",
        "Live reporting capabilities",
        "Social media content creation",
      ],
    },
    {
      id: "IMP004",
      title: "Integrated Media Producer",
      company: "ABC4",
      location: "Salt Lake City",
      type: "Full Time",
      postedTime: "20 hours ago",
      closingDate: "July 20, 2025",
      description: "Join our digital team as an Integrated Media Producer, creating content across multiple platforms.",
      requirements: [
        "Experience in digital media production",
        "Knowledge of social media platforms",
        "Video editing skills",
        "Creative mindset",
      ],
      responsibilities: [
        "Produce content for web and social media",
        "Collaborate with news team",
        "Manage social media accounts",
        "Create multimedia presentations",
      ],
    },
  ]

  useEffect(() => {
    setJobs(sampleJobs)
    setFilteredJobs(sampleJobs)
  }, [])

  const handleSearch = () => {
    const filtered = jobs.filter((job) => {
      const keywordMatch =
        !searchKeywords ||
        job.title.toLowerCase().includes(searchKeywords.toLowerCase()) ||
        job.company.toLowerCase().includes(searchKeywords.toLowerCase()) ||
        job.id.toLowerCase().includes(searchKeywords.toLowerCase())

      const locationMatch = !searchLocation || job.location.toLowerCase().includes(searchLocation.toLowerCase())

      return keywordMatch && locationMatch
    })

    setFilteredJobs(filtered)
  }

  const openJobModal = (job) => {
    setSelectedJob(job)
    setShowJobModal(true)
  }

  const closeJobModal = () => {
    setShowJobModal(false)
    setSelectedJob(null)
  }

  const openApplyModal = () => {
    setShowJobModal(false)
    setShowApplyModal(true)
  }

  const closeApplyModal = () => {
    setShowApplyModal(false)
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
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    setApplicationData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }))
  }

  const handleSubmitApplication = (e) => {
    e.preventDefault()
    // Here you would typically send the application data to your API
    console.log("Application submitted:", applicationData)
    console.log("Job applied for:", selectedJob)
    alert("Application submitted successfully!")
    closeApplyModal()
  }

  return (
    <div className="careers-container">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-content">
          <h1>
           
            Hullect
            <br />
            Welcomes you :)
          </h1>
          <p>
            CareerPage is your first source for jobs in broadcasting because these jobs are posted by the source –
            broadcasters from across the country. This comprehensive listing of open positions provides you with a wide
            range of career opportunities. Below, check to see what kinds of jobs are available in broadcasting and
            what's involved in getting those positions.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <h2>Search Broadcast Jobs</h2>
          <div className="search-form">
            <div className="search-row">
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
      </div>

      {/* Jobs Listing Section */}
      <div className="jobs-section">
        <div className="jobs-container">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card" onClick={() => openJobModal(job)}>
              <div className="job-header">
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <div className="job-meta">
                  <span className="job-location">{job.location}</span>
                  <span className={`job-type ${job.type.toLowerCase().replace(" ", "-")}`}>{job.type}</span>
                </div>
              </div>
              <div className="job-footer">
                <span className="job-posted">Posted {job.postedTime}</span>
                <span className="job-closes">Closes: {job.closingDate}</span>
              </div>
            </div>
          ))}
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
                    <strong>Job Code:</strong> {selectedJob.id}
                  </p>
                  <p>
                    <strong>Posted:</strong> {selectedJob.postedTime}
                  </p>
                  <p>
                    <strong>Application Deadline:</strong> {selectedJob.closingDate}
                  </p>
                </div>

                <div className="job-description">
                  <h3>Job Description</h3>
                  <p>{selectedJob.description}</p>
                </div>

                <div className="job-requirements">
                  <h3>Requirements</h3>
                  <ul>
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-responsibilities">
                  <h3>Responsibilities</h3>
                  <ul>
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
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
          <div className="modal-content application-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Apply for {selectedJob.title}</h2>
              <button className="close-button" onClick={closeApplyModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitApplication} className="application-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={applicationData.firstName}
                      onChange={handleInputChange}
                      required
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
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input type="text" name="address" value={applicationData.address} onChange={handleInputChange} />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" value={applicationData.city} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" value={applicationData.state} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input type="text" name="zipCode" value={applicationData.zipCode} onChange={handleInputChange} />
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
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Resume *</label>
                  <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                  <small>Accepted formats: PDF, DOC, DOCX</small>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={closeApplyModal} className="cancel-button">
                    Cancel
                  </button>
                  <button type="submit" className="submit-button">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Careers
