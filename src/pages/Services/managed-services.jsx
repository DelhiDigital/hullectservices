import "./managed-services.css";
import bannerImg from "/Gemini_Generated_Image_88afuu88afuu88af.png";

const ManagedServices = () => {
  const services = [
    {
      title: "End-to-End Store Management",
      description:
        "Comprehensive oversight and management of General Trade (GT) and Modern Trade (MT) stores for FMCG and consumer goods companies of all sizes.",
      features: [
        "GT & MT store coverage",
        "Productivity tracking",
        "Compliance assurance",
        "Multi-region support",
      ],
      icon: "🏪",
    },
    {
      title: "Skilled Field Force Deployment",
      description:
        "Recruitment, training, and deployment of field executives tailored to your store operations.",
      features: [
        "Cost-effective recruitment",
        "Hands-on training",
        "Timely deployment",
        "Ongoing compliance management",
      ],
      icon: "🧑‍💼",
    },
    {
      title: "In-Store Tech Enablement",
      description:
        "We empower your workforce with cutting-edge tools and technology to enhance in-store activities and real-time tracking.",
      features: [
        "Custom app interface",
        "Daily report submission",
        "Digital scorecards",
        "Live dashboards",
      ],
      icon: "📲",
    },
    {
      title: "Payments & Incentives",
      description:
        "We facilitate secure and direct payment solutions for store owners and field teams with transparency.",
      features: [
        "Bank transfers",
        "Incentive management",
        "Audit-ready reports",
        "Full accountability",
      ],
      icon: "💰",
    },
  ];

  return (
    <div className="search-recruitment-page">
      {/* Banner with Title Overlay */}
      <section className="search-hero no-padding">
        <div className="search-hero-wrapper">
          <img src={bannerImg} alt="Managed Services Banner" className="search-banner-image reduced-height" />
          <div className="search-hero-overlay">
            <h1>Managed Services for FMCG Store Operations</h1>
            <p className="tagline">Simplifying Retail Execution with Tech-Driven Field Ops</p>
          </div>
        </div>
      </section>

      <section className="process-flow-section">
        <div className="container">
          <p>The solution focuses on providing end-to-end management of the GT and MT stores of FMCG and other consumer goods companies of all scales.</p>

          <div className="process-flow-icons">
            {["Recruitment", "Training", "Deployment", "Manage Productivity", "Manage Payments", "Ensure 100% Compliance", "Procure Results (Revenue)"]
              .map((step, index) => (
                <>
                  <div className="process-flow-step" key={step}>{step}</div>
                  {index !== 6 && <span className="process-flow-plus">+</span>}
                </>
              ))}
          </div>

          <div className="process-flow-description">
            <p>We are committed to recruit, train, and deploy the best field force available at cost-effective prices...</p>
            <p>Our application and back-end portals are fully customizable to your needs...</p>
            <p>We have taken it one step further by providing a direct bank account payment option...</p>
          </div>
        </div>
      </section>

      <section className="search-cta">
        <div className="container">
          <div className="search-cta-content">
            <h2>Let Us Handle Your Store Operations</h2>
            <p>
              From visibility tracking to workforce payments and technology support — Hullect is your partner in retail
              productivity.
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
