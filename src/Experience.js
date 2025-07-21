// src/Experience.js
import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Exotel",
    role: "Member of Technical Staff - 1",
    location: "Bengaluru, India",
    duration: "Jul 2024 – Present",
    bullets: [
      "Built a scalable gRPC-based REST API using Go and GoScinny.",
      "Added support for 0140 and 0160 number series to comply with TRAI.",
      "Implemented quiet hours feature to block outbound calls during night.",
    ],
  },
  {
    company: "Exotel",
    role: "Technical Intern",
    location: "Bengaluru, India",
    duration: "Jan 2024 – Jul 2024",
    bullets: [
      "Created a voice-enabled form-filling app using ChatGPT & LLaMA.",
      "Built a chatbot to suggest insurance plans.",
      "Developed intent-based query resolver for SBI chatbot.",
    ],
  },
  {
    company: "Codefeast",
    role: "Web Developer & Mentor",
    location: "Remote",
    duration: "Nov 2023 – Dec 2023",
    bullets: [
      "Mentored students in DSA and MERN.",
      "Promoted to frontend developer for React-based website.",
    ],
  },
  {
    company: "Suvidha Foundation",
    role: "Web Developer",
    location: "Remote",
    duration: "Sep 2023 – Oct 2023",
    bullets: [
      "Built a static React site for student outreach.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.role} @ {exp.company}</h3>
          <p className="duration-location">
            {exp.duration} | {exp.location}
          </p>
          <ul>
            {exp.bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
