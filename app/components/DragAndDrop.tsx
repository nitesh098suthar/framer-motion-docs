import React from "react";
import { motion } from "framer-motion";

const DragAndDrop = () => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        className="cursor-grab border"
      >
        Drag Me
      </motion.div>
    </>
  );
};

export default DragAndDrop;
