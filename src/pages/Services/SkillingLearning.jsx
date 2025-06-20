import "./SkillingLearning.css"

const SkillingLearning = () => {
  const learningServices = [
    {
      title: "Corporate Training",
      description: "Customized training programs to enhance employee skills and productivity",
      features: ["Leadership development", "Technical skills", "Soft skills training", "Performance improvement"],
      icon: "🎓",
    },
    {
      title: "Digital Learning Platform",
      description: "Online learning solutions with interactive content and progress tracking",
      features: ["E-learning modules", "Virtual classrooms", "Progress analytics", "Mobile accessibility"],
      icon: "💻",
    },
    {
      title: "Certification Programs",
      description: "Industry-recognized certification courses for professional development",
      features: ["Industry certifications", "Skill validation", "Career advancement", "Continuous learning"],
      icon: "📜",
    },
    {
      title: "Skill Assessment",
      description: "Comprehensive evaluation of current skills and identification of gaps",
      features: ["Competency mapping", "Gap analysis", "Learning pathways", "Performance metrics"],
      icon: "📊",
    },
  ]

  const trainingAreas = [
    {
      category: "Technical Skills",
      skills: ["Software Development", "Data Analytics", "Cloud Computing", "Cybersecurity", "AI/ML"],
      icon: "⚙️",
    },
    {
      category: "Leadership & Management",
      skills: ["Team Leadership", "Project Management", "Strategic Planning", "Change Management", "Decision Making"],
      icon: "👑",
    },
    {
      category: "Communication & Soft Skills",
      skills: [
        "Presentation Skills",
        "Negotiation",
        "Emotional Intelligence",
        "Time Management",
        "Conflict Resolution",
      ],
      icon: "💬",
    },
    {
      category: "Industry Specific",
      skills: [
        "Healthcare Protocols",
        "Financial Compliance",
        "Manufacturing Safety",
        "Retail Operations",
        "Quality Standards",
      ],
      icon: "🏢",
    },
  ]

  const learningApproach = [
    {
      method: "Blended Learning",
      description: "Combination of online and offline training for maximum effectiveness",
      benefits: ["Flexible scheduling", "Interactive sessions", "Practical application", "Continuous support"],
    },
    {
      method: "Microlearning",
      description: "Bite-sized learning modules for better retention and engagement",
      benefits: ["Easy consumption", "Better retention", "Just-in-time learning", "Mobile friendly"],
    },
    {
      method: "Experiential Learning",
      description: "Hands-on training through real-world scenarios and simulations",
      benefits: ["Practical experience", "Immediate application", "Problem-solving skills", "Confidence building"],
    },
    {
      method: "Peer Learning",
      description: "Collaborative learning through group discussions and knowledge sharing",
      benefits: ["Knowledge exchange", "Team building", "Diverse perspectives", "Social learning"],
    },
  ]

  const outcomes = [
    {
      metric: "85%",
      description: "Average improvement in skill assessments post-training",
      icon: "📈",
    },
    {
      metric: "90%",
      description: "Employee satisfaction rate with our training programs",
      icon: "😊",
    },
    {
      metric: "75%",
      description: "Reduction in skill gaps within 6 months of training",
      icon: "🎯",
    },
    {
      metric: "95%",
      description: "Course completion rate across all programs",
      icon: "✅",
    },
  ]

  return (
    <div className="skilling-learning-page">
      {/* Hero Section */}
      <section className="skilling-hero">
        <div className="container">
          <div className="skilling-hero-content">
            <h1>Skilling & Learning Solutions</h1>
            <p>
              Empower your workforce with cutting-edge learning solutions. From technical skills to leadership
              development, we provide comprehensive training programs that drive performance and career growth.
            </p>
            <div className="hero-highlights">
              <div className="highlight">
                <span className="highlight-number">10K+</span>
                <span className="highlight-text">Professionals Trained</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">500+</span>
                <span className="highlight-text">Training Programs</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">50+</span>
                <span className="highlight-text">Corporate Clients</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="/contact" className="btn btn-primary">
                Start Learning Journey
              </a>
              <a href="#services" className="btn btn-outline">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
        <div className="skilling-hero-bg"></div>
      </section>

      {/* Services Overview */}
      <section id="services" className="learning-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Learning Solutions</h2>
            <p>Comprehensive training programs designed for modern workforce needs</p>
          </div>
          <div className="services-grid">
            {learningServices.map((service, index) => (
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

      {/* Training Areas */}
      <section className="training-areas">
        <div className="container">
          <div className="section-header">
            <h2>Training Areas</h2>
            <p>Diverse skill development across multiple domains</p>
          </div>
          <div className="areas-grid">
            {trainingAreas.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-icon">{area.icon}</div>
                <h3>{area.category}</h3>
                <div className="skills-list">
                  {area.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="learning-approach">
        <div className="container">
          <div className="section-header">
            <h2>Our Learning Approach</h2>
            <p>Innovative methodologies for effective skill development</p>
          </div>
          <div className="approach-grid">
            {learningApproach.map((approach, index) => (
              <div key={index} className="approach-card">
                <h3>{approach.method}</h3>
                <p>{approach.description}</p>
                <div className="benefits-list">
                  {approach.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="benefit-badge">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Results */}
      <section className="learning-outcomes">
        <div className="container">
          <div className="section-header">
            <h2>Training Outcomes</h2>
            <p>Measurable results that demonstrate the impact of our programs</p>
          </div>
          <div className="outcomes-grid">
            {outcomes.map((outcome, index) => (
              <div key={index} className="outcome-card">
                <div className="outcome-icon">{outcome.icon}</div>
                <div className="outcome-metric">{outcome.metric}</div>
                <p>{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="skilling-cta">
        <div className="container">
          <div className="skilling-cta-content">
            <h2>Ready to Upskill Your Team?</h2>
            <p>
              Transform your workforce with our comprehensive learning solutions. Contact us to design a customized
              training program for your organization.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="tel:9120018844" className="btn btn-outline">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillingLearning
