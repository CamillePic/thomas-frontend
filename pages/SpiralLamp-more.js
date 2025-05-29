import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/SpiralLampInfo.module.css";
import Link from "next/link";

const SpiralLampInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Spiral lamp</h1>
        <div className={styles.info}>
        Aluminum, paper, stone<br></br>
          <span>28cm high (variable size)</span><br></br>140€
          <p></p>
          This lamp is an exercise in simplicity of materials, of gesture and of
          fabrication. An industrial aluminum tube is wrapped around a cylinder
          to create a spiral. The spiral is stretched so as to create two parts:
          one around which a sheet of paper is wrapped, the other upon which a
          stone is placed for stability. This simple process can create an
          infinite variety of lamps.{" "}
        </div>
        {/* <button className={styles.buyBtn}>
          <a
            href="https://buy.stripe.com/cN20238e97mQbL2fZ5"
            style={{ textDecoration: "none", color: "black", fontWeight: 100, fontFamily: "Open Sans", fontSize: "1rem"}}
            target="_blank"
          >
            Buy
          </a>
        </button> */}
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/LACM_GALLERY_1.jpg" className={styles.imageOne} />
        <img src="/gallery/LACM_GALLERY_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/LACM_GALLERY_3.jpg" className={styles.imageThree} />
        <img src="/gallery/LACM_GALLERY_4.jpg" className={styles.imageThree} />

      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default SpiralLampInfo;
