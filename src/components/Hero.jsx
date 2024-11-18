import React from "react";
import landVid from "../assets/background.mp4";
import myImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="h-screen md:py-24 py-16 px-6 ">
      <div className="container mx-auto max-w-6xl relative">
        <div className="relative w-full h-[600px] md:h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute w-full md:w-full h-full vid-mask">
            <video
              src={landVid}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="absolute w-full h-full bg-primary opacity-[.70] flex flex-col justify-center items-center ">
            <div className="w-full text-center md:text-start font-rubik-distressed">
              <div className="flex flex-col md:flex-row items-center mb-4">
                <h1 className="text-5xl md:text-8xl font-extrabold flex">
                  ARJUN
                </h1>
              </div>
              <div className="text-center md:flex space-x-3 ">
                <h1 className="text-5xl md:text-8xl font-extrabold">
                  RAMESHAN
                </h1>
              </div>
            </div>

            <div className="w-full flex justify-center md:justify-start">
              <div>
                <p className="text-2xl md:text-4xl mx-auto font-bold font-rubik-distressed">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center md:justify-end">
              <div className="md:w-2/3">
                <p className="text-lg text-center md:text-xl mx-auto font-bold text-content">
                Hi, I'm Arjun Rameshan. I build full-stack web applications with Java Spring Boot and 
                React, focusing on efficient backends and modern UIs. <br /> Based in <span className="line-through text-gray-600">Kannur, Kerala</span> Bangalore, Karnataka.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center md:justify-end mt-4">
              <div className="bg-white w-28 h-28 flex items-center justify-center custom-border-radius">
                <img
                  src={myImg}
                  alt=""
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
