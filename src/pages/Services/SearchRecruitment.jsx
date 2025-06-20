import "./SearchRecruitment.css"

const SearchRecruitment = () => {
  const searchServices = [
    {
      title: "Executive Search",
      description: "Senior-level recruitment for C-suite and leadership positions",
      features: ["Confidential search", "Global talent pool", "Leadership assessment", "Succession planning"],
      icon: "🎯",
    },
    {
      title: "Specialized Recruitment",
      description: "Niche talent acquisition for specialized roles and industries",
      features: ["Industry expertise", "Technical assessment", "Skill validation", "Cultural fit analysis"],
      icon: "🔍",
    },
    {
      title: "Volume Recruitment",
      description: "Large-scale hiring for multiple positions across locations",
      features: ["Bulk hiring", "Streamlined process", "Quality consistency", "Timeline adherence"],
      icon: "📊",
    },
    {
      title: "Retained Search",
      description: "Dedicated search consultancy for critical business positions",
      features: ["Dedicated consultant", "Market mapping", "Comprehensive research", "Exclusive partnership"],
      icon: "🤝",
    },
  ]

  const searchProcess = [
    {
      phase: "Discovery",
      title: "Requirement Analysis",
      description: "Deep dive into role requirements, company culture, and success criteria",
      activities: ["Stakeholder interviews", "Job profiling", "Success metrics definition", "Timeline planning"],
    },
    {
      phase: "Research",
      title: "Market Intelligence",
      description: "Comprehensive market research and talent mapping",
      activities: ["Industry analysis", "Competitor benchmarking", "Talent landscape mapping", "Compensation analysis"],
    },
    {
      phase: "Sourcing",
      title: "Candidate Identification",
      description: "Multi-channel approach to identify and engage top talent",
      activities: ["Database mining", "Network leveraging", "Direct approach", "Referral activation"],
    },
    {
      phase: "Assessment",
      title: "Evaluation & Screening",
      description: "Rigorous assessment to ensure the best fit",
      activities: ["Technical evaluation", "Behavioral assessment", "Reference checks", "Background verification"],
    },
    {
      phase: "Presentation",
      title: "Candidate Presentation",
      description: "Detailed candidate profiles with comprehensive insights",
      activities: ["Profile compilation", "Assessment reports", "Interview coordination", "Feedback management"],
    },
    {
      phase: "Closure",
      title: "Offer & Onboarding",
      description: "Support through offer negotiation and smooth onboarding",
      activities: ["Offer negotiation", "Documentation support", "Onboarding assistance", "Follow-up support"],
    },
  ]

  const specializations = [
    {
      area: "Technology & IT",
      expertise: "Software Development, Data Science, Cybersecurity, Cloud Architecture",
      icon: "💻",
    },
    {
      area: "Healthcare",
      expertise: "Medical Professionals, Healthcare Administration, Pharmaceutical Research",
      icon: "🏥",
    },
    {
      area: "Finance & Banking",
      expertise: "Investment Banking, Risk Management, Financial Analysis, Compliance",
      icon: "🏦",
    },
    {
      area: "Manufacturing",
      expertise: "Operations Management, Quality Control, Supply Chain, Engineering",
      icon: "🏭",
    },
    {
      area: "Sales & Marketing",
      expertise: "Business Development, Digital Marketing, Brand Management, Channel Sales",
      icon: "📈",
    },
    {
      area: "Human Resources",
      expertise: "Talent Acquisition, Organizational Development, Compensation & Benefits",
      icon: "👥",
    },
  ]

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of industry dynamics and talent requirements",
      icon: "🎓",
    },
    {
      title: "Extensive Network",
      description: "Access to passive candidates and industry leaders",
      icon: "🌐",
    },
    {
      title: "Proven Methodology",
      description: "Systematic approach with measurable outcomes",
      icon: "📋",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous screening and assessment processes",
      icon: "✅",
    },
    {
      title: "Confidentiality",
      description: "Maintaining complete discretion throughout the process",
      icon: "🔒",
    },
    {
      title: "Speed & Efficiency",
      description: "Faster time-to-hire without compromising quality",
      icon: "⚡",
    },
  ]

  return (
    <div className="search-recruitment-page">
      {/* Hero Section */}
      <section className="search-hero">
        <div className="container">
          <div className="search-hero-content">
            <h1>Search & Recruitment</h1>
            <p>
              Strategic talent acquisition solutions for finding exceptional professionals who drive business success.
              From executive search to specialized recruitment, we deliver the right talent for your critical positions.
            </p>
            <div className="hero-metrics">
              <div className="metric">
                <span className="metric-number">95%</span>
                <span className="metric-label">Success Rate</span>
              </div>
              <div className="metric">
                <span className="metric-number">30</span>
                <span className="metric-label">Days Avg. Closure</span>
              </div>
              <div className="metric">
                <span className="metric-number">500+</span>
                <span className="metric-label">Executive Placements</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">
                Start Your Search
              </a>
              <a href="#process" className="btn btn-outline">
                Our Process
              </a>
            </div>
          </div>
        </div>
        <div className="search-hero-bg"></div>
      </section>

      {/* Services Overview */}
      <section className="search-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Search & Recruitment Services</h2>
            <p>Comprehensive solutions for all your talent acquisition needs</p>
          </div>
          <div className="services-grid">
            {searchServices.map((service, index) => (
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

      {/* Search Process */}
      <section id="process" className="search-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Search Process</h2>
            <p>A systematic approach to finding exceptional talent</p>
          </div>
          <div className="process-grid">
            {searchProcess.map((phase, index) => (
              <div key={index} className="process-card">
                <div className="process-phase">{phase.phase}</div>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                <ul className="process-activities">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="specializations">
        <div className="container">
          <div className="section-header">
            <h2>Our Areas of Specialization</h2>
            <p>Deep expertise across diverse industry verticals</p>
          </div>
          <div className="specializations-grid">
            {specializations.map((spec, index) => (
              <div key={index} className="specialization-card">
                <div className="spec-icon">{spec.icon}</div>
                <h3>{spec.area}</h3>
                <p>{spec.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Search Services</h2>
            <p>What sets us apart in the competitive talent acquisition landscape</p>
          </div>
          <div className="benefits-grid">
            {whyChooseUs.map((benefit, index) => (
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
      <section className="search-cta">
        <div className="container">
          <div className="search-cta-content">
            <h2>Ready to Find Your Next Star Performer?</h2>
            <p>
              Partner with us to access top-tier talent and transform your organization with exceptional professionals
              who drive results.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">
                Start Your Search
              </a>
              <a href="tel:9120018844" className="btn btn-outline">
                Discuss Requirements
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchRecruitment
