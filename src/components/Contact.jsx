import React from "react";


function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-300 p-4">
      <div className="flex flex-col justify-center items-center h-full w-full">
        {/*Container*/}
        <form
          action="https://getform.io/f/8a5084d7-e4f7-4c1e-87fa-21eb74f14db6"
          method="POST"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below or shoot me an email -
              sanathmshetty7@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className=" my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            placeholder="Message"
            name="message"
            rows="5"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
