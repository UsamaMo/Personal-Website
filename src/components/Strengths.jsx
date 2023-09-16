import React from 'react'
import FrontEnd from "../assets/Logos/Front End.png";
import BackEnd from "../assets/Logos/Back End.png";
import Algorithms from "../assets/Logos/Algorithms.png";


const Skills = () => {
  return (
    <div className='font-montserrat mb-20 mt-40'>
        <h1 className='text-3xl  flex justify-center'>Skills</h1>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-40 gap-y-10 justify-items-center mt-20'>

            <div>
            <img className="h-20 w-20 bg-blue-500 rounded-full" src={Algorithms} alt="Profile"/>
            <p>Algorithms</p>

            </div>

            <div>
            <img className="h-20 w-20 bg-blue-500 rounded-full" src={FrontEnd} alt="Profile"/>
            <p>Front End</p>
            </div>

            <div>
            <img className="h-20 w-20 bg-blue-500 rounded-full" src={BackEnd} alt="Profile"/>
            <p>Back End</p>
            </div>

            <div>
              <p>Description 1</p>
            </div>

            <div>
              <p>Description 2</p>
            </div>

            <div>
              <p>Description 3</p>
            </div>





        </div>
         
    </div>
  )
}

export default Skills
