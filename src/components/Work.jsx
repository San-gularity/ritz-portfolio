import React from "react";

function Work() {
  return (
    <div name="work" className=" w-full sm:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inlinie border-b-4 inline text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-5">Check out my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-xl justify-center items-center mx-auto content-div">
            {/* hover effect*/}
            <div className=" opacity-0 group-hover:opacity-100 text-center pt-3">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <p>i need some explanation here in the middle</p>
              <div className="pt-3 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-xl justify-center items-center mx-auto content-div">
            {/* hover effect*/}
            <div className=" opacity-0 group-hover:opacity-100 text-center pt-3">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <p>i need some explanation here in the middle</p>
              <div className="pt-3 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-xl justify-center items-center mx-auto content-div2">
            {/* hover effect*/}
            <div className=" opacity-0 group-hover:opacity-100 duration-500 text-center pt-3">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <p>i need some explanation here in the middle</p>
              <div className="pt-3 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
