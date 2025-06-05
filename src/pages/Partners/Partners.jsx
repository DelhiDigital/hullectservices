import "./Partners.css"
import { Link } from "react-router-dom"
import OurPartner from "./OurClients/ourClients"

const Partners = () => {
  const clientLogos = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      industry: "Technology",
    },
    {
      name: "Global Finance Ltd",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop&crop=center",
      industry: "Finance",
    },
    {
      name: "Healthcare Plus",
      logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop&crop=center",
      industry: "Healthcare",
    },
    {
      name: "Manufacturing Pro",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&crop=center",
      industry: "Manufacturing",
    },
    {
      name: "E-Commerce Hub",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop&crop=center",
      industry: "E-Commerce",
    },
    {
      name: "Digital Innovations",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop&crop=center",
      industry: "Technology",
    },
    {
      name: "Retail Excellence",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop&crop=center",
      industry: "Retail",
    },
    {
      name: "Financial Services Co",
      logo: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=200&h=100&fit=crop&crop=center",
      industry: "Finance",
    },
  ]

  const testimonials = [
    {
      quote:
        "Hullect Services has been instrumental in helping us scale our operations. Their professional approach and quality candidates have exceeded our expectations.",
      author: "Rajesh Kumar",
      position: "HR Director",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The managed services provided by Hullect have streamlined our HR processes significantly. Their compliance expertise is unmatched in the industry.",
      author: "Priya Sharma",
      position: "Operations Manager",
      company: "Global Finance Ltd",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Working with Hullect Services has been a game-changer for our recruitment needs. They understand our requirements and deliver quality talent consistently.",
      author: "Amit Patel",
      position: "CEO",
      company: "Healthcare Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ]

  const partnershipBenefits = [
    {
      icon: "🤝",
      title: "Strategic Partnership",
      description: "Long-term collaboration focused on mutual growth and success",
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "Rapid deployment of resources to meet urgent business requirements",
    },
    {
      icon: "🎯",
      title: "Customized Solutions",
      description: "Tailored staffing solutions designed to fit your specific industry needs",
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Detailed reporting and analytics to track performance and ROI",
    },
    {
      icon: "🛡️",
      title: "Risk Mitigation",
      description: "Comprehensive compliance management to reduce operational risks",
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description: "Continuous improvement and adoption of latest HR technologies",
    },
  ]

  const caseStudies = [
    {
      title: "IT Staffing Success Story",
      company: "Leading Fintech Company",
      challenge: "Rapid scaling of development team for new product launch",
      solution: "Deployed 50+ skilled developers within 30 days",
      result: "Product launched on time, 40% faster hiring process",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Manufacturing Operations",
      company: "Automotive Parts Manufacturer",
      challenge: "Seasonal workforce management and compliance",
      solution: "Implemented managed services with full compliance coverage",
      result: "30% cost reduction, 100% compliance adherence",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Customer Service Excellence",
      company: "E-Commerce Platform",
      challenge: "24/7 customer support across multiple channels",
      solution: "Deployed dedicated customer service teams with technology integration",
      result: "95% customer satisfaction, 50% reduction in response time",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
    },
  ]

  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=600&fit=crop&crop=center"
            alt="Our Partners"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Our Partners</h1>
            <p className="page-subtitle">Trusted by Leading Companies Across Industries</p>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <OurPartner />

      {/* Client Logos */}
      <section className="clients-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Trusted Partners</span>
            <h2 className="heading-secondary">Companies That Trust Us</h2>
            <p className="text-large">We're proud to partner with industry leaders across various sectors</p>
          </div>

          <div className="clients-grid">
            {clientLogos.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-logo">
                  <img src={client.logo || "/placeholder.svg"} alt={client.name} />
                </div>
                <div className="client-info">
                  <h4 className="client-name">{client.name}</h4>
                  <span className="client-industry">{client.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="benefits-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Partnership Benefits</span>
            <h2 className="heading-secondary">Why Companies Choose Us</h2>
            <p className="text-large">Discover the advantages of partnering with Hullect Services</p>
          </div>

          <div className="benefits-grid">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Client Testimonials</span>
            <h2 className="heading-secondary">What Our Partners Say</h2>
            <p className="text-large">Real feedback from companies we've helped transform their workforce</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Success Stories</span>
            <h2 className="heading-secondary">Case Studies</h2>
            <p className="text-large">Real-world examples of how we've helped businesses achieve their goals</p>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card">
                <div className="case-study-image">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} />
                </div>
                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-company">{study.company}</p>
                  <div className="case-study-details">
                    <div className="detail-item">
                      <h4>Challenge</h4>
                      <p>{study.challenge}</p>
                    </div>
                    <div className="detail-item">
                      <h4>Solution</h4>
                      <p>{study.solution}</p>
                    </div>
                    <div className="detail-item">
                      <h4>Result</h4>
                      <p>{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed with Unique Classes */}
      <section className="partners-page-cta-section">
        <div className="container">
          <div className="partners-page-cta-content">
            <h3 className="partners-page-cta-heading">Ready to Become Our Partner?</h3>
            <p className="partners-page-cta-text">
              Join hundreds of companies that trust Hullect Services for their staffing needs.
            </p>
            <div className="partners-page-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Partnership
              </Link>
              <a href="tel:9120018844" className="btn btn-outline">
                Discuss Your Needs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners
