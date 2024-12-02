import React from "react";

import offet from "../assets/images/offet.mp4";

const Video = () => {
  <div>
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src={offet}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-1"></div>
      </div>

      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-5xl">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore <br />
          et dolore magna aliqua.  {" "}
        </h1>
      </div>
    </section>
  </div>;
};
export default Video;
