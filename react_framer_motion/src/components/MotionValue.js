import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import "./MotionValue.css";

export function MotionValue() {
  //   const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(90deg, rgb(0,210,238),rgb(0,83,238)",
      "linear-gradient(90deg, rgb(0,238,155),rgb(238,178,0)",
    ]
  );
  const scaleY1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scaleY2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const scaleY3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const scaleY4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scaleY5 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.8, 1, 1], [0, 1, 0]);
  return (
    <>
      <motion.div className="container" style={{ background }}>
        <div className="wrapper">
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY1, opacity: opacity1 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY2, opacity: opacity2 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY3, opacity: opacity3 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY4, opacity: opacity4 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY5, opacity: opacity5 }}
          />
        </div>
      </motion.div>
    </>
  );
}
