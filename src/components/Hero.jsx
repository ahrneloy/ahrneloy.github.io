import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from 'react';
import { styles } from "../styles";
import { line } from "../assets";
import { moon1 } from "../assets";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import Computers from "./canvas/Computers";

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1079) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${
        !toggle ? "flex" : "block"
      } w-screen h-screen justify-between`}>
        <div className=" justify-center items-center mr-auto ml-auto mt-auto mb-20 ">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm 
          </h1>
          <h1 className={`${styles.heroHeadText1} text-white`}>
            <span className='text-[#915EFF]'>Azaharul Rashid</span>
          </h1>
          <div className="flex  items-center gap-3 pt-8 ">
          <img src={line} alt='logo' className='h-2 object-contain' />
            <h2 className=' font-black text-[#7137ee]  lg:text-[23px] sm:text-[18px] xs:text-[19px] text-[16px] lg:leading-[25px] mt-2 pb-2'>What I Do</h2>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <br className='sm:block hidden' />
            I am a software developer proficient in Python, <br className='sm:block hidden' />
            Flutter, React, and Micropython programming.
            <br className='sm:block hidden' />
            I have a passion for creating innovative software
            <br className='sm:block hidden' />
            solutions that solve complex problems.
          </p>
          <div className="py-14">
            <button className="w-30 px-4 py-2 bg-purple-600 text-white rounded-md shadow-md focus:outline-none hover:bg-purple-700 active:bg-purple-800">
          Learn More
          </button>
          </div>
          

        </div>
        <div className="h-screen flex justify-center items-center mr-auto ml-auto relative" style={{ width: "50%" }}>
        <div style={{ width: "100%", height: "100%" }}>
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          
        </div>
        <img src={ moon1 } className='h-3/4 object-contain absolute animate-bounce1 ' />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-10">
  <a href="#about" className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-end justify-items-end pl-2 " >
        <motion.dev 
        animate={{
          y: [0, 24, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1 mr-auto "
        />
  </a>
  
</div>
        
      </div>
    </section>
  );
};

export default Hero;
