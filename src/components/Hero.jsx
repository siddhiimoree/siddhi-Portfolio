function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <p className="hero-eyebrow">
            <span></span>
            HELLO, I'M
          </p>

          <h1>
            Siddhi <span>More</span>
          </h1>

          <h2>
            Java Full Stack Developer
          </h2>

          <p className="hero-description">
            Electronics and Communication Engineering graduate with
            hands-on experience building web applications using Java,
            Spring Boot, React, MySQL and RESTful APIs.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="hero-btn primary">
              View My Projects
              <span>→</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn secondary"
            >
              View Resume
            </a>

          </div>

          <div className="hero-tech-stack">

            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>REST APIs</span>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="hero-photo-wrapper">

            <div className="hero-photo-glow"></div>

            <div className="hero-photo-card">
              <img
                src="/profile.jpg"
                alt="Siddhi More"
              />
            </div>

            <div className="hero-photo-badge">
              <span className="status-dot"></span>
              Open to Opportunities
            </div>

          </div>

        </div>

      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
}

export default Hero;