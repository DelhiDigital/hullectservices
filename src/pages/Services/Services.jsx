import "./Services.css"
import { Link } from "react-router-dom"

const Services = () => {
  const mainServices = [
    {
      icon: "👥",
      title: "General Staffing",
      description: "Temping, Contract Staffing, NAPS, Sourcing & Deployment, Semi-Managed Services",
      features: ["Temporary Staffing", "Contract Staffing", "Sourcing & Deployment", "Semi-Managed Services"],
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: "🔍",
      title: "Permanent Recruitment",
      description: "Search & Selection, Recruitment Process, Project Hiring",
      features: ["Executive Search", "Bulk Hiring", "Project-based Recruitment", "Campus Recruitment"],
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: "🏢",
      title: "Managed Services",
      description: "Outcome-Based, HR-Driven Outsourcing of Business Processes",
      features: ["Process Outsourcing", "HR Operations", "Performance Management", "Quality Assurance"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: "🛡️",
      title: "Facility Management & Security",
      description: "Comprehensive facility and security management services",
      features: ["Security Services", "Facility Management", "Maintenance Services", "Safety Management"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center",
    },
  ]

  const additionalServices = [
    "Payroll and Compliance",
    "Corporate Training",
    "Campus to Corporate (C2C)",
    "HRMS Implementation",
    "Background Verification",
    "Skill Development",
    "Time & Attendance Management",
    "Educational Verification",
    "Employment Verification",
    "Criminal Background Check",
    "Family Background Verification",
    "Professional Reference Check",
    "Production Floor Supervision",
  ]

  const industries = [
    { name: "Information Technology", icon: "💻" },
    { name: "Fintech", icon: "💳" },
    { name: "E-Commerce", icon: "🛒" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Banking & Finance", icon: "🏦" },
  ]

  const complianceActs = [
    "Factories Act 1948",
    "Shops and Establishment Act",
    "Contract Labour Act 1970",
    "Industrial Disputes Act 1947",
    "Employee State Insurance Act 1948",
    "Payment of Wages Act 1936",
    "Minimum Wages Act 1948",
    "Payment of Bonus Act 1965",
    "Employee Pension Scheme 1995",
    "Workman's Compensation Act 1923",
    "Payment of Gratuity Act 1972",
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=600&fit=crop&crop=center"
            alt="Our Services"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">Comprehensive Staffing & HR Solutions</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Core Services</span>
            <h2 className="heading-secondary">Our Primary Service Offerings</h2>
            <p className="text-large">
              End-to-end staffing and managed outsourcing services across multiple industries and business processes
            </p>
          </div>

          <div className="main-services-grid">
            {mainServices.map((service, index) => (
              <div key={index} className="main-service-card">
                <div className="service-image">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services & Industries */}
      <section className="services-overview section">
        <div className="container">
          <div className="services-grid">
            <div className="service-section">
              <h3 className="heading-tertiary">Additional Services</h3>
              <div className="services-list">
                {additionalServices.map((service, index) => (
                  <div key={index} className="service-item">
                    <span className="service-check">✓</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-section">
              <h3 className="heading-tertiary">Industries We Serve</h3>
              <div className="industries-grid">
                {industries.map((industry, index) => (
                  <div key={index} className="industry-item">
                    <span className="industry-icon">{industry.icon}</span>
                    <span className="industry-name">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="compliance-section">
        <div className="container">
          <div className="compliance-content">
            <div className="compliance-text">
              <h3 className="heading-tertiary">Compliance & Risk Management</h3>
              <p className="text-large">
                Our centralized compliance department ensures adherence to all statutory requirements with comprehensive
                coverage of labor laws.
              </p>
              <div className="compliance-features">
                <div className="compliance-feature">
                  <span className="feature-icon">🏛️</span>
                  <div>
                    <h4>Legal Expertise</h4>
                    <p>Panel of country's best labor lawyers and legal advisors</p>
                  </div>
                </div>
                <div className="compliance-feature">
                  <span className="feature-icon">📊</span>
                  <div>
                    <h4>Risk Assessment</h4>
                    <p>Monthly internal risk assessment and quarterly audits</p>
                  </div>
                </div>
                <div className="compliance-feature">
                  <span className="feature-icon">📋</span>
                  <div>
                    <h4>Statutory Compliance</h4>
                    <p>Big 4 empanelled for statutory and state audits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="compliance-acts">
              <h4>Acts Coverage</h4>
              <div className="acts-grid">
                {complianceActs.map((act, index) => (
                  <div key={index} className="act-item">
                    <span className="act-check">✓</span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section section">
        <div className="container">
          <div className="tech-content">
            <h3 className="heading-tertiary text-center">Technology Services</h3>
            <p className="text-large text-center">
              Mobile-Enabled Technology Solutions for Modern Workforce Management
            </p>

            <div className="tech-features">
              <div className="tech-feature">
                <div className="tech-image">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center"
                    alt="Mobile Attendance"
                  />
                </div>
                <div className="tech-content-text">
                  <h4>📱 Mobile Attendance</h4>
                  <ul>
                    <li>Premise Based (GPS-enabled)</li>
                    <li>Attendance from Anywhere</li>
                    <li>Awake Tracking</li>
                    <li>Attendance, Timesheets & Regularisation</li>
                    <li>Leave History</li>
                  </ul>
                </div>
              </div>
              <div className="tech-feature">
                <div className="tech-image">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center"
                    alt="Employee Self Service"
                  />
                </div>
                <div className="tech-content-text">
                  <h4>👤 Employee Self Service</h4>
                  <ul>
                    <li>Paperless Onboarding</li>
                    <li>LOI & Offer Letter</li>
                    <li>Payslips & Form 16</li>
                    <li>PF/ESIC Slips</li>
                    <li>Mileage Tracking</li>
                    <li>Policies & Reimbursements</li>
                    <li>Appraisals & Training</li>
                    <li>Helpdesk Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed with Unique Classes */}
      <section className="services-page-cta-section">
        <div className="container">
          <div className="services-page-cta-content">
            <h3 className="services-page-cta-heading">Ready to Get Started?</h3>
            <p className="services-page-cta-text">
              Let's discuss how our comprehensive staffing solutions can help your business grow.
            </p>
            <div className="services-page-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
              <a href="tel:9120018844" className="btn btn-outline">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
