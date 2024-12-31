"use client";
import BasicFade from "./components/BasicFade";
import DragAndDrop from "./components/DragAndDrop";
import LeftToRight from "./components/LeftToRight";

import RotateHoverBounce from "./components/RotateHoverBounce";
import ScaleAnimation from "./components/ScaleAnimation";
import ScrollReveal from "./components/ScrollReveal";
import StaggeredTextAnimation from "./components/StaggeredTextAnimation";

export default function Example() {
  return (
    <>
      <BasicFade />
      <LeftToRight />
      <ScaleAnimation />
      <RotateHoverBounce />

      <StaggeredTextAnimation />
      <DragAndDrop />
      <div className="w-1/2 h-44 border "></div>
      <div className="w-1/2 h-44 border "></div>
      <div className="w-1/2 h-44 border "></div>
      <div className="w-1/2 h-44 border "></div>
      <div className="w-1/2 h-44 border "></div>
      <div className="w-1/2 h-44 border "></div>
      <div className="w-1/2 h-44 border "></div>
      <div className="w-1/2 h-44 border "></div>
      <ScrollReveal />
    </>
  );
}
