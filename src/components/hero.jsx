import React from "react";


const Hero = () => {
    <div
    className="h-screen w-full bg-cover bg-center relative"
    style={{
      backgroundImage:
        "url('https://cdn.pixabay.com/photo/2014/12/03/17/51/girl-555657_640.jpg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
    {/* Centered Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
      {/* Hero Title */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
        Experience <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Limitless Possibilities</span>
      </h1>
  
      {/* Subtitle */}
      <p className="text-lg md:text-2xl  font-medium mb-8 max-w-4xl">
        Immerse yourself in a world of inspiration and creativity. Start shaping your vision for tomorrow today.
      </p>
  
      {/* Call-to-Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform">
          Learn More
        </button>
      </div>
    </div>
  </div>
}

export default Hero