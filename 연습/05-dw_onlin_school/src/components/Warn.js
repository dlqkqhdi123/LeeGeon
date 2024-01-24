import warnImg from "../assets/warn.svg";
import styles from "./Warn.module.css";
import classNames from "classnames";

function Warn({ className, variant = "", title = "", description = "" }) {
  return (
    <div className={classNames(styles.warn, styles[variant], className)}>
      <img className={styles.icon} src={warnImg} alt="경고" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Warn;
