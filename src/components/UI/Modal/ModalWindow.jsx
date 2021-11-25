import React from "react";
import classes from "./ModalWindow.module.css";

const ModalWindow = ({ children, visible, setVisible }) => {
  const mainClass = [classes.modal];

  if (visible) {
    mainClass.push(classes.active);
  }

  return (
    <div className={mainClass.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
