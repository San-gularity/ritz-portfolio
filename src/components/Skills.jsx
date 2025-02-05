import React from "react";

function Skills() {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked on</p>
        </div>

        <div className=" w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-3">
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/html.png"
              alt="HTML icon"
            />
            <p className=" my-4">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/css.png"
              alt="HTML icon"
            />
            <p className=" my-4">CSS</p>
          </div>
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/javascript.png"
              alt="HTML icon"
            />
            <p className=" my-4">JavaScript</p>
          </div>
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/react.png"
              alt="HTML icon"
            />
            <p className=" my-4">React</p>
          </div>
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/node.png"
              alt="HTML icon"
            />
            <p className=" my-4">Node</p>
          </div>
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/mongo.png"
              alt="HTML icon"
            />
            <p className=" my-4">Mongo</p>
          </div>
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/tailwind.png"
              alt="HTML icon"
            />
            <p className=" my-4">Tailwind</p>
          </div>
          <div className=" hover:scale-110 duration-500 hover:shadow-md hover:shadow-[#040c16]">
            <img
              className="w-10 mx-auto"
              src="/assets/firebase.png"
              alt="HTML icon"
            />
            <p className=" my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
