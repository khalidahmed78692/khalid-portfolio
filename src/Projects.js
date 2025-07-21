import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "ChatApp (College Project)",
    description:
      "A real-time chat app built with the MERN stack. Features include Google OAuth, emoji picker, avatar support, and instant messaging using Socket.io.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "OAuth"],
  },
  {
    title: "AI Code Review Agent (Hackathon)",
    description:
      "Built an AI-powered PR review bot using Go and DeepSeek-Coder 6.7b, integrated with Bitbucket using REST APIs.",
    tech: ["Go", "DeepSeek-Coder", "REST API", "Bitbucket"],
  },
  {
    title: "Flight Booking Chatbot",
    description:
      "Built using the Amadeus API and integrated with Vistara’s platform to assist users in booking flights conversationally.",
    tech: ["Python", "Amadeus API", "NLP"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
