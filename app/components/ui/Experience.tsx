'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useState, useRef } from 'react';
import { experiences, freelanceProjects } from '../../../data';
import { ArrowUpRight } from 'lucide-react';

const Experience: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
            <div className="flex gap-4 p-4 relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div
                  className="absolute w-[1px] z-0"
                  style={{
                    left: '30px',
                    top: '30px',
                    height: 'calc(100% + 48px)',
                    background:
                      'linear-gradient(to bottom, rgba(168,85,247,0.35) 0%, rgba(168,85,247,0.08) 70%, transparent 100%)',
                  }}
                />
              )}

              {/* Logo circle */}
              <div
                className={`relative h-[30px] w-[30px] rounded-full flex-shrink-0 flex items-center justify-center z-10 transition-all duration-300 ${
                  hoveredIndex === index ? 'bg-zinc-700' : 'bg-zinc-800'
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
                      hoveredIndex === index ? 'bg-purple-500/70' : 'bg-zinc-600'
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <h3
                      className={`text-lg font-medium transition-colors duration-300 ${
                        hoveredIndex === index ? 'text-white' : 'text-zinc-100'
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
                      hoveredIndex === index ? 'text-zinc-300' : 'text-zinc-500'
                    }`}
                  >
                    {experience.duration}
                  </span>
                </div>

                <p className="mt-2 leading-relaxed text-zinc-300">{experience.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                        hoveredIndex === index
                          ? 'bg-zinc-800/80 text-zinc-200'
                          : 'bg-zinc-800/50 text-zinc-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Subtle hover line */}
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

      {/* ── Freelance Divider ── */}
      <motion.div
        className="mt-16 mb-8 flex items-center gap-4 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="h-[1px] w-6 bg-purple-500/40" />
        <span className="text-xs font-mono tracking-[0.2em] text-purple-400/70 uppercase">
          Freelance
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
      </motion.div>

      {/* ── Freelance Cards (horizontal scroll) ── */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {freelanceProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[300px] rounded-xl p-5 cursor-default"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              background:
                hoveredProject === index ? 'rgba(168,85,247,0.06)' : 'rgba(255,255,255,0.02)',
              border:
                hoveredProject === index
                  ? '1px solid rgba(168,85,247,0.25)'
                  : '1px solid rgba(255,255,255,0.06)',
              transition: 'background 0.3s, border 0.3s',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Faint glow on hover */}
            {hoveredProject === index && (
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at top left, rgba(168,85,247,0.08) 0%, transparent 70%)',
                }}
              />
            )}

            {/* Duration */}
            <span className="font-mono text-[11px] text-zinc-500 tracking-wide">
              {project.duration}
            </span>

            {/* Name */}
            <h4
              className="mt-2 text-base font-medium transition-colors duration-300"
              style={{ color: hoveredProject === index ? '#fff' : '#e4e4e7' }}
            >
              {project.name}
            </h4>

            {/* Description */}
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{project.description}</p>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] rounded-full"
                  style={{
                    background:
                      hoveredProject === index ? 'rgba(168,85,247,0.12)' : 'rgba(255,255,255,0.04)',
                    color: hoveredProject === index ? 'rgba(216,180,254,0.9)' : '#a1a1aa',
                    border: '1px solid rgba(168,85,247,0.15)',
                    transition: 'all 0.3s',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* "More coming" ghost card */}
        <motion.div
          className="flex-shrink-0 w-[240px] rounded-xl flex flex-col items-center justify-center gap-4 text-center px-5 py-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: freelanceProjects.length * 0.1 }}
          viewport={{ once: true }}
          style={{
            border: '1px dashed rgba(168,85,247,0.2)',
            background: 'rgba(168,85,247,0.03)',
          }}
        >
          <div className="h-[1px] w-8 bg-purple-500/30" />

          <p className="text-sm text-zinc-300 leading-relaxed">
            Want to get your app or website built?
          </p>

          <a
            href="https://cal.com/adityaj07"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 px-4 py-2 text-xs font-mono tracking-wide rounded-lg text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: `
        4px 4px 10px rgba(0,0,0,0.6),
        -2px -2px 6px rgba(168,85,247,0.25)
      `,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `
        inset 2px 2px 6px rgba(0,0,0,0.6),
        inset -2px -2px 6px rgba(168,85,247,0.25)
      `;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `
        4px 4px 10px rgba(0,0,0,0.6),
        -2px -2px 6px rgba(168,85,247,0.25)
      `;
            }}
          >
            Book a Call
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
