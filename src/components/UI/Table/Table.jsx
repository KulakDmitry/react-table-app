import React from "react";
import classes from "./Table.module.css";

const Table = ({ children, props }) => {
  return (
    <table className={classes.table} {...props}>
      {children}
    </table>
  );
};

export default Table;
