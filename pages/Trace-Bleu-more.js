import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/TraceBleuInfo.module.css";

const TraceBleuInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Tracé Bleu</h1>
        <div className={styles.info}>
          <span>
          Direction of design and fabrication of four models for Architecture Studio’s exhibition at the Centquatre. 
          </span>
          <p></p>
          "Tracé Bleu" est une méthode menée par l’agence Architecturestudio pour réorienter les réflexions autour des milieux habités au regard de l’urgence climatique. Afin de prolonger et stimuler cette pensée, Architecturestudio et le CENTQUATRE-PARIS ont conçu une exposition associant à l’approche architecturale l'imaginaire de différents artistes.
          <p></p>
        </div>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/TB_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/TB_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/TB_GALLERY_3.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_4.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_5.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_6.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_7.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_8.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_9.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_10.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_11.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_12.jpg" className={styles.imageThree} />
        <img src="/gallery/TB_GALLERY_13.jpg" className={styles.imageThree} />
      </div>
    </div>
  );
};

export default TraceBleuInfo;
