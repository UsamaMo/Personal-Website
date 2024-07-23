import React from 'react';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className='sm:flex sm:justify-center'>
      <Navbar />
      <main>
        <section id="home" className='section mt-36'>
          <Home />
        </section>
        <section id="about" className='section'>
          <About />
        </section>
        <section id="skills" className='section mt-80'>
          <Skills />
        </section>
        <section id="experience" className='section'>
          <Experience />
        </section>
        <section id="projects" className='section'>
          <Projects />
        </section>
        <section id="contact" className='section'>
          <Contact />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
