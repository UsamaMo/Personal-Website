import React from 'react'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24  font-montserrat mx-auto px-4 border-b border-blue-500 '>
        <h1 className = 'w-full  text-3xl  px-5'>Usama Mohiuddin</h1>
        
        <button   data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"    className = "toggle float-right mr-10 my-2" ></button>
        

        <ul className='md:flex text-md  grid grid-cols-4 gap-12 mr-4'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>

        </ul>
    
    
    </div>
  )
}

export default Navbar