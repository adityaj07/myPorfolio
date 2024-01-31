"use client";

import { FC } from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import Projects from "../components/ui/Projects";
import { motion } from "framer-motion";

const page: FC = () => {
  return (
    <motion.div
      className=" w-[90%] lg:w-[60%] lg:p-12 mx-auto h-fit mb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-10 md:mt-0">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Projects",
              href: "/projects",
              active: true,
            },
          ]}
        />
      </div>

      <h1 className="text-2xl mb-4 md:mb-6  font-semibold md:text-3xl relative border-b border-zinc-500/40 pb-4 inline-flex gap-1 items-center tracking-tighter text-[clamp(2.5rem,5vw,3rem)] leading-none w-full">
        Projects
      </h1>
      <Projects />
    </motion.div>
  );
};

export default page;
