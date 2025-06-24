import "./Apprenticeship.css";
import bannerImg from "/Gemini_Generated_Image_88afuu88afuu88af.png"; // updated to cropped banner-style image

const ApprenticeshipProgram = () => {
  return (
    <div className="apprenticeship-page">

      {/* Banner with Title Overlay */}
      <section className="apprenticeship-hero">
        <div className="apprenticeship-banner-wrapper">
          <img src={bannerImg} alt="Apprenticeship Banner" className="apprenticeship-banner-image shift-up" />
          <div className="apprenticeship-hero-overlay">
            <h1>Apprenticeship Program</h1>
            <p className="tagline">Transforming Skills, Empowering Youth</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="apprenticeship-intro">
        <div className="container">
          <p>
            India, as one of the youngest nations around the world, accounts for more than 62% of its population in the working-age group (15-59 years), and more than 54% of its total population below 27 years of age. This represents a great opportunity as well as a huge challenge when it comes to the upskilling of these generations. We strive to enhance the skills of thousands of young minds and empower them under our apprenticeship program.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="apprenticeship-section">
        <div className="container">
          <p><strong>Every year, out of 15 MILLION YOUTH entering the job market, OVER 75% are NOT JOB READY!*</strong></p>
          <p>This stark difference is due to a lack of the required skills (technical or interpersonal). Additionally, the unemployed segments of the working-age groups and conventionally educated youth are the two major challenges that have to be addressed.</p>
          <p>So far, we have helped hundreds of Apprentices to learn vital Work-Skills and become Job-ready already while other few hundreds are in the process of acquiring those skills across sectors.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apprenticeship-cta">
        <div className="container">
          <div className="apprenticeship-cta-content">
            <h2>Join Our Apprenticeship Program</h2>
            <p>
              Equip yourself with work-ready skills and become industry-ready with our structured apprenticeship training.
            </p>
            <div className="cta-actions">
              <a href="tel:+919120018844" className="btn btn-primary">Call Us: +91-9120018844</a>
              <a href="mailto:connect@hullectservices.com" className="btn btn-outline">Email: connect@hullectservices.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApprenticeshipProgram;
