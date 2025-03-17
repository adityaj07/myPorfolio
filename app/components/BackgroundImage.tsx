import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Aurora from "./ui/Aurora";

const BackgroundImage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute pointer-events-none inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* Images */}
      {/* <Image
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
      /> */}

      <Image
        src="/wave.svg"
        fill
        sizes="100vw"
        priority
        className="object-cover"
        style={{
          zIndex: 1,
          opacity: 0.5,
        }}
        alt="Hero background"
      />

      {/* Only render Aurora when component is mounted (client-side) */}
      {isMounted && (
        <Aurora
          colorStops={["#6b21a8", "#f5a525", "#6b21a8"]}
          blend={0.8}
          amplitude={1.0}
          speed={0.5}
          mobileSettings={{
            amplitude: 0.6,
            blend: 0.7,
            speed: 0.3,
          }}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
