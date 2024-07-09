import React from "react";
import Button from "./Button";

const CenterCardThree = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] h-[85vh] bg-[#151515] rounded-lg mx-auto p-4">
        <div className="w-full h-[70%] rounded-xl overflow-hidden ">
          <img
            className="w-full h-full object-fit"
            src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between mt-4 border-dashed border-b-[1px] border-zinc-700 pb-4">
          <h1 className="text-xl text-zinc-400 font-semibold">
            Exclusive Community
          </h1>
          <h2 className="text-xl">Earndrop</h2>
        </div>
        <div className="w-full flex items-center justify-between mt-4 ">
          <h2 className="text-sm text-zinc-500">
            Complete all Essential quests
          </h2>
          <div>
            <Button />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 mb-2">
          <h2 className="text-sm text-zinc-500">
            Complete at least 1 Alpha Hub quest today
          </h2>
          <div>
            <Button />
          </div>
        </div>
        <button className="py-2 px-[32vw] bg-zinc-800 lg:px-[8.8vw]">
          Claim Now
        </button>
      </div>
    </div>
  );
};

export default CenterCardThree;
