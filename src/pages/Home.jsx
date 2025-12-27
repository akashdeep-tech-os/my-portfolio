import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Work from "../components/Work";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="experience">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
