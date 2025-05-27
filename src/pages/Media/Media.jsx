import "./Media.css"
import { Link } from "react-router-dom"

const Media = () => {
  const newsArticles = [
    {
      title: "Hullect Services Expands Operations to New Cities",
      excerpt:
        "Company announces expansion plans to serve clients in tier-2 cities across India with new service centers.",
      date: "March 15, 2024",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
      readTime: "3 min read",
    },
    {
      title: "ISO 9001:2015 Certification Renewed for Quality Excellence",
      excerpt:
        "Hullect Services successfully renews its ISO certification, reinforcing commitment to quality management systems.",
      date: "February 28, 2024",
      category: "Achievements",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&crop=center",
      readTime: "2 min read",
    },
    {
      title: "Digital Transformation in HR: Our Technology Initiative",
      excerpt: "Launching new mobile-enabled solutions for better workforce management and employee experience.",
      date: "February 10, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center",
      readTime: "4 min read",
    },
    {
      title: "Partnership with Leading Manufacturing Companies",
      excerpt:
        "Strategic partnerships established with major manufacturing firms to provide comprehensive staffing solutions.",
      date: "January 25, 2024",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center",
      readTime: "3 min read",
    },
    {
      title: "Skill Development Program Launches for Job Seekers",
      excerpt:
        "New training initiatives designed to enhance employability and bridge the skill gap in various industries.",
      date: "January 12, 2024",
      category: "Training",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
      readTime: "5 min read",
    },
    {
      title: "Award Recognition for Excellence in Staffing Services",
      excerpt:
        "Hullect Services receives industry recognition for outstanding performance in staffing and recruitment.",
      date: "December 20, 2023",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop&crop=center",
      readTime: "2 min read",
    },
  ]

  const pressReleases = [
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

  const mediaGallery = [
    {
      title: "Office Inauguration Ceremony",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center",
      category: "Events",
    },
    {
      title: "Team Building Workshop",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
      category: "Training",
    },
    {
      title: "Client Meeting Session",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop&crop=center",
      category: "Business",
    },
    {
      title: "Award Ceremony",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop&crop=center",
      category: "Awards",
    },
    {
      title: "Technology Demo",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop&crop=center",
      category: "Technology",
    },
    {
      title: "Industry Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop&crop=center",
      category: "Events",
    },
  ]

  const achievements = [
    {
      year: "2024",
      title: "ISO 9001:2015 Certification Renewed",
      description: "Quality management system certification renewed for continued excellence",
    },
    {
      year: "2023",
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
      title: "Startup India Recognition",
      description: "Officially registered and recognized under Startup India initiative",
    },
  ]

  return (
    <div className="media-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop&crop=center"
            alt="Media Center"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Media Center</h1>
            <p className="page-subtitle">Latest News, Updates & Company Highlights</p>
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

      {/* Press Releases */}
      <section className="press-releases section">
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
      </section>

      {/* Media Gallery */}
      <section className="media-gallery section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Visual Stories</span>
            <h2 className="heading-secondary">Media Gallery</h2>
            <p className="text-large">A visual journey through our company events, achievements, and milestones</p>
          </div>

          <div className="gallery-grid">
            {mediaGallery.map((item, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h4 className="gallery-title">{item.title}</h4>
                      <span className="gallery-category">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="achievements-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Journey</span>
            <h2 className="heading-secondary">Achievements & Milestones</h2>
            <p className="text-large">Key achievements and recognitions that mark our journey of excellence</p>
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
              <div className="mediacontact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:media@hullectservices.com">media@hullectservices.com</a>
              </div>
              <div className="mediacontact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:9120018844">+91 9120018844</a>
              </div>
            </div>
            <div className="contact-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Media Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Media
