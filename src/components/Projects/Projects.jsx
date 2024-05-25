import "@components/Projects/Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="seccion-titulo">My recent projects</h1>
      <h3 className="seccion-descripcion">
        These are some of the projects I have recently completed.
      </h3>

      <div className="project-container container text-center">
        <div className="row project-row">
          <div className="project col-12 col-md-6 col-lg-4 d-flex flex-column just">
            <div className="project-div">
              <img
                className="project-image bg-light"
                src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
                alt="Project 1"
              />

              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="./Projects/github.svg" alt="github" />
                    <img src="./Projects/github.svg" alt="github" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-div">
              <img
                className="project-image bg-light"
                src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
                alt="Project 1"
              />

              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="./Projects/github.svg" alt="github" />
                    <img src="./Projects/github.svg" alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project col-12 col-md-6 col-lg-4 d-flex flex-column">
            <div className="project-div">
              <img
                className="project-image bg-light"
                src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
                alt="Project 1"
              />

              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="./Projects/github.svg" alt="github" />
                    <img src="./Projects/github.svg" alt="github" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-div">
              <img
                className="project-image bg-light"
                src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
                alt="Project 1"
              />

              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="./Projects/github.svg" alt="github" />
                    <img src="./Projects/github.svg" alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project col-12 col-md-6 col-lg-4 d-flex flex-column">
            <div className="project-div">
              <img
                className="project-image bg-light"
                src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
                alt="Project 1"
              />

              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="./Projects/github.svg" alt="github" />
                    <img src="./Projects/github.svg" alt="github" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-div">
              <img
                className="project-image bg-light"
                src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
                alt="Project 1"
              />

              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="./Projects/github.svg" alt="github" />
                    <img src="./Projects/github.svg" alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row buttom-row d-flex justify-content-center">
          <button type="button" className="btn btn-info btn-more-projects">
            Ver más proyectos
            <img src="./Projects/github.svg" alt="github" />
          </button>
        </div>
      </div>
    </section>
  );
}
