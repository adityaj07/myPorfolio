"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useState } from "react";
import { experiences } from "../../../data";

const Experience: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-6">
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-[15px] top-[40px] w-[1px] h-[calc(100%+40px)] bg-zinc-800" />
            )}

            <div className="flex gap-4 p-4">
              {/* Logo circle with minimal animation */}
              <div
                className={`relative h-[30px] w-[30px] rounded-full flex-shrink-0 flex items-center justify-center z-10 transition-all duration-300 ${
                  hoveredIndex === index ? "bg-zinc-700" : "bg-zinc-800"
                }`}
              >
                {experience.logo ? (
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                ) : (
                  <div
                    className={`h-[15px] w-[15px] rounded-full transition-all duration-300 ${
                      hoveredIndex === index
                        ? "bg-purple-500/70"
                        : "bg-zinc-600"
                    }`}
                  />
                )}
              </div>

              {/* Content with very subtle hover styles */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <h3
                      className={`text-lg font-medium transition-colors duration-300 ${
                        hoveredIndex === index ? "text-white" : "text-zinc-100"
                      }`}
                    >
                      {experience.title}
                    </h3>
                    <p className="text-zinc-400">
                      {experience.company} • {experience.location}
                    </p>
                  </div>
                  <span
                    className={`text-sm mt-1 md:mt-0 font-mono transition-colors duration-300 ${
                      hoveredIndex === index ? "text-zinc-300" : "text-zinc-500"
                    }`}
                  >
                    {experience.duration}
                  </span>
                </div>

                <p className="mt-2 leading-relaxed text-zinc-300">
                  {experience.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                        hoveredIndex === index
                          ? "bg-zinc-800/80 text-zinc-200"
                          : "bg-zinc-800/50 text-zinc-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Subtle line appearing on hover */}
                <div className="relative mt-4">
                  <motion.div
                    className="absolute left-0 h-[1px] bg-purple-500/20"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? 40 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
