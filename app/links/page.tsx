"use client";

import React, { FC } from "react";
import Link from "next/link";
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbSquareRoundedLetterP, TbBrandLeetcode } from "react-icons/tb";
import Breadcrumbs from "../components/BreadCrumbs";
import { motion } from "framer-motion";

const links = [
  {
    name: "Github",
    username: "adityaj07",
    link: "https://github.com/adityaj07",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    username: "adityaj07_tw",
    link: "https://twitter.com/adityaj07_tw",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    name: "Discord",
    username: "adityaj07",
    link: "https://discord.com/users/adityaj07",
    icon: <FaDiscord className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    username: "adityaj07",
    link: "https://www.linkedin.com/in/adityaj07",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "Leetcode",
    username: "adityaj-07",
    link: "https://www.leetcode.com/adityaj-07",
    icon: <TbBrandLeetcode className="w-5 h-5" />,
  },
  {
    name: "PeerList",
    username: "adityaj07",
    link: "https://peerlist.dev/adityaj07",
    icon: <TbSquareRoundedLetterP className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    username: "adiijoshii",
    link: "https://www.instagram.com/adiijoshii",
    icon: <FaInstagram className="w-5 h-5" />,
  },
];

const Page: FC = () => {
  return (
    <motion.div
      className="w-full h-screen md:h-[49.5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col w-[90%] gap-4 md:w-3/5 mx-auto ">
        <div className="mt-10 md:mt-0">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              {
                label: "Links",
                href: "/links",
                active: true,
              },
            ]}
          />
        </div>
        <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 font-semibold relative inline-flex gap-1 items-center tracking-tighter text-[clamp(2.5rem,5vw,3rem)] leading-none border-b border-zinc-600/40 pb-4">
          Links
        </h1>
        <div className="link__container rounded-lg p-[1px] my-2 w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
          <ul className="bg-[#161716] rounded-lg p-4 flex flex-col gap-4">
            {links.map((linkObj) => (
              <li
                className="px-4 py-4 text-lg rounded-lg bg-[#26262A] hover:bg-[#101012] cursor-pointer transition-colors duration-150 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                key={linkObj.name}
              >
                <Link
                  href={linkObj.link}
                  target="_blank"
                  className="text-sm md:text-lg"
                >
                  <div className="flex items-center space-x-2">
                    {linkObj.icon}
                    <span className="leading-6">
                      {`${linkObj.name} - ${linkObj.username}`}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
