"use client";
import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SR = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  });
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <motion.div
          ref={ref}
          initial="hidden"
          variants={{
            visible: {
              x: 0,
              opacity: 1,
            },
            hidden: {
              x: -100,
              opacity: 0,
            },
          }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="w-1/2 mx-10 border border-red-200"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          variants={{
            hidden: {
              x: 100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="w-1/2 mx-10 border border-red-200"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque
            unde aperiam facere placeat repellat tempora! Optio, amet, quidem
            officia accusamus maxime modi suscipit neque, qui quae et inventore
            nam.
          </p>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            y: 100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        transition={{ duration: 0.5 }}
        className="p-10"
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque unde
          aperiam facere placeat repellat tempora! Optio, amet, quidem officia
          accusamus maxime modi suscipit neque, qui quae et inventore nam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque unde
          aperiam facere placeat repellat tempora! Optio, amet, quidem officia
          accusamus maxime modi suscipit neque, qui quae et inventore nam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque unde
          aperiam facere placeat repellat tempora! Optio, amet, quidem officia
          accusamus maxime modi suscipit neque, qui quae et inventore nam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque unde
          aperiam facere placeat repellat tempora! Optio, amet, quidem officia
          accusamus maxime modi suscipit neque, qui quae et inventore nam.
        </p>
      </motion.div>
    </div>
  );
};

export default SR;
