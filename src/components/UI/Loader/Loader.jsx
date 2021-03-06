import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.spinWrapper}>
      <div className={classes.spinner} />
    </div>
  );
};

export default Loader;
