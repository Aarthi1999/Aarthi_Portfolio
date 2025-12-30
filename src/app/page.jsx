import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import "./globals.css";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="min-h-screen bg-primary">
          <Home />
        </section>
        <svg className="svg-curve" viewBox="0 0 1440 79">
          <path d="M-0 79C-0 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
        </svg>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact" className="bg-primary text-white min-h-[calc(100vh-4rem)] flex items-center justify-center mt-16">
          <Contact />
        </section>
      </main>
    </>
  );
}
