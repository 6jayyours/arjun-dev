import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbMailHeart } from "react-icons/tb";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="md:h-screen py-16 md:py-28 px-6 flex flex-col justify-center items-center"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading Section */}
        <div className="w-full text-center md:text-start mb-8 font-rubik-distressed">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <TbMailHeart className="text-8xl  md:text-8xl" />
            <h1 className="text-6xl md:text-8xl font-extrabold flex">
              Got a thought?
            </h1>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <h1 className="text-6xl md:text-8xl font-extrabold">
              Let me know!
            </h1>
          </div>
        </div>

        {/* Subheading Section */}
        <div className="w-full text-center md:text-right mt-4">
          <p className="text-lg md:text-2xl mx-auto font-bold text-content">
            Looking to add a skilled full-stack developer to your team? <br />
            Reach out, and let’s achieve great things together!
          </p>
        </div>

        {/* Buttons Section */}
        <div className="w-full text-right mt-4">
          <div className="flex justify-center sm:justify-between gap-4 sm:gap-6">
            <div className="flex gap-4 sm:gap-6">
              <motion.div
                className="rounded-full w-12 h-12 flex items-center justify-center text-content hover:text-white hover:shadow-[0_0_15px_#fff]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                <FaGithub size={30} />
              </motion.div>
              <motion.div
                className="rounded-full w-12 h-12 flex items-center justify-center text-content hover:text-white hover:shadow-[0_0_15px_#fff]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                <FaLinkedin size={30} />
              </motion.div>
              <motion.div
                className="rounded-full w-12 h-12 flex items-center justify-center text-content hover:text-white hover:shadow-[0_0_15px_#fff]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                <SiLeetcode size={30} />
              </motion.div>
            </div>
            <div>
              <motion.button
                className="bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                Say hello!
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
