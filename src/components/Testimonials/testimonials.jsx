import "@components/Testimonials/testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container-testimonials container-fluid">
        <div className="row text-center">
          <h1 className="testimonials-title">Testimonials</h1>
          <h4>This are some of my testimonials</h4>
        </div>

        <div className="row d-flex justify-content-center">
          <div
            id="testimonials-carousel"
            className="carousel slide carousel-dark"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">


                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <img className="testimonial-image rounded-circle" src="./apple.svg" alt="" />
                    <p className="testimonials-texto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatum assumenda numquam nulla. Ducimus nihil laudantium blanditiis veritatis, sunt quisquam ea dolorem vel quidem magnam. Excepturi, velit. Qui, error voluptate!
                    </p>

                    <div className="testimonials-footer">
                        <p className="cliente">Pablo</p>
                        <p className="cargo">Gerente de App</p>
                    </div>
                </div>



              </div>
              <div className="carousel-item">
                <img
                  src="./apple.svg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./apple.svg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonials-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonials-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
