function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="section-container">

        <p className="section-subtitle">
          Professional Experience
        </p>

        <h2 className="section-title">
          Experience
        </h2>

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <p className="experience-role">
                Java Full Stack Intern
              </p>

              <h3>
                Genesis Training & Consulting Services Pvt. Ltd.
              </h3>

              <p className="experience-location">
                Bangalore
              </p>
            </div>

            <span className="experience-date">
              15-Week Internship
            </span>

          </div>

          <p className="experience-summary">
            Successfully completed a 15-week on-site Java Full Stack
            Internship focused on modern full-stack development.
          </p>

          <div className="experience-highlights">

            <div className="experience-item">
              <span>01</span>
              <p>
                Developed and integrated RESTful APIs using Spring Boot.
              </p>
            </div>

            <div className="experience-item">
              <span>02</span>
              <p>
                Implemented secure authentication and role-based authorization
                using Spring Security and JWT.
              </p>
            </div>

            <div className="experience-item">
              <span>03</span>
              <p>
                Developed responsive frontend components using React and
                integrated backend APIs.
              </p>
            </div>

            <div className="experience-item">
              <span>04</span>
              <p>
                Managed relational databases using MySQL and participated
                in debugging, testing, API integration, and performance
                optimization.
              </p>
            </div>

            <div className="experience-item">
              <span>05</span>
              <p>
                Collaborated as part of a development team on BrickSquare
                and WealthWise full-stack applications.
              </p>
            </div>

          </div>

          <div className="experience-tech">
            Java • Spring Boot • React • MySQL • Spring Security • JWT • REST APIs
          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;