import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function ScrollReveal() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      transition={{ duration: 0.5 }}
    >
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
      Scroll to Reveal Me! <br />
    </motion.div>
  );
}

export default ScrollReveal;
