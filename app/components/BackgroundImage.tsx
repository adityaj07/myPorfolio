import Image from "next/image";
import { FC } from "react";

const BackgroundImage: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute pointer-events-none inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* Images */}
      <Image
        src="/ooorganize.svg"
        fill
        sizes="100vw"
        priority
        className="object-cover"
        style={{
          zIndex: 1,
          opacity: 0.6,
        }}
        alt="Hero background"
      />
      <Image
        src="/bbblurry.svg"
        fill
        sizes="100vw"
        priority
        className="object-cover"
        style={{
          zIndex: 0,
          opacity: 0.6,
        }}
        alt="Hero background"
      />
    </div>
  );
};

export default BackgroundImage;
