import "../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            Open to Full-Time • Internship • Entry-Level Opportunities
          </div>

          <h1>
            Hi, I'm
            <br />
            <span>Sufiya Tabassum</span>
          </h1>

          <div className="typing">
            <TypeAnimation
  sequence={[
    "AI Engineer",
    1800,

    "Generative AI Engineer",
    1800,

    "Python Developer",
    1800,

    "Software Engineer",
    1800,

    "Machine Learning Engineer",
    1800,

    "Backend Developer",
    1800,

    "Data Analyst",
    1800,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
          </div>

          <p>
        Passionate about building intelligent software using Large Language Models, Generative AI, Machine Learning, Python, FastAPI, and scalable backend systems. Seeking opportunities across AI Engineering, Software Development, Backend Development, and Data Analytics.
          </p>

          <div className="hero-buttons">
  <a href="#featured" className="primary-btn">
    View Projects
  </a>

  <a
  href="/resume/Sufiya(2026).pdf"
  download
  className="secondary-btn"
>
  Download Resume
</a>
</div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glow-circle"></div>

          <div className="skill-card python">Python</div>
          <div className="skill-card ai">Generative AI</div>
          <div className="skill-card fastapi">FastAPI</div>
          <div className="skill-card ml">Machine Learning</div>
          <div className="skill-card rag">RAG</div>
          <div className="skill-card llm">LLMs</div>

          <div className="main-orb">
            AI
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;