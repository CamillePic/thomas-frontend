import React from "react";
import styles from "../../styles/LeafPopup.module.css";

const PopUpInfo = ({ onClose, children }) => {
  return (
    <div className={styles.popup}>
      <h3>Product Information</h3>
      {children}
      <button>Buy</button>
      <button onClick={onClose}>Close</button>{" "}
    </div>
  );
};

export default PopUpInfo;

// import React from "react";

// const PopUpInfo = ({ onClose, children }) => {
//   return (
//     <div className="popup">
//       <h3>Product Information</h3>
//       {/* Add your product information here */}
//       {children}
//       <button>Buy</button>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default PopUpInfo;
