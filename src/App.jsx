import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
