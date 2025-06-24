import { useState } from "react"
import "./OurTeam.css"

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  const leadership = [
    {
      name: "Manish Pratap Singh",
      position: "Chief Executive Officer",
      experience: "16+ Years",
      image: "/Manish.png",
      bio: "Visionary leader with extensive experience in HR services and business development. Under his leadership, Hullect Services has grown to become a trusted partner for 500+ clients.",
      expertise: ["Strategic Planning", "Business Development", "Client Relations", "Team Leadership"],
      email: "manish@hullectservices.com",
      linkedin: "https://www.linkedin.com/in/manish-pratap-singh-72938342/",
    },
    {
      name: "Dr.Shalini Singh",
      position: "Director",
      experience: "12+ Years",
      image: "/Shalini.png",
      bio: "Dr.Shalini Singh is a seasoned professional with the passion to achieve operational excellence! Instrumental in great team building and business management. She is a Gold Medalist in PHD in the subject of Physical Chemistry Underground Water Pollution.",
      expertise: ["Operations Management", "Process Optimization", "Quality Assurance", "Team Management"],
      email: "priya@hullectservices.com",
      linkedin: "#",
    },
    {
      name: "Awadhendra Pratap Singh",
      position: "Chief Business Officer",
      experience: "14+ Years",
      image: "/Awadhendra.png",
      bio: "Awadhendra has over 15 years of experience across industries spanning Telecom, Retail, Financial, Advertising and E-commerce components. seasoned business professional highly focused on product sales and services, business development & marketing.",
      expertise: ["Technology Strategy", "Digital Innovation", "System Integration", "Data Analytics"],
      email: "rajesh@hullectservices.com",
      linkedin: "https://www.linkedin.com/in/awadhendra-pratap-singh-155975126/",
    },
    {
      name: "Arvind Singh",
      position: "Advisor- ( Global Business Strategy ).",
      experience: "14+ Years",
      image: "/Arvind.png",
      bio: "Arvind is a serial entrepreneur who has had high-impact performances in building companies and accelerating commercialization and growth. He has 18+ years of extensive experience leading operations, retail, supply chain, and business strategy in Fortune 100 and startup companies.",
      expertise: ["Technology Strategy", "Digital Innovation", "System Integration", "Data Analytics"],
      email: "rajesh@hullectservices.com",
      linkedin: "#",
    },
  ]

  const renderModal = (member) => (
    <div className="modal" onClick={() => setSelectedMember(null)}>
      <div className="modal-content top-adjusted" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => setSelectedMember(null)}>&times;</span>
        <img src={member.image} alt={member.name} />
        <h2>{member.name}</h2>
        <h4>{member.position}</h4>
        {member.department && <h5>{member.department}</h5>}
        <p><strong>Experience:</strong> {member.experience}</p>
        <p>{member.bio}</p>
        {member.expertise && (
          <div>
            <strong>Expertise:</strong>
            <ul>
              {member.expertise.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {member.email && <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>}
        {member.linkedin && <p><strong>LinkedIn:</strong> <a href={member.linkedin} target="_blank" rel="noreferrer">Profile</a></p>}
      </div>
    </div>
  )

  return (
    <div className="our-team-page">
      <section className="team-hero dark-bg">
        <div className="container">
          <div className="team-hero-content">
            <h1>300+ YEARS OF MULTI-DISCIPLINARY EXPERTISE</h1>
            <p>
              Our team comprises seasoned professionals from Big 4 consulting firms, global investment banks, and
              marquee banking & wealth management institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
            <h2>
              Leadership <span className="highlight">Team</span>
            </h2>
          </div>
          <div className="leadership-row four-columns">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-tile small" onClick={() => setSelectedMember(leader)}>
                <div className="leader-photo">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="position">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && renderModal(selectedMember)}
    </div>
  )
}

export default OurTeam