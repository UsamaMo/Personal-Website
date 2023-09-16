import React from "react";
import Example from "../assets/Replace.jpg";

const Introduction = () => {
  return (
    <div className="mb-60 mt-20">
      <img
        className=" rounded-md float-right mr-10 w-80 h-72  ml-20"
        src={Example}
        alt="Profile"
      />
      <div className="font-montserrat ml-5">
        <h1 className="text-3xl text-blue-500 font-semibold">Hello I'm Usama Mohiuddin and Welcome to my Website</h1>
        <div className="text-xl">
          <p>
            Welcome to my corner of the internet. I'm a passionate and curious
            third-year computer science student with a love for coding,
            problem-solving, and all things tech. As I embark on this exciting
            journey in the world of technology, I'm eager to share my
            experiences, projects, and the things that inspire me.
          </p>
      </div>
          
      </div>

      <div className="font-montserrat mt-20">
        <button className="px-4 py-5 ml-5 border-2 text-blue-500 border-blue-500 ">
          View Projects
        </button>
        <button className=" text-blue-500  px-4 py-5 ml-5">
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Introduction;
