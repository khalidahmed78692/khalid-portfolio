// src/Education.js
import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>

      <div className="education-card">
        <h3>RV College of Engineering, Bangalore, Karnataka</h3>
        <p className="degree">B.E. in Computer Science</p>
        <p className="duration">Dec 2020 – Aug 2024</p>
        <p className="gpa">GPA: 8.58 / 10</p>
        <ul>
          <li>Cleared JEE Advanced with AIR 9118 (OBC-NCL)</li>
          <li>Secured AIR 3445 in KCET</li>
        </ul>
      </div>

      <div className="education-card">
        <h3>Chetan PU Science College, Hubballi, Karnataka</h3>
        <p className="degree">Karnataka Pre-University Board (12th)</p>
        <p className="duration">2018 – 2020</p>
        <p className="gpa">Scored: 82.33%</p>
        <ul>
          <li>Math: 100, Physics: 93, Chemistry: 90</li>
          <li>
            Top 2 in college based on JEE Advanced rank (AIR 9118, OBC-NCL)
          </li>
        </ul>
      </div>

      <div className="education-card">
        <h3>SSLC – Karnataka State Board</h3>
        <p className="degree">10th Standard</p>
        <p className="duration">2017 – 2018</p>
        <p className="gpa">Scored: 90.4%</p>
        <ul>
          <li>Math: 92, Science: 93</li>
          <li>Ranked 2nd in the high school batch</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
