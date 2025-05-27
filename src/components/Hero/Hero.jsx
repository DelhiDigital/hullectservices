import "./Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Your Trusted Partner in Staffing & Managed Outsourcing Services</h1>
            <p className="hero-description">
              We provide comprehensive staffing and managed outsourcing services across sales & marketing, customer
              care, HR & F&A operations, back-office operations, manufacturing, IT staffing, and facility management
              services.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">Pan-India</span>
                <span className="stat-label">Presence</span>
              </div>
              <div className="stat">
                <span className="stat-number">Multiple</span>
                <span className="stat-label">Industries Served</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary btn-large">
                Explore Services
              </a>
              <a href="#contact" className="btn btn-outline btn-large">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/placeholder.svg?height=500&width=600&text=Professional+Team"
              alt="Professional recruitment team"
            />
            <div className="floating-card">
              <div className="card-icon">📊</div>
              <div className="card-content">
                <h4>ISO 9001:2015 Certified</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
