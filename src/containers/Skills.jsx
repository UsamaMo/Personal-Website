import React from 'react'
import FrontEnd from "../assets/Logos/Front End.png";
import BackEnd from "../assets/Logos/Back End.png";
import Algorithms from "../assets/Logos/Algorithms.png";
import Languages from "../components/Languages"


const Skills = () => {
  return (
    <div className=' mt-40 sm:mx-2'>
      <div className='flex items-baseline justify-center text-5xl font-bold'>
      <h1>My</h1>
      <h1 className='text-blue-500 ml-5'>Skills</h1>
      </div>

        <div className='grid grid-cols-3 grid-rows-2 gap-x-40 gap-y-10 justify-items-center mt-12 mb-40 sm:gap-x-5 sm:gap-y-5 sm:mb-10 mx-10'>

            <div className='flex flex-col items-center'>
            <img className="h-20 w-20 p-2 object-cover object-center bg-blue-500 rounded-full" src={Algorithms} alt="Profile"/>
            <p className="mt-2 font-medium">Algorithms</p>

            </div>

            <div className='flex flex-col items-center'>
            <img className="h-20 w-20 p-2 object-cover object-center bg-blue-500 rounded-full" src={FrontEnd} alt="Profile"/>
            <p className="mt-2 font-medium">Front End</p>
            </div>

            <div className='flex flex-col items-center'>
            <img className="h-20 w-20 p-2 object-cover object-center bg-blue-500 rounded-full" src={BackEnd} alt="Profile"/>
            <p className="mt-2 font-medium">Back End</p>
            </div>

            <div>
              <p className='text-center'>Mastering the foundation of computer logic. Proficient in designing efficient solutions, reducing computational time. Always driven by the challenge to optimize and improve.</p>
            </div>

            <div>
              <p className='text-center'>Passionate about crafting user-centric designs. Adept in responsive web design, ensuring seamless experiences across devices. Committed to bringing visions to life with precision.</p>
            </div>

            <div>
              <p className='text-center'>Skilled in server-side operations and database management. Ensuring secure, scalable, and swift data handling. Building robust architectures that stand the test of time.</p>
            </div>


        </div>
        <Languages/>
         
    </div>
  )
}

export default Skills
