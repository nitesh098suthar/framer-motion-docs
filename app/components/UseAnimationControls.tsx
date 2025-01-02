import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const UseAnimationControls = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("animate");
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <motion.div
        initial="initial"
        animate={controls}
        variants={{
          initial: {
            rotate: 0,
          },
          animate: {
            rotate: 90,
          },
        }}
        className="bg-black h-16 w-16 mx-auto m-10 "
      ></motion.div>
    </div>
  );
};

export default UseAnimationControls;
