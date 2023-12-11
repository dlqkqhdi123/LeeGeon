import { motion, AnimatePresence } from "framer-motion";
import "./AnimatePresence.css";
import { useState } from "react";

const boxVariants = {
  start: { opacity: 1, scale: 0 },
  end: {
    opactiy: 0,
    scale: 1,
    rotateZ: 360,
    transition: { type: "spring" },
  },
  exit: { opacity: 0, scale: 0, rotateZ: -360 },
};

export function MyAnimatePresence() {
  const [showing, setShowing] = useState(false);
  function onClick() {
    console.log(showing);
    setShowing((showing) => !showing);
  }
  return (
    <>
      <div className="container">
        <AnimatePresence>
          {showing ? (
            <motion.div
              className="box"
              variants={boxVariants}
              initial="start"
              animate="end"
              exit="exit"
            ></motion.div>
          ) : null}
        </AnimatePresence>

        <button onClick={onClick}>Click Me</button>
      </div>
    </>
  );
}
