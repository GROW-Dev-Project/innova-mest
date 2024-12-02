import React from "react";
import Header from "./header";
import Hero from "./hero";
import WhyUs from "./whyUs";
import Video from "./video";
import Video2 from "./Video2";
import Client from "./clients";
// import cell from "../assets/images/cell.jpeg"

// import view from "../assets/images/view.jpeg"

const LandingPage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2014/12/03/17/51/girl-555657_640.jpg')",
      }}
    >
      {/* Navigation Bar */}

      <Header />

      <Hero />

      <WhyUs />
      <Video />
      <Video2 />

      <Client />
    </div>
  );
};

export default LandingPage;
