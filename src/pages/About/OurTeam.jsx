import "./OurTeam.css"

const OurTeam = () => {
  const leadership = [
    {
      name: "Manish Pratap Singh",
      position: "Chief Executive Officer",
      experience: "16+ Years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with extensive experience in HR services and business development. Under his leadership, Hullect Services has grown to become a trusted partner for 500+ clients.",
      expertise: ["Strategic Planning", "Business Development", "Client Relations", "Team Leadership"],
      email: "manish@hullectservices.com",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      position: "Chief Operations Officer",
      experience: "12+ Years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations expert ensuring seamless service delivery and operational excellence across all verticals. Specializes in process optimization and quality management.",
      expertise: ["Operations Management", "Process Optimization", "Quality Assurance", "Team Management"],
      email: "priya@hullectservices.com",
      linkedin: "#",
    },
    {
      name: "Rajesh Kumar",
      position: "Chief Technology Officer",
      experience: "14+ Years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technology innovator driving digital transformation initiatives and implementing cutting-edge HR tech solutions for enhanced service delivery.",
      expertise: ["Technology Strategy", "Digital Innovation", "System Integration", "Data Analytics"],
      email: "rajesh@hullectservices.com",
      linkedin: "#",
    },
  ]

  const departmentHeads = [
    {
      name: "Anjali Verma",
      position: "Head of Recruitment",
      experience: "10+ Years",
      image: "/placeholder.svg?height=250&width=250",
      department: "Recruitment & Staffing",
      expertise: ["Talent Acquisition", "Executive Search", "Candidate Assessment", "Market Intelligence"],
    },
    {
      name: "Suresh Patel",
      position: "Head of Compliance",
      experience: "8+ Years",
      image: "/placeholder.svg?height=250&width=250",
      department: "Legal & Compliance",
      expertise: ["Labor Law", "Statutory Compliance", "Risk Management", "Documentation"],
    },
    {
      name: "Kavita Singh",
      position: "Head of Training",
      experience: "9+ Years",
      image: "/placeholder.svg?height=250&width=250",
      department: "Learning & Development",
      expertise: ["Corporate Training", "Skill Development", "Curriculum Design", "Performance Management"],
    },
    {
      name: "Amit Gupta",
      position: "Head of Business Development",
      experience: "11+ Years",
      image: "/placeholder.svg?height=250&width=250",
      department: "Sales & Marketing",
      expertise: ["Client Acquisition", "Relationship Management", "Market Expansion", "Strategic Partnerships"],
    },
  ]

  const teamStats = [
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "200+", label: "Years Combined Experience", icon: "⏱️" },
    { number: "15+", label: "Industry Experts", icon: "🎯" },
    { number: "24/7", label: "Support Available", icon: "🔄" },
  ]

  return (
    <div className="our-team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1>Meet Our Team</h1>
            <p>
              Our success is driven by a team of dedicated professionals who bring expertise, passion, and innovation to
              everything we do. Get to know the people behind Hullect Services.
            </p>
          </div>
        </div>
        <div className="team-hero-bg"></div>
      </section>

      {/* Team Statistics */}
      <section className="team-stats">
        <div className="container">
          <div className="stats-grid">
            {teamStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Meet the visionary leaders driving our company forward</p>
          </div>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={leader.image || "/placeholder.svg"} alt={leader.name} />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <h4>{leader.position}</h4>
                  <div className="leader-experience">{leader.experience}</div>
                  <p className="leader-bio">{leader.bio}</p>
                  <div className="leader-expertise">
                    <h5>Expertise:</h5>
                    <div className="expertise-tags">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="expertise-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="leader-contact">
                    <a href={`mailto:${leader.email}`} className="contact-link">
                      📧 {leader.email}
                    </a>
                    <a href={leader.linkedin} className="contact-link">
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="department-heads">
        <div className="container">
          <div className="section-header">
            <h2>Department Heads</h2>
            <p>Experienced professionals leading our specialized teams</p>
          </div>
          <div className="department-grid">
            {departmentHeads.map((head, index) => (
              <div key={index} className="department-card">
                <div className="department-image">
                  <img src={head.image || "/placeholder.svg"} alt={head.name} />
                </div>
                <div className="department-info">
                  <h3>{head.name}</h3>
                  <h4>{head.position}</h4>
                  <div className="department-name">{head.department}</div>
                  <div className="department-experience">{head.experience}</div>
                  <div className="department-expertise">
                    {head.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="company-culture">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Our Company Culture</h2>
              <p>
                At Hullect Services, we believe that our people are our greatest asset. We foster a culture of
                collaboration, innovation, and continuous learning where every team member can thrive and contribute to
                our collective success.
              </p>
              <div className="culture-values">
                <div className="culture-value">
                  <h4>🤝 Collaboration</h4>
                  <p>We work together as one team, sharing knowledge and supporting each other.</p>
                </div>
                <div className="culture-value">
                  <h4>💡 Innovation</h4>
                  <p>We embrace new ideas and technologies to deliver better solutions.</p>
                </div>
                <div className="culture-value">
                  <h4>📚 Learning</h4>
                  <p>We invest in continuous learning and professional development.</p>
                </div>
                <div className="culture-value">
                  <h4>🎯 Excellence</h4>
                  <p>We strive for excellence in everything we do, exceeding expectations.</p>
                </div>
              </div>
            </div>
            <div className="culture-image">
              <img src="/placeholder.svg?height=400&width=600" alt="Team collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="team-cta">
        <div className="container">
          <div className="team-cta-content">
            <h2>Join Our Growing Team</h2>
            <p>
              Ready to be part of something bigger? Explore career opportunities and join our team of passionate
              professionals.
            </p>
            <div className="team-cta-buttons">
              <a href="/careers" className="btn btn-primary">
                View Open Positions
              </a>
              <a href="/contact" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
