import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface WorkInProgressProps {}

const WorkInProgress: FC<WorkInProgressProps> = ({}) => {
  return (
    <div className="h-[49rem] flex justify-center items-center">
      <Link href="https://twitter.com/adityaj07_tw" target="_blank" className="flex gap-2 rounded-lg px-4 py-2 bg-[#333333] hover:bg-white transition-colors duration-150 text-white hover:text-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-fit justify-center items-center">
        <Image
          src="/logos/construction.png"
          alt="Work in progress"
          width={100}
          height={100}
          className="aspect-auto w-8 h-8"
        />
        <span>Under Construction</span>
      </Link>
    </div>
  );
};

export default WorkInProgress;
