import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/BranchShelvesInfo.module.css";
import Link from "next/link";

const BranchShelvesInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Branch Shelves</h1>
        <div className={styles.info}>
        Pine wood, branches<br></br>
          <span>250cm high (variable size)</span><br></br>Made to order
          <p></p>
          Simple, lightweight yet sturdy shelves made from standardized wood
          materials. One pine column is replaced with a branch. Dowels support
          the shelves and are secured in the wall. Made with no nails or metal
          hardware.
        </div>
        <a href="mailto: takadathomas@yahoo.com" className={styles.buyBtn}>
          <p className={styles.inquire}>Inquire</p>
        </a>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/BS_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/BS_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/BS_GALLERY_3.jpg" className={styles.imageThree} />
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default BranchShelvesInfo;
