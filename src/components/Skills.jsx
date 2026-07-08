import "../styles/Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        "Python",
        "SQL",
      ],
    },
    {
      title: "Generative AI",
      skills: [
        "Large Language Models (LLMs)",
        "Prompt Engineering",
        "AI Response Evaluation",
        "RLHF Workflows",
        "OpenAI API Fundamentals",
        "RAG Concepts",
        "AI Agent Concepts",
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        "Scikit-learn",
        "Random Forest",
        "Decision Tree",
        "SVM",
        "CatBoost",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Evaluation",
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        "Flask",
        "Django",
        "REST APIs",
        "JSON API Integration",
        "MySQL",
        "SQLite",
      ],
    },
    {
      title: "Tools & Software Engineering",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
        "Google Colab",
        "Object-Oriented Programming",
        "SDLC",
        "Agile Fundamentals",
        "Debugging",
      ],
    },
    {
      title: "Familiar With",
      skills: [
        "LangChain",
        "Hugging Face",
        "Vector Databases",
        "Docker",
        "Microservices Architecture",
        "Cloud Computing Fundamentals",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">

        <p className="section-tag">TECHNICAL SKILLS</p>

        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>

        <p className="skills-description">
          My technical expertise spans Generative AI, Machine Learning,
          Backend Development, and Software Engineering, with a strong focus
          on building intelligent, scalable, and production-ready applications.
        </p>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div className="skill-card glass" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-tags">

                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
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