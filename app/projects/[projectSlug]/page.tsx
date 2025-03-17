"use client";

import { AnimatePresence, motion } from "framer-motion";
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
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const ProjectDetail: FC = () => {
  const params = useParams();
  const projectSlug = params.projectSlug as string;
  const [activeImage, setActiveImage] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  const project = projects.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-medium mb-4">Project Not Found</h2>
        <p className="mb-8 text-zinc-400">
          Sorry, we couldn&apos;t find the project you&apos;re looking for.
        </p>
        <Link
          href="/projects"
          className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="w-[90%] lg:w-[70%] mx-auto h-fit mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 md:mt-4"
        >
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
        </motion.div>

        {/* Hero Section */}
        <div className="mt-10 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project Heading & Description */}
          <motion.div
            className="md:col-span-5 flex flex-col justify-center z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-purple-400 font-medium uppercase tracking-wider">
                  {project.timeline || "2023"}
                </span>
                <span className="h-[1px] w-12 bg-purple-500/30"></span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                {project.name}
              </h1>

              <p className="text-zinc-300 leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3 mt-2">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-all duration-300 group"
                  >
                    <FaGithub className="text-lg" />
                    <span>GitHub</span>
                    <BsArrowUpRight className="text-xs opacity-50 group-hover:opacity-100 group-hover:transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-900/20 hover:bg-purple-900/40 border border-purple-700/30 rounded-lg transition-all duration-300 group"
                  >
                    <HiOutlineExternalLink className="text-lg" />
                    <span>Live Demo</span>
                    <BsArrowUpRight className="text-xs opacity-50 group-hover:opacity-100 group-hover:transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="md:col-span-7 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden border border-zinc-800/60 group cursor-pointer"
              onClick={() => setShowFullImage(true)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent opacity-30 z-10"></div>

              {/* Image */}
              <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-[1px]">
                <Image
                  src={project.coverImg}
                  alt={project.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04] opacity-90"
                />
              </div>

              {/* Zoom indicator */}
              <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 3H21V9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21H3V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3L14 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 21L10 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-zinc-800/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl font-medium mb-8 text-white flex items-center gap-3">
            <span className="w-1.5 h-5 bg-purple-500 rounded-full"></span>
            Technology Stack
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {project.tech.map((techPath, index) => {
              // Extract clean tech name from path or use original tech name if available
              const cleanTechName = () => {
                // Extract filename without extension
                const rawFilename =
                  techPath.split("/").pop()?.split(".")[0] || "";

                // Common tech name mappings for irregular filenames
                const techNameMap: Record<string, string> = {
                  // Add specific mappings for your oddly named files
                  // Examples (adjust based on your actual filenames):
                  astro: "Astro",
                  reactjs: "React",
                  nextjs: "Next.js",
                  nodejs: "Node.js",
                  "c++": "C++",
                  "cloudflare-workers": "Cloudflare Workers",
                  docker: "Docker",
                  hono: "Hono",
                  "mongodb-icon-2": "MongoDB",
                  "logo-javascript": "Javascript",
                  "nextjs-white": "Next.js",
                  "next-js": "Nextjs",
                  "nextjs-13": "Nextjs",
                  pnpm: "Pnpm",
                  postgresql: "Postgresql",
                  "prisma-white": "Prisma",
                  prisma: "Prisma",
                  "react-query": "React Query",
                  "python-5": "Python",
                  zustand: "Zustand",
                  redux: "Redux",
                  shadcn: "Shadcn",
                  "tailwind-css-2": "Tailwind CSS",
                  "ts-logo-128": "Typescript",
                  zod: "Zod",
                  "ubuntu-4": "Ubuntu",
                  turborepo: "Turborepo",
                  "java-4": "Java",
                  mongoose: "Mongoose",
                  "next-js-white": "Nextjs",
                };

                // If we have a direct mapping, use it
                if (techNameMap[rawFilename]) {
                  return techNameMap[rawFilename];
                }

                // Otherwise clean up the name
                return rawFilename
                  .replace(/\d+/g, "") // Remove numbers
                  .replace(/-/g, " ") // Replace hyphens with spaces
                  .split(" ")
                  .map((word) => {
                    // Special case for common abbreviations
                    if (
                      ["js", "ts", "ui", "ux", "api", "css"].includes(
                        word.toLowerCase()
                      )
                    ) {
                      return word.toUpperCase();
                    }
                    // Otherwise capitalize first letter
                    return (
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    );
                  })
                  .join(" ")
                  .trim();
              };

              const techName = cleanTechName();

              return (
                <motion.div
                  key={techPath}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center group"
                >
                  <div className="h-16 w-16 relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl flex items-center justify-center p-3 mb-2 group-hover:border-purple-500/30 transition-colors duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={techPath}
                        alt={techName}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                        onError={(e) => {
                          // Fallback if logo not found
                          const target = e.target as HTMLImageElement;
                          target.src = "/logos/default.svg";
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {techName}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Features Section - Improved Visual Layout */}
        {project.features && project.features.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-xl font-medium mb-8 text-white flex items-center gap-3">
              <span className="w-1.5 h-5 bg-purple-500 rounded-full"></span>
              Key Features
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/60 rounded-xl p-6 relative z-10">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/30 border border-purple-700/30 flex items-center justify-center text-sm font-medium text-purple-300 flex-shrink-0">
                        {index + 1}
                      </div>
                      {/* <h3 className="text-lg font-medium text-white/90 pt-1.5">
                        {typeof feature === "object" && feature.title
                          ? feature.title
                          : `Feature ${index + 1}`}
                      </h3> */}
                    </div>
                    {/* <p className="text-zinc-300 leading-relaxed pl-14">
                      {typeof feature === "object" && feature.description
                        ? feature.description
                        : feature}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Screenshot Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-xl font-medium mb-8 text-white flex items-center gap-3">
              <span className="w-1.5 h-5 bg-purple-500 rounded-full"></span>
              Screenshots
            </h2>

            {/* Main Image */}
            <div
              className="mb-4 rounded-xl overflow-hidden relative aspect-video border border-zinc-800/60 cursor-pointer"
              onClick={() => setShowFullImage(true)}
            >
              <div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-[1px]">
                <Image
                  src={project.screenshots[activeImage]}
                  alt={`${project.name} featured screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Zoom indicator */}
              <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-md rounded-full p-2 opacity-60">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 3H21V9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21H3V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3L14 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 21L10 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {project.screenshots.length >= 1 && (
              <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide snap-x">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    className={`rounded-lg overflow-hidden relative h-20 w-36 flex-shrink-0 cursor-pointer transition-all snap-center ${
                      activeImage === index
                        ? "ring-2 ring-purple-500 opacity-100 scale-105"
                        : "opacity-60 hover:opacity-100 border border-zinc-800/50"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      fill
                      sizes="144px"
                      className={`object-cover transition-transform duration-500`}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Implementation Details */}
        {project.implementation && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-xl font-medium mb-8 text-white flex items-center gap-3">
              <span className="w-1.5 h-5 bg-purple-500 rounded-full"></span>
              Technical Implementation
            </h2>
            <div className="bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/60 rounded-xl p-6">
              <p className="text-zinc-300 leading-relaxed">
                {project.implementation}
              </p>
            </div>
          </motion.div>
        )}

        {/* Bottom Navigation */}
        <motion.div
          className="mt-16 pt-8 border-t border-zinc-800/30 flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/projects"
            className="group flex items-center gap-3 px-5 py-2.5 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 transition-all duration-300 rounded-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-transform group-hover:-translate-x-1"
            >
              <path
                d="M12.5 8L3.5 8M3.5 8L7 11.5M3.5 8L7 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Projects
          </Link>
        </motion.div>
      </motion.div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setShowFullImage(false)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setShowFullImage(false);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-[80vh] max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={
                    project.screenshots && project.screenshots.length > 0
                      ? project.screenshots[activeImage]
                      : project.coverImg
                  }
                  alt={project.name}
                  className="max-h-full max-w-full object-contain"
                  width={1920}
                  height={1080}
                  priority
                />
              </div>

              {/* Image counter */}
              {project.screenshots && project.screenshots.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                  {activeImage + 1} / {project.screenshots.length}
                </div>
              )}
            </motion.div>

            {/* Navigation arrows for multiple images */}
            {project.screenshots && project.screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) =>
                      prev === 0 ? project.screenshots.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) =>
                      prev === project.screenshots.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;
