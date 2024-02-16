import React from "react";
import styles from "./Button.module.css";

const Button = ({ className, onClick, children }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
