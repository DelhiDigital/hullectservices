"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import "./Home.css"
import { Link } from "react-router-dom"
import StatisticsSection from "./StatisticsSection/StatisticsSection"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

const Home = () => {
  const heroTitleRef = useRef(null)
  const heroDescRef = useRef(null)
  const heroActionsRef = useRef(null)
  const aboutPreviewRef = useRef(null)
  const servicesPreviewRef = useRef(null)
  const homectaSectionRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
      description: "Outcome-based HR-driven outsourcing and security services",
      link: "/services",
    },
    {
      icon: "🛡️",
      title: "Security Services",
      description: "Comprehensive security solutions for businesses",
      link: "/services",
    },
  ]

  // Handle window resize to update content
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline()

    // Get the appropriate title text based on screen size
    let titleText = "Yout trusted partner in Recruitment, Staffing ,Managed  Services & HR Services"

    if (windowWidth <= 320) {
      titleText = "Yout trusted partner in Recruitment, Staffing ,Managed  Services & HR Services"
    } else if (windowWidth <= 480) {
      titleText = "Yout trusted partner in Recruitment, Staffing ,Managed  Services & HR Services"
    } else if (windowWidth <= 768) {
      titleText = "Yout trusted partner in Recruitment, Staffing ,Managed  Services & HR Services"
    }

    // Split text into words instead of characters to prevent word breaking
    const words = titleText.split(" ")

    // Clear the title initially and create word spans
    if (heroTitleRef.current) {
      heroTitleRef.current.innerHTML = ""

      // Create spans for each word
      words.forEach((word, index) => {
        const wordSpan = document.createElement("span")
        wordSpan.className = "word"

        // Add special styling for important wordsserv
        if (word.includes("Recruitment")|| word.includes("Staffing") || word.includes("Managed") || word.includes("Services")  || word.includes("HR") || word.includes("Services")) {
          wordSpan.className = "word highlight"
        }

        wordSpan.innerHTML = word

        // Initial state - hidden and positioned below
        wordSpan.style.opacity = "0"
        wordSpan.style.transform = "translateY(30px)"
        wordSpan.style.display = "inline-block"
        wordSpan.style.marginRight = "0.3em" // Add space between words
        wordSpan.style.whiteSpace = "nowrap" // Prevent word breaking

        heroTitleRef.current.appendChild(wordSpan)
      })

      // Add typing cursor
      const cursor = document.createElement("span")
      cursor.className = "typing-cursor"
      cursor.innerHTML = "|"
      cursor.style.opacity = "1"
      cursor.style.animation = "blink 0.5s infinite"
      heroTitleRef.current.appendChild(cursor)

      // Create word-by-word animation timeline
      const wordSpans = heroTitleRef.current.querySelectorAll(".word")
      const typingCursor = heroTitleRef.current.querySelector(".typing-cursor")

      // Animate each word with realistic timing
      wordSpans.forEach((word, index) => {
        let delay = index * 0.2 // Base delay between words

        // Add longer pauses for important words
        if (word.classList.contains("highlight")) {
          delay += 0.1 // Extra pause for highlighted words
        }

        // Add slight randomness to make it feel more human
        const randomDelay = (Math.random() - 0.5) * 0.1

        tl.to(
          word,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          delay + randomDelay,
        )
      })

      // Keep cursor blinking during typing
      tl.set(typingCursor, { opacity: 1 }, 0)

      // Hide cursor after typing is complete
      tl.to(
        typingCursor,
        {
          opacity: 0,
          duration: 0.8,
        },
        "+=0.5", // Wait 0.5 seconds after typing completes
      )
    }

    // Hero description animation - starts after typing is mostly complete
    tl.fromTo(
      heroDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=1", // Start 1 second before typing completes
    )

    // Hero actions animation
    tl.fromTo(
      heroActionsRef.current?.children,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.3, ease: "back.out(1.7)" },
      "-=0.8", // Start 0.8 seconds before typing completes
    )

    // About preview animation
    const aboutPreviewScrollTrigger = ScrollTrigger.create({
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
    const servicesPreviewScrollTrigger = ScrollTrigger.create({
      trigger: servicesPreviewRef.current,
      start: "top 75%",
      onEnter: () => {
        const sectionHeader = servicesPreviewRef.current?.querySelector(".section-header")
        const serviceCards = servicesPreviewRef.current?.querySelectorAll(".service-card")

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
      },
    })

    // homecta section animation
    const homectaSectionScrollTrigger = ScrollTrigger.create({
      trigger: homectaSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        const homectaContent = homectaSectionRef.current?.querySelector(".homecta-content")

        gsap.fromTo(
          homectaContent?.children,
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
      if (aboutPreviewScrollTrigger) aboutPreviewScrollTrigger.kill()
      if (servicesPreviewScrollTrigger) servicesPreviewScrollTrigger.kill()
      if (homectaSectionScrollTrigger) homectaSectionScrollTrigger.kill()
    }
  }, [windowWidth])

  // Get responsive description text based on screen size
  const getResponsiveDescription = () => {
    if (windowWidth <= 320) {
      return "We offer comprehensive services across FMCG, Retail, FMCD, Telecom, E-commerce, BFSI, Manufacturing, Pharma, Healthcare Hospitality, Educaiton , Fintech , IT  & Life sciences"
    } else if (windowWidth <= 480) {
      return "We offer comprehensive services across FMCG, Retail, FMCD, Telecom, E-commerce, BFSI, Manufacturing, Pharma, Healthcare Hospitality, Educaiton , Fintech , IT  & Life sciences"
    } else if (windowWidth <= 768) {
      return "We offer comprehensive services across FMCG, Retail, FMCD, Telecom, E-commerce, BFSI, Manufacturing, Pharma, Healthcare Hospitality, Educaiton , Fintech , IT  & Life sciences"
    } else {
      return "We offer comprehensive services across FMCG, Retail, FMCD, Telecom, E-commerce, BFSI, Manufacturing, Pharma, Healthcare Hospitality, Educaiton , Fintech , IT  & Life sciences"
    }
  }

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
                {getResponsiveDescription()}
              </p>
              <div ref={heroActionsRef} className="hero-actions">
                <Link to="/services" className="btn btn-primary btn-large">
                  {windowWidth <= 480 ? "Services" : "Explore Services"}
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
      <StatisticsSection />

      {/* About Preview */}
      <section ref={aboutPreviewRef} className="about-preview section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-tag">About Hullect Services</span>
              <h2 className="heading-secondary">
                <span className="desktop-only">Transforming careers and buliding Teams since 2021</span>
                <span className="tablet-only">Transforming careers and buliding Teams since 2021</span>
                <span className="mobile-only">Transforming careers and buliding Teams since 2021</span>
              </h2>
              <p className="text-large">
                <span className="desktop-only">
                  At Hullect Services Private Limited, we provide staffing and managed outsourcing services across
                  multiple industries. We help our clients find the best talent with the most relevant skills for their
                  business.
                </span>
                <span className="tablet-only">
                  We provide staffing and managed outsourcing services across multiple industries, helping clients find
                  the best talent.
                </span>
                <span className="mobile-only">We help clients find the best talent for their business needs.</span>
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img
                src="/homepage.png"
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
            <h2 className="heading-secondary">
              <span className="desktop-only">Comprehensive Staffing Solutions</span>
              <span className="tablet-only">Staffing Solutions</span>
              <span className="mobile-only">Our Solutions</span>
            </h2>
            <p className="text-large">
              <span className="desktop-only">
                End-to-end staffing and managed outsourcing services across multiple industries
              </span>
              <span className="tablet-only">Staffing and outsourcing services for all industries</span>
              <span className="mobile-only">Services for your business needs</span>
            </p>
          </div>

          <div className="Home-services-grid">
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
        </div>
      </section>

      {/* homecta Section */}
      <section ref={homectaSectionRef} className="homecta-section">
        <div className="homecta-background">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=600&fit=crop&crop=center"
            alt="Modern office space"
            className="homecta-bg-image"
          />
          <div className="homecta-overlay"></div>
        </div>
        <div className="container">
          <div className="homecta-content">
            <h2 className="heading-secondary">
              <span className="desktop-only">Ready to Transform Your Hiring Process?</span>
              <span className="tablet-only">Transform Your Hiring Process</span>
              <span className="mobile-only">Need Staffing Help?</span>
            </h2>
            <p className="text-large">
              <span className="desktop-only">
                Let's discuss how we can help you find the perfect talent for your organization.
              </span>
              <span className="tablet-only">We can help you find the perfect talent for your needs.</span>
              <span className="mobile-only">Contact us today to get started.</span>
            </p>
            <div className="homecta-actions">
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
