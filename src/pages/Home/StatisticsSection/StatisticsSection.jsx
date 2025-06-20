"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./StatisticsSection.css"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const StatisticsSection = () => {
  const statsRef = useRef(null)
  const [statsAnimated, setStatsAnimated] = useState(false)

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Companies Served" },
    { number: "10K+", label: "Placements Made" },
    { number: "95%", label: "Client Satisfaction" },
  ]

  useEffect(() => {
    // Stats section animation - only animate once per component instance
    const statsScrollTrigger = ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      once: true, // This ensures the trigger only fires once
      onEnter: () => {
        // Check if already animated in this component instance
        if (statsAnimated) return

        // First make the stat cards visible with animation
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

        // Then animate the numbers counting up
        const statNumbers = statsRef.current?.querySelectorAll(".stat-number")
        statNumbers?.forEach((number) => {
          const finalText = number.textContent
          // Check if the content starts with a number
          const isNumeric = /^\d+/.test(finalText)

          if (isNumeric) {
            // Extract the number and any suffix (like "+" or "K+")
            const finalNumber = Number.parseInt(finalText.match(/\d+/)[0], 10)
            const suffix = finalText.replace(/^\d+/, "")

            // Set initial value to 0
            gsap.set(number, { textContent: "0" })

            // Animate from 0 to final number
            gsap.to(number, {
              duration: 2.5,
              ease: "power2.out",
              textContent: finalNumber,
              snap: { textContent: 1 },
              onUpdate: function () {
                number.textContent = Math.floor(this.targets()[0].textContent) + suffix
              },
              onComplete: () => {
                // Ensure the final value is exactly as specified
                number.textContent = finalText

                // Mark as animated in this component instance
                setStatsAnimated(true)
              },
            })
          }
        })
      },
    })

    // Cleanup function
    return () => {
      if (statsScrollTrigger) statsScrollTrigger.kill()
    }
  }, [statsAnimated])

  return (
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
  )
}

export default StatisticsSection
