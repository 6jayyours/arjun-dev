import React from "react";
import { FaArrowRight } from "react-icons/fa";

const StackCard = ( { title, description, icon } ) => {
  return (
    <div className="group bg-card hover:bg-icon px-6 py-4 rounded-lg">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <div className="w-11 h-11 flex items-center justify-center bg-icon rounded-md border border-gray-800">
          <img src={icon} alt="" className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="group flex items-center group-hover:rotate-[-45deg]  transition-all duration-300 ease-in-out">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default StackCard;
