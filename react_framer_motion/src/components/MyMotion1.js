import { animate, motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  phase1: { scale: 0, rotateZ: 0, transition: { type: "linear", delay: 1 } },
  phase2: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } },
};
export function MyMotion1() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={boxVariants}
          initial="phase1"
          animate="phase2"
          //   initial={{ scale: 0 }}
          //   animate={{ scale: 1, rotateZ: 360 }}
          //   transition={{ type: "spring", delay: 1 }}
        ></motion.div>
      </div>
    </>
  );
}
