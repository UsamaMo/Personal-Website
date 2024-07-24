import React from 'react';
import SocialMediaIcons from '../components/SocialMediaIcons';
import emailjs from '@emailjs/browser';


const sendEmail = (e) => {
  e.preventDefault();
  alert('Form submitted');
  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY);
}

const Contact = () => {
  return (
    <div className="mt-40 mb-2" >
      <div className='flex  justify-center text-5xl font-bold'>
      <h1>Contact</h1>
      <h1 className='text-blue-500 ml-5'>Me!</h1>
      </div>

      

      {/* <div className='bg-blue-500 text-center py-16  mt-40 mb-20'>
          <h1 className='py-3 text-4xl text-white mb-5  '>What's holding you back? Send me a message!</h1>
            <div className="tooltip tooltip-bottom btn btn-wide text-white  " data-tip="Please Fill Form Below">
              <button class=" hover text-blue-500 font-bold py-4 px-6 rounded">
              Contact Me
              </button>
            </div>  
      </div> */}

    
      <div className="flex flex-col items-center mt-12 ">
        {/* <!-- Contact Form --> */}
        <div className="w-full p-8 rounded-lg shadow-lg">
          <form onSubmit={sendEmail}>
            {/* <!-- Name Input --> */}
            <div className="mb-4">

              <input className="w-full p-2 border rounded" type="text" id="name" name="name" placeholder="Full Name" required/>
            </div>
            
            {/* <!-- Email Input --> */}
            <div className="mb-4">

              <input className="w-full p-2 border rounded" type="email" id="email" name="email" placeholder="Email Address" required/>
            </div>
            
            {/* <!-- Message Textarea --> */}
            <div className="mb-4">
              <textarea className="w-full p-2 border rounded" id="message" name="message"  placeholder="Your Message" rows="4" required></textarea>
            </div>
            
            {/* <!-- Submit Button --> */}
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        {/* <!-- Social Media Links --> */}
        <div className="mt-8">
          <h3 className="text-2xl mb-4">Or Connect with Me On:</h3>
            <div className='flex  justify-center'>
              <SocialMediaIcons/>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
