// src/Skills.js
import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div>
          <h3>Languages</h3>
          <ul>
            <li>C, C++, Go, Python, Java, Embedded C, Assembly</li>
          </ul>
        </div>

        <div>
          <h3>Core CS</h3>
          <ul>
            <li>OOP, DBMS, Operating Systems, Networks, DSA</li>
          </ul>
        </div>

        <div>
          <h3>Web Development</h3>
          <ul>
            <li>
              HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB,
              SQL, EJS, PHP, Bootstrap, jQuery
            </li>
          </ul>
        </div>

        <div>
          <h3>Databases & Caching</h3>
          <ul>
            <li>Aerospike, Redis, Elasticsearch, MongoDB, SQL</li>
          </ul>
        </div>

        <div>
          <h3>Tools & DevOps</h3>
          <ul>
            <li>
              Git, GitHub, AWS CLI/EC2, Jenkins, ArgoCD, Grafana, Jira,
              Confluence, Bitbucket, OS Metrics
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
