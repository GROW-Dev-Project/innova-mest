import React from "react";
import { motion } from "framer-motion";
import Header from "./header";
import Hero from "./hero";
import WhyUs from "./whyUs";
import Video from "./video";
import Video2 from "./Video2";
import Client from "./clients";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/12/03/17/51/girl-555657_640.jpg')" }}>
      <Header />
      
      <motion.div
        id="hero"  
        className="relative w-full h-screen shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
      >
        <Hero />
      </motion.div>

      <motion.div
        id="whyUs" 
        className="py-16 bg-gray-100 shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      >
        <WhyUs />
      </motion.div>

      <motion.div
        id="video2" 
        className="py-16 bg-gray-50 shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      >
        <Video2 />
      </motion.div>

      <motion.div
        className="py-16 bg-gray-100 shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      >
        <Client />
      </motion.div>

      <motion.div
        className="bg-gray-100 py-8 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default LandingPage;
