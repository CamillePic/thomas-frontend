import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/BranchLampInfo.module.css";

const BranchLampInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>Branch Lamp</div>
        <div className={styles.info}>
          Teflon wiring, socket, switch, plug, E14 LED light bulb, weathered
          steel, leather, stone, leaf These lamps are about our relationship
          with nature. The natural elements are not only decorative but
          structural and essential to the function of the lamp. The owner of the
          lamp is required to go outside and find a nice leaf and an interesting
          rock. Depending on the season, the leaf will have a different color.
          Different climates and geological histories can be revealed, perhaps
          encouraging us to learn more about the trees surrounding us and the
          ground we walk on. Eventually, the leaf will wither away, requiring us
          to find a new one. The man made elements are minimal and express
          fragility. They have been weathered and are somewhat imperfect. They
          are held together by leather.
        </div>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/BL_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/BL_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/BL_GALLERY_3.jpg" className={styles.imageThree} />
      </div>
<a href="352377c03fdda0f7e1f32faec54fbd91f93aa932">buy</a>
      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default BranchLampInfo;
