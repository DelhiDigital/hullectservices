"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const location = useLocation()
  const servicesDropdownRef = useRef(null)
  const aboutDropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesDropdownOpen(false)
    setIsAboutDropdownOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const isServicesActive = () => {
    return location.pathname === "/services" || location.pathname.startsWith("/services/")
  }

  const isAboutActive = () => {
    return location.pathname === "/about" || location.pathname.startsWith("/about/")
  }

  const handleServicesClick = (e) => {
    e.preventDefault()
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true)
  }

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false)
  }

  const handleAboutClick = (e) => {
    e.preventDefault()
    setIsAboutDropdownOpen(!isAboutDropdownOpen)
  }

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true)
  }

  const handleAboutMouseLeave = () => {
    setIsAboutDropdownOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="./Logo.png" alt="Hullect Services" />
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/" onClick={closeMenu} className={isActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li
                className="nav-dropdown"
                ref={aboutDropdownRef}
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <a
                  href="#"
                  onClick={handleAboutClick}
                  className={`nav-dropdown-toggle ${isAboutActive() ? "active" : ""}`}
                >
                  About
                  <span className="dropdown-arrow">▼</span>
                </a>
                <div className={`dropdown-menu ${isAboutDropdownOpen ? "dropdown-open" : ""}`}>
                  <div className="dropdown-section">
                    <ul className="dropdown-submenu">
                      <li>
                        <Link to="/about" onClick={closeMenu}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/company-profile" onClick={closeMenu}>
                          Company Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/our-team" onClick={closeMenu}>
                          Leadership Team
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/about/mission-vision" onClick={closeMenu}>
                          Mission & Vision
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </li>
              <li
                className="nav-dropdown"
                ref={servicesDropdownRef}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <a
                  href="#"
                  onClick={handleServicesClick}
                  className={`nav-dropdown-toggle ${isServicesActive() ? "active" : ""}`}
                >
                  Services
                  <span className="dropdown-arrow">▼</span>
                </a>
                <div className={`dropdown-menu ${isServicesDropdownOpen ? "dropdown-open" : ""}`}>
                  <div className="dropdown-section">
                    <h4 className="dropdown-title">Business Services</h4>
                    <ul className="dropdown-submenu">
                      <li>
                        <Link to="/services/staffing" onClick={closeMenu}>
                          Staffing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/search-recruitment" onClick={closeMenu}>
                          Search And Recruitment
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/skilling-learning" onClick={closeMenu}>
                          Skilling & Learning Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/managed-services" onClick={closeMenu}>
                          Managed Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/apprenticeship" onClick={closeMenu}>
                          Apprenticeship Program
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/compliance" onClick={closeMenu}>
                          Compliance Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <h4 className="dropdown-title">Security Services</h4>
                    <ul className="dropdown-submenu">
                      <li>
                        <Link to="/services/security" onClick={closeMenu}>
                          Security Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/partners" onClick={closeMenu} className={isActive("/partners") ? "active" : ""}>
                  Our Partners
                </Link>
              </li>
              <li>
                <Link to="/media" onClick={closeMenu} className={isActive("/media") ? "active" : ""}>
                  Media
                </Link>
              </li>
              {/* <li>
                <Link to="/careers" onClick={closeMenu} className={isActive("/careers") ? "active" : ""}>
                  Careers
                </Link>
              </li> */}
              <li>
                <Link to="/contact" onClick={closeMenu} className={isActive("/contact") ? "active" : ""}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:9120018844" className="btn btn-outline">
              Call Now
            </a>
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>

          <button
            className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
