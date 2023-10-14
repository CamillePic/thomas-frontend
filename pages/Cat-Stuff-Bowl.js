import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/CatStuffBowl.module.css";
import Link from "next/link";

//comments

const CatStuffBowl = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>Pebble Cat Bowl</div>
        <div className={styles.info}>
          Enameled ceramic<br></br>Handmade in France<br></br>
          <span>5x11cm (variable dimensions)<br></br>50€</span>
          <p></p>
          The original design intention was for these bowls to look like stones
          sculpted by water. It wasn't technically possible to fire very thick
          clay as it would crack in the oven. Henry of the Atelier Dipneuste
          came up with the idea of a double layered bowl to give the impression
          of thickness and weight. This had the added benefit of making them
          impossible to tip over.
        </div>
        <button className={styles.buyBtn}>
          <a
            href="https://buy.stripe.com/7sIcOPgKF0YsbL25kq"
            style={{ textDecoration: "none", color: "black", fontWeight: 100, fontFamily: "Open Sans", fontSize: "1rem"}}
          >
            Buy
          </a>
        </button>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/CS_GALLERY_BOWL_1.jpg" className={styles.imageOne} />
        <img src="/gallery/CS_GALLERY_BOWL_2.jpg" className={styles.imageTwo} />
        <img
          src="/gallery/CS_GALLERY_BOWL_3.jpg"
          className={styles.imageThree}
        />
        <img
          src="/gallery/CS_GALLERY_BOWL_4.jpg"
          className={styles.imageFour}
        />
        <img
          src="/gallery/CS_GALLERY_BOWL_5.jpg"
          className={styles.imageFive}
        />
        <img src="/gallery/CS_GALLERY_BOWL_6.jpg" className={styles.imageSix} />
        <img src="/gallery/CS_GALLERY_BOWL_7.jpg" className={styles.imageSix} />
        <img src="/gallery/CS_GALLERY_BOWL_8.jpg" className={styles.imageSix} />
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default CatStuffBowl;
