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
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold gap-1 text-center md:items-start tracking-tighter text-[clamp(1rem,5vw,1.5rem)] leading-none inline-flex mb-4 border-b w-fit pb-2">
            About me
          </h2>
          <p className="font-normal items-center tracking-wide text-base md:text-sm leading-normal">
          Hey, I&apos;m Aditya Joshi, a passionate full-stack web developer dedicated to turning ideas into dynamic digital experiences. I thrive on the challenges of turning ideas into dynamic digital experiences. Beyond the screen, I explore new technologies and enjoy the ever-evolving landscape of web development. 
          Let&apos;s connect and explore the endless possibilities together!
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
