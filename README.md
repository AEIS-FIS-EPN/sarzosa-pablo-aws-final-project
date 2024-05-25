
# Pablo's Webpage Project

Welcome to my personal webpage project! This is a small web application developed using React, with Node.js and Vite. The project showcases my skills and interests, particularly in software development with React, Flutter, and Angular, as well as my curiosity about DevOps.

## Project Structure

The hero section is the entry point of the webpage, introducing myself and highlighting my areas of interest and expertise.

- `Hero` component: Represents the main introductory section of the webpage.

```jsx
/* eslint-disable react/no-unescaped-entities */
import "@components/Hero/Hero.css";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container-hero container-fluid d-flex bg-light flex-column justify-content-center">
        <img className="user-image img-fluid mx-auto rounded-circle" src="./Hero/me.JPG" alt="Pablo Sarzosa">
        <h1 className="d-flex mt-5">Hello, I am Pablo Sarzosa</h1>
        <h2 className="d-flex mb-5">Software developer trainee. Learning React, Flutter, and Angular. DevOps and IT interested.</h2>
        <img className="img-fluid mx-auto mt-5 hero-image" src="./Hero/hero-me.png" alt="Hero Image">
      </div>
      <div id="about" className="container-hero-2 container-fluid bg-black d-flex flex-column justify-content-center">
        <h2 className="text-light mx-auto">Let's meet Pablo Sarzosa</h2>
        <p className="text-light d-flex mx-auto">Aspiring software developer focused on Node.JS, React, Flutter, and Angular. Interested in DevOps and seeking a position to deploy my knowledge and refine my practical skills. Motivated by the continuous learning of emerging technologies and innovative tools.</p>
      </div>
    </section>
  )
}
```

## Setup and Development

To run this project locally, ensure you have Node.js and npm/pnpm installed. Then follow these steps:

1. Clone the repository.
2. Navigate to the project directory and install dependencies with `pnpm install`.
3. Start the development server with `pnpm run dev`.
4. Open `http://localhost:3000` to view the webpage in the browser.

## Contributing

I'm open to contributions! If you have suggestions or improvements, feel free to fork the project and submit a pull request.

## License

This project is open-sourced under the MIT License.
