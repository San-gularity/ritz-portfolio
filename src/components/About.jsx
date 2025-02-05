import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[500px] w-full px-4 grid sm:grid-cols-2 sm:max-w-[900px] gap-8">
          <div className=" sm:text-right text-4xl font-bold">
            <p>
              Hi! I'm Ritika, Welcome to my page. Take a look around.
            </p>
          </div>
          <div>
            <p>
              Some more boilerplate text with nothing of actual value for now. I
              just needed to add something here to see how it looks. Hi cutie, how do you like the template?
              It's not much but its a start...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
