import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/ParkLampsInfo.module.css";
import Link from "next/link";

const ParkLampsInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Branch Lamp</h1>
        <div className={styles.info}>
          Steel<br></br>
          <span>200cm</span>
          <p></p>
          Lamps created from materials found by chance in the Buttes Chaumont
          park during weekly walks. These lamps were made over the course of
          several seasons, hence describing a natural cycle. The research is
          based on three questions: <br></br>
          1 What are the physical properties of these
          materials? <br></br>
          2 What symbols do they carry? <br></br>
          3 Can they be put to new
          uses?{" "}
        </div>
        <a href="mailto: takadathomas@yahoo.com" className={styles.buyBtn}>
          <p className={styles.inquire}>Inquire</p>
        </a>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/PL_BRANCH.jpg" className={styles.imageOne} />
        <img
          src="/gallery/PL_LAMP FOR AUTUMN_1.jpg"
          className={styles.imageTwo}
        />
        <img
          src="/gallery/PL_LAMP FOR AUTUMN_2.jpg"
          className={styles.imageThree}
        />
        <img
          src="/gallery/PL_MAPLESEEDS_OFF.jpg"
          className={styles.imageThree}
        />
        <img
          src="/gallery/PL_MAPLESEEDS_ON.jpg"
          className={styles.imageThree}
        />
        <img src="/gallery/PL_SHROOM_ON.jpg" className={styles.imageThree} />
        <img src="/gallery/PL_SHROOM_ZOOM.jpg" className={styles.imageThree} />
        <img src="/gallery/PL_SHROUD_ON.jpg" className={styles.imageThree} />
        <img src="/gallery/PL_TIE_ON.jpg" className={styles.imageThree} />
        <img src="/gallery/PL_TIE_ZOOM_OFF.jpg" className={styles.imageThree} />
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default ParkLampsInfo;
