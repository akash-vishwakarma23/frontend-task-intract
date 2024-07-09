import React from "react";
import { RiInformationLine } from "react-icons/ri";

const CenterCardFour = () => {
  return (
    <div className="w-full h-[45vh] py-2 lg:w-[28%] lg:ml-[66%] lg:absolute lg:top-[385%] mb-20">
      <div className="w-[90%] h-[42vh] mx-auto border-[1px] border-zinc-900 rounded-lg p-4">
        <div className="flex items-center gap-2 text-zinc-600 border-dashed border-b-[1px] border-zinc-700 pb-4">
          <h2 className="font-semibold">Reward info</h2>
          <RiInformationLine className="text-lg" />
        </div>
        <h2 className="mt-4 font-semibold mb-4">
          Free access to paid KOL (crypto earning) communities!
        </h2>
        <h4 className="text-sm text-zinc-500 font-semibold ">
          Win access to exclusive earning communities of some of the the
          greatest earners in crypto for a month, every 24 hours. Get access to
          unmatched insights, a close-knit community of the best airdrop
          earners, and more. <br />
          <br /> To win: make sure you've connected your Twitter and Discord
          accounts - and follow our criteria!
        </h4>
      </div>
    </div>
  );
};

export default CenterCardFour;
