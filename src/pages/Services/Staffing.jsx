import "./Staffing.css";

const staffingServices = [
  {
    title: "Temporary Staffing",
    description: "Quick and scalable workforce solutions tailored to short-term projects.",
    icon: "👷‍♂️",
  },
  {
    title: "Permanent Recruitment",
    description: "End-to-end hiring support for critical full-time roles.",
    icon: "🏢",
  },
  {
    title: "Contract Staffing",
    description: "Specialized professionals on a project basis with flexible terms.",
    icon: "📝",
  },
  {
    title: "Executive Search",
    description: "Leadership hiring with precision and confidentiality.",
    icon: "🔍",
  },
];

export default function Staffing() {
  return (
    <div className="staffing-wrapper">
      <header className="staffing-hero">
        <div className="staffing-hero-content">
          <h1>Build Your Workforce with Confidence</h1>
          <p>
            Our flexible staffing solutions are designed to meet your evolving business demands — whether temporary or permanent.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn hero-btn primary">Talk to an Expert</a>
            <a href="#services" className="btn hero-btn outline">Explore Services</a>
          </div>
        </div>
      </header>

      <section id="services" className="staffing-services-section">
        <div className="section-intro">
          <h2>Our Staffing Solutions</h2>
          <p>Customized hiring models designed to match your scale, industry, and timeline.</p>
        </div>
        <div className="staffing-services-grid">
          {staffingServices.map((service, index) => (
            <div className="staffing-card" key={index}>
              <div className="staffing-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="staffing-cta">
        <div className="staffing-cta-content">
          <h2>Let’s Find the Right Talent Together</h2>
          <p>
            Partner with us to streamline your recruitment, minimize overheads, and secure high-performance professionals.
          </p>
          <a href="/contact" className="btn cta-btn">Get Started</a>
        </div>
      </section>
    </div>
  );
}