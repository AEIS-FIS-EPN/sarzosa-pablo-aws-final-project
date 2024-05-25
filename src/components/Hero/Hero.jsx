/* eslint-disable react/no-unescaped-entities */
import "@components/Hero/Hero.css";

export function Hero() {
  return (
  <section id="hero" className="hero">
    <div className="container-hero container-fluid d-flex bg-light flex-column justify-content-center">
    <img className="user-image img-fluid mx-auto rounded-circle" src="./Hero/me.JPG"></img>
        <h1 className=" d-flex mt-5">Hello, I am Pablo Sarzosa</h1>
        <h2 className="d-flex mb-5">Software developer trainee. Learning React, Flutter and Angular. DevOps and IT interested.</h2>

        <img className="img-fluid mx-auto mt-5 hero-image " src="./Hero/hero-me.png">
        </img>
        
    </div>

    <div id="about" className="container-hero-2 container-fluid bg-black d-flex flex-column justify-content-center">
        <h2 className=" text-light mx-auto">Let's meet Pablo Sarzosa</h2>
        <p className=" text-light d-flex mx-auto">Aspiring software developer focused on Node.JS, React, Flutter, and Angular. Interested in DevOps and seeking a position to deploy my knowledge and refine my practical skills. Motivated by the continuous learning of emerging technologies and innovative tools.</p>
    </div>
  </section>
  )
}
