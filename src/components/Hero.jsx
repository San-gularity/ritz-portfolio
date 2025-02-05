import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";


function Hero() {
  return (
    <div name="hero" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-pink-600">Hi, my name is</p>
        <h1 className=" text-5xl sm:text-8xl font-bold text-[#ccd6f6]">
          Ritika Prashanth
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          Software Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Software Developer specializing in building exceptional digital
          experiences. Currently, I'm focused on building responsive full-stack
          web applications...
        </p>
        <div>
          {/*<Link to="work" smooth={true} duration={500}>*/}
            <button className="text-white group border-2 px-5 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 group-hover:px-2 duration-300">
                <HiArrowNarrowRight className="ml-3"></HiArrowNarrowRight>
              </span>
            </button>
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
}

export default Hero;
