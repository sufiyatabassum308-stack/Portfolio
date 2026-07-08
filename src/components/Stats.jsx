import "../styles/Stats.css";

function Stats() {
  const stats = [
    {
      number: "5+",
      label: "AI & Software Projects",
    },
    {
      number: "2",
      label: "Internships",
    },
    {
      number: "20+",
      label: "Technologies",
    },
    {
      number: "6+",
      label: "Certifications",
    },
  ];

  return (
    <section className="stats">
      <div className="container">

        <p className="section-tag">Highlights</p>

        <h2 className="section-title">
          Quick <span>Overview</span>
        </h2>

        <div className="stats-grid">
          {stats.map((item) => (
            <div className="stat-card glass" key={item.label}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;