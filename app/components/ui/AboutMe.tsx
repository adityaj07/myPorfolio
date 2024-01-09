import Image from "next/image";
import { FC } from "react";
import {
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode, TbSquareRoundedLetterP } from "react-icons/tb";
import SocialBadge from "./SocialBadge";
import Link from "next/link";


interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <div className=" rounded-lg p-[1px] my-2 w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-[#121312] rounded-lg p-8 flex flex-col md:flex-row gap-6 ">
        <div className="flex items-center mx-auto md:w-[80%]">
          <Image
            src="/adi.jpeg"
            width={300}
            height={300}
            alt="Adi Image"
            className="rounded-full w-[150px] md:w-[300px] shadow-[0_10px_20px_rgba(142,_0,_203,_0.7)]"
          />
          
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl mb-4 md:mb-6 text-white font-medium md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center md:text-start inline md:border-b md:w-[18%]">
            About me
            <div className="border-b md:border-none w-[33%] mt-[0.2rem] mx-auto"></div>
          </h2>
          <p className="text-[0.925rem] md:text-base">
          Hey, I'm Aditya Joshi, a passionate full-stack web developer dedicated to turning ideas into dynamic digital experiences. I thrive on the challenges of turning ideas into dynamic digital experiences. Beyond the screen, I explore new technologies and enjoy the ever-evolving landscape of web development. 
          Let's connect and explore the endless possibilities together!
          </p>
          <div className="grid grid-cols-2 md:flex justify-start items-center gap-4 mt-6">
            <SocialBadge name="Github" link="https://github.com/adityaj07" icon={<FaGithub className="w-5 h-5"/>}/>
            <SocialBadge name="Twitter" link="https://twitter.com/adityaj07_tw" icon={<FaXTwitter className="w-5 h-5"/>}/>
            <SocialBadge name="LinkedIn" link="https://www.linkedin.com/in/aditya-joshi" icon={<FaLinkedin className="w-5 h-5"/>}/>
            <SocialBadge name="Leetcode" link="https://github.com/adityaj07" icon={<TbBrandLeetcode className="w-5 h-5"/>}/>
          </div>
          <Link href="/contact"></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
