import React, { useEffect, useState } from "react";
import offet from "../assets/images/offet.mp4";

const Video2 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay for animation effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="w-full p-6 sm:p-8 md:p-12 text-center bg-gray-200 shadow-lg relative overflow-hidden">
 
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-4 transition-opacity duration-700 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
          Watch Our Video
        </h2>

   
        <div className={`max-w-full sm:max-w-2xl mx-auto transition-transform duration-700 ease-in-out ${animate ? 'translate-y-0' : 'translate-y-10'}`}>
          <video controls className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <source src={offet} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={`mt-6 transition-opacity duration-700 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-lg sm:max-w-xl mx-auto mb-6">
            Experience the captivating visuals and engaging content that will inspire you to take action.
          </p>

          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              Get Started
            </button>
            <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video2;
