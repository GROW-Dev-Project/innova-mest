import React from 'react';
import img1 from "../assets/images/img1.jpg";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(${img1})`,
        height: "98vh",
        position: "relative",
        backgroundSize: "cover",
      }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-gray-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl text-gray-800">Contact Us!</h1>
            <p className="text-gray-600">
              Fill up the form below to send us a message.
            </p>
          </div>
          <form>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
            />
            <textarea
              className="shadow mb-4 appearance-none border rounded h-40 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
            ></textarea>
            <div className="flex justify-between">
              <input
                className="shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
