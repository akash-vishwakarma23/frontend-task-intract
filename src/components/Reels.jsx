import React from "react";
import Reel from "./Reel";

const Reels = () => {
  const data = [
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
      title: "How to plan your retirement with crypto?",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
      title: "Why are there limited Bitcoin?",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
      title: "How does Uniswap actually work?",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
      title: "How to spot crypto projects to invest in?",
    },
  ];
  return (
    <div className="border-y-[1px] border-zinc-800 pb-20 lg:mt-16">
      <div className="w-full px-4 pt-8 mb-10 text-center ">
        <h1 className="text-[5.3vw] font-semibold mb-[2px] lg:text-[1.6vw]">
          Top Crypto Creators and Projects to Follow
        </h1>
        <h2 className="font-semibold text-[3.5vw] text-zinc-500 lg:text-[1.1vw]">
          Answers to your crypto doubts, straight from the experts
        </h2>
      </div>
      <div className="lg:flex lg:justify-between">
        {data.map((item, index) => (
          <Reel key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Reels;
