"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import "./Home.css"
import { Link } from "react-router-dom"
import Clients from "../Home/OurClients/ourClients"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

const Home = () => {
  const heroTitleRef = useRef(null)
  const heroDescRef = useRef(null)
  const heroActionsRef = useRef(null)
  const statsRef = useRef(null)
  const aboutPreviewRef = useRef(null)
  const servicesPreviewRef = useRef(null)
  const ctaSectionRef = useRef(null)

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Companies Served" },
    { number: "10K+", label: "Placements Made" },
    { number: "95%", label: "Client Satisfaction" },
  ]

  const services = [
    {
      icon: "👥",
      title: "General Staffing",
      description: "Temporary, contract, and permanent staffing solutions",
      link: "/services",
    },
    {
      icon: "🔍",
      title: "Permanent Recruitment",
      description: "Executive search and selection services",
      link: "/services",
    },
    {
      icon: "🏢",
      title: "Managed Services",
      description: "Outcome-based HR-driven outsourcing",
      link: "/services",
    },
    {
      icon: "🛡️",
      title: "Facility Management",
      description: "Comprehensive facility and security services",
      link: "/services",
    },
  ]

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline()

    // Typing animation for hero title - Letter by letter from bottom
    const titleText = "Your Trusted Partner in Staffing & Managed Outsourcing"
    const characters = titleText.split("")

    // Clear the title initially and create character spans
    if (heroTitleRef.current) {
      heroTitleRef.current.innerHTML = ""

      // Create spans for each character
      characters.forEach((char, index) => {
        const span = document.createElement("span")
        span.className = "char"

        // Add special styling for "Staffing & Managed Outsourcing" characters
        if (index >= titleText.indexOf("Staffing")) {
          span.className = "char highlight"
        }

        // Handle spaces
        if (char === " ") {
          span.innerHTML = "&nbsp;"
        } else {
          span.innerHTML = char
        }

        // Initial state - hidden and positioned below
        span.style.opacity = "0"
        span.style.transform = "translateY(100px)"
        span.style.display = "inline-block"

        heroTitleRef.current.appendChild(span)
      })

      // Add typing cursor
      const cursor = document.createElement("span")
      cursor.className = "typing-cursor"
      cursor.innerHTML = "|"
      cursor.style.opacity = "1"
      cursor.style.animation = "blink 1s infinite"
      heroTitleRef.current.appendChild(cursor)

      // Animate each character appearing with typing effect
      const charSpans = heroTitleRef.current.querySelectorAll(".char")
      const typingCursor = heroTitleRef.current.querySelector(".typing-cursor")

      tl.to(charSpans, {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.03,
        ease: "power2.out",
      })

      // Hide cursor after typing is complete
      tl.to(typingCursor, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      })
    }

    // Hero description animation
    tl.fromTo(
      heroDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5",
    )

    // Hero actions animation
    tl.fromTo(
      heroActionsRef.current?.children,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.3",
    )

    // Stats section animation
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          statsRef.current?.children,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
        )

        // Animate numbers counting up
        const statNumbers = statsRef.current?.querySelectorAll(".stat-number")
        statNumbers?.forEach((number) => {
          const finalText = number.textContent
          const isNumeric = /^\d+/.test(finalText)

          if (isNumeric) {
            const finalNumber = Number.parseInt(finalText.match(/\d+/)[0])
            const suffix = finalText.replace(/^\d+/, "")

            gsap.fromTo(
              number,
              { textContent: 0 },
              {
                textContent: finalNumber,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function () {
                  number.textContent = Math.ceil(this.targets()[0].textContent) + suffix
                },
              },
            )
          }
        })
      },
    })

    // About preview animation
    ScrollTrigger.create({
      trigger: aboutPreviewRef.current,
      start: "top 75%",
      onEnter: () => {
        const aboutText = aboutPreviewRef.current?.querySelector(".about-text")
        const aboutImage = aboutPreviewRef.current?.querySelector(".about-image")

        gsap.fromTo(aboutText, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" })

        gsap.fromTo(
          aboutImage,
          { opacity: 0, x: 50, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" },
          "-=0.7",
        )
      },
    })

    // Services preview animation
    ScrollTrigger.create({
      trigger: servicesPreviewRef.current,
      start: "top 75%",
      onEnter: () => {
        const sectionHeader = servicesPreviewRef.current?.querySelector(".section-header")
        const serviceCards = servicesPreviewRef.current?.querySelectorAll(".service-card")
        const servicesCta = servicesPreviewRef.current?.querySelector(".services-cta")

        // Animate section header first
        gsap.fromTo(
          sectionHeader?.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        )

        // Then animate service cards
        gsap.fromTo(
          serviceCards,
          { opacity: 0, y: 60, rotationY: 15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            delay: 0.3,
          },
        )

        // Finally animate CTA button
        gsap.fromTo(
          servicesCta,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 1 },
        )
      },
    })

    // CTA section animation
    ScrollTrigger.create({
      trigger: ctaSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        const ctaContent = ctaSectionRef.current?.querySelector(".cta-content")

        gsap.fromTo(
          ctaContent?.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
        )
      },
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=center"
            alt="Professional team meeting"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 ref={heroTitleRef} className="hero-title">
                {/* Content will be populated by GSAP */}
              </h1>
              <p ref={heroDescRef} className="hero-description">
                We provide comprehensive staffing and managed outsourcing services across sales & marketing, customer
                care, HR & F&A operations, manufacturing, IT staffing, and facility management services.
              </p>
              <div ref={heroActionsRef} className="hero-actions">
                <Link to="/services" className="btn btn-primary btn-large">
                  Explore Services
                </Link>
                <Link to="/contact" className="btn btn-outline btn-large">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div ref={statsRef} className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutPreviewRef} className="about-preview section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-tag">About Hullect Services</span>
              <h2 className="heading-secondary">Transforming Careers and Building Teams Since 2008</h2>
              <p className="text-large">
                At Hullect Services Private Limited, we provide staffing and managed outsourcing services across
                multiple industries. We help our clients find the best talent with the most relevant skills for their
                business.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center"
                alt="Professional team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesPreviewRef} className="services-preview section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="heading-secondary">Comprehensive Staffing Solutions</h2>
            <p className="text-large">
              End-to-end staffing and managed outsourcing services across multiple industries
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* <div className="services-cta text-center">
            <Link to="/services" className="btn btn-primary btn-large">
              View All Services
            </Link>
          </div> */}
        </div>
      </section>
      {/* Our Clients Section */}
      <Clients />

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="cta-section">
        <div className="cta-background">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=600&fit=crop&crop=center"
            alt="Modern office space"
            className="cta-bg-image"
          />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-secondary">Ready to Transform Your Hiring Process?</h2>
            <p className="text-large">
              Let's discuss how we can help you find the perfect talent for your organization.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Started Today
              </Link>
              <a href="tel:9120018844" className="btn btn-outline btn-large">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
