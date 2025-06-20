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
      image: "/Manish.png",
    },
    {
      name: "Awadhendra Pratap Singh",
      position: "CBO - Chief Business Officer",
      experience: "20+ Years Experience",
      description:
        "Awadhendra has over 20 years of experience across industries, seasoned business professional highly focused on product sales and managed services, business development, marketing & digital marketing.",
      image: "Awadhendra.png",
    },
    {
      name: "Dr. Shalini Singh",
      position: "Director",
      experience: "PhD in Physical Chemistry",
      description:
        "Dr. Shalini Singh is a seasoned professional with the passion to achieve operational excellence! Instrumental in great team building and business management.",
      image: "/Shalini.png",
    },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&h=600&fit=crop&crop=center"
            alt="About Hullect Services"
            className="about-hero-bg-image"
          />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-page-title">About Hullect Services</h1>
            <p className="about-page-subtitle">Transforming Careers and Building Teams Since 2021</p>
          </div>
        </div>
      </section>

      {/* About Content - Who We Are Section */}
      <section className="about-who-we-are-section section">
        <div className="container">
          <div className="about-who-content-grid">
            <div className="about-who-text">
              <div className="about-who-header">
                <span className="about-section-tag">Our Story</span>
                <h2 className="about-who-heading">Who We Are</h2>
              </div>

              <div className="about-who-description">
                <p>
                  At Hullect Services Private Limited, We provide Recruitment , General Staffing,Industrial Staffing, Managed Outsourcing Services and HR Services across processes such as sales & marketing, customer care, HR, F&A, Operations, Engineering, After Sales Service and Mobility Services.

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
                <p>
                  Hullect inherits a legacy of excellence, innovation, and a proven track record of success. The organization embodies the same commitment to quality, reliability, and customer satisfaction that has defined its predecessors journey in the staffing industry.
                </p>
              </div>
            </div>

            <div className="about-who-image">
              <img
                src="/homepage.png"
                alt="Professional team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vision-mission section">
        <div className="container">
          <div className="about-vm-grid">
            <div className="about-vm-card">
              <div className="about-vm-icon">🎯</div>
              <h3 className="about-vm-title">Our Vision</h3>
              <p className="about-vm-description">
                At Hullect, we’re committed to reducing financial pressure for businesses and individuals across India, especially in states like Uttar Pradesh. By simplifying systems and supporting local enterprises, we aim to create real economic and social value. Our mission is to empower people to grow stronger, become self-reliant, and achieve more right from the grassroots to the nation.
              </p>
            </div>

            <div className="about-vm-card">
              <div className="about-vm-icon">🚀</div>
              <h3 className="about-vm-title">Our Mission</h3>
              <p className="about-vm-description">
                We connect businesses with the right talent to fuel growth and success through strategic staffing solutions. Our commitment lies in delivering exceptional service, building lasting partnerships, and driving innovation in workforce management ensuring our clients and candidates are always prepared to meet the demands of a dynamic, evolving market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="about-features-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="heading-secondary">What Sets Us Apart</h2>
          </div>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="about-feature-card">
                <div className="about-feature-icon">{feature.icon}</div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Leadership Team</span>
            <h2 className="heading-secondary">Meet Our Team Heads</h2>
            <p className="text-large">Experienced leaders driving innovation and excellence in staffing solutions</p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-team-card">
                <div className="about-team-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="about-team-content">
                  <h3 className="about-team-name">{member.name}</h3>
                  <p className="about-team-position">{member.position}</p>
                  <p className="about-team-experience">{member.experience}</p>
                  <p className="about-team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Unique About Page CTA */}
      <section className="about-page-cta-section">
        <div className="container">
          <div className="about-page-cta-content">
            <h3 className="about-page-cta-heading">Ready to Transform Your Hiring Process?</h3>
            <p className="about-page-cta-text">
              Let's discuss how we can help you find the perfect talent for your organization.
            </p>
            <div className="about-page-cta-actions">
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
