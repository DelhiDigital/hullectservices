import "./About.css"
import { Link } from "react-router-dom"

const About = () => {
  const features = [
    {
      icon: "🏢",
      title: "Compliance & Risk Management",
      description:
        "Centralized compliance department with panel of country's best labor lawyers and comprehensive risk assessment processes.",
    },
    {
      icon: "📱",
      title: "Technology Solutions",
      description:
        "Mobile-enabled technology solutions including GPS attendance, employee self-service, and HRMS implementation.",
    },
    {
      icon: "🎯",
      title: "Outcome-Based Services",
      description: "HR-driven outsourcing of business processes with focus on measurable results and performance.",
    },
    {
      icon: "🛡️",
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified with comprehensive quality review processes and control mechanisms.",
    },
  ]

  const teamMembers = [
    {
      name: "Manish Pratap Singh",
      position: "CEO",
      experience: "22+ Years Experience",
      description:
        "Manish brings along 22 years of experience across industries spanning Services & Manufacturing with a focus on quality services, customer satisfaction and business development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Awadhendra Pratap Singh",
      position: "CBO - Chief Business Officer",
      experience: "20+ Years Experience",
      description:
        "Awadhendra has over 20 years of experience across industries, seasoned business professional highly focused on product sales and managed services, business development, marketing & digital marketing.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Shalini Singh",
      position: "Director",
      experience: "PhD in Physical Chemistry",
      description:
        "Dr. Shalini Singh is a seasoned professional with the passion to achieve operational excellence! Instrumental in great team building and business management.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&h=600&fit=crop&crop=center"
            alt="About Hullect Services"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">About Hullect Services</h1>
            <p className="page-subtitle">Transforming Careers and Building Teams Since 2008</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <div className="section-header">
                <span className="section-tag">Our Story</span>
                <h2 className="heading-secondary">Who We Are</h2>
              </div>

              <div className="about-description">
                <p>
                  At Hullect Services Private Limited, we provide staffing and managed outsourcing services across
                  processes such as sales and marketing, customer care, HR & F&A operations, back-office operations,
                  manufacturing operations, after sales service, mobility services & IT staffing, Facility Management &
                  Security Services.
                </p>

                <p>
                  We help our clients to find the best talent with the most relevant skills for their business by
                  offering temporary staffing, in-house services and permanent placements. We work & focus constantly
                  making the workforce more productive.
                </p>

                <p>
                  Our people with business strategy is aligned to this, including training and skill development for
                  better employability, helping active job seekers easily find employment opportunities.
                </p>
              </div>
            </div>

            <div className="content-image">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop&crop=center"
                alt="Professional team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-description">
                At Hullect we aspire to create an economical & societal value while reducing the financial burden along
                the value chains in which we operate, enabling people and businesses to realize their full potential.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon">🚀</div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-description">
                To connect businesses with the right talent, empowering success through strategic staffing solutions. We
                are committed to delivering exceptional service, fostering meaningful relationships, and driving
                innovation in workforce management to meet the evolving needs of our clients and candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="heading-secondary">What Sets Us Apart</h2>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Leadership Team</span>
            <h2 className="heading-secondary">Meet Our Team Heads</h2>
            <p className="text-large">Experienced leaders driving innovation and excellence in staffing solutions</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-experience">{member.experience}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="heading-tertiary">Ready to Transform Your Hiring Process?</h3>
            <p className="text-large">
              Let's discuss how we can help you find the perfect talent for your organization.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <a href="tel:9120018844" className="btn btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
