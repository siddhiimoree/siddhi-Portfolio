import React from "react";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "BrickSquare",
      subtitle: "Smart Plot Investment Platform",
      description:
        "A team-based full-stack real estate investment platform designed to simplify plot investment and management for Admins, Builders, and Investors.",
      contribution:
        "Contributed to both backend and frontend development, focusing on secure authentication, authorization, REST APIs, React components, and API integration.",
      features: [
        "Role-based access control",
        "Plot listings and bookings",
        "KYC verification",
        "EMI calculations",
        "Agreements and notifications",
        "Secure login and registration",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "Spring Security",
        "JWT",
      ],
      github: "https://github.com/siddhiimoree/BrickSquare",
    },
    {
      number: "02",
      title: "WealthWise",
      subtitle: "Mutual Fund & SIP Investment Tracking Platform",
      description:
        "A team-based full-stack platform developed to help users manage investments, monitor portfolio performance, track SIPs, and gain investment insights.",
      contribution:
        "Contributed primarily to frontend development by building responsive interfaces, reusable React components, REST API integrations, and improving navigation and state management.",
      features: [
        "Investment tracking",
        "SIP management",
        "Portfolio monitoring",
        "REST API integration",
        "Reusable React components",
        "Responsive user interface",
      ],
      technologies: [
        "React",
        "RESTful APIs",
        "Java",
        "Spring Boot",
        "MySQL",
      ],
      github: "https://github.com/siddhiimoree/Wealthwise",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <p className="section-subtitle">Selected Work</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-label">
                  Full Stack
                </span>
              </div>

              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-contribution">
                <strong>My Contribution</strong>
                <p>{project.contribution}</p>
              </div>

              <div className="project-features">
                <strong>Key Features</strong>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-btn"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="github-icon"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                    />
                  </svg>

                  View Repository
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;