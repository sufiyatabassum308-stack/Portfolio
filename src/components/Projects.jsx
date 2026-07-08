import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Finance Backend System",
      problem:
        "Managing financial records manually can become inefficient and error-prone.",

      solution:
        "Developed a secure backend application with REST APIs for authentication, transaction management, and financial record handling.",

      impact: [
        "Designed scalable REST APIs using FastAPI.",
        "Implemented secure CRUD operations.",
        "Improved backend modularity and maintainability."
      ],

      tech: [
        "Python",
        "FastAPI",
        "MySQL",
        "REST API",
        "JSON"
      ],

      github: "github.com/sufiyatabassum308-stack"
    },

    {
      title: "Campus Complaint Resolution System",

      problem:
        "Students lacked a centralized platform to register and track campus complaints.",

      solution:
        "Built a complaint management platform that enables students to submit complaints while allowing administrators to monitor and resolve issues efficiently.",

      impact: [
        "Simplified complaint registration process.",
        "Improved issue tracking through status updates.",
        "Enhanced communication between students and administrators."
      ],

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript"
      ],

    
      }
  ];

  return (
    <section className="projects" id="projects">

      <div className="container">

        <p className="section-tag">
          OTHER PROJECTS
        </p>

        <h2 className="section-title">
          More <span>Projects</span>
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div className="project-box glass" key={project.title}>

              <h3>{project.title}</h3>

              <div className="project-info">

                <h4>Problem</h4>

                <p>{project.problem}</p>

                <h4>Solution</h4>

                <p>{project.solution}</p>

                <h4>Impact</h4>

                <ul className="impact-list">

                  {project.impact.map((item) => (

                    <li key={item}>{item}</li>

                  ))}

                </ul>

              </div>

              <div className="project-tech">

                {project.tech.map((tech) => (

                  <span key={tech}>{tech}</span>

                ))}

              </div>

             

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;