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
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        {/* <section id="projects">
          <Projects />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
