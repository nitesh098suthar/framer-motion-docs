import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };

const StaggeredTextAnimation = () => {
  return (
    <>
      <motion.div variants={container} initial="hidden" animate="show">
        {[
          "Nitesh",
          "Kumar",
          "Suthar",
          "Bagra",
          "Jalore",
          "Rajasthan",
          "India",
          "Universe",
        ].map((word, index) => (
          <motion.span key={index} variants={item}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default StaggeredTextAnimation;
