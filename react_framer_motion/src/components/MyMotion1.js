import { motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  start: { scale: 0, rotateZ: 0, transition: { type: "linear", delay: 5 } },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } },
};

export function MyMotion1() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={boxVariants}
          initial="start"
          animate="end"
          //   initial={{ scale: 0 }}
          //   animate={{ scale: 1, rotateX: 360 }}
          //   animate={{ borderRadius: "50%" }}
          //   initial={{ scaleX: 0 }}
          //   animate={{ scaleX: 1 }}
          //   transition={{ type: "spring", delay: 1 }}
        ></motion.div>
      </div>
    </>
  );
}
