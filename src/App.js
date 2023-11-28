import React from 'react';
import {Routes, Route} from 'react-router-dom';

import useDarkMode from './components/darkMode';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Footer from './components/Footer';


function App() {
  useDarkMode();
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>

      {/* <Footer/> */}
      {/* <div className=''>
        <p className='text-center'>@UsamaMohiuddin</p>
      </div> */}
    </div>
  );
}

export default App;
