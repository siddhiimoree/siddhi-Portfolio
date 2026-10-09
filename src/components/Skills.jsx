function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Java", "Object-Oriented Programming"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js"],
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "RESTful APIs"],
    },
    {
      title: "Database",
      skills: ["MySQL"],
    },
    {
      title: "Development Concepts",
      skills: ["SDLC", "Frontend Development", "Backend Development", "Database Design"],
    },
    {
      title: "Tools & Exposure",
      skills: [
        "Visual Studio Code",
        "MySQL Workbench",
        "Eclipse",
        "MATLAB",
        "AI-assisted Development Tools",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="section-container">

        <p className="section-subtitle">
          My Technical Stack
        </p>

        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-category-grid">

          {skillGroups.map((group, index) => (
            <div className="skill-category" key={index}>

              <h3>{group.title}</h3>

              <div className="skill-tags">

                {group.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;