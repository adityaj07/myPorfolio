"use client"

import React, { FC } from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import AboutMe from "../components/ui/AboutMe";
import TechStack from "../components/ui/TechStack";
import { motion } from "framer-motion";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <motion.div
      className=" w-[90%] lg:w-[60%] lg:p-12 mx-auto mb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-10 md:mt-0">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "About",
              href: "/about",
              active: true,
            },
          ]}
        />
      </div>

      <h1 className="text-2xl mb-4 md:mb-6  font-semibold md:text-3xl relative border-b border-zinc-500/40 pb-4 inline-flex gap-1 items-center tracking-tighter text-[clamp(2.5rem,5vw,3rem)] leading-none w-full">
        About
      </h1>
      <AboutMe />

      <h2 className="text-2xl mb-4 md:mb-6  font-semibold md:text-3xl relative border-b border-zinc-500/40 pb-4 inline-flex gap-1 items-center tracking-tighter text-[clamp(1rem,5vw,1.5rem)] leading-none w-full mt-6">
        My Tech Stack
      </h2>
      <TechStack />
    </motion.div>
  );
};

export default page;
