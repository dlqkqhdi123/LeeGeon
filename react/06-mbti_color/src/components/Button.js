import styles from "./Button.module.css";

export default function Button({ className, children }) {
  const classNames = `${styles.button} ${className}`;
  return <button className={classNames}>{children}</button>;
}
