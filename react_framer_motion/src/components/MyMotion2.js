import { motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", delayChildren: 0.3, staggerChildren: 0.2 },
  },
};
const circleVariants = {
  start: { y: 50, opacity: 0 },
  end: { y: 0, opacity: 1, transition: { type: "spring" } },
};

export function MyMotion2() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box2"
          variants={boxVariants}
          initial="start"
          animate="end"
        >
          <motion.div className="circle" variants={circleVariants} />
          <motion.div className="circle" variants={circleVariants} />
          <motion.div className="circle" variants={circleVariants} />
          <motion.div className="circle" variants={circleVariants} />
        </motion.div>
      </div>
    </>
  );
}
