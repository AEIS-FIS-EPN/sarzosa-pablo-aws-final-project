// src/AppRoutes.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@components/Header/Header";
import { Hero } from "@components/Hero/Hero";
import Experience from "@components/Experience/experience.jsx";
import Projects from "@components/Projects/Projects.jsx";
import Articles from "@components/Articles/articles.jsx";
import Testimonials from "@components/Testimonials/testimonials.jsx";
import Footer from "@components/footer/footer.jsx";

export function AppRoutes() {
  return (
    <Router>
      <div className=" bg-light">
        
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Experience />
                {/*
                  <Projects />
            */}

                {/*<Articles /> */}
                {/*<Testimonials /> */}
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
