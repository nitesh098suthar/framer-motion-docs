import React from "react";
import { motion } from "framer-motion";

const LeftToRight = () => {
  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className=" "
      >
        Slide In Animation
      </motion.div>
    </div>
  );
};

export default LeftToRight;

//what is stiffness: 100 in the transition?
//how many types are there in the transition?