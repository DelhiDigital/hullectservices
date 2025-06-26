import "./managed-services.css";
import bannerImg from "/Gemini_Generated_Image_88afuu88afuu88af.png";

const ManagedServices = () => {
  const processSteps = [
    { icon: "🧑‍💼", label: "Recruitment" },
    { icon: "🎓", label: "Training" },
    { icon: "🚚", label: "Deployment" },
    { icon: "📊", label: "Manage Productivity" },
    { icon: "💳", label: "Manage Payments" },
    { icon: "✅", label: "Ensure 100% Compliance" },
    { icon: "🧾", label: "Documentation & Audit" },
    { icon: "📈", label: "Procure Results (Revenue)" },
  ];

  return (
    <div className="managed-services-page">
      {/* Banner */}
      <div className="search-hero">
  <div className="search-hero-wrapper">
    <img src={bannerImg} alt="Banner" className="search-banner-image reduced-height" />
    <div className="search-hero-overlay"></div>
  </div>
  <div className="search-hero-content">
    <h1>Managed Services for FMCG Store Operations</h1>
    <p className="tagline">Simplifying Retail Execution with Tech-Driven Field Ops</p>
  </div>
</div>


      {/* Cards for Process Steps */}
      <section className="managed-services-cards">
        {processSteps.map((step, index) => (
          <div className="managed-service-card" key={index}>
            <div className="managed-service-icon" style={{ fontSize: "2rem" }}>
              {step.icon}
            </div>
            <h3>{step.label}</h3>
            <p>
              We provide excellent support in {step.label.toLowerCase()} to
              streamline your operations.
            </p>
          </div>
        ))}
      </section>

      {/* Our Approach Section */}
      <section className="our-approach-section">
        <div className="our-approach-container">
          <h2>Our Approach</h2>
          <div className="approach-cards">
            <div className="approach-card">
              <h4>Smart Hiring</h4>
              <p>
                We recruit, train, and deploy a dedicated field team tailored to
                your retail goals.
              </p>
            </div>
            <div className="approach-card">
              <h4>Tech-First Execution</h4>
              <p>
                Custom portals and mobile apps ensure real-time tracking,
                reporting, and team performance insights.
              </p>
            </div>
            <div className="approach-card">
              <h4>Seamless Operations</h4>
              <p>
                We manage compliance, documentation, audits, and offer direct
                salary payments to your field force.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="search-cta">
        <div className="container">
          <h2>Let Us Handle Your Store Operations</h2>
          <p>
            From visibility tracking to workforce payments and technology
            support — Hullect is your partner in retail productivity.
          </p>
          <div className="cta-actions">
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="tel:9120018844" className="btn btn-outline">
              Call +91-9120018844
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;
