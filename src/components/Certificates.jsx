import "../styles/Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "LLM Intern",
      issuer: "Ethara AI",
      year: "2026",
    },
    {
      title: "TECHNODEA Participation",
      issuer: "College Technical Event",
      year: "2026",
    },
    {
      title: "Generative AI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      year: "2025",
    },
    {
      title: "Python Workshop",
      issuer: "Mevi Technologies LLP",
      year: "2025",
    },
    {
      title: "Projects with Real World Case Studies on FSD & ML",
      issuer: "ExcelR",
      year: "2025",
    },
   
    {
      title: "2nd Prize - Rain Detection System",
      issuer: "College Project Exhibition",
      year: "2023",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">

        <p className="section-tag">CERTIFICATES</p>

        <h2>
          Learning <span>& Achievements</span>
        </h2>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.title}>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span>{certificate.year}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;