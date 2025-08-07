import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://i.postimg.cc/ZqFYLZcw/logo.png"
          alt="SPK Logo"
          style={{ height: "0.6in", width: "auto" }}
        />
      </div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="https://pdfhost.io/v/pJ5Q6BPCsY_Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;