import React from 'react'

const Cards = () => {
  return (


    <div className='grid md:grid-cols-3 gap-8 ml-5 mr-5 my-15 mb-10'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-2xl font-bold text-center py-8'>Project 1</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>.</p>
                <p className='py-2 border-b mx-8'>.</p>
                <p className='py-2 border-b mx-8'>.</p>
            </div>
            <button className="bg-blue-500 text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3">Project 1</button>
        </div>

 
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-2xl font-bold text-center py-8'>Project 2</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>.</p>
                <p className='py-2 border-b mx-8'>.</p>
                <p className='py-2 border-b mx-8'>.</p>
            </div>
            <button className="bg-black text-blue-500 rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3">Project 2</button>
        </div>


        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-2xl font-bold text-center py-8'>Project 3</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>.</p>
                <p className='py-2 border-b mx-8'>.</p>
                <p className='py-2 border-b mx-8'>.</p>
            </div>
            <button className="bg-blue-500 text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3">Project 3</button>
        </div>
    </div>

    )
}

export default Cards