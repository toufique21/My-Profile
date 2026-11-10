import Navbar from "./jinishpati/Navbar";
import Hero from "./jinishpati/Hero";
import About from "./jinishpati/About";
import Skills from "./jinishpati/Skills";
import Projects from "./jinishpati/Projects";
import Contact from "./jinishpati/Contact";
import Footer from "./jinishpati/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
