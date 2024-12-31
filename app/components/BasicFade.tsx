import React from "react";
import { motion } from "framer-motion";
const BasicFade = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Hello, Framer Motion!
      </motion.div>
    </div>
  );
};

export default BasicFade;
