import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/TongjiExpoInfo.module.css";

const TongjiExpoInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Tongji Expo</h1>
        <div className={styles.info}>
        130m²<br></br><span>Design to tender (ESQ-DCE)<br></br>Built<br></br>2020 - 2021</span><p></p>
          </div>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/TE_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/TE_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/TE_GALLERY_3.jpg" className={styles.imageThree} />
        <img src="/gallery/TE_GALLERY_4.jpg" className={styles.imageThree} />
        <img src="/gallery/TE_GALLERY_5.jpg" className={styles.imageThree} />

      </div>
    </div>
  );

};

export default TongjiExpoInfo;
