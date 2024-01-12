import { projects } from "@/data";
import Image from "next/image";
import { FC } from "react";
import SocialBadge from "./SocialBadge";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface ProjectsProps {}

const trimDescriptionToWords = (description: string, limit: number) => {
  const words = description.split(" ");
  const trimmedWords = words.slice(0, limit);
  return trimmedWords.join(" ");
};

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex flex-col gap-4 rounded-md  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
        >
          <div className="relative flex overflow-hidden  rounded-lg object-contain h-fit">
            <Image
              src={project.coverImg}
              alt={project.coverImg}
              width={500}
              height={500}
              className=" h-full w-full aspect-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none ">
                {project.name}
              </h2>
              <div className="flex justify-between items-center gap-2 text-sm">
                {project.githubLink && <SocialBadge
                  name="Github"
                  link={project.githubLink}
                  icon={<FaGithub className="w-5 h-5" />}
                />}
                {project.liveLink && <SocialBadge
                  name="Live"
                  link={project.liveLink}
                  icon={<FaGlobe className="w-5 h-5" />}
                />}
              </div>
            </div>

            <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
              {/* {trimDescriptionToWords(project.desc, 20)}... */}
              {project.desc}
            </p>
            {/* <div className="flex gap-1">
                
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
