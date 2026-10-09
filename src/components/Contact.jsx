function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-container">

        <p className="section-subtitle">
          Let's Connect
        </p>

        <h2 className="section-title">
          Open to New Opportunities
        </h2>

        <p className="contact-description">
          I'm looking for an opportunity to apply my technical skills,
          contribute to real-world software projects, and continue growing
          as a software engineer.
        </p>

        <div className="contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhi.more.tech@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/siddhi-more-023710303/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/siddhiimoree"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>

        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>

      </div>

    </section>
  );
}

export default Contact;