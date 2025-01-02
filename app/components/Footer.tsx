"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";

const Footer = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-teal-600 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-teal-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        FOOTER
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
};

export default Footer;
