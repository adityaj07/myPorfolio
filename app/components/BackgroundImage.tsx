import { FC } from "react";
import Image from "next/image";

const BackgroundImage: FC = () => {
  return (
    <>
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black gradient-mask-t-0 h-screen"></div>
    <Image
      src="/ooorganize.svg"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
        opacity: 0.6,
        overflow:"hidden"
      }}
      alt="Hero background"
    />
    <Image
      src="/bbblurry.svg"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -2,
        opacity: 0.6,
        overflow:"hidden"
      }}
      alt="Hero background"
    />
    </>
  );
};

export default BackgroundImage;
