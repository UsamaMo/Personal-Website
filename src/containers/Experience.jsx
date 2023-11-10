import React from "react";
import Carousel from "../components/Carousel";

const Experience = () => {
  return (
    <div className="mt-40">
      <div className="flex items-baseline justify-center text-5xl font-bold">
        <h1>My</h1>
        <h1 className="text-blue-500 ml-5">Journey</h1>
      </div>

      <div class="min-h-screen flex items-center justify-center">
        <div class="grid grid-cols-2 gap-8 max-w-4xl w-full">
          {/*   
    <!-- Column 1 --> */}
          <div>
            <div class="my-4 flex justify-center text-2xl">Education</div>
            {/* <div class="bg-blue-500 p-4 mb-4">Row 2, Column 1</div> */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 border-l-4">
              <h2 className="text-xl mb-2 text-blue-500">2021 - 2025</h2>
              <p className="text-grey-darker text-base mb-4">
                Computer Science Degree- Wilfrid Laurier University
              </p>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 border-l-4">
              <h2 className="text-xl mb-2 text-blue-500 ">2018 - 2021</h2>
              <p className="text-grey-darker text-base mb-4">
                Mechanical Engineer- Conestoga College
              </p>
            </div>

            {/* <!-- Add more rows as needed here --> */}
          </div>

          {/* <!-- Column 2 --> */}
          <div>
            <div class="my-4 mb-4 flex justify-center text-2xl">Experience</div>
            {/* <div class="bg-green-500 p-4 mb-4">Row 2, Column 2</div> */}
            {/* <!-- Add more rows as needed here --> */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 border-l-4">
              <h2 className="text-xl mb-2 text-blue-500">2023 - 2024</h2>
              <p className="text-grey-darker text-base mb-4">
                Full Stack Developer - Sports.Excitement
              </p>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 border-l-4">
              <h2 className="text-xl mb-2 text-blue-500">2023 - 2024</h2>
              <p className="text-grey-darker text-base mb-4">
                Web Developer - Laurier Computing Society Club
              </p>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 border-l-4">
              <h2 className="text-xl mb-2 text-blue-500">2023 - 2024</h2>
              <p className="text-grey-darker text-base mb-4">
                Full Stack Developer - Laurier Muslim Student Association Club
              </p>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 border-l-4">
              <h2 className="text-xl mb-2 text-blue-500">2023 - 2024</h2>
              <p className="text-grey-darker text-base mb-4">
                Computer Science Lab Instructor Assistant
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Creating a caraousel for highlight images */}
      <div className="flex items-baseline justify-center text-5xl font-bold mt-20">
        <h1 className="text-blue-500 mr-5">Journey</h1>
        <h1>Highlights</h1>
        
      </div>
      <Carousel/>


    </div>
  );
};

export default Experience;
