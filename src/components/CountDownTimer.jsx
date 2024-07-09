import React, { useState, useEffect } from "react";
import { TfiTimer } from "react-icons/tfi";

const CountDownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full h-40">
      <div className="w-[90%] h-full bg-[#151515] rounded-2xl mx-auto p-3">
        <div className="flex items-center gap-3 border-dashed border-b-[1px] pb-4 border-zinc-700">
          <TfiTimer className="text-red-500" />
          <h2>Rewards unlock in</h2>
        </div>
        <div
          className="w-full h-20  mx-auto my-3 flex px-10 py-2 items-center justify-between"
          style={{
            backgroundImage:
              "url('https://www.intract.io/assets/dotBg-149528a0.png')",
          }}
        >
          <div>
            <h1 className="text-4xl font-semibold">{timeLeft.days}</h1>
            <h2 className="text-sm text-zinc-500 font-semibold text-center">
              Days
            </h2>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">{timeLeft.hours}</h1>
            <h2 className="text-sm text-zinc-500 font-semibold text-center">
              Hrs
            </h2>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">{timeLeft.minutes}</h1>
            <h2 className="text-sm text-zinc-500 font-semibold text-center">
              Mins
            </h2>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">{timeLeft.seconds}</h1>
            <h2 className="text-sm text-zinc-500 font-semibold text-center">
              Sec
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
