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
    <div className="search-recruitment-page">
      {/* Banner with Title Overlay */}
      <section className="search-hero no-padding">
        <div className="search-hero-wrapper">
          <img
            src={bannerImg}
            alt="Managed Services Banner"
            className="search-banner-image reduced-height"
          />
          <div className="search-hero-overlay">
            <h1>Managed Services for FMCG Store Operations</h1>
            <p className="tagline">
              Simplifying Retail Execution with Tech-Driven Field Ops
            </p>
          </div>
        </div>
      </section>

      <section className="process-flow-section">
        <div className="container">
          <p>
            The solution focuses on providing end-to-end management of the GT
            and MT stores of FMCG and other consumer goods companies of all
            scales.
          </p>

          <div className="process-flow-icons">
            {processSteps.map((step, index) => (
              <div className="process-flow-card" key={index}>
                <div className="process-flow-icon">{step.icon}</div>
                <div className="process-flow-label">{step.label}</div>
              </div>
            ))}
          </div>

          <div className="process-flow-description-wrapper">
            <div className="process-flow-description-text">
              <p>
                We are committed to recruit, train, and deploy the best field
                force available at cost-effective prices...
              </p>
              <p>
                Our application and back-end portals are fully customizable to
                your needs...
              </p>
              <p>
                We have taken it one step further by providing a direct bank
                account payment option...
              </p>
            </div>
            <div className="process-flow-description-image">
              <img
                src="/managed-services-photo.png"
                alt="Managed Service Visual"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="search-cta">
        <div className="container">
          <div className="search-cta-content">
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
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;
