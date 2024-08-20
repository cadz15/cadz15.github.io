import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="font-Syne">
      <Nav />
      <Hero />
      <Skills />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
