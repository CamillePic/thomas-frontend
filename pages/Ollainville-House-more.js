import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/OllainvilleInfo.module.css";

const OllainvilleInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Ollainville House</h1>
        <div className={styles.info}>
        130m²<br></br><span>Design to tender (ESQ-DCE)<br></br>Built<br></br>2020 - 2021</span><p></p>
        The clients wanted a simple house, on one level, with a patio and a
           large communal space for living together. The closed spaces (entrance,
           patios, bathrooms, bedrooms, etc.) were staggered to create sub-spaces
           within the large communal space. These sub-spaces became the kitchen,
           dining room and living room so that each member of the family could
           pursue his or her activities while maintaining visual links with the
           others.  <br></br> <br></br>  The house is divided into two parts for day and night. A long corridor
           crosses these two parts, with a mirror at each end, giving the
           impression of an infinite hallway, an interior world.{" "}   </div>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/OH_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/OH_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/OH_GALLERY_3.jpg" className={styles.imageThree} />
        <img src="/gallery/OH_GALLERY_4.jpg" className={styles.imageThree} />
        <img src="/gallery/OH_GALLERY_5.jpg" className={styles.imageThree} />

      </div>
    </div>
  );

};

export default OllainvilleInfo;
