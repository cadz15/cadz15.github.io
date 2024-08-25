import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="font-Syne">
      <Nav
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Hero />
      <Skills ref={aboutRef} />
      <About />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
