import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Career", path: "/careers" },
    { name: "Our Partners", path: "/partners" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ]

  const services = [
    "General Staffing",
    "Permanent Recruitment",
    "Managed Services",
    "Facility Management",
    "Background Verification",
    "Payroll & Compliance",
  ]

  const industries = [
    "Information Technology",
    "Fintech",
    "E-Commerce",
    "Manufacturing",
    "Healthcare",
    "Banking & Finance",
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="./whiteLogo.png"
                alt="Hullect Services"
              />
              {/* <span className="footer-logo-text">Hullect Services</span> */}
            </div>
            <p className="footer-description">
              Your trusted partner in staffing and managed outsourcing services. We connect exceptional talent with
              leading companies across industries.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:connect@hullectservices.com">connect@hullectservices.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:9120018844">+91 9120018844</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <a href="https://www.hullectservices.com" target="_blank" rel="noopener noreferrer">
                  www.hullectservices.com
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Industries</h3>
            <ul className="footer-links">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Certifications</h3>
            <div className="certifications">
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>Startup India Registered</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>CII Member</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>PASARA Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Hullect Services Private Limited. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
