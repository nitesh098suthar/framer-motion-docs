import React from "react";
import { motion } from "framer-motion";
const RotateHoverBounce = () => {
  return (
    <div>
      <motion.p
        className="border w-1/4 text-center"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, scale: 1, rotate: 180 }}
        transition={{ ease: "backIn", duration: 2 }}
      >
        RotateAnimation
      </motion.p>
      <hr />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        Deeksha
      </motion.div>
      <hr />
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Hover Me
      </motion.button>
    </div>
  );
};

export default RotateHoverBounce;

//learn bounce animate property
