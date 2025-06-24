import "./CompanyProfile.css"
import { Link } from "react-router-dom"

const CompanyProfile = () => {
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Hullect Services Private Limited was established with a vision to transform staffing solutions.",
    },
    {
      year: "2012",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management systems.",
    },
    {
      year: "2015",
      title: "Pan-India Expansion",
      description: "Expanded operations across major cities in India with 10+ offices.",
    },
    {
      year: "2018",
      title: "Technology Integration",
      description: "Launched mobile-enabled technology solutions and HRMS platforms.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented GPS attendance, employee self-service, and digital workflows.",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading staffing partner with 50,000+ successful placements.",
    },
  ]

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management Systems",
      icon: "🏆",
    },
    {
      title: "MSME Registered",
      description: "Ministry of Micro, Small & Medium Enterprises",
      icon: "📋",
    },
    {
      title: "PF & ESI Compliant",
      description: "Employee Provident Fund & State Insurance",
      icon: "🛡️",
    },
    {
      title: "Labor Law Compliance",
      description: "Full compliance with Indian Labor Laws",
      icon: "⚖️",
    },
  ]

  const statistics = [
    {
      number: "4+",
      label: "Years of Excellence",
      icon: "📅",
    },
    {
      number: "50,000+",
      label: "Successful Placements",
      icon: "👥",
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: "🤝",
    },
    {
      number: "5+",
      label: "Office Locations",
      icon: "🏢",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: "⭐",
    },
  ]

  const coreValues = [
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our dealings.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, exceeding client expectations.",
      icon: "⭐",
    },
    {
      title: "Innovation",
      description: "We embrace technology and innovative solutions to stay ahead in the industry.",
      icon: "💡",
    },
    {
      title: "Commitment",
      description: "We are committed to our clients' success and our employees' growth.",
      icon: "🎯",
    },
    {
      title: "Reliability",
      description: "We deliver consistent, dependable services that our clients can count on.",
      icon: "🛡️",
    },
    {
      title: "Respect",
      description: "We treat everyone with dignity and respect, fostering inclusive relationships.",
      icon: "🤲",
    },
  ]

  return (
    <div className="company-profile-page">
      {/* Hero Section */}
      <section className="cp-hero-section">
        <div className="cp-hero-background">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop&crop=center"
            alt="Company Profile"
            className="cp-hero-bg-image"
          />
          <div className="cp-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="cp-hero-content">
            <h1 className="cp-page-title">Company Profile</h1>
            <p className="cp-page-subtitle">Building Excellence Since 2008</p>
            <div className="cp-hero-stats">
              <div className="cp-hero-stat">
                <span className="cp-stat-number">16+</span>
                <span className="cp-stat-label">Years</span>
              </div>
              <div className="cp-hero-stat">
                <span className="cp-stat-number">50K+</span>
                <span className="cp-stat-label">Placements</span>
              </div>
              <div className="cp-hero-stat">
                <span className="cp-stat-number">500+</span>
                <span className="cp-stat-label">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="cp-overview-section section">
        <div className="container">
          <div className="cp-overview-grid">
            <div className="cp-overview-content">
              <div className="section-header">
                <span className="section-tag">Our Story</span>
                <h2 className="heading-secondary">Company Overview</h2>
              </div>
              <div className="cp-overview-text">
                <p>
                  Hullect Services Private Limited stands as a premier staffing and managed outsourcing company,
                  established in 2008 with a commitment to transforming the way businesses connect with talent. Over the
                  past 16 years, we have evolved into a trusted partner for organizations across India, providing
                  comprehensive workforce solutions that drive business success.
                </p>
                <p>
                  Our journey began with a simple yet powerful vision: to bridge the gap between exceptional talent and
                  forward-thinking organizations. Today, we proudly serve over 500 clients across 25+ industry
                  verticals, having successfully placed more than 50,000 professionals in roles that align with their
                  skills and career aspirations.
                </p>
                <p>
                  As an ISO 9001:2015 certified organization, we maintain the highest standards of quality and
                  compliance, ensuring that every placement meets our rigorous criteria for excellence. Our
                  comprehensive approach encompasses temporary staffing, permanent placements, and managed outsourcing
                  services across diverse business functions.
                </p>
              </div>
            </div>
            <div className="cp-overview-image">
              <img
                src="/CompanyProfile1.png"
                alt="Company Overview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="cp-statistics-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Impact</span>
            <h2 className="heading-secondary">Company Statistics</h2>
            <p className="text-large">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="cp-statistics-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="cp-stat-card">
                <div className="cp-stat-icon">{stat.icon}</div>
                <div className="cp-stat-number">{stat.number}</div>
                <div className="cp-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="cp-values-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Foundation</span>
            <h2 className="heading-secondary">Core Values</h2>
            <p className="text-large">The principles that guide everything we do</p>
          </div>
          <div className="cp-values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="cp-value-card">
                <div className="cp-value-icon">{value.icon}</div>
                <h3 className="cp-value-title">{value.title}</h3>
                <p className="cp-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="cp-certifications-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Quality Assurance</span>
            <h2 className="heading-secondary">Certifications & Compliance</h2>
            <p className="text-large">Maintaining the highest standards of quality and compliance</p>
          </div>
          <div className="cp-certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cp-certification-card">
                <div className="cp-cert-icon">{cert.icon}</div>
                <h3 className="cp-cert-title">{cert.title}</h3>
                <p className="cp-cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="cp-timeline-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Journey</span>
            <h2 className="heading-secondary">Company Milestones</h2>
            <p className="text-large">Key achievements that shaped our growth</p>
          </div>
          <div className="cp-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="cp-timeline-item">
                <div className="cp-timeline-marker"></div>
                <div className="cp-timeline-content">
                  <div className="cp-timeline-year">{milestone.year}</div>
                  <h3 className="cp-timeline-title">{milestone.title}</h3>
                  <p className="cp-timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      {/* <section className="cp-leadership-section section">
        <div className="container">
          <div className="cp-leadership-content">
            <div className="cp-leadership-text">
              <div className="section-header">
                <span className="section-tag">Leadership Message</span>
                <h2 className="heading-secondary">From Our Leadership</h2>
              </div>
              <blockquote className="cp-leadership-quote">
                "At Hullect Services, we believe that the right talent in the right place can transform businesses and
                lives. Our commitment to excellence, integrity, and innovation has been the cornerstone of our success
                over the past 16 years. We continue to evolve and adapt to meet the changing needs of the modern
                workforce while staying true to our core values."
              </blockquote>
              <div className="cp-leadership-author">
                <strong>Manish Pratap Singh</strong>
                <span>Chief Executive Officer</span>
              </div>
            </div>
            <div className="cp-leadership-image">
              <img
                src="/Manish.png"
                alt="CEO Manish Pratap Singh"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="cp-cta-section">
        <div className="container">
          <div className="cp-cta-content">
            <h3 className="cp-cta-heading">Ready to Partner with Us?</h3>
            <p className="cp-cta-text">
              Discover how our expertise can help transform your workforce and drive business success.
            </p>
            <div className="cp-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default CompanyProfile
