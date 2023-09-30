import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/ChickenGarageInfo.module.css";

const CatStuffBowl = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>Chicken Garage</div>
        <div className={styles.info}>
          This project is located in the south west of France. The original garage was falling down and needed to be rebuilt, which created the opportunity to integrate a chicken coop into the design. The client had a forest nearby where we selected Robinia pseudoacacia trees to serve as structural columns.
          The resulting design concept was to make a big roof that seemed to float like a cloud with trees disappearing into it. 
        </div>
        <button className={styles.buyBtn}>buy</button>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/CG_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/CG_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/CG_GALLERY_3.jpg" className={styles.imageThree} />
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default CatStuffBowl;
