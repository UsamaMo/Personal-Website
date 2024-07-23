import React from "react";

const Cards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 ml-5 mr-5 my-15 mb-10">
      {/* Portfolio | Stock Market */}
      <div className="w-full shadow-xl flex flex-col justify-between p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
        <div>
          <h2 className="text-2xl font-bold text-center py-8">
            Stock Market Trading Bot
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              AI bot that interprets live Stock Market and automatically buys and sells
            </p>
            <p className="py-2 border-b mx-8">
              Python, Keras, PyTorch, Matpltlib, Kaggle, Gradio
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/UsamaMo/Stock_Trading_Bot-AI"
            className="inline-block"
          >
            <button className="bg-blue-500 text-black rounded-md font-semibold w-[200px] my-6 px-6 py-3">
              Stock Market
            </button>
          </a>
        </div>
      </div>

      {/* Portfolio | Object Detection Model */}
      <div className="w-full shadow-xl flex flex-col justify-between p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
        <div>
          <h2 className="text-2xl font-bold text-center py-8">
            Object Detection Model
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Model created by taking pictures from phone camera and using object detection to classify the different objects
            </p>
            <p className="py-2 border-b mx-8">
              Python, Numpy, Matplotlib, open-cv, scikit-learn, SIFT, Stitcher
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/UsamaMo/Object-Detection-Model"
            className="inline-block"
          >
            <button className="bg-blue-500 text-black rounded-md font-semibold w-[200px] my-6 px-6 py-3">
              Object Detection
            </button>
          </a>
        </div>
      </div>

      {/* Portfolio | Book Recommendation */}
      <div className="w-full shadow-xl flex flex-col justify-between p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
        <div>
          <h2 className="text-2xl font-bold text-center py-8">
            Book Recommendation
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Uses collaborative, content based and hybrid recommendations
            </p>
            <p className="py-2 border-b mx-8">
              Python, Pandas, Scikit-learn, DiffLib, Kaggle
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/UsamaMo/Book-Recommendation"
            className="inline-block"
          >
            <button className="bg-blue-500 text-black rounded-md font-semibold w-[200px] my-6 px-6 py-3">
              Book Recommendation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
