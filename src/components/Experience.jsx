import "../styles/Experience.css";
import { FaBriefcase, FaRobot, FaCode } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <p className="section-tag">Experience</p>

        <h2 className="section-title">
          Professional <span>Journey</span>
        </h2>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaRobot />
            </div>

            <div className="timeline-content glass">

              <span>2026</span>

              <h3>LLM Intern</h3>

              <h4>Ethara AI</h4>

              <p>
                Worked on Large Language Model applications,
                prompt engineering,
                AI response evaluation,
                Retrieval-Augmented Generation (RAG),
                and real-world AI workflows.
              </p>

              <div className="timeline-tags">
                <span>LLMs</span>
                <span>Prompt Engineering</span>
                <span>Python</span>
                <span>RAG</span>
                <span>AI Evaluation</span>
              </div>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaCode />
            </div>

            <div className="timeline-content glass">

              <span>2025</span>

              <h3>Python Developer Intern</h3>

              <h4>Vault of Codes</h4>

              <p>
                Developed Python applications,
                improved debugging,
                object-oriented programming,
                software engineering,
                and Git workflows.
              </p>

              <div className="timeline-tags">
                <span>Python</span>
                <span>Git</span>
                <span>OOP</span>
                <span>Software Engineering</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;