import "../styles/Skills.css";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL"],
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
        "Support Vector Machine (SVM)",
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
          My expertise spans Artificial Intelligence, Machine Learning,
          Backend Development, and Software Engineering with hands-on
          experience building intelligent and scalable applications.
        </p>

        <div className="skills-wrapper">

          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-row"
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * .08 }}
              viewport={{ once: true }}
            >

              <div className="skill-title">
                {category.title}
              </div>

              <div className="skill-items">

                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;