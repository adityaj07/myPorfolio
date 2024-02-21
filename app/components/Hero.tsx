"use client";

import { FC } from "react";
import BackgroundImage from "./BackgroundImage";
import Clock from "react-live-clock";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="overflow-hidden">
      <BackgroundImage />
      <motion.div
        className="h-[45rem] w-full relative flex items-center justify-center flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[2.70rem] md:text-[5rem] lg:text-[6rem] md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 md:py-5 w-[90%] md:w-[70%] text-center ">
          Hello, I&apos;m Aditya
        </p>
        <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[2rem] md:text-xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 md:py-3 w-[70%] text-center">
          A Full Stack Web Developer
        </p>
        <p className="md:text-[1.2rem] lg:text-[1.3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3 w-[90%] text-center">
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
        <div className="flex gap-4 mt-4">
          <Link href="https://github.com/adityaj07" className="text-xl md:text-2xl cursor-pointer" target="_blank">
            <FiGithub />
          </Link>
          <Link href="https://twitter.com/adityaj07_tw" className="text-xl md:text-2xl cursor-pointer" target="_blank">
          <FaXTwitter />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
