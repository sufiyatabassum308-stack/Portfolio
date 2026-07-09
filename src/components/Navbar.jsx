import "../styles/Navbar.css";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="logo">
        <span>S</span>ufiya
      </div>

      <ul className="nav-links">
        <li><Link to="hero" smooth duration={500}>Home</Link></li>
        <li><Link to="about" smooth duration={500}>About</Link></li>
        <li><Link to="skills" smooth duration={500}>Skills</Link></li>
        <li><Link to="featured" smooth duration={500}>Projects</Link></li>
        <li><Link to="experience" smooth duration={500}>Experience</Link></li>
        <li><Link to="contact" smooth duration={500}>Contact</Link></li>
      </ul>

      <div className="nav-right">
        <a href="https://github.com/sufiyatabassum308-stack" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/sufiya-tabassum-481237276" target="_blank" rel="noreferrer">
          <FaLinkedin />
    </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;