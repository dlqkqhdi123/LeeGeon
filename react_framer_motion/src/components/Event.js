import { motion } from "framer-motion";

function onStart() {
  console.log("Animation started");
}
function onComplete() {
  console.log("Animation completed");
}

export function Event() {
  retrun(
    <>
      <div classname="container">
        <motion.div
          className="box"
          animate={{ x: 400 }}
          transition={{ delay: 1 }}
          // onUpdate={onUpdate}
          onAnimationStart={onStart}
          onAnimationComplete={onComplete}
        ></motion.div>
      </div>
    </>
  );
}
