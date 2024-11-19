import React from "react";
import {
    SiCloudinary,
    SiFirebase,
    SiNginx,
    SiRazorpay,
    SiRedux,
  } from "react-icons/si";
  import { RiTailwindCssFill } from "react-icons/ri";
  import {
    FaAws,
    FaDocker,
    FaGithub,
  } from "react-icons/fa";

const Tech = () => {
  return (
    <div className="wrapper hidden w-full h-14 md:flex items-center overflow-x-scroll no-scrollbar">
      <div className="item item1 flex gap-2 items-center justify-center" > <FaGithub />Github</div>
      <div className="item item2 flex gap-2 items-center justify-center" > <SiCloudinary />Cloudinary</div>
      <div className="item item3 flex gap-2 items-center justify-center" > <FaDocker />Docker</div>
      <div className="item item4 flex gap-2 items-center justify-center" > <FaAws />Aws</div>
      <div className="item item5 flex gap-2 items-center justify-center" > <RiTailwindCssFill />TailwindCss</div>
      <div className="item item6 flex gap-2 items-center justify-center" > <SiRedux />Redux</div>
      <div className="item item7 flex gap-2 items-center justify-center" > <SiRazorpay />Razorpay</div>
      <div className="item item8 flex gap-2 items-center justify-center" > <SiNginx />Nginx</div>
      <div className="item item9 flex gap-2 items-center justify-center" > <SiFirebase /> Firebase</div>
      
    </div>
  );
};

export default Tech;
