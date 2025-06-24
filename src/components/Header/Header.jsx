"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const location = useLocation()
  const servicesDropdownRef = useRef(null)
  const aboutDropdownRef = useRef(null)
  const navRef = useRef(null)

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

  useEffect(() => {
    if (isMenuOpen && navRef.current) {
      document.body.style.overflow = "hidden"
      document.body.style.height = "100vh"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.height = "auto"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesDropdownOpen(false)
    setIsAboutDropdownOpen(false)
  }

  const isActive = (path) => location.pathname === path

  const isServicesActive = () => location.pathname.startsWith("/services")
  const isAboutActive = () => location.pathname.startsWith("/about")

  const handleServicesClick = (e) => {
    e.preventDefault()
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  const handleAboutClick = (e) => {
    e.preventDefault()
    setIsAboutDropdownOpen(!isAboutDropdownOpen)
  }

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src="./Logo.png" alt="Hullect Services" />
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          <nav ref={navRef} className={`nav ${isMenuOpen ? "nav-open" : ""}`} style={isMenuOpen ? { height: "100vh" } : {}}>
            <ul className="nav-list">
              <li>
                <Link to="/" onClick={closeMenu} className={isActive("/") ? "active" : ""}>Home</Link>
              </li>
              <li className="nav-dropdown" ref={aboutDropdownRef}>
                <a
                  href="#"
                  onClick={handleAboutClick}
                  className={`nav-dropdown-toggle ${isAboutActive() ? "active" : ""}`}
                >
                  About <span className="dropdown-arrow"><FaChevronDown /></span>
                </a>
                {isAboutDropdownOpen && (
                  <div className="dropdown-menu dropdown-open">
                    <div className="dropdown-section">
                      <ul className="dropdown-submenu">
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/about/company-profile" onClick={closeMenu}>Company Profile</Link></li>
                        <li><Link to="/about/our-team" onClick={closeMenu}>Leadership Team</Link></li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav-dropdown" ref={servicesDropdownRef}>
                <a
                  href="#"
                  onClick={handleServicesClick}
                  className={`nav-dropdown-toggle ${isServicesActive() ? "active" : ""}`}
                >
                  Services <span className="dropdown-arrow"><FaChevronDown /></span>
                </a>
                {isServicesDropdownOpen && (
                  <div className="dropdown-menu dropdown-open">
                    <div className="dropdown-columns">
                      <div className="dropdown-parent">
                        <span className="dropdown-heading">Business Services</span>
                        <ul className="dropdown-submenu">
                          <li><Link to="/services/staffing" onClick={closeMenu}>Staffing</Link></li>
                          <li><Link to="/services/search-recruitment" onClick={closeMenu}>Search & Recruitment</Link></li>
                          <li><Link to="/services/skilling-learning" onClick={closeMenu}>Skilling & Learning</Link></li>
                          <li><Link to="/services/managed-services" onClick={closeMenu}>Managed Services</Link></li>
                          <li><Link to="/services/apprenticeship" onClick={closeMenu}>Apprenticeship</Link></li>
                          <li><Link to="/services/compliance" onClick={closeMenu}>Compliance</Link></li>
                        </ul>
                      </div>
                      <div className="dropdown-parent">
                        <span className="dropdown-heading">Security Services</span>
                        <ul className="dropdown-submenu">
                          <li><Link to="/services/security" onClick={closeMenu}>Security Services</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li><Link to="/partners" onClick={closeMenu} className={isActive("/partners") ? "active" : ""}>Our Partners</Link></li>
              <li><Link to="/media" onClick={closeMenu} className={isActive("/media") ? "active" : ""}>Media</Link></li>
              <li><Link to="/contact" onClick={closeMenu} className={isActive("/contact") ? "active" : ""}>Contact</Link></li>
              <li><Link to="/careers" onClick={closeMenu} className={isActive("/careers") ? "active" : ""}>Careers</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:9120018844" className="btn btn-outline">Call Now</a>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
