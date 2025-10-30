import React, { useEffect, useState } from "react";
import offet from "../assets/images/offet.mp4";

const Video = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white px-6 sm:px-8 lg:px-16">
     
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={offet}
            type="video/mp4"
            autoPlay
            muted
            loop
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        </div>

     
        <div
          className={`video-content space-y-4 z-20 transition-opacity duration-700 ease-in-out transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto">
            Experience the beauty of modern design and captivating animations
            that enhance user engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
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

export default Video;
