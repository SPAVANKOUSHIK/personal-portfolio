import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form
        action="https://formspree.io/f/myzpbkey"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="What do you want to discuss?"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send</button>

        {/* Contact info below the button */}
        <div className="contact-details">
          <p>
            📧 Email:{" "}
            <a href="mailto:spavankoushik@gmail.com">
              spavankoushik@gmail.com
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/surisetty-pavan-koushik-b63315263/"
              target="_blank"
              rel="noopener noreferrer"
            >
              surisetty-pavan-koushik
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Contact;