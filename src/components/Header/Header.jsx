"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src="/Logo.png"
              alt="Hullect Services"
            />
            {/* <span className="logo-text">Hullect Services</span> */}
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/" onClick={closeMenu} className={isActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu} className={isActive("/about") ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeMenu} className={isActive("/services") ? "active" : ""}>
                  Services
                </Link>
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
