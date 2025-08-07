import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Hotel Management System</h3>
        <p>Manages hotel operations, guest bookings, and availability tracking.</p>
      </div>
      <div className="project-card">
        <h3>Self Evaluation Model</h3>
        <p>Python OCR system for evaluating typing accuracy.</p>
      </div>
      <div className="project-card">
        <h3>Retail Stock Inventory Analysis</h3>
        <p>Machine learning project predicting weekly Walmart sales with Streamlit app.</p>
      </div>
    </section>
  );
}

export default Projects;
