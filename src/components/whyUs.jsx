import React, { useEffect, useState } from "react";

const WhyUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay to allow for a smoother animation effect

    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      imgSrc: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
      title: "Technical Proficiency",
    },
    {
      imgSrc: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
      title: "Affordable Pricing",
    },
    {
      imgSrc: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
      title: "Timely Delivery",
    },
    {
      imgSrc: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
      title: "Experts",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden text-blue-900 body-font bg-gray-100 w-full shadow-lg">
        <div className="flex justify-center mt-10 text-4xl font-semibold">
          Why Us?
        </div>

        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className={`p-4 md:w-1/4 sm:w-1/2 transition-transform duration-700 transform ${
                  animate ? `opacity-100 translate-y-0 delay-${index * 100}` : "opacity-0 translate-y-10"
                }`}
              >
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110 hover:rotate-3">
                  <div className="flex justify-center">
                    <img src={item.imgSrc} className="w-32 mb-3" alt={item.title} />
                  </div>
                  <h2 className="hover:text-pink-500 transition duration-300 ease-in-out title-font font-medium text-2xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
