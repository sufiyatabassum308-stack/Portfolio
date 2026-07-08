import "../styles/Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <motion.div
          className="contact-box glass"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <p className="section-tag">
            Let's Connect
          </p>

          <h2 className="section-title">
            Ready to build
            <span> AI that matters?</span>
          </h2>

          <p className="contact-desc">
            I'm actively looking for opportunities in
            Artificial Intelligence,
            Generative AI,
            Python Development,
            Software Engineering,
            and Machine Learning.
          </p>

          <div className="contact-links">

            <a
              href="mailto:sufiyatabassum308@gmail.com"
              className="contact-item"
            >
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>sufiyatabassum308@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sufiya-tabassum-481237276"
              className="contact-item"
            >
              <FaLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <p>Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/sufiyatabassum308-stack"
              className="contact-item"
            >
              <FaGithub />
              <div>
                <h4>GitHub</h4>
                <p>View repositories</p>
              </div>
            </a>

          </div>

          <button className="resume-download">
            <FaFileDownload />
            Download Resume
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;