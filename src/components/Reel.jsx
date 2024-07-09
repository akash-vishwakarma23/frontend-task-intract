import React from "react";
import { IoPlay } from "react-icons/io5";

const Reel = ({ data }) => {
  return (
    <div className=" px-10 w-full   ">
      <div className="relative w-[90%] h-[58vh] lg:w-[18vw] mx-auto rounded-2xl mt-4 overflow-hidden ">
        <img className="w-full h-full object-cover " src={data.image} alt="" />
        <h1 className="absolute bottom-4 left-3 text-[6vw] font-semibold tracking-tight leading-none lg:text-[1.5vw]">
          {data.title}
        </h1>
        <div className="absolute w-10 h-10 rounded-full bg-transparent border-[1px] border-zinc-500 top-4 right-4">
          <img
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            src="https://www.intract.io/assets/reel-video-ee824737.svg"
            alt=""
          />
        </div>
        <div className="absolute w-12 h-12 rounded-full opacity-[0.7] bg-zinc-700 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:hidden ">
          <IoPlay className="absolute text-[6vw] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:text-[2vw] " />
        </div>
      </div>
    </div>
  );
};

export default Reel;
