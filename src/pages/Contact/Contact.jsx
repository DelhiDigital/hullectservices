"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add form submission logic here
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Head Office",
      details: ["Office No - SF - 05E, 2nd Floor,Riverview Arcade Plot No - 4/17, Sector 4, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010"],
    },
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["0522 3504137"],
    },
    {
      icon: "📧",
      title: "Email Addresses",
      details: ["connect@hullectservices.com", "corphr@hullectservices.com"],
    },
    {
      icon: "🌐",
      title: "Website",
      details: ["www.hullectservices.com"],
    },
  ]

  const officeLocations = [
    {
      city: "New Delhi",
      address: "Office No - SF - 05E, 2nd Floor,Riverview Arcade Plot No - 4/17, Sector 4, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
      phone: "0522 3504137",
      email: "delhi@hullectservices.com",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=200&fit=crop&crop=center",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Connaught+Place+New+Delhi+India",
      coordinates: "28.6315,77.2167", // New Delhi coordinates
    },
    {
      city: "Varanasi",
      address: "C/O Churamanpur,Near Bank of BarodaRegional Office , Chandpur,Varanasi 221106",
      phone: "+91-9785-005-691",
      email: "mumbai@hullectservices.com",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&h=200&fit=crop&crop=center",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bandra+Kurla+Complex+Mumbai+India",
      coordinates: "19.0596,72.8656", // Mumbai coordinates
    },
    {
      city: "Bangalore",
      address: "No. 258, 4th main,near Shrinivasa temple,Kithiganur, T.C. Palya road,K.R. Puram bangalore 560049",
      phone: "+91 80 9876 5432",
      email: "bangalore@hullectservices.com",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Electronic+City+Bangalore+India",
      coordinates: "12.9716,77.5946", // Bangalore coordinates
    },
    {
      city: "Rajasthan",
      address: "G-205 ,RIICO Industrial area Bagru,Ajmer Road,Jaipur -303007",
      phone: "+91-978 500 5691",
      email: "chennai@hullectservices.com",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop&crop=center",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=OMR+Road+Chennai+India",
      coordinates: "13.0827,80.2707", // Chennai coordinates
    },
  ]

  const services = [
    "General Staffing",
    "Permanent Recruitment",
    "Managed Services",
    "Facility Management",
    "Background Verification",
    "Payroll & Compliance",
    "Other",
  ]

  // Head office details for map
  const headOffice = {
    address: "Office No - SF - 05E, 2nd Floor,Riverview Arcade Plot No - 4/17, Sector 4, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
    coordinates: "28.6315,77.2167",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=123+Business+District+Connaught+Place+New+Delhi+India",
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop&crop=center"
            alt="Contact Us"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">Get in Touch with Our Expert Team</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="heading-secondary">Send Us a Message</h2>
                <p className="text-large">
                  Ready to discuss your staffing needs? Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-header">
                <h3 className="heading-tertiary">Get in Touch</h3>
                <p className="text-medium">
                  We're here to help you find the perfect staffing solutions for your business.
                </p>
              </div>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4 className="info-title">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="info-detail">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="quick-contact">
                <h4>Quick Contact</h4>
                <div className="quick-contact-buttons">
                  <a href="tel:9120018844" className="btn btn-outline">
                    📞 Call Now
                  </a>
                  <a href="mailto:connect@hullectservices.com" className="btn btn-outline">
                    📧 Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations - Updated with Location Buttons */}
      <section className="office-locations section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Presence</span>
            <h2 className="heading-secondary">Office Locations</h2>
            <p className="text-large">Visit us at any of our offices across major cities in India</p>
          </div>

          <div className="locations-grid">
            {officeLocations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-image">
                  <img src={location.image || "/placeholder.svg"} alt={location.city} />
                  <div className="location-overlay">
                    <h3 className="location-city">{location.city}</h3>
                  </div>
                </div>
                <div className="location-content">
                  <div className="location-detail">
                    <span className="detail-icon">📍</span>
                    <p>{location.address}</p>
                  </div>
                  <div className="location-detail">
                    <span className="detail-icon">📞</span>
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </div>
                  <div className="location-detail">
                    <span className="detail-icon">📧</span>
                    <a href={`mailto:${location.email}`}>{location.email}</a>
                  </div>
                  {/* New Location Button */}
                  <div className="location-actions">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary location-btn"
                    >
                      📍 View Location
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Updated with Real Map */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <h3 className="heading-tertiary text-center">Find Our Head Office</h3>
            <div className="interactive-map-container">
              {/* Google Maps Embed with Zoom Controls */}
              <iframe
                className="interactive-map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2!2d${headOffice.coordinates.split(",")[1]}!3d${headOffice.coordinates.split(",")[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzUzLjQiTiA3N8KwMTMnMDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&zoom=15`}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hullect Services Head Office Location"
              ></iframe>

              {/* Map Overlay Info */}
              <div className="map-overlay-info">
                <div className="map-info-card">
                  <h4>🏢 Head Office</h4>
                  <p>{headOffice.address}</p>
                  <div className="map-actions">
                    <a href={headOffice.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      🧭 Get Directions
                    </a>
                    <a href="tel:9120018844" className="btn btn-outline">
                      📞 Call Office
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Controls Info */}
              <div className="map-controls-info">
                <p>💡 Use mouse wheel to zoom in/out • Click and drag to move around the map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours section">
        <div className="container">
          <div className="hours-content">
            {/* <div className="hours-info">
              <h3 className="heading-tertiary">Business Hours</h3>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 2:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div> */}
            {/* <div className="emergency-contact">
              <h4>Emergency Contact</h4>
              <p>For urgent staffing requirements outside business hours:</p>
              <a href="tel:9120018844" className="emergency-number">
                +91 9120018844
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
