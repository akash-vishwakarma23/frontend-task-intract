import React from "react";
import Button from "./Button";

const ScrollCard = ({ data }) => {
  return (
    <div className="w-full">
      <div className="w-full h-24 bg-[#151515] mx-auto rounded-xl border-[1px] border-zinc-800 py-2 px-2 flex items-center gap-4 mb-2 hover:bg-[#313131]">
        <div className="w-[125px] h-[78px] rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src={data.image} alt="" />
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-1 border-dashed border-b-[1px] border-zinc-700 text-xl font-semibold mb-4 pb-2">
            <h2>#{data.num}:</h2>
            <h1 className="h-6 overflow-hidden">{data.title}</h1>
          </div>
          <div className="w-full flex items-center gap-4 ">
            <h2 className="w-[200px] text-sm leading-none tracking-tight">
              {data.task}
            </h2>
            <div className="w-32 h-2 bg-zinc-800 border-[1px] border-zinc-700 rounded-xl"></div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;
