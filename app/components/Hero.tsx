"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
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

  const contactEmail = process.env.NEXT_PUBLIC_MY_EMAIL;
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
          className="text-[2.70rem] md:text-[5rem] lg:text-[6rem] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 md:py-5 w-[90%] md:w-[70%] text-center [text-shadow:0_0_10px_rgba(255,255,255,0.15),0_0_20px_rgba(168,85,247,0.1)]"
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
          className="md:text-[1.2rem] lg:text-[1.3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3 w-[90%] text-center z-20"
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
          className="flex gap-6 mt-6 relative z-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="https://github.com/adityaj07"
            className="text-xl md:text-2xl cursor-pointer hover:text-purple-400 transition-colors duration-300 relative z-30" // Added relative z-30
            target="_blank"
            aria-label="GitHub Profile"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://twitter.com/adityaj07_tw"
            className="text-xl md:text-2xl cursor-pointer hover:text-purple-400 transition-colors duration-300 relative z-30" // Added relative z-30
            target="_blank"
            aria-label="Twitter Profile"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://linkedin.com/in/aditya-joshi"
            className="text-xl md:text-2xl cursor-pointer hover:text-purple-400 transition-colors duration-300 relative z-30" // Added relative z-30
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </Link>
        </motion.div>

        <motion.div
          className="mt-14 relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Link
            href={`mailto:${contactEmail}?subject=Work%20Inquiry%20from%20Portfolio&body=Hi%20Aditya,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.`}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600/50 to-amber-500/50 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse-slow"></div>
            <button className="relative flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-full border border-zinc-700/50 text-white text-sm font-medium transition-all duration-300 group-hover:border-purple-500/50">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>Available for Hire</span>
              <HiOutlineMail className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
