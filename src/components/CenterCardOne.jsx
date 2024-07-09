import React from "react";

const CenterCardOne = () => {
  return (
    <div className="w-full ">
      <div className="w-[85%] lg:w-[38%] h-56 bg-[#151515] mx-auto lg:ml-28 rounded-t-2xl p-6 flex items-center gap-6 hover:bg-[#313131]">
        <div className="w-40 h-44 bg-sky-100 rounded-2xl border-[6px] border-zinc-800 overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Basics of Crypto</h1>
          <h2 className="text-zinc-400 h-10 text-sm overflow-hidden mb-2">
            The safest and easiest place to start your crypto journey!
          </h2>
          <div className="flex items-center gap-2 border-dashed border-t-[1px] border-zinc-600 pt-4">
            <img
              className="h-4"
              src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
              alt=""
            />
            <h2>1490 XPs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterCardOne;
