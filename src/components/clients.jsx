import React from "react";
import { motion } from "framer-motion";
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";

const Client = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-gray-100 shadow-lg w-full pt-16 pb-32 space-y-24 px-6 sm:px-8 lg:px-16">
    
        <motion.div
          className="flex justify-center mt-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          What Our Clients Say
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 rounded-50 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-blue-900">
                  Dr. Miriam Brown
                </h2>
                <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-blue-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-6">
                  <a
                    className="inline-flex rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 text-sm sm:text-base font-semibold leading-7 shadow-sm ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-700"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <motion.div
                className="relative lg:m-0 lg:h-full"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <img
                  alt="Client 1"
                  loading="lazy"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-auto lg:max-w-xs xl:max-w-sm rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                  src={client1}
                />
              </motion.div>
              <br/>
            </div>
          </div>
        </motion.div>

  
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 rounded-50 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-blue-900">
                  Brandon Cobolt
                </h2>
                <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-blue-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-6">
                  <a
                    className="inline-flex rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 text-sm sm:text-base font-semibold leading-7 shadow-sm ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-700"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <motion.div
                className="relative lg:m-0 lg:h-full"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <img
                  alt="Client 2"
                  loading="lazy"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-auto lg:max-w-xs xl:max-w-sm rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                  src={client2}
                />
              </motion.div>
              <br/>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Client;
