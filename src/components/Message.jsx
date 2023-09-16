import React from 'react'

const Message = () => {
  return (
    <div className='bg-blue-500 text-center py-16 font-montserrat my-40'>
        <h1 className='py-3 text-4xl text-white mb-5  '>What's holding you back? Send me a message!</h1>
        <div className="tooltip tooltip-bottom btn btn-wide text-white  " data-tip="Thank You!">
            <button className="btn">Contact</button>
        </div>  
 

    
    </div>
  )
}

export default Message