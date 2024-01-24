import styles from "./Button.module.css";
import classNames from "classnames";

function Button({ className, variant, ...restProps }) {
  //   if (isDiv === "div") {
  //     return (
  //       <div
  //         {...restProps}
  //         className={classNames(
  //           styles.button,
  //           variant && styles[variant],
  //           className
  //         )}
  //       />
  //     );
  //   }
  return (
    <button
      {...restProps}
      className={classNames(
        styles.button,
        variant && styles[variant],
        className
      )}
    />
  );
}

export default Button;
