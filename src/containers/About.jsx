import React from "react";
import Example from "../assets/Replace.jpg";

const About = () => {
  return (
    <div className="mt-40 mb-2 sm:mx-4" >  
      <div className="flex flex-col justify-center items-center text-center">
        <div className='flex items-baseline justify-center text-5xl font-bold mb-12'>
          <h1>About</h1>
          <h1 className='text-blue-500 ml-5'>Me</h1>
        </div>
        <img
        className=" rounded-full w-52 h-52 "
        src={Example}
        alt="Profile"
      />
        <p className="mt-12 mx-20 ">
            Welcome to my corner of the internet. I'm a passionate and curious
            third-year computer science student with a love for coding,
            problem-solving, and all things tech. As I embark on this exciting
            journey in the world of technology, I'm eager to share my
            experiences, projects, and the things that inspire me.
        </p>

        <button className="bg-blue-500 p-3 rounded-md mt-4 text-black font-semibold">Read More</button>

        </div>
    </div>
  );
};

export default About;
