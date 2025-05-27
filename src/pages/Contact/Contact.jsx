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
      details: ["123 Business District", "New Delhi, India - 110001"],
    },
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["+91 9120018844", "+91 11 4567 8900"],
    },
    {
      icon: "📧",
      title: "Email Addresses",
      details: ["connect@hullectservices.com", "info@hullectservices.com"],
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
      address: "123 Business District, Connaught Place, New Delhi - 110001",
      phone: "+91 11 4567 8900",
      email: "delhi@hullectservices.com",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=200&fit=crop&crop=center",
    },
    {
      city: "Mumbai",
      address: "456 Corporate Hub, Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91 22 6789 0123",
      email: "mumbai@hullectservices.com",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&h=200&fit=crop&crop=center",
    },
    {
      city: "Bangalore",
      address: "789 Tech Park, Electronic City, Bangalore - 560100",
      phone: "+91 80 9876 5432",
      email: "bangalore@hullectservices.com",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
    },
    {
      city: "Chennai",
      address: "321 IT Corridor, OMR Road, Chennai - 600096",
      phone: "+91 44 5432 1098",
      email: "chennai@hullectservices.com",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop&crop=center",
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

      {/* Office Locations */}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <h3 className="heading-tertiary text-center">Find Us on Map</h3>
            <div className="map-placeholder">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop&crop=center"
                alt="Office Location Map"
                className="map-image"
              />
              <div className="map-overlay">
                <div className="map-info">
                  <h4>Head Office Location</h4>
                  <p>123 Business District, New Delhi, India</p>
                  <a href="#" className="btn btn-primary">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours section">
        <div className="container">
          <div className="hours-content">
            <div className="hours-info">
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
            </div>
            <div className="emergency-contact">
              <h4>Emergency Contact</h4>
              <p>For urgent staffing requirements outside business hours:</p>
              <a href="tel:9120018844" className="emergency-number">
                +91 9120018844
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
