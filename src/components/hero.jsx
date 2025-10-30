import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const slides = [
    {
      imgSrc: "https://cdn.pixabay.com/photo/2014/12/03/17/51/girl-555657_640.jpg",
      title: "Experience Limitless Possibilities",
      description: "Immerse yourself in a world of inspiration and creativity. Start shaping your vision for tomorrow today.",
    },
    {
      imgSrc: "https://cdn.pixabay.com/photo/2016/11/29/03/59/people-1869654_1280.jpg",
      title: "Innovation in 3D Printing",
      description: "Leading the 3D printing industry with advanced innovation, offering top-quality 3D printers designed for precision and efficiency",
    },
    {
      imgSrc: "https://cdn.pixabay.com/photo/2015/03/26/09/54/sunset-678429_1280.jpg",
      title: "Cutting-Edge 3D Printing Services",
      description: "We offer advanced 3D printing solutions tailored to businesses and creators, turning innovative concepts into high-quality tangible products with precision and efficiency.",
    },
    {
      imgSrc: "https://cdn.pixabay.com/photo/2016/11/29/03/59/city-1869655_1280.jpg",
      title: "Achieve Your Goals",
      description: "With our expert guidance and support, you can turn your dreams into reality and achieve your goals.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay to allow for a smoother animation effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative transition-all duration-500"
      style={{
        backgroundImage: `url(${slides[currentIndex].imgSrc})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className={`absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 transition-transform duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 transition-transform duration-700 delay-200 transform ${animate ? 'translate-y-0' : 'translate-y-10' }">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-2xl transition-transform duration-700 delay-300 transform ${animate ? 'translate-y-0' : 'translate-y-10' }">
          {slides[currentIndex].description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            Get Started
          </button>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
