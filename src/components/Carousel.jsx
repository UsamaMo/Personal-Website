import React from "react";
import SolidWorks from "../assets/Logos/SolidWorks.png";
import AutoCAD from "../assets/Logos/AutoCAD.png";
import MasterCAM from "../assets/Logos/Mastercam.png";
import Unity from "../assets/Logos/Unity.png";
import Vector from "../assets/Vector.jpg";
import Skyline from "../assets/skyline.jpg";
import Carless from "../assets/Highlights/carless.jpg"

const Carousel = () => {
  return (
    <div className="flex mx-80 mt-20 mb-10 carousel h-72 overflow-hidden rounded-xl">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img src={Skyline} className="w-full h-full shadow-lg " alt="Vector"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img src={Carless} className="w-full h-full shadow-lg" alt="AutoCAD"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img src={MasterCAM} className="w-full h-full object-contain" alt="MasterCAM"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img src={Unity} className="w-full h-full object-contain" alt="Unity"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
