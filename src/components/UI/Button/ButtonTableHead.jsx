import React from "react";
import classes from "./ButtonTableHead.module.css";

const ButtonTableHead = ({ children, ...props }) => {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
};

export default ButtonTableHead;
