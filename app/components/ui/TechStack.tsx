"use client";

import { backend, frontend, languages, other } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useState } from "react";

const categories = [
  { id: "languages", label: "Languages", data: languages },
  { id: "frontend", label: "Frontend", data: frontend },
  { id: "backend", label: "Backend", data: backend },
  { id: "other", label: "Other Tools", data: other },
];

const TechStack: FC = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Get active category data
  const activeCategoryData =
    categories.find((cat) => cat.id === activeCategory)?.data || [];

  return (
    <div className="w-full">
      {/* Category Navigation - Slick Tab Design */}
      <div className="relative mb-12">
        <div className="absolute h-[1px] w-full bg-zinc-800/50 bottom-0 left-0"></div>
        <motion.div
          className="flex gap-1 md:gap-8 overflow-x-auto hide-scrollbar"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
              className={`px-4 py-3 whitespace-nowrap text-sm md:text-base transition-all relative ${
                activeCategory === category.id
                  ? "text-white font-medium"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Tech Grid - Simple, Clean Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
        >
          {activeCategoryData.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.03, duration: 0.4 },
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="group"
            >
              <div
                className={`relative w-full aspect-square flex flex-col items-center justify-center p-2 md:p-3 rounded-lg border overflow-hidden transition-all duration-300 ${
                  hoveredTech === tech.name
                    ? "border-purple-500/70 bg-zinc-900/90 scale-[1.05]"
                    : "border-zinc-800/30 bg-zinc-900/20 hover:bg-zinc-900/30"
                }`}
              >
                {/* Simple noise texture */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay noise"></div>

                {/* Bottom right gradient */}
                <div
                  className={`absolute bottom-0 right-0 w-2/3 h-2/3 transition-opacity duration-300 ${
                    hoveredTech === tech.name ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.15), transparent 70%)`,
                  }}
                ></div>

                {/* Tech content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                  {/* Icon */}
                  <div className="relative w-8 h-8 md:w-10 md:h-10 mb-3 transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      fill
                      sizes="(max-width: 768px) 32px, 40px"
                      className="object-contain"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-center font-medium text-xs md:text-sm text-zinc-300 group-hover:text-white line-clamp-1 w-full">
                    {tech.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TechStack;
