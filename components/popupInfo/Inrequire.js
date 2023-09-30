import React from "react";
import styles from "../../styles/Inrequire.module.css";

const InrequirePopup = ({ onClose, children, popupText }) => {
  return (
    <div className={styles.popup}>
      <div>{popupText}</div>
      {children}
    </div>
  );
};

export default InrequirePopup;

