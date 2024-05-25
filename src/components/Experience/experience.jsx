import "@components/Experience/experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container-experience container-fluid">
        <div className="row row-experience">
          <h1 className="my-experience-title">My experience</h1>
          <div className="data col-12 col-md-4 flex-column justify-content-center">
            <div className="mx-auto my-auto div-image">
              <i className="bi bi-fingerprint icon-experience mx-auto my-auto"></i>
            </div>

            <h2>Intern in the Information Security Area at BIESS</h2>
            <p>
              Intern in the Information Security Area at the Bank of the
              Ecuadorian Social Security Institute (BIESS) for 7 months.
              Contributed to the update of cybersecurity measures and data
              protection, as well as incident management and documentation
              update (April-October 2023).
            </p>
            <span className="badge bg-primary">Cybersecurity</span>
            <span className="badge bg-primary">Incident Management</span>
            <span className="badge bg-primary">Documentation</span>
          </div>

          <div className="data col-12 col-md-4 flex-column justify-content-center">
            <div className="mx-auto my-auto div-image">
              <i className="bi bi-pc-display icon-experience mx-auto my-auto"></i>
            </div>

            <h2>IT & Academic Aid at Polytechnic</h2>
            <p>
              Assisted in teaching and reviewed content for Computer Sciencie
              engineering courses (May-September 2022) while also supporting
              operating systems maintenance and managing digital content at the
              ICT Laboratory (April-September 2022).
            </p>
            <span className="badge bg-primary">Teaching</span>
            <span className="badge bg-primary">Maintenance</span>
          </div>

          <div className="data col-12 col-md-4 flex-column justify-content-center">
            <div className="mx-auto my-auto div-image">
            <i className="bi bi-book icon-experience mx-auto my-auto"></i>
            </div>

            <h2>SmartLab's Smart Farming Researcher</h2>
            <p>
              As a researcher at SmartLab, National Polytechnic School, I'm
              actively contributing to the Smart Farming project, focusing on
              innovations that promise to enhance agricultural efficiency. Our
              team is on the verge of publishing a significant article on our
              findings (January 2023 - Present).
            </p>
            <span className="badge bg-primary">Smart Farming</span>
            <span className="badge bg-primary">Innovations</span>
            <span className="badge bg-primary">Publishing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
