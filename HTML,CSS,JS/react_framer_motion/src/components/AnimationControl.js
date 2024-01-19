import "./AnimationControl.css";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const hoverVariants = {
  initial: { width: "20%", opacity: 0.5 },
  hover: { width: "28%", opacity: 1 },
};

export function AnimationControl() {
  const control = useAnimationControls();
  // 초기화 코드
  // useEffect 후크의 두번째 파라미터(배열)이 빈 배열이면
  // 해당 컴포넌트의 첫번째 렌더링 시점에만 한번 실행됨!!!
  useEffect(() => {
    control.start("hover");
  }, []);
  return (
    <>
      <div className="container" onMouseLeave={() => control.start("hover")}>
        <motion.div
          className="box box1"
          variants={hoverVariants}
          initial="initial"
          transition={{ duration: 0.3, type: "tween" }}
          animate={control}
          onMouseEnter={() => control.start("hover")}
        />
        <motion.div
          className="box box2"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
          onMouseEnter={() => control.start("initial")}
        />
        <motion.div
          className="box box3"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
          onMouseEnter={() => control.start("initial")}
        />
        <motion.div
          className="box box4"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
          onMouseEnter={() => control.start("initial")}
        />
        <motion.div
          className="box box5"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, type: "tween" }}
          onMouseEnter={() => control.start("initial")}
        />
      </div>
    </>
  );
}
