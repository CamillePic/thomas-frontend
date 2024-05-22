import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/ChickenGarageInfo.module.css";

const ChickenGarageInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Chicken Garage</h1>
        <div className={styles.info}>
        90m²<br></br><span>Design to construction<br></br>2023</span><p></p>
          This project is located in the south west of France. The original garage was falling down and needed to be rebuilt, which created the opportunity to integrate a chicken coop into the design. The client had a forest nearby where we selected Robinia pseudoacacia trees to serve as structural columns.
          The resulting design concept was to make a big roof that seemed to float like a cloud with trees disappearing into it. 
        </div>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/CG_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/CG_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/CG_GALLERY_3.jpg" className={styles.imageThree} />
        <img src="/gallery/CG_GALLERY_4.jpg" className={styles.imageThree} />
        <img src="/gallery/CG_GALLERY_5.jpg" className={styles.imageThree} />
        <img src="/gallery/CG_GALLERY_6.jpg" className={styles.imageThree} />
        <img src="/gallery/CG_GALLERY_7.jpg" className={styles.imageThree} />
        <img src="/gallery/CG_GALLERY_8.jpg" className={styles.imageThree} />

      </div>
    </div>
  );
};

export default ChickenGarageInfo;
