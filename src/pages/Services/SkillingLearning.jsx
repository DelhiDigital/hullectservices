import React from "react";
import "./SkillingLearning.css";

const CampusGrooming = () => {
  return (
    <div className="campus-page">
      <section className="campus-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Campus to Corporate Grooming</h1>
          <p>Empowering students and freshers with the right start to their career</p>
        </div>
      </section>

      <section className="campus-section">
  <h2>Why This Program?</h2>
  <div className="split-info">
    <div className="info-text">
      <p style={{ textAlign: "justify" }}>
        Equip yourself for corporate success with our exclusive grooming program, meticulously designed for students and freshers. This program acts as a vital bridge, transforming aspiring individuals into polished professionals poised to make an impactful entry into the corporate world. 
      </p>
      <p style={{ textAlign: "justify" }}>
        Our Corporate Training program goes beyond theoretical knowledge, emphasizing the development of practical skills, refined communication techniques, and the unwavering professionalism essential for navigating and excelling in their crucial first assignments. We focus on real-world applications, ensuring participants gain the confidence and competence to thrive from day one.
   
      </p>
    </div>
    <div className="info-image">
      <img src="/grooming_image.png" alt="Corporate Grooming Illustration" />
    </div>
  </div>
</section>


      <section className="campus-section alt-bg">
        <h2>Campus Drive Process</h2>
        <div className="bubble-steps">
          {[
            "Shortlisting of educational institutions based on organization needs.",
            "Scheduling drive dates in mutual consultation with stakeholders.",
            "Initial screening/written tests conducted by Hullect per client standards.",
            "Top candidates presented for final interviews and selection."
          ].map((step, i) => (
            <div key={i} className="bubble">
              <span>{i + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="campus-section">
        <h2>Industries We Serve</h2>
        <div className="industry-bubble-grid">
          {[
            "Retail", "Telecom", "FMCG", "FMCD", "E-Commerce", "BFSI",
            "Manufacturing", "Agriculture", "Health Care", "Life Sciences",
            "Pharma", "Hospitality", "Education", "Fintech"
          ].map((industry, i) => (
            <div key={i} className="industry-bubble">{industry}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CampusGrooming;
