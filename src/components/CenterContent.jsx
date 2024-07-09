import React from "react";
import CenterCardOne from "./CenterCardOne";
import ScrollCards from "./ScrollCards";
import CenterCardTwo from "./CenterCardTwo";
import CountDownTimer from "./CountDownTimer";
import CenterCardThree from "./CenterCardThree";
import CenterCardFour from "./CenterCardFour";

const CenterContent = () => {
  const targetDate = "2024-7-20";

  return (
    <div>
      <CenterCardOne />
      <div className="lg:flex">
        <ScrollCards />
        <div className="flex flex-col items-center my-20 lg:w-[100vh] ">
          <CenterCardTwo />
        </div>
      </div>

      <div className=" lg:ml-[30%] lg:w-full lg:pt-36">
        <CenterCardOne />
        <ScrollCards />
      </div>
      <div className="flex flex-col items-center lg:items-start my-20 lg:-mt-[18%] lg:mr-[50%] lg:mb-36">
        <CenterCardTwo />
      </div>
      <div className="lg:flex lg:flex-col lg:items-center">
        <div className="pt-20 mb-4 lg:w-[28%]">
          <CountDownTimer targetDate={targetDate} />
        </div>
        <div className="lg:w-[28%]">
          <CenterCardThree />
        </div>
      </div>
      <CenterCardFour />
    </div>
  );
};

export default CenterContent;
