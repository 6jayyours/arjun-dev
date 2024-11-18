import React from "react";
import tableImg from "../assets/table.jpg";
import myImg from "../assets/hero.jpg";


const About = () => {
  return (
    <section id="about" className="py-16 md:py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-rubik-distressed text-start mb-8">
            About Me
          </h1>
        </div>

        {/* First Section: Image first on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image section */}

          <div className="order-1 md:order-1 flex justify-center">
            <img
              src={myImg}
              alt="Myself"
              className="rounded-lg shadow-lg w-full md:w-[80%] object-cover"
            />
          </div>

          {/* Content section */}

          <div className="order-2 md:order-2 px-4 md:px-8 py-4 md:py-6 md:text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              A Little About Myself
            </h2>
            <p className="text-lg font-bold text-content">
              I'm a full-stack developer with a passion for building innovative
              and efficient solutions. I thrive in dynamic environments and love
              tackling challenges with creativity and technical expertise.
            </p>
          </div>
        </div>

        {/* Second Section: Content first on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Content section */}

          <div className="order-2 md:order-1 px-4 md:px-8 py-4 md:py-6 md:text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              What I Can Contribute
            </h2>
            <p className="text-lg font-bold text-content">
              I bring a solid foundation in both frontend and backend
              development, using technologies like React, Spring Boot, and
              MySQL. I'm committed to delivering clean, efficient code and
              collaborating closely with teams to ensure the best results.
            </p>
          </div>

          {/* Image section */}

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={tableImg}
              alt="Work Environment"
              className="rounded-lg shadow-lg w-full md:w-[80%] object-cover"
            />
          </div>
        </div>

        <div className="text-start px-4 md:px-8 py-4 md:py-6">
          <h3 className="text-xl font-semibold mb-4 font-rubik-distressed">
            ON A PERSONAL NOTE:
          </h3>
          <p className="text-md font-bold text-content">
            When I’m not coding, you’ll probably find me on the badminton court.
            It's either that or I’m thinking of new ways to optimize my game!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
