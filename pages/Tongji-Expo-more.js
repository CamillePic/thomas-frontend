import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/TongjiExpoInfo.module.css";

const TongjiExpoInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Tongji Expo</h1>
        <div className={styles.info}>
          <span>
            Since we had a tight budget and only a month for design, fabrication
            and installation, we exclusively used lightly modified standardized
            elements. The assemblies are all articulated, allowing flexibility
            for last minute changes. <br></br>
            We wanted to use as little material as
            possible despite the large size of displays (up to 4m50 by 3m high).
            The minimal design tested the structural limits of the thin, 16mm
            steel columns.<br></br>
             Steel footings are cut out of 20mm sheet metal with
            a water jet. They are quite heavy, providing a low center of gravity
            despite 3m high displays. <br></br>
            Different sized tubes are simply pierced
            so they can fit together. Some are welded to the footings. Some fit
            steel cables for cross bracing.
          </span>
          <p></p>
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
