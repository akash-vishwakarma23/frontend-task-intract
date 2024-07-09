import React from "react";
import Button from "./Button";

const CenterCardTwo = () => {
  return (
    <div className="w-1/2 pt-8 lg:pt-0">
      <div className="w-40 h-[56vh] mx-auto">
        <div className="ml-16">
          <Button />
        </div>
        <div className="w-full h-44 border-[1px] rounded-2xl overflow-hidden mb-4 mt-4">
          <img
            className="h-full w-full object-fit"
            src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
            alt=""
          />
        </div>
        <h2 className="font-semibold text-xl text-zinc-400 mb-2 lg:w-[20vw]">
          Intract Certified: Learner NFT
        </h2>
        <h3 className="mb-4 text-sm text-zinc-700 font-bold">
          Your crypto black-belt certificate
        </h3>
        <button className="px-[60px] py-2 bg-[#101010] text-md font-semibold rounded-md ">
          Claim
        </button>
      </div>
    </div>
  );
};

export default CenterCardTwo;
