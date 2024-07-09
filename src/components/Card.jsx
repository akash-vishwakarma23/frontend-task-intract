import React from "react";
import { GoBook } from "react-icons/go";

const Card = () => {
  return (
    <div className="w-full h-[60vh] lg:h-fit border-b-[1px] border-zinc-700">
      <h1 className="text-center text-[5.8vw] font-semibold pt-8 mb-1 lg:text-[2vw]">
        Crypto Dictionary
      </h1>
      <h2 className="text-center font-semibold text-zinc-400 mb-6 lg:text-zinc-500">
        Your one-stop to catch up on all crypto terms
      </h2>

      <div
        className="w-[90%] h-[35vh] lg:h-[70vh] lg:w-[88%] mx-auto lg:mx-20 rounded-2xl flex items-end justify-between p-5 bg-cover bg-no-repeat bg-center lg:mb-32"
        style={{
          backgroundImage:
            "url(https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg)",
        }}
      >
        <div>
          <h1 className="text-[5.3vw] font-semibold lg:text-[2vw]">
            Web3 + Degen Glossary
          </h1>
          <h2 className="text-md font-semibold text-zinc-300 text-zinc-400">
            Your own crypto dictionary
          </h2>
        </div>
        <div className="relative w-14 h-14 rounded-full bg-[#3D4944]">
          <GoBook className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
