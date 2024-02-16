import React from "react";
import styles from "./Container.module.css";

const Container = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Container;
