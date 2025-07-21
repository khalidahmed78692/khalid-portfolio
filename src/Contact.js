// src/Contact.js
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out via email or connect with me on LinkedIn/GitHub.
      </p>

      <ul className="contact-links">
        <li>
          📧 Email:{" "}
          <a href="mailto:mohammedkhalidansari1501@gmail.com">
            mohammedkhalidansari1501@gmail.com
          </a>
        </li>
        <li>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mohammedkhalidansari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mohammedkhalidansari
          </a>
        </li>
        <li>
          🐙 GitHub:{" "}
          <a
            href="https://github.com/khalidahmed78692"
            target="_blank"
            rel="noopener noreferrer"
          >
            mohammedkhalidansari
          </a>
        </li>
        <li>
          🐦 Twitter/X:{" "}
          <a
            href="https://x.com/KhalidA03467014"
            target="_blank"
            rel="noopener noreferrer"
          >
            khalidahmed
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
