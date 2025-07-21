// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import "./App.css";
import Skills from "./Skills";
import Contact from "./Contact";
import CodingProfiles from "./CodingProfiles";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coding" element={<CodingProfiles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
