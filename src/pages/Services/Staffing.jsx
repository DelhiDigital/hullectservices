import "./Staffing.css";

const staffingServices = [
  {
    title: "Temporary Staffing",
    description: "Quick and scalable workforce solutions tailored to short-term projects.",
    icon: "🧑‍💼",
  },
  {
    title: "Permanent Recruitment",
    description: "End-to-end hiring support for critical full-time roles.",
    icon: "🏢",
  },
  {
    title: "Contract Staffing",
    description: "Specialized professionals on a project basis with flexible terms.",
    icon: "📄",
  },
  {
    title: "Executive Search",
    description: "Leadership hiring through targeted, confidential executive searches.",
    icon: "🎯",
  },
];

export default function Staffing() {
  return (
    <div className="staffing-wrapper">
      <header className="staffing-header">
        <div className="header-content">
          <h1>Staffing Services</h1>
          <p>
            Whether you're scaling quickly or hiring strategically, our staffing solutions adapt to your business needs.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn primary">Talk to Us</a>
            <a href="#services" className="btn outline">View Services</a>
          </div>
        </div>
      </header>

     <section className="services-section">
  <div className="section-title">
    <h2>What We Offer</h2>
    <p>Flexible and reliable hiring models for every scenario</p>
  </div>

  <div className="Staffing-service-grid">
    <div className="service-card">
      <div className="icon">👷‍♂️</div>
      <h3>Temporary Staffing</h3>
      <p>Quick and scalable workforce solutions tailored to short-term projects.</p>
    </div>

    <div className="service-card">
      <div className="icon">🏢</div>
      <h3>Permanent Recruitment</h3>
      <p>End-to-end hiring support for critical full-time roles.</p>
    </div>

    <div className="service-card">
      <div className="icon">📝</div>
      <h3>Contract Staffing</h3>
      <p>Specialized professionals on a project basis with flexible terms.</p>
    </div>

    <div className="service-card">
      <div className="icon">🔍</div>
      <h3>Executive Search</h3>
      <p>Leadership hiring with precision and confidentiality.</p>
    </div>
  </div>
</section>


      <section className="contact-banner">
        <div className="banner-content">
          <h2>Ready to Build Your Dream Team?</h2>
          <p>Let us help you find the right talent to drive your success forward.</p>
          <a href="/contact" className="btn white">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
