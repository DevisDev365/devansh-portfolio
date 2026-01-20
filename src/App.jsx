import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import { Skills, Contact } from './components/Contact';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      {/* Background/Overlay elements could go here */}
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
