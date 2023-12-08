import { Motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  start: { opacity: 0, scale: 0 },
  end: { opacity: 1, scale: 1, tranigion: { type: "spring", delay: 1 } },
};
const circleVariants = {
  start: { y: 20, opacity: 0 },
  end: { y: 0, opacity: 1, transition: { type: "spring", delay: 1 } },
};

export function MyMotion2() {
  return (
    <>
      <div className="container">
        <div clasNameclassNames="box2" variants={boxVariants}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
}
