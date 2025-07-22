// src/About.js
import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hi, I'm <strong>Mohammed Khalid Ansari</strong> — a passionate software engineer with hands-on experience in backend systems, APIs, and full-stack development. I'm currently working at <strong>Exotel</strong> as Member of Technical Staff - 1, where I contribute to scalable systems using Go, PHP, and distributed caching.
      </p>
      <p>
        I love building efficient systems, participating in hackathons, and continuously learning new technologies. I'm also a mentor, open-source enthusiast, and problem-solver who ranked in the top 1% on LeetCode and Coding Ninjas.
      </p>
      <p>
        When I’m not coding, I enjoy exploring Linux internals, automating workflows, and occasionally helping juniors with DSA and career prep.
      </p>
      <a
        href="https://drive.google.com/file/d/1RMUEQ3xLDSqpwPWVYcuqNpwD0w8Sk8xv/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Resume
      </a>
    </section>
  );
}

export default About;
