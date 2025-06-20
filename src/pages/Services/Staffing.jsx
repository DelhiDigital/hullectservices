import "./Staffing.css"

const Staffing = () => {
  const staffingServices = [
    {
      title: "Temporary Staffing",
      description: "Flexible workforce solutions for short-term projects and seasonal demands",
      features: ["Quick deployment", "Flexible duration", "Cost-effective", "Quality assured"],
      icon: "⏰",
    },
    {
      title: "Permanent Staffing",
      description: "Long-term recruitment solutions for building your core team",
      features: ["Thorough screening", "Cultural fit assessment", "Replacement guarantee", "Post-placement support"],
      icon: "👥",
    },
    {
      title: "Contract Staffing",
      description: "Specialized professionals for project-based requirements",
      features: ["Skilled professionals", "Project-specific expertise", "Flexible contracts", "Performance monitoring"],
      icon: "📋",
    },
    {
      title: "Executive Search",
      description: "Senior-level recruitment for leadership and strategic positions",
      features: ["Executive headhunting", "Confidential search", "Leadership assessment", "Market intelligence"],
      icon: "🎯",
    },
  ]

  const industries = [
    { name: "Information Technology", icon: "💻", count: "500+" },
    { name: "Healthcare & Pharmaceuticals", icon: "🏥", count: "300+" },
    { name: "Manufacturing & Engineering", icon: "🏭", count: "400+" },
    { name: "Banking & Financial Services", icon: "🏦", count: "200+" },
    { name: "Retail & E-commerce", icon: "🛒", count: "250+" },
    { name: "Education & Training", icon: "🎓", count: "150+" },
  ]

  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Understanding your specific staffing needs, job requirements, and company culture",
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      description: "Leveraging our extensive database and network to identify potential candidates",
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Comprehensive evaluation including technical, behavioral, and cultural fit assessment",
    },
    {
      step: "04",
      title: "Interview Coordination",
      description: "Managing the entire interview process and facilitating client-candidate interactions",
    },
    {
      step: "05",
      title: "Onboarding Support",
      description: "Ensuring smooth integration and providing ongoing support for successful placements",
    },
  ]

  const benefits = [
    {
      title: "Reduced Hiring Time",
      description: "Average 50% reduction in time-to-hire through our streamlined process",
      icon: "⚡",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous screening ensures only the best candidates reach your desk",
      icon: "✅",
    },
    {
      title: "Cost Optimization",
      description: "Significant savings on recruitment costs and resources",
      icon: "💰",
    },
    {
      title: "Scalability",
      description: "Flexible solutions that grow with your business needs",
      icon: "📈",
    },
  ]

  return (
    <div className="staffing-page">
      {/* Hero Section */}
      <section className="staffing-hero">
        <div className="container">
          <div className="staffing-hero-content">
            <h1>Staffing Solutions</h1>
            <p>
              Comprehensive staffing services to meet your workforce needs. From temporary assignments to permanent
              placements, we deliver the right talent at the right time.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Successful Placements</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Clients</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Industries Served</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="#services" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="staffing-hero-bg"></div>
      </section>

      {/* Services Overview */}
      <section id="services" className="staffing-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Staffing Services</h2>
            <p>Tailored solutions for every staffing requirement</p>
          </div>
          <div className="services-grid">
            {staffingServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="industries-served">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Specialized expertise across diverse industry verticals</p>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <div className="industry-count">{industry.count} Placements</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="staffing-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Staffing Process</h2>
            <p>A systematic approach to finding the perfect match</p>
          </div>
          <div className="process-timeline">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="staffing-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Staffing Services</h2>
            <p>Delivering value through proven expertise and innovative solutions</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="staffing-cta">
        <div className="container">
          <div className="staffing-cta-content">
            <h2>Ready to Transform Your Workforce?</h2>
            <p>
              Let us help you build a stronger team with our comprehensive staffing solutions. Contact us today to
              discuss your requirements.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
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

export default Staffing
