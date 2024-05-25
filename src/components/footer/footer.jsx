import "@components/footer/footer.css";

export default function Footer() {
  return (
    <section id="contact" className="footer">
      <div className="container-fluid container-footer">
        <div className="container-fluid container-contact">
          <div className="row row-contact text-center">
            <div className="col-12 col-md-4 title-section col-contact">
              <h1 className="contact-title">Let's talk!</h1>
            </div>

            <div className="col-12 col-md-4 description col-contact">
              <h3> Contact me for more information</h3>
            </div>

            <div className="col-12 col-md-4 mail col-contact">
              <a href="mailto:pavosarzosa20@gmail.com">
                <button className="btn">
                  <div className="inside-buttom d-flex">
                    <p className="contact">Contact</p>
                    <i class="bi bi-person-lines-fill contact-image-footer"></i>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row d-flex flex-column align-items-center row-social-network text-center">
          <div className="icon-container-rocket-footer">
            <i class="bi bi-rocket rocket-icon-footer"></i>
          </div>

          <p className="social-network-text">
            I create and learn every day,
            <br />
            let's create something together!
          </p>
        </div>

        <div className="row d-flex row-footer-icons">
          <div className="col-12 d-flex justify-content-center">
            <a href="https://github.com/PavoX20" target="_blank">
              <i className="bi bi-github icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/pablo-s-928085118/" target="_blank">
              <i className="bi bi-linkedin icon"></i>
            </a>
            <a href="mailto:your@email.com">
              <i className="bi bi-envelope icon"></i>
            </a>
            <a href="https://www.instagram.com/pavox20/" target="_blank">
              <i className="bi bi-instagram icon"></i>
            </a>
          </div>
        </div>

        <div className="row d-flex row-footer-rights text-center">
          <h5 className="author m">
            Created by Pablo Sarzosa (2022) &copy; - All rights reserved
          </h5>
        </div>
      </div>
    </section>
  );
}
