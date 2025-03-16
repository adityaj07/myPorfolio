"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projects } from "../../../data";
import Breadcrumbs from "../../components/BreadCrumbs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

const ProjectDetail: FC = () => {
  const params = useParams();
  const projectSlug = params.projectSlug as string;
  const [activeImage, setActiveImage] = useState(0);

  const project = projects.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-8">
          Sorry, we couldn't find a project with the slug "{projectSlug}"
        </p>
        <Link
          href="/projects"
          className="px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="w-[90%] lg:w-[70%] mx-auto h-fit mb-24 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-10 md:mt-0">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            {
              label: project.name,
              href: `/projects/${projectSlug}`,
              active: true,
            },
          ]}
        />
      </div>

      {/* Project Header Section */}
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
      >
        <h1 className="text-3xl md:text-5xl font-semibold relative border-b border-zinc-500/40 pb-4 inline-flex items-baseline gap-2 tracking-tight leading-none w-full">
          {project.name}
          <span className="text-base font-normal text-zinc-400 hidden md:inline-block">
            {project.timeline || "2023"}
          </span>
        </h1>
      </motion.div>

      {/* Hero Image with parallax effect */}
      <motion.div
        className="mt-8 overflow-hidden rounded-xl relative aspect-video group"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <Image
          src={project.coverImg}
          alt={project.name}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick links overlay */}
        <div className="absolute bottom-0 right-0 p-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <FaGithub className="text-lg" />
            </Link>
          )}
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <HiOutlineExternalLink className="text-lg" />
            </Link>
          )}
        </div>
      </motion.div>

      {/* Project Summary & Tech Stack */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={2}
      >
        <div className="md:col-span-2">
          <h2 className="text-xl font-medium mb-4 text-zinc-200">Overview</h2>
          <p className="text-zinc-300 leading-relaxed">{project.desc}</p>
        </div>
        <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
          <h2 className="text-xl font-medium mb-4 text-zinc-200">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-zinc-800 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <h3 className="text-sm text-zinc-400 mb-3">Project Links</h3>
            <div className="flex flex-col gap-3">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 bg-zinc-800/60 rounded-md hover:bg-zinc-700/60 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <FaGithub />
                    GitHub Repository
                  </span>
                  <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )}
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 bg-zinc-800/60 rounded-md hover:bg-zinc-700/60 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <HiOutlineExternalLink />
                    Live Demo
                  </span>
                  <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <motion.div
        className="mt-12 grid gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={3}
      >
        {/* Details Section */}
        <div>
          <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-zinc-800">
            Project Details
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            {project.longDescription ||
              "This project was built to solve specific challenges in the domain. The implementation focuses on delivering a seamless user experience while maintaining high performance and scalability."}
          </p>
        </div>

        {/* Features Section with cards */}
        <div>
          <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-zinc-800">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features?.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/30 p-5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <span className="inline-block px-2 py-1 bg-zinc-800 rounded-md text-xs mb-2">
                  Feature {index + 1}
                </span>
                <p className="text-zinc-200">{feature}</p>
              </motion.div>
            )) || (
              <div className="bg-zinc-900/30 p-5 rounded-lg border border-zinc-800">
                <p className="text-zinc-400">Feature details coming soon</p>
              </div>
            )}
          </div>
        </div>

        {/* Implementation Section */}
        <div>
          <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-zinc-800">
            Technical Implementation
          </h2>
          <div className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-800">
            <p className="text-zinc-300 leading-relaxed">
              {project.implementation ||
                "This project was implemented using modern development practices. The architecture focuses on maintainability and performance, with careful attention to user experience and accessibility."}
            </p>
          </div>
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div>
            <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-zinc-800">
              Screenshots
            </h2>

            {/* Main featured screenshot */}
            <div className="mb-4 rounded-lg overflow-hidden relative aspect-video">
              <Image
                src={project.screenshots[activeImage]}
                alt={`${project.name} featured screenshot`}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-4 gap-2">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`rounded-md overflow-hidden relative aspect-video cursor-pointer transition-all ${
                    activeImage === index
                      ? "ring-2 ring-purple-500 opacity-100 scale-100"
                      : "opacity-60 hover:opacity-100 scale-95 hover:scale-100"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={screenshot}
                    alt={`${project.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Next / Prev Project Navigation */}
      <motion.div
        className="mt-16 pt-8 border-t border-zinc-800 flex justify-between"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={5}
      >
        <Link
          href="/projects"
          className="px-5 py-2 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-lg flex items-center gap-2"
        >
          Back to All Projects
        </Link>

        <div className="flex gap-3">
          {/* Add previous/next project links if you want them */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
