import React from "react";

const Hero = ({ message, heading }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/*overlay */}

        <div className=" flex h-screen w-screen bg-black/70 z-[2] items-center justify-center">
          <div className="p-5 text-white z-[2] ">
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-xl">{message}</p>
            <button className="px-8 py-2 border">Book</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
