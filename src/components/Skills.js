import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-table-wrapper">
        <table className="skills-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frontend</td>
              <td>HTML, CSS, JavaScript, React</td>
            </tr>
            <tr>
              <td>Backend</td>
              <td>Python</td>
            </tr>
            <tr>
              <td>Tools</td>
              <td>Git, TypeScript, VS Code</td>
            </tr>
            <tr>
              <td>Certifications</td>
              <td>Python, Web Development</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Skills;
