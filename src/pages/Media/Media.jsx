import "./media.css"
import { Link } from "react-router-dom"

const Media = () => {
  const foundationDayHighlights = [
    {
      title: "Foundation Day Celebration 2025",
      excerpt:
        "Hullect Services celebrated its Foundation Day with great enthusiasm, bringing together the entire team for a memorable celebration filled with achievements, recognition, and team bonding activities.",
      date: "jun 11, 2025",
      category: "Foundation Day",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0015.jpg-dX3SQfQrzfo1m6fs2fI4WavWzP5Ywo.jpeg",
      readTime: "5 min read",
      featured: true,
    },
  ]

  const newsArticles = [
    {
      title: "Team Excellence Awards Presented on Foundation Day",
      excerpt:
        "Outstanding team members were recognized for their exceptional contributions during our annual Foundation Day celebration.",
      date: "jun 12, 2025",
      category: "Awards",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0021.jpg-vjOqwZq3kCEDkz8mD8ufMz142tH93V.jpeg",
      readTime: "3 min read",
    },
    {
      title: "Hullect Services Expands Operations to New Cities",
      excerpt:
        "Company announces expansion plans to serve clients in tier-2 cities across India with new service centers.",
      date: "March 15, 2025",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=250&fit=crop&crop=center",
      readTime: "3 min read",
    },
    {
      title: "ISO 9001:2015 Certification Renewed for Quality Excellence",
      excerpt:
        "Hullect Services successfully renews its ISO certification, reinforcing commitment to quality management systems.",
      date: "February 28, 2025",
      category: "Achievements",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
      readTime: "2 min read",
    },
    {
      title: "Digital Transformation in HR: Our Technology Initiative",
      excerpt: "Launching new mobile-enabled solutions for better workforce management and employee experience.",
      date: "February 10, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center",
      readTime: "4 min read",
    },
    {
      title: "Partnership with Leading Manufacturing Companies",
      excerpt:
        "Strategic partnerships established with major manufacturing firms to provide comprehensive staffing solutions.",
      date: "January 25, 2024",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
      readTime: "3 min read",
    },
    {
      title: "Skill Development Program Launches for Job Seekers",
      excerpt:
        "New training initiatives designed to enhance employability and bridge the skill gap in various industries.",
      date: "January 12, 2024",
      category: "Training",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop&crop=center",
      readTime: "5 min read",
    },
    
  ]

  const pressReleases = [
    {
      title: "Foundation Day 2024 - Celebrating 16 Years of Excellence",
      date: "December 12, 2024",
      description: "Annual foundation day celebration highlights and team achievements",
      downloadLink: "#",
    },
    {
      title: "Q4 2023 Business Performance Report",
      date: "January 15, 2024",
      description: "Annual performance highlights and strategic outlook for 2024",
      downloadLink: "#",
    },
    {
      title: "New Service Line Launch Announcement",
      date: "December 10, 2023",
      description: "Introduction of facility management and security services",
      downloadLink: "#",
    },
    {
      title: "Compliance Excellence Achievement",
      date: "November 25, 2023",
      description: "100% compliance record across all operational locations",
      downloadLink: "#",
    },
  ]

  const foundationDayGallery = [
    {
      title: "Foundation Day Team Celebration",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0015.jpg-dX3SQfQrzfo1m6fs2fI4WavWzP5Ywo.jpeg",
      category: "Foundation Day",
      description:
        "The entire Hullect Services team came together to celebrate our Foundation Day with cake cutting and team bonding.",
    },
    {
      title: "Leadership Team Group Photo",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0016.jpg-RzihIxTPt9uCca8Paoor0I9N8HL9Pn.jpeg",
      category: "Foundation Day",
      description: "Our leadership team and employees celebrating another successful year of growth and achievements.",
    },
    {
      title: "Award Presentation Ceremony",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0021.jpg-vjOqwZq3kCEDkz8mD8ufMz142tH93V.jpeg",
      category: "Awards",
      description:
        "Recognition ceremony for outstanding team members and their exceptional contributions to the company.",
    },
    {
      title: "Team Building Activities",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0012.jpg-cErmacbT4t3VnaI7ZjvSGhMY8Yv90q.jpeg",
      category: "Team Building",
      description: "Engaging team building activities that brought everyone together for fun and collaboration.",
    },
    {
      title: "Gift Exchange Ceremony",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0013.jpg-qPP4pZKReere5AC5UGZWqIJdM6CK3K.jpeg",
      category: "Foundation Day",
      description: "Special gift exchange ceremony as part of our Foundation Day celebrations.",
    },
    {
      title: "Strategic Planning Session",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0017.jpg-RGBgIJgF3ruvoBjEmuGTu32NRDRLXV.jpeg",
      category: "Business",
      description: "Leadership team discussing future strategies and growth plans during the Foundation Day event.",
    },
    {
      title: "Leadership Recognition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0018.jpg-U33L3ejd8r8HTOTaUZaQrk79NwBX3q.jpeg",
      category: "Leadership",
      description: "Recognizing our leadership team for their dedication and vision in driving company success.",
    },
    {
      title: "Recreation Time - Chess Tournament",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0010.jpg-T4iQqJc4XNpUtHPDjhcX1V1AUGUALg.jpeg",
      category: "Recreation",
      description:
        "Fun recreational activities including chess tournaments that showcase the diverse talents of our team.",
    },
    {
      title: "Team Bonding Moments",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0016.jpg-RzihIxTPt9uCca8Paoor0I9N8HL9Pn.jpeg",
      category: "Team Bonding",
      description: "Capturing the essence of teamwork and camaraderie during our Foundation Day celebrations.",
    },
  ]

  const achievements = [
    {
      year: "2025",
      title: "Foundation Day Celebration - 4 Years of Excellence",
      description:
        "Celebrated our 4th Foundation Day with team recognition, awards, and renewed commitment to excellence",
    },
    {
      year: "2024",
      title: "ISO 9001:2015 Certification Renewed",
      description: "Quality management system certification renewed for continued excellence",
    },
    {
      year: "2024",
      title: "Best Staffing Company Award",
      description: "Recognized for outstanding performance in the staffing industry",
    },
    {
      year: "2023",
      title: "Digital Innovation Award",
      description: "Acknowledged for implementing cutting-edge HR technology solutions",
    },
    {
      year: "2022",
      title: "Expansion to Multiple Cities",
      description: "Successfully expanded operations to serve clients across major Indian cities",
    },
    {
      year: "2021",
      title: "Company Foundation & Startup India Recognition",
      description: "Hullect Services founded and officially registered under Startup India initiative",
    },
  ]

  return (
    <div className="media-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250612-WA0015.jpg-dX3SQfQrzfo1m6fs2fI4WavWzP5Ywo.jpeg"
            alt="Foundation Day Celebration"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Media Center</h1>
            <p className="page-subtitle">Celebrating Our Journey & Latest Company Highlights</p>
          </div>
        </div>
      </section>

      {/* Foundation Day Feature */}
      <section className="foundation-day-feature section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag foundation-tag">🎉 Foundation Day Special</span>
            <h2 className="heading-secondary">Celebrating 4 Years of Excellence</h2>
            <p className="text-large">
              Join us as we celebrate our Foundation Day 2025 with team achievements, recognition, and memorable moments
            </p>
          </div>

          <div className="foundation-day-content">
            {foundationDayHighlights.map((article, index) => (
              <article key={index} className="foundation-day-card">
                <div className="foundation-image">
                  <img src={article.image || "/placeholder.svg"} alt={article.title} />
                  <div className="foundation-badge">
                    <span>🎂 Foundation Day 2025</span>
                  </div>
                </div>
                <div className="foundation-content">
                  <div className="foundation-meta">
                    <span className="foundation-date">{article.date}</span>
                    <span className="foundation-read-time">{article.readTime}</span>
                  </div>
                  <h3 className="foundation-title">{article.title}</h3>
                  <p className="foundation-excerpt">{article.excerpt}</p>
                  <div className="foundation-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">🏆</span>
                      <span>Team Awards</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🎯</span>
                      <span>Goal Achievement</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🤝</span>
                      <span>Team Bonding</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🎊</span>
                      <span>Celebration</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="featured-news section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Latest Updates</span>
            <h2 className="heading-secondary">Company News & Announcements</h2>
            <p className="text-large">Stay updated with our latest developments, achievements, and industry insights</p>
          </div>

          <div className="news-grid">
            {newsArticles.map((article, index) => (
              <article key={index} className="news-card">
                <div className="news-image">
                  <img src={article.image || "/placeholder.svg"} alt={article.title} />
                  <div className="news-category">{article.category}</div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{article.date}</span>
                    <span className="news-read-time">{article.readTime}</span>
                  </div>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <a href="#" className="news-link">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Day Gallery */}
      <section className="foundation-gallery section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Foundation Day Gallery</span>
            <h2 className="heading-secondary">Moments from Our Celebration</h2>
            <p className="text-large">Capturing the joy, achievements, and team spirit from our Foundation Day 2025</p>
          </div>

          <div className="foundation-gallery-grid">
            {foundationDayGallery.map((item, index) => (
              <div key={index} className="foundation-gallery-item">
                <div className="foundation-gallery-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                  <div className="foundation-gallery-overlay">
                    <div className="foundation-gallery-content">
                      <h4 className="foundation-gallery-title">{item.title}</h4>
                      <span className="foundation-gallery-category">{item.category}</span>
                      <p className="foundation-gallery-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      {/* <section className="press-releases section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Official Communications</span>
            <h2 className="heading-secondary">Press Releases</h2>
            <p className="text-large">Official company announcements and business updates</p>
          </div>

          <div className="press-releases-list">
            {pressReleases.map((release, index) => (
              <div key={index} className="press-release-item">
                <div className="release-content">
                  <h3 className="release-title">{release.title}</h3>
                  <p className="release-description">{release.description}</p>
                  <span className="release-date">{release.date}</span>
                </div>
                <div className="release-actions">
                  <a href={release.downloadLink} className="btn btn-outline">
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements Timeline */}
      <section className="achievements-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Journey</span>
            <h2 className="heading-secondary">Achievements & Milestones</h2>
            <p className="text-large">
              Key achievements and recognitions that mark our journey of excellence since 2021
            </p>
          </div>

          <div className="achievements-timeline">
            {achievements.map((achievement, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{achievement.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{achievement.title}</h3>
                  <p className="timeline-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="media-contact">
        <div className="container">
          <div className="contact-content">
            <h3 className="heading-tertiary">Media Inquiries</h3>
            <p className="text-large">
              For press inquiries, interview requests, or additional information, please contact our media team.
            </p>
            <div className="contact-info">
              <div className="MediaContact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:media@hullectservices.com">media@hullectservices.com</a>
              </div>
              <div className="MediaContact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:9120018844">+91 9120018844</a>
              </div>
            </div>
            <div className="contact-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Media
