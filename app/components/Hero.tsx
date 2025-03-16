"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Clock from "react-live-clock";
import BackgroundImage from "./BackgroundImage";

const Hero: FC = () => {
  // Disable scrolling on mount and re-enable on unmount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden">
      <BackgroundImage />
      <motion.div
        className="h-full w-full flex items-center justify-center flex-col px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-[2.70rem] md:text-[5rem] lg:text-[6rem] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 md:py-5 w-[90%] md:w-[70%] text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I&apos;m Aditya
        </motion.p>
        <motion.p
          className="text-[1.1rem] md:text-[1.8rem] lg:text-[2rem] relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 md:py-3 w-[70%] text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A Full Stack Web Developer
        </motion.p>
        <motion.p
          className="md:text-[1.2rem] lg:text-[1.3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3 w-[90%] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          It&apos;s currently
          <span className="font-bold mx-1">
            <Clock
              format={"h:mm:ss a"}
              ticking={true}
              timezone={"Asia/Kolkata"}
              noSsr={false}
            />
          </span>{" "}
          here in Mumbai, India📍
        </motion.p>
        <motion.div
          className="flex gap-6 mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="https://github.com/adityaj07"
            className="text-xl md:text-2xl cursor-pointer hover:text-purple-400 transition-colors duration-300"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://twitter.com/adityaj07_tw"
            className="text-xl md:text-2xl cursor-pointer hover:text-purple-400 transition-colors duration-300"
            target="_blank"
            aria-label="Twitter Profile"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://linkedin.com/in/aditya-joshi"
            className="text-xl md:text-2xl cursor-pointer hover:text-purple-400 transition-colors duration-300"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
