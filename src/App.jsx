import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="App">
      <CursorEffect />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
