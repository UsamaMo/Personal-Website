import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  // State to manage which theme is currently active
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the mode
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const navbar = document.getElementById('navbar');
    const isDarkMode = currentTheme === 'dark';
  
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    navbar.classList.toggle('navbar-light', !isDarkMode);
    navbar.classList.toggle('navbar-dark', isDarkMode);
  };
  

  return (
    // "shadow-md" adds a shadow for better separation from the content below
    // "bg-gray-800" for a solid dark background, replace with the color of your choice
    <div id='navbar' className='fixed top-0 z-10 w-full shadow-lg flex justify-between items-center h-24 px-4 text-blue-500 navbar-light'>
      <Link to="/" className='text-2xl mx-5 font-bold'>Usama.</Link>  
      <ul className='md:flex text-md grid grid-cols-7 gap-12 mr-4 items-center font-semibold text-sm'>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>  
        <li><Link to="/experience">Experience</Link></li>  
        <li><Link to="/contact">Contact</Link></li>          

        {/* Resume and Projects buttons */}
        {/* <li>
          <Link to="/resume">
            <button className="btn btn-outline bg-blue-500 border-blue-500 text-black">Resume</button>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <button className="btn btn-outline border-blue-500 text-blue-500">Projects</button>  
          </Link>
        </li> */}
        <li onClick={toggleTheme} className="cursor-pointer my-2">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
