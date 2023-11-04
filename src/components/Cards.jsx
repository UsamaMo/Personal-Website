import React from 'react';

const Cards = () => {
  return (
    <div className='grid md:grid-cols-3 gap-8 ml-5 mr-5 my-15 mb-10'>
      
      {/* Portfolio | Frontend Card */}
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
        <h2 className='text-2xl font-bold text-center py-8'>Portfolio | Frontend</h2>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Front end web app with GitHub Pages</p>
          <p className='py-2 border-b mx-8'>Utilizes React, JS, TypeScript, HTML, Tailwind CSS</p>
          <p className='py-2 border-b mx-8'>Navbar with daisyUI for better UI/UX</p>
        </div>
        <button className="bg-blue-500 text-black rounded-md font-semibold w-[200px] my-6 mx-auto px-6 py-3 ">Portfolio</button>
      </div>
      
      {/* PODS | FullStack Card */}
      <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-white'>
        <h2 className='text-2xl font-bold text-center py-8'>PODS | FullStack</h2>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Course review platform with React, MySQL, Node</p>
          <p className='py-2 border-b mx-8'>Review and rating system increasing user content</p>
          <p className='py-2 border-b mx-8'>Optimized search functionality</p>
        </div>
        <button className="bg-black text-blue-500 rounded-md font-semibold w-[200px] my-6 mx-auto px-6 py-3">PODS</button>
      </div>
      
      {/* Nzyme | Back End Card */}
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
        <h2 className='text-2xl font-bold text-center py-8'>Nzyme | Back End</h2>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Hackathon project website with Cohere API</p>
          <p className='py-2 border-b mx-8'>Generates summaries for study material</p>
          <p className='py-2 border-b mx-8'>Built with React, Flask, CSS, Git</p>
        </div>
        <button className="bg-blue-500 text-black rounded-md font-semibold w-[200px] my-6 mx-auto px-6 py-3">Nzyme</button>
      </div>

    </div>
  );
};

export default Cards;
