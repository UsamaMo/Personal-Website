import React from "react";
import Carless from "../assets/Highlights/carless.jpg"

import HawkHacks from "../assets/Highlights/hawkhacks.jpg"
import Pizza from "../assets/Highlights/pizza.jpg"
import Setup from "../assets/Highlights/setup.jpg"

const Carousel = () => {
  return (
    <div className="flex  marker:mx-80 mt-20 mb-10 carousel sm:h-72 h-72 overflow-hidden rounded-xl ">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img src={Carless} className="w-full h-full object-contain" alt="MasterCAM"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img src={HawkHacks} className="w-full h-full object-contain" alt="MasterCAM"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img src={Pizza} className="w-full h-full object-contain" alt="MasterCAM"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img src={Setup} className="w-full h-full object-contain" alt="Unity"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
