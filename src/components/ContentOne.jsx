import React from "react";

const ContentOne = () => {
  return (
    <div
      className="w-full h-[42vh] lg:h-[100vh] bg-cover lg:bg-contain bg-no-repeat bg-top lg:pt-36"
      style={{
        backgroundImage:
          "url('https://www.intract.io/assets/intract-academy-background-5547a705.png')",
      }}
    >
      <div className="ml-[32%] mb-10 lg:flex lg:flex-col lg:items-center lg:ml-0">
        <h2 className="text-lg text-zinc-400 tracking-tight leading-none pl-2 font-semibold lg:mr-[10%] lg:text-[1.5vw] ">
          Intract
        </h2>
        <h1 className="w-fit text-[9vw] font-bold italic font-[] tracking-tight leading-none pb-4 border-b-[1px] border-zinc-700 lg:text-[3.5vw]">
          Academy
        </h1>
      </div>
      <h2 className="mx-auto w-[80%] text-[3.7vw] text-center font-semibold tracking-tight leading-tight lg:text-[1.5vw]">
        Intract users{" "}
        <span className="text-zinc-500">have together made more than</span> $100{" "}
        million <span className="text-zinc-500">in web3.</span>{" "}
      </h2>
      <h2 className="text-[3.7vw] text-center font-semibold tracking-tight leading-tight mb-12 lg:text-[1.5vw]">
        <span className="text-zinc-500">Join them and</span> learn how to earn
        crypto!{" "}
      </h2>
      <div className="flex justify-center">
        <div className="bg-[#7142EB] w-52 h-10 rounded-md flex items-center justify-center gap-2 cursor-pointer">
          <h2 className="text-sm">Get Started</h2>
          <img
            className="text-sm"
            src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
