import { FC } from 'react'
import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { LuConstruction } from "react-icons/lu";

const links = [
  { path: "/", icon: <AiFillHome size={20}/> },
  { path: "/about", icon: <FaUserAlt size={20}/> },
  { path: "/projects", icon: <LuConstruction size={20}/> },
  { path: "/gallery", icon: <BsFillCameraFill size={20}/> },
  { path: "/links", icon: <BiLink size={20}/> },
  { path: "/contact", icon: <FaEnvelope size={20}/> },
];


const Navbar: FC = () => {
    return (
        <nav className="z-[20] fixed bottom-0 left-[1.5rem] right-[1.5rem] md:sticky md:top-0 md:block md:w-[40%] py-6 lg:w-[20%] mx-auto">
          <div className="bg-white p-[1px] pointer-events-auto rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <ul className="flex items-center justify-between py-4 px-6 rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} passHref>
                    <div
                      className={`cursor-pointer hover:text-purple-800 transition-colors duration-150`}
                    >
                      {link.icon}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
}

export default Navbar