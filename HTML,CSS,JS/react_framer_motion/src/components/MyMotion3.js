import { motion } from "framer-motion";
import "./MyMotion1.css";

const keyFrameVariants = {
  end: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export function MyMotion3() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={keyFrameVariants}
          animate="end"
        ></motion.div>
      </div>
    </>
  );
}
