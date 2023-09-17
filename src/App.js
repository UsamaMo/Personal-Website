import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import Cards from './components/Cards';
import useDarkMode from './components/darkMode';
import Message from './components/Message';
import Background from "../src/assets/Background.jpg";
import Languages from './components/Languages';
import Strengths from './components/Strengths' ;

import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Contact from './containers/Contact';

function App() {
  useDarkMode();
  return (
    <div>
      {/*try to figure out how to make the background transparent*/}
      
      <div>
        <Navbar/>
        <img
          className="relative bg-cover h-screen w-screen overflow-hidden"
          src={Background}
          alt="Profile"
        />
      </div> 

      <p>ok</p>
      <Introduction/>
      <Strengths/>
      <Languages/>
      <Cards/>
      <Message/>
      <Footer/>


      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>


    </div>
  );
}

export default App;
