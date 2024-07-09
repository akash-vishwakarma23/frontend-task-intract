import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillDiscord } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#000000] px-4 pt-16 lg:px-10 ">
      <div className="lg:flex lg:items-center lg:gap-20 border-b-[1px] border-zinc-700 lg:pb-10">
        <div className="pb-16">
          <h1 className="text-[6vw] mb-4 lg:text-[3vw] lg:mb-3 ">Intract.</h1>
          <h3 className="w-[70%] mb-8 text-sm text-zinc-500 lg:w-[80%]">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </h3>
        </div>
        <div className="w-full flex flex-wrap gap-20 border-b-[1px] border-zinc-700 lg:border-none">
          <div>
            <h3 className="text-lg mb-2 uppercase">intract</h3>
            <ul className="text-sm text-zinc-500 flex flex-col gap-2">
              <li>Explore Quests</li>
              <li>Communities</li>
              <li>Alpha Hub</li>
            </ul>
          </div>
          <div className="ml-7">
            <h3 className="text-lg mb-2 uppercase">Earn</h3>
            <ul className="text-sm text-zinc-500 flex flex-col gap-2">
              <li>Refer & Earn</li>
              <li>Leaderboard</li>
              <li>Achivements</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-2 uppercase">About</h3>
            <ul className="text-sm text-zinc-500 flex flex-col gap-2">
              <li>Product Roadmap</li>
              <li>Affiliate Program</li>
              <li>Sign Up Program</li>
              <li>Growth Community</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-2 uppercase">Support</h3>
            <ul className="text-sm text-zinc-500 flex flex-col gap-2 mb-4">
              <li>Help center</li>
              <li>Create your quest</li>
              <li>Terms Of Services</li>
              <li>Privacy Policy</li>
              <li>Community Guidelines </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-sm mt-5 border-b-[1px] border-zinc-700 pb-4 lg:py-10 lg:mt-0 lg:pr-20 lg:text-md ">
        Disclaimer:{" "}
        <span className="text-zinc-500 lg:text-sm">
          Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
          can be highly risky. There may be no regulatory recourse for any loss
          from such transactions. We advise the viewer to proceed with caution.
          Nothing in this website or any communication published by us amounts
          to, is intended to be, or should be construed as investment or
          purchase advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </span>
      </h2>

      <div className="lg:flex lg:items-center lg:justify-between lg:pb-2">
        <h1 className="uppercase mt-4 font-semibold">
          created by <span className="border-b-[1px]">intract</span>
        </h1>
        <div className="flex gap-4 mt-4 text-xl text-blue-400 pb-4 cursor-pointer">
          <FaSquareXTwitter />
          <AiFillDiscord />
          <FaTelegram />
          <FaSpotify />
        </div>
      </div>
    </div>
  );
};

export default Footer;
