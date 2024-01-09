"use client";

import { FC, useState } from "react";
import { languages, frontend, backend, other } from "@/data";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface TechStackProps {}

const trimDescriptionToWords = (description: string, limit: number) => {
  const words = description.split(" ");
  const trimmedWords = words.slice(0, limit);
  return trimmedWords.join(" ");
};

const TechStack: FC<TechStackProps> = ({}) => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll((prev) => !prev);
  };

  return (
    
      <div
        className="flex flex-col gap-6 w-full" 
      >
        <div className="flex flex-col gap-2 rounded-md px-8 py-6 border-[1px] border-zinc-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
          <h3 className="mb-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Programming languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((language) => (
              <div key={language.name} className="flex gap-2 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150">
                <div className="flex justify-center items-start w-[40%]">
                  <Image
                    src={language.img}
                    alt={language.img}
                    width={100}
                    height={100}
                    className="rounded-lg aspect-auto w-16 md:w-10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">{language.name}</h4>
                  <p className="text-sm">
                    {trimDescriptionToWords(language.desc, 15)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md px-8 py-6 border-[1px] border-zinc-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
          <h3 className="mb-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Frontend
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frontend.map((frontendItem) => (
              <div key={frontendItem.name} className="flex gap-2 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150">
                <div className="flex justify-center items-start w-[40%]">
                  <Image
                    src={frontendItem.img}
                    alt={frontendItem.img}
                    width={100}
                    height={100}
                    className="rounded-lg aspect-auto w-16 md:w-10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">{frontendItem.name}</h4>
                  <p className="text-sm">
                    {trimDescriptionToWords(frontendItem.desc, 15)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md px-8 py-6 border-[1px] border-zinc-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
          <h3 className="mb-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Backend
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {backend.map((backendItem) => (
              <div key={backendItem.name} className="flex gap-2 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150">
                <div className="flex justify-center items-start w-[40%]">
                  <Image
                    src={backendItem.img}
                    alt={backendItem.img}
                    width={100}
                    height={100}
                    className="rounded-lg aspect-auto w-16 md:w-10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">{backendItem.name}</h4>
                  <p className="text-sm">
                    {trimDescriptionToWords(backendItem.desc, 15)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md px-8 py-6 border-[1px] border-zinc-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
          <h3 className="mb-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Others
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {other.map((otherItem) => (
              <div key={otherItem.name} className="flex gap-2 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150">
                <div className="flex justify-center items-start w-[40%]">
                  <Image
                    src={otherItem.img}
                    alt={otherItem.img}
                    width={100}
                    height={100}
                    className="rounded-lg aspect-auto w-16 md:w-10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">{otherItem.name}</h4>
                  <p className="text-sm">
                    {trimDescriptionToWords(otherItem.desc, 15)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    
    
  );
};

export default TechStack;
