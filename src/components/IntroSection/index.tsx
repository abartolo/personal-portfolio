import Image from "next/image";
import React from "react";
import { ResumeButton } from "../ResumeButton";

export const IntroSection: React.FC = () => {
  return (
    <div className="flex w-full bg-gray min-h-[500px]">
      <div className="w-full flex flex-col items-center justify-center bg-black">
        <h1 className="text-white">Hello! My name is Alexander Bartolo.</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <Image
              className="rounded-full"
              loader={({ src }) => src}
              src="/images/resume-image.png"
              alt="Logo"
              width={125}
              height={127}
            />
          </div>

          <div className="col-span-2">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget odio non massa dictum ullamcorper vitae in turpis. Nam
              consectetur odio lacinia, molestie libero eu, lacinia velit.
            </p>
          </div>
        </div>
        <ResumeButton />
      </div>
    </div>
  );
};
