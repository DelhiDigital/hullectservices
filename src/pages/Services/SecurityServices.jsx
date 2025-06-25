"use client";

import React from "react";
import "./SecurityServices.css";

const SecurityPage = () => {
  const services = [
    {
      name: "Manned Guarding Service",
      image: "/Mannedguarding.jpeg",
      description: "Get trained and professional male and female Security Guard, Security Supervisor and Security Officer at competitive rate with excellent track record."
    },
    {
      name: "Personal Body Guards",
      image: "/Personalbodyguard.jpeg",
      description: "Hullect Security Services provide Body guards with arm or without arm and Bouncers of the highest standards for personal protection."
    },
    {
      name: "Event Security Management",
      image: "/Event Security.jpeg",
      description: "Hullect Security Services offer you flexibility to appoint as many as you want based on your daily or hourly requirement for events."
    },
    {
      name: "Female Security Guard",
      image: "/Female security.jpeg",
      description: "Trained Lady Guard for frisking female visitors and securing your business like office, factory, building, mall, school and shop."
    },
    {
      name: "Office Security",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center",
      description: "Professional office security services to protect your workplace, employees, and business assets with trained security personnel."
    },
    {
      name: "Building Security",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
      description: "Comprehensive building security solutions including access control, visitor management, and 24/7 surveillance services."
    },
    {
      name: "Bank Security",
      image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&h=300&fit=crop&crop=center",
      description: "Specialized banking security services with trained guards for ATMs, bank branches, and financial institution protection."
    },
    {
      name: "Industrial Security",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
      description: "Industrial facility protection with experienced security personnel trained in manufacturing and industrial safety protocols."
    },
    {
      name: "Retail Security",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      description: "Retail and shopping center security services to prevent theft, manage crowds, and ensure customer safety."
    },
    {
      name: "Hospital Security",
      image: "/Hospital Security.jpeg",
      description: "Healthcare facility security with trained personnel understanding medical environment protocols and patient privacy."
    },
    {
      name: "Property Security",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
      description: "Residential and commercial property security services including gated community and apartment complex protection."
    },
    {
      name: "School Security",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&crop=center",
      description: "Educational institution security services ensuring student safety, campus protection, and emergency response protocols."
    }
  ];

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const placeholder = e.target.nextElementSibling;
    if (placeholder && placeholder.classList.contains('image-placeholder')) {
      placeholder.style.display = 'flex';
    }
  };

  return (
    <main className="services-page">
      {/* Hero Banner with Blue Gradient Overlay */}
      <section className="hero-section">
        <div className="hero-content">
          {/* <h1 className="heading-primary">Hullect Security Services</h1>
          <p className="hero-subtitle">Protecting Your Business and Building Trust Since 2015</p> */}
        </div>
      </section>

      {/* Intro Split Section */}
      <section className="intro-split-section">
        <div className="container">
          <div className="intro-split">
            <div className="intro-image-col">
              <img 
                src="/introimage.png" 
                alt="Professional Indian Security Team" 
                className="intro-image" 
              />
            </div>
            <div className="intro-content">
              <h2>WELCOME TO HULLECT SECURITY SERVICES</h2>
              <p>
                <strong>HULLECT SECURITY SERVICES</strong>, a premier ISO 9001:2015 certified division of Hullect Services Pvt. Ltd., offers a comprehensive range of security and manpower solutions. Our services include Armed and Unarmed Guarding, Bouncer and Bodyguard Protection, Event Security Management, as well as Skilled & Unskilled Manpower, and both Temporary and Permanent Staffing support.
              </p>
              <p>
                We deliver professional, world-class, and uninterrupted services with a relentless “Client First” approach. Our personnel are highly skilled and trained to adapt to today’s rapidly evolving business landscape. By offering integrated Security and Manpower solutions under one roof, we enable you to seamlessly outsource non-core tasks—eliminating the hassle of managing multiple vendors.
              </p>
            </div>
          </div>
        </div>
      </section>    

      {/* Service Cards */}
      <section className="service-cards section">
        <div className="container">
          <h2 className="heading-secondary mb-xl">Explore Our Services</h2>
          <div className="grid-4-cols">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.name}
                  className="service-image"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="image-placeholder" style={{display: 'none'}}>
                  {service.name}
                </div>
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hullect */}
      <section className="why-us section bg-light">
        <div className="container">
          <div className="grid-2-cols">
            <div className="image-col">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop&crop=center" 
                alt="Why Choose Hullect Security Services" 
                className="why-image" 
              />
            </div>
            <div>
              <h2 className="heading-secondary mb-lg">Why Choose Hullect?</h2>
              <ul className="benefits-list">
                <li>Free site survey and input from our security expert</li>
                <li>Tailored quotations to suit your budget requirements</li>
                <li>Trained guards with regular onsite training programs</li>
                <li>100% compliance with PF and ESIC every month</li>
                <li>Remote monitoring through mobile apps and technology</li>
                <li>Timely salary payments irrespective of client dues</li>
                <li>Regular patrolling during day and night shifts</li>
                <li>Quick replacement of non-performing guards</li>
                <li>Zero deficiency guarantee throughout the year</li>
                <li>48-hour resolution guarantee for all issues</li>
                <li>Continuous upgrades for better service delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

      {/* Process Section */}
      <section className="process-section section bg-light">
        <div className="container">
          <h2 className="heading-secondary mb-lg">Our Process</h2>
          <div className="grid-3-cols">
            <div className="process-step">
              <h3 className="heading-tertiary">1. Consultation</h3>
              <p className="text-medium">We understand your specific security needs and provide a comprehensive site-specific assessment with expert recommendations.</p>
            </div>
            <div className="process-step">
              <h3 className="heading-tertiary">2. Deployment</h3>
              <p className="text-medium">Our trained security personnel are deployed with the right tools, uniforms, and equipment to ensure maximum protection.</p>
            </div>
            <div className="process-step">
              <h3 className="heading-tertiary">3. Continuous Monitoring</h3>
              <p className="text-medium">Performance is tracked with app-based alerts, regular supervision, and monthly reviews to maintain service quality.</p>
            </div>
          </div>
        </div>
      </section>


       {/* Call to Action */}
      <section className="cta-section section-sm">
        <div className="container text-center">
          <h2 className="heading-tertiary mb-md">Need Custom Security Solutions?</h2>
          <p className="text-large mb-lg">We're here to help you with professional security services. Contact us for a free consultation and comprehensive assessment.</p>
          <a href="/contact" className="btn btn-primary">Get In Touch Today</a>
        </div>
      </section>
    </main>
  );
};    

export default SecurityPage;