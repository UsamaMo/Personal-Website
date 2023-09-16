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
    <div className='font-montserrat'>
        <h1 className='flex justify-center text-3xl mb-20'>Programming Languages</h1>
        <div className='grid  grid-flow-col grid-cols-5 grid-rows-2 gap-20  justify-items-center mx-5'>
            <div>
            <img className="h-20 w-20" src={Python} alt="Profile"/>
            <p>Python</p>
            </div>

            <div>
            <img className="h-20 w-20" src={Java}  alt="Profile"/>
            <p>Java</p>
            </div>

            <div>
            <img className="h-20 w-20 rounded-md" src={JavaScript}  alt="Profile"/>
            <p>JavaScript</p>
            </div>

            <div>
            <img className="h-20 w-20 rounded-md" src={TypeScript}  alt="Profile"/>
            <p>TypeScript</p>
            </div>

            <div>
            <img className="h-20 w-20" src={Arduino} alt="Profile"/>
            <p>Arduino</p>
            </div>

            <div>
            <img className="h-20 w-20 rounded-md" src={Solidity} alt="Profile"/>
            <p>Solidity</p>
            </div>

            <div>
            <img className="h-20 w-20" src={R} alt="Profile"/>
            <p>R</p>
            </div>

            <div>
            <img className="h-20 w-20" src={Arm} alt="Profile"/>
            <p>Arm</p>
            </div>

            <div>
            <img className="h-20 w-20 " src={Intel} alt="Profile"/>
            <p>Intel x86</p>
            </div>

            <div>
            <img className="h-20 w-20" src={VBA} alt="Profile"/>
            <p>VBA</p>
            </div>

        </div>
        
        <br></br>

        
        <h1 className='flex justify-center text-3xl mb-20 mt-20'>Frameworks</h1>
        <div className='grid  grid-flow-col grid-cols-5  gap-20  justify-items-center mx-5'>
     
            <div>
            <img className="h-20 w-20" src={ReactLogo} alt="Profile"/>
            <p>React</p>
            </div>

            <div>
            <img className="h-20 w-20" src={ReactNative} alt="Profile"/>
            <p>React Native</p>
            </div>

            <div>
            <img className="h-20 w-20 rounded-md" src={Web3} alt="Profile"/>
            <p>Web3</p>
            </div>

            <div>
            <img className="h-20 w-20" src={Expo} alt="Profile"/>
            <p>Expo</p>
            </div>

            <div>
            <img className="h-20 w-20 rounded-md" src={Git} alt="Profile"/>
            <p>Git</p>
            </div>
   
        </div>



        <br></br>

        <h1 className='flex justify-center text-3xl mb-20 mt-20'>Computer - Aided- Engineering Software</h1>
        <div className='grid  grid-flow-col grid-cols-4  gap-40  justify-items-center mx-5'>
     
            <div>
            <img className="h-20 w-20 rounded-md" src={SolidWorks} alt="Profile"/>
            <p>SolidWorks</p>
            </div>

            <div>
            <img className="h-20 w-20" src={AutoCAD} alt="Profile"/>
            <p>AutoCAD</p>
            </div>

            <div>
            <img className="h-20 w-20 rounded-md" src={MasterCAM} alt="Profile"/>
            <p>MasterCAM</p>
            </div>

            <div>
            <img className="h-20 w-20" src={Unity} alt="Profile"/>
            <p>Unity</p>
            </div>
 
        </div>

        <h1 className='flex justify-center text-3xl mb-20 mt-20'>Libraries</h1>
        <div className='grid  grid-flow-col grid-cols-4  gap-40  justify-items-center mx-5 mb-40'>
     
            <div>
            <img className="h-20 w-20 rounded-md" src={Pandas} alt="Profile"/>
            <p>Pandas</p>
            </div>

            <div>
            <img className="h-20 w-20" src={OpenCV} alt="Profile"/>
            <p>OpenCV</p>
            </div>

            <div>
            <img className="h-20 w-20" src={Tensorflow} alt="Profile"/>
            <p>Tensorflow</p>
            </div>

            <div>
            <img className="h-20 w-20" src={PyTorch} alt="Profile"/>
            <p>PyTorch</p>
            </div>

        </div>

    </div>

  )
}

export default Languages