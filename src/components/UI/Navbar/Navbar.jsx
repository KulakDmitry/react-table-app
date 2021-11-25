import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link to={"/random-table"} className={classes.link}>
        Random table
      </Link>
      <Link to={"/custom-table"} className={classes.link}>
        Clear table
      </Link>
    </nav>
  );
};

export default Navbar;
