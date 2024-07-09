import React from "react";
import ScrollCard from "./ScrollCard";

const ScrollCards = () => {
  const data = [
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
      num: 1,
      title: "But what in crypto end..",
      task: "11 tasks",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg",
      num: 2,
      title: "Setting up your own we..",
      task: "8 tasks",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg",
      num: 3,
      title: "What the heck is a ",
      task: "9 tasks",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg",
      num: 4,
      title: "Swapping and bridging",
      task: "5 tasks",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg",
      num: 5,
      title: "NFTs and why they are",
      task: "3 tasks",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg",
      num: 6,
      title: "Doing quests and winning",
      task: "7 tasks",
    },
  ];

  return (
    <div className="w-[85%] lg:w-[38%] h-[47vh] px-6 py-4 mx-auto lg:ml-28 bg-[#101010] overflow-x-auto">
      {data.map((item, index) => (
        <ScrollCard key={index} data={item} />
      ))}
    </div>
  );
};

export default ScrollCards;
