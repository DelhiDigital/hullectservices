// import "./Team.css"

// const Team = () => {
//   const teamMembers = [
//     {
//       name: "Manish Pratap Singh",
//       position: "CEO",
//       experience: "22+ Years Experience",
//       description:
//         "Manish brings along 22 years of experience across industries spanning Services & Manufacturing with a focus on quality services, with customer satisfaction and business development. His core expertise lies in recruitment, compliances and skill development.",
//       image: "/placeholder.svg?height=300&width=300&text=Manish+Singh",
//     },
//     {
//       name: "Awadhendra Pratap Singh",
//       position: "CBO - Chief Business Officer",
//       experience: "20+ Years Experience",
//       description:
//         "Awadhendra has over 20 years of experience across industries, seasoned business professional highly focused on product sales and managed services, business development, marketing & digital marketing.",
//       image: "/placeholder.svg?height=300&width=300&text=Awadhendra+Singh",
//     },
//     {
//       name: "Dr. Shalini Singh",
//       position: "Director",
//       experience: "PhD in Physical Chemistry",
//       description:
//         "Dr. Shalini Singh is a seasoned professional with the passion to achieve operational excellence! Instrumental in great team building and business management. She is a Gold Medalist in PHD in the subject of Physical Chemistry Underground Water Pollution.",
//       image: "/placeholder.svg?height=300&width=300&text=Dr.+Shalini+Singh",
//     },
//   ]

//   const escalationMatrix = [
//     { level: "Level 1", role: "Field Officer / Assignment Manager / Site Lead" },
//     { level: "Level 2", role: "Operations Manager / SMEs" },
//     { level: "Level 3", role: "General Manager / Branch Manager" },
//     { level: "Level 4", role: "COO / President" },
//     { level: "Level 5", role: "Managing Director" },
//   ]

//   return (
//     <section id="team" className="team section">
//       <div className="container">
//         <div className="section-header text-center">
//           <span className="section-tag">Leadership Team</span>
//           <h2 className="heading-secondary">Meet Our Team Heads</h2>
//           <p className="text-large">Experienced leaders driving innovation and excellence in staffing solutions</p>
//         </div>

//         <div className="team-grid">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="team-card">
//               <div className="team-image">
//                 <img src={member.image || "/placeholder.svg"} alt={member.name} />
//                 <div className="team-overlay">
//                   <div className="team-social">
//                     <a href="#" aria-label="LinkedIn">
//                       💼
//                     </a>
//                     <a href="#" aria-label="Email">
//                       📧
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="team-content">
//                 <h3 className="team-name">{member.name}</h3>
//                 <p className="team-position">{member.position}</p>
//                 <p className="team-experience">{member.experience}</p>
//                 <p className="team-description">{member.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="escalation-section">
//           <div className="escalation-content">
//             <h3 className="heading-tertiary text-center">Escalation Matrix</h3>
//             <p className="text-center text-large mb-2xl">
//               Structured escalation process ensuring prompt resolution of issues
//             </p>

//             <div className="escalation-matrix">
//               {escalationMatrix.map((item, index) => (
//                 <div key={index} className="escalation-level">
//                   <div className="level-number">{item.level}</div>
//                   <div className="level-content">
//                     <h4>{item.level}</h4>
//                     <p>{item.role}</p>
//                   </div>
//                   {index < escalationMatrix.length - 1 && <div className="escalation-arrow">↑</div>}
//                 </div>
//               ))}
//             </div>

//             <div className="escalation-note">
//               <p className="text-small">
//                 <strong>Note:</strong> This is a generalized escalation matrix. A customized escalation matrix will be
//                 prepared and shared in consultation with the client upon signing of the contract.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="qualifications-section">
//           <h3 className="heading-tertiary text-center">Our Qualifications & Certifications</h3>
//           <div className="qualifications-grid">
//             <div className="qualification-item">
//               <div className="qual-icon">🏆</div>
//               <h4>ISO 9001:2015 Certified</h4>
//               <p>Quality Management System Certification</p>
//             </div>
//             <div className="qualification-item">
//               <div className="qual-icon">🚀</div>
//               <h4>Registered in Startup India</h4>
//               <p>Government of India Recognition</p>
//             </div>
//             <div className="qualification-item">
//               <div className="qual-icon">🤝</div>
//               <h4>Active Member in StartIN UP</h4>
//               <p>Startup Ecosystem Participation</p>
//             </div>
//             <div className="qualification-item">
//               <div className="qual-icon">🏢</div>
//               <h4>Active Member of CII</h4>
//               <p>Confederation of Indian Industry</p>
//             </div>
//             <div className="qualification-item">
//               <div className="qual-icon">📜</div>
//               <h4>PASARA Certificate</h4>
//               <p>Professional Certification</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Team
