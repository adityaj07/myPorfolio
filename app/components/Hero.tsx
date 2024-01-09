"use client";

import { FC } from "react";
import BackgroundImage from "./BackgroundImage";
import Clock from "react-live-clock";

const Hero: FC = () => {
  return (
    <div className="overflow-hidden">
      <BackgroundImage />
      <div className="h-[45rem] w-full relative flex items-center justify-center flex-col">
        <p className="text-[2.80rem] md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-5 w-[90%] md:w-[70%] text-center">
          Hello, I'm Aditya
        </p>
        <p className="text-[1.3rem] md:text-xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 md:py-3 w-[70%] text-center">
          A Full Stack Web Developer
        </p>
        <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3 w-[70%] text-center">
          Its currently
          <span className="font-bold mx-1">
            <Clock
              format={"h:mm:ssa"}
              ticking={true}
              timezone={"Asia/Kolkata"}
              noSsr={false}
            />
          </span>{" "}
          here in Mumbai, India📍
        </p>
      </div>
    </div>
  );
};

export default Hero;

