import React from "react";
import styles from "../../styles/LeafPopup.module.css";

const PopUpInfo = ({ onClose, children, popupText }) => {
  return (
    <div className={styles.popup}>
      <div>{popupText}</div>
      {children}
    </div>
  );
};

export default PopUpInfo;

