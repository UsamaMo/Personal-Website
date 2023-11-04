import React from 'react'
import Cards from '../components/Cards'

const Projects = () => {
  return (
    <div className='mt-40'>
      <div className='flex items-baseline justify-center text-5xl font-bold mb-20'>
        <h1>My</h1>
        <h1 className='text-blue-500 ml-5'>Projects</h1>
      </div>

      {/* <p className='mx-10 mb-20 text-center'>Welcome to my portfolio of projects. Here, I showcase a selection of my most recent and impactful work. Each card represents a unique project, demonstrating my growth as a developer and my passion for coding.</p> */}

      <Cards/>

      
    </div>
  )
}

export default Projects