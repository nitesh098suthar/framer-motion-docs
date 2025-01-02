"use client";
import BasicFade from "./components/BasicFade";
import DragAndDrop from "./components/DragAndDrop";
import Footer from "./components/Footer";
import LeftToRight from "./components/LeftToRight";
import { motion, useScroll } from "framer-motion";
import RotateHoverBounce from "./components/RotateHoverBounce";
import ScaleAnimation from "./components/ScaleAnimation";
import ScrollReveal from "./components/ScrollReveal";
import SR from "./components/SR";
import StaggeredTextAnimation from "./components/StaggeredTextAnimation";
import UseAnimationControls from "./components/UseAnimationControls";
import TextParallaxAnimation from "./components/TextParallaxAnimation";
import { useEffect } from "react";
import Lenis from "lenis";
export default function Example() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        className="h-4 w-full bg-teal-600 sticky top-0"
      />
      <BasicFade />
      <LeftToRight />
      <ScaleAnimation />
      <RotateHoverBounce />

      <StaggeredTextAnimation />
      <DragAndDrop />
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <div className="w-1/2 h-44 border ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem
        inventore nisi veniam quae, nostrum excepturi aliquam explicabo quia at
        dolores eveniet nobis suscipit architecto aliquid neque autem similique
        nihil.
      </div>
      <ScrollReveal />
      <SR />
      <UseAnimationControls />
      <hr className="my-4" />
      <TextParallaxAnimation />
      <Footer />
    </div>
  );
}
