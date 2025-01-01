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
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
      transition={{ duration: 1 }}
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
    </motion.div>
  );
}

export default ScrollReveal;
