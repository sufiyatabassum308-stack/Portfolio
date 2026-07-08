import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <p className="section-tag">ABOUT ME</p>

        <h2>
          Building AI Solutions That Solve
          <span> Real Problems.</span>
        </h2>

        <p className="about-text">
          I'm <strong>Sufiya Tabassum</strong>, a Data Science graduate passionate
          about Artificial Intelligence, Generative AI, Machine Learning, and
          Backend Development.
        </p>

        <p className="about-text">
          I enjoy building intelligent applications using Python, FastAPI,
          Large Language Models, and Machine Learning while focusing on clean
          software engineering practices.
        </p>

        <p className="about-text">
          My goal is to build AI products that are useful, scalable, and
          impactful—not just academic projects.
        </p>

        <div className="about-grid">

          <div className="card">
            <h3>AI & GenAI</h3>
            <p>
              LLMs, Prompt Engineering, RAG Concepts, AI Agents,
              OpenAI APIs and AI Evaluation.
            </p>
          </div>

          <div className="card">
            <h3>Machine Learning</h3>
            <p>
              Scikit-learn, Random Forest, SVM, CatBoost,
              Feature Engineering and Model Evaluation.
            </p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>
              Python, FastAPI, Flask, Django,
              REST APIs, JSON Integration and Databases.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;