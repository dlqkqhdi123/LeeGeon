import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import "./AnimatePresence.css";
import { useState } from "react";

const boxVariants = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
    },
  },
  exit: { opacity: 0, scale: 0, rotateZ: -360 },
};

// export function MyAnimatePresence() {
//   const [showing, setShowing] = useState(false);
//   function onClick() {
//     console.log(showing);
//     setShowing((showing) => !showing);
//   }
//   return (
//     <>
//       <div className="container">
//         <AnimatePresence>
//           {showing ? (
//             <motion.div
//               className="box"
//               variants={boxVariants}
//               initial="start"
//               animate="end"
//               exit="exit"
//             ></motion.div>
//           ) : null}
//         </AnimatePresence>
//         <button onClick={onClick}>Click Me</button>
//       </div>
//     </>
//   );
// }

// AnimationControl을 이용하는 방법
export function MyAnimatePresence() {
  const [showing, setShowing] = useState(false);
  const control = useAnimationControls();
  function onClick() {
    if (showing) {
      control.start("exit");
    } else {
      control.start("end");
    }
    setShowing((showing) => !showing);
  }
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={boxVariants}
          initial="start"
          animate={control}
        ></motion.div>
        <button onClick={onClick}>Click Me</button>
      </div>
    </>
  );
}
