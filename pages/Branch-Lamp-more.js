import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/BranchLampInfo.module.css";
import Link from "next/link";

const BranchLampInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Branch Lamp</h1>
        <div className={styles.info}>
          Steel<br></br>
          <span>200cm</span>
          <p></p>
          The structure of this lamp consists of two steel tubes. The owner must
          find a branch to complete the structure. Hence, the natural element is
          not only decorative but essential to the function of the lamp. The
          simple, minimal design allows each material to speak for itself.{" "}
        </div>
        <a href="mailto: takadathomas@yahoo.com" className={styles.buyBtn}>
          <p className={styles.inquire}>Inquire</p>
        </a>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/BL_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/BL_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/BL_GALLERY_3.jpg" className={styles.imageThree} />
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default BranchLampInfo;
