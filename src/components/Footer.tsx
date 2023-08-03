import React, { useEffect, useState } from "react";

// interfaces
import { FooterProps } from "../interfaces";

// helper
import { convertTime } from "../helper/function";

const Footer: React.FC<FooterProps> = ({ startTimer }) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    let interval: number;

    if (startTimer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [startTimer]);

  return (
    <div className="flex items-center max-w-xl m-auto justify-between mt-14 gap-16">
      <div className="bg-gray-400 py-2 px-4 rounded-md w-1/2 text-center">
        <h3 className="text-xs mb-1 text-slate-600">Time</h3>
        <h2 className="text-sm text-slate-800">{convertTime(timer)}</h2>
      </div>

      <div className="bg-gray-400 py-2 px-4 rounded-md w-1/2 text-center">
        <h3 className="text-xs mb-1 text-slate-600">Score</h3>
        <h2 className="text-sm text-slate-800">0</h2>
      </div>
    </div>
  );
};

export default Footer;
