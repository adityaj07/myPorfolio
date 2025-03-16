"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <motion.div
      className="w-full my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay noise"></div>

        {/* Background gradient accents */}
        <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-purple-900/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/4 bg-indigo-900/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          {/* Image Column */}
          <motion.div
            className="flex justify-center md:justify-start md:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-2 border-zinc-800/50">
                <Image
                  src="/adi.jpeg"
                  fill
                  sizes="(max-width: 768px) 160px, 200px"
                  alt="Aditya Joshi"
                  className="object-cover"
                />
              </div>

              {/* Minimal decorative elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-[10px]"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="flex flex-col md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                About me
              </h2>

              <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-purple-300 mb-6"></div>

              <p className="text-zinc-300 leading-relaxed mb-6">
                Hey, I&apos;m Aditya Joshi, a passionate full-stack web
                developer dedicated to turning ideas into dynamic digital
                experiences. I thrive on challenges and continuously explore new
                technologies in the ever-evolving landscape of web development.
                Let&apos;s connect and explore the endless possibilities
                together!
              </p>
            </motion.div>

            {/* Social Links - Cleaner, more minimal design */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link
                href="https://github.com/adityaj07"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm">GitHub</span>
              </Link>

              <Link
                href="https://twitter.com/adityaj07_tw"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-lg" />
                <span className="text-sm">Twitter</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/aditya-joshi"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-lg" />
                <span className="text-sm">LinkedIn</span>
              </Link>

              <Link
                href="https://leetcode.com/adityaj07"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
                rel="noopener noreferrer"
              >
                <TbBrandLeetcode className="text-lg" />
                <span className="text-sm">LeetCode</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 transition-colors"
              >
                <span className="text-sm">Contact Me</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
