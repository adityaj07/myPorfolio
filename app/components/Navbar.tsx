"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { BsFillCameraFill } from "react-icons/bs";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { LuConstruction } from "react-icons/lu";

interface NavLink {
  path: string;
  icon: React.ReactNode;
  name: string;
}

const links: NavLink[] = [
  { path: "/", icon: <AiFillHome size={20} />, name: "Home" },
  { path: "/about", icon: <FaUserAlt size={20} />, name: "About" },
  { path: "/projects", icon: <LuConstruction size={20} />, name: "Projects" },
  { path: "/gallery", icon: <BsFillCameraFill size={20} />, name: "Gallery" },
  { path: "/links", icon: <BiLink size={20} />, name: "Links" },
  // { path: "/contact", icon: <FaEnvelope size={20} />, name: "Contact" },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <motion.nav
      className="z-[20] fixed bottom-0 left-[1.5rem] right-[1.5rem] md:sticky md:top-0 md:block md:w-[40%] py-6 lg:w-[20%] mx-auto"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-[1px] pointer-events-auto rounded-full text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <ul className="flex items-center justify-between py-4 px-6 rounded-full text-white/90 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 ring-white/10">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path} className="relative">
                <Link href={link.path} passHref>
                  <div
                    className={`cursor-pointer transition-colors duration-150 relative ${
                      isActive
                        ? "text-purple-400"
                        : "text-zinc-400 hover:text-purple-300"
                    }`}
                    title={link.name}
                  >
                    {link.icon}

                    {/* Active indicator dot
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-1/2 w-1 h-1 bg-purple-500 rounded-full -translate-x-1/2"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )} */}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
