import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img
        src="https://i.postimg.cc/QCVXs7rz/IMG-1785.jpg"
        alt="Pavan Koushik"
        className="profile-img"
      />
      <p>
        Hi, I’m <strong>S. Pavan Koushik</strong>, a passionate Computer Science Engineer with a strong focus on Web Development, Frontend Engineering, and Python Programming. I love building intuitive, responsive, and scalable web applications, and I’m always eager to explore new tools, frameworks, and technologies that enhance user experience and interface design.<br />
<br />
With a solid foundation in software development and a keen eye for detail, I specialize in crafting clean, maintainable code and dynamic UIs. Whether it's building engaging frontend interfaces, optimizing performance, or collaborating on full-stack projects, I bring creativity and precision to every line of code.<br />
<br />

I'm driven by a passion for continuous learning and growth, always on the lookout for exciting challenges where I can apply my skills, contribute to impactful projects, and stay at the forefront of modern web technologies.
      </p>
      <a
        href="https://pdfhost.io/v/pJ5Q6BPCsY_Resume"
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
