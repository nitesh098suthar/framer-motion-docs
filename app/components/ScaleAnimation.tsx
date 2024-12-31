import React from "react";
import { motion } from "framer-motion";

const ScaleAnimation = () => {
  return (
    <div>
      <motion.p
        className="border w-1/4 text-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
      >
        ScaleAnimation
      </motion.p>
    </div>
  );
};

export default ScaleAnimation;
