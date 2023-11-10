import React from 'react'
import Python from "../assets/Logos/Python.png";
import Java from "../assets/Logos/Java.png";
import JavaScript from "../assets/Logos/Javascript.png";
import TypeScript from "../assets/Logos/Typescript.png";
import Arduino from "../assets/Logos/Arduino.png";
import Solidity from "../assets/Logos/Solidity.png";
import R from "../assets/Logos/R.png";
import Arm from "../assets/Logos/Arm.png";
import Intel from "../assets/Logos/Intel x86.png";
import VBA from "../assets/Logos/VBA.png";


import ReactLogo from "../assets/Logos/React.png";
import ReactNative from "../assets/Logos/React Native.png";
import Expo from "../assets/Logos/Expo.png";
import Web3 from "../assets/Logos/Web3.jpg";
import Git from "../assets/Logos/Git.png";


import SolidWorks from "../assets/Logos/SolidWorks.png";
import AutoCAD from "../assets/Logos/AutoCAD.png";
import MasterCAM from "../assets/Logos/Mastercam.png";
import Unity from "../assets/Logos/Unity.png";

import Pandas from "../assets/Logos/Pandas.png";
import OpenCV from "../assets/Logos/OpenCV.png";
import Tensorflow from "../assets/Logos/Tensorflow.png";
import PyTorch from "../assets/Logos/PyTorch.png";







const Languages = () => {
  return (
    <div>
      {/* <div class="min-h-screen flex items-center justify-center px-4">
        <div class="grid grid-cols-3 gap-8 w-full">
          {/* <!-- Column 1 --> */}
          {/* <div class="flex flex-col space-y-4">
            <div class="bg-blue-500 p-4">Languages</div>
            <div>
              <img className="h-14 w-14" src={Python} alt="Profile" />
              <p>Python</p>
            </div> */}

            {/* <div>
              <img className="h-14 w-14" src={Java} alt="Profile" />
              <p>Java</p>
            </div> */} 

            {/* <div>
              <img
                className="h-14 w-14 rounded-md"
                src={JavaScript}
                alt="Profile"
              />
              <p>JavaScript</p>
            </div>
          </div> */}

          {/* <!-- Column 2 --> */}
          {/* <div class="flex flex-col space-y-4">
            <div class="bg-green-500 p-4">Frameworks</div>
            <div class="bg-green-500 p-4">Row 2, Column 2</div>
          </div> */}

          {/* <!-- Column 2 --> */}
          {/* <div class="flex flex-col space-y-4">
            <div class="bg-green-500 p-4">Programs & Applications</div>
            <div class="bg-green-500 p-4">Row 2, Column 2</div>
          </div>
        </div>
      </div> */}

      {/* original code below----------------------------------------------------- */}

      <h1 className="flex justify-center text-3xl mb-20">Languages</h1>
      <div className="grid  grid-flow-col grid-cols-10 grid-rows-1 gap-x-5 gap-y-10  justify-items-center mx-5">
        <div>
          <img className="h-20 w-20" src={Python} alt="Profile" />
          <p className="text-center">Python</p>
        </div>

        <div>
          <img className="h-20 w-20" src={Java} alt="Profile" />
          <p className="text-center">Java</p>
        </div>

        <div>
          <img
            className="h-20 w-20 rounded-md"
            src={JavaScript}
            alt="Profile"
          />
          <p className="text-center">JavaScript</p>
        </div>

        <div>
          <img
            className="h-20 w-20 rounded-md"
            src={TypeScript}
            alt="Profile"
          />
          <p className="text-center">TypeScript</p>
        </div>

        <div>
          <img className="h-20 w-20" src={Arduino} alt="Profile" />
          <p className="text-center">Arduino</p>
        </div>

        <div>
          <img className="h-20 w-20 rounded-md" src={Solidity} alt="Profile" />
          <p className="text-center">Solidity</p>
        </div>

        <div>
          <img className="h-20 w-20" src={R} alt="Profile" />
          <p className="text-center">R Studio</p>
        </div>

        <div>
          <img className="h-20 w-20 bg-white rounded" src={Arm} alt="Profile" />
          <p className="text-center">Arm</p>
        </div>

        <div>
          <img className="h-20 w-20 " src={Intel} alt="Profile" />
          <p className="text-center">Intel x86</p>
        </div>

        <div>
          <img className="h-20 w-20" src={VBA} alt="Profile" />
          <p className="text-center">VBA</p>
        </div>
      </div>

      <br></br>

      <h1 className="flex justify-center text-3xl mb-20 mt-20">Frameworks</h1>
      <div className="grid  grid-flow-col grid-cols-5  gap-20  justify-items-center mx-5">
        <div>
          <img className="h-20 w-20" src={ReactLogo} alt="Profile" />
          <p className="text-center">React</p>
        </div>

        <div>
          <img className="h-20 w-20" src={ReactNative} alt="Profile" />
          <p className="text-center">React Native</p>
        </div>

        <div>
          <img className="h-20 w-20 rounded-md" src={Web3} alt="Profile" />
          <p className="text-center">Web3</p>
        </div>

        <div>
          <img className="h-20 w-20" src={Expo} alt="Profile" />
          <p className="text-center">Expo</p>
        </div>

        <div>
          <img className="h-20 w-20 rounded-md" src={Git} alt="Profile" />
          <p className="text-center">Git</p>
        </div>
      </div>

      <br></br>

      {/* <h1 className='flex justify-center text-3xl mb-20 mt-20'>Computer - Aided- Engineering Software</h1>
        <div className='grid  grid-flow-col grid-cols-4  gap-40  justify-items-center mx-5'>
     
            <div>
            <img className="h-20 w-20 rounded-md" src={SolidWorks} alt="Profile"/>
            <p className='text-center'>SolidWorks</p>
            </div>

            <div>
            <img className="h-20 w-20" src={AutoCAD} alt="Profile"/>
            <p className='text-center'>AutoCAD</p>
            </div>

            <div>
            <img className="h-20 w-20 rounded-md" src={MasterCAM} alt="Profile"/>
            <p className='text-center'>MasterCAM</p>
            </div>

            <div>
            <img className="h-20 w-20" src={Unity} alt="Profile"/>
            <p className='text-center'>Unity</p>
            </div>
 
        </div> */}

      <h1 className="flex justify-center text-3xl mb-20 mt-20">
        Programs and Applications
      </h1>
      <div className="grid  grid-flow-col grid-cols-4  gap-40  justify-items-center mx-5 mb-20">
        <div>
          <img className="h-20 w-20 rounded-md" src={Pandas} alt="Profile" />
          <p className="text-center">Pandas</p>
        </div>

        <div>
          <img className="h-20 w-20" src={OpenCV} alt="Profile" />
          <p className="text-center">OpenCV</p>
        </div>

        <div>
          <img className="h-20 w-20" src={Tensorflow} alt="Profile" />
          <p className="text-center">Tensorflow</p>
        </div>

        <div>
          <img className="h-20 w-20" src={PyTorch} alt="Profile" />
          <p className="text-center">PyTorch</p>
        </div>
      </div>
    </div>
  );
}

export default Languages