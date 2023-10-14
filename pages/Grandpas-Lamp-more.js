import React, { useState } from "react";
import styles from "../styles/LeafLampInfo.module.css";
import { products } from "../data/products";

const LeafLampInfo = () => {
  // Define the product ID you want to find

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Grandpa's Lamp</h1>
        <div className={styles.info}>
        Steel<br></br>Made in France<br></br><br></br><span>L 130cm 450€<br></br>M 75cm 415€<br></br>S 50cm 380€</span><p></p>
        These lamps are about our relationship with nature. The natural
          elements are not only decorative but structural and essential to the
          function of the lamp. The owner of the lamp is required to go outside
          and find a nice leaf and an interesting rock. Depending on the season,
          the leaf will have a different color. Different climates and
          geological histories can be revealed, perhaps encouraging us to learn
          more about the trees surrounding us and the ground we walk on.
          Eventually, the leaf will wither away, requiring us to find a new one.
          The man-made elements are minimal and express fragility. They have
          been weathered and are somewhat imperfect.
        </div>
        <div className={styles.optionsBtn}>
        <a href="mailto: takadathomas@yahoo.com" className={styles.buyBtn}>
          <p className={styles.inquire}>Inquire</p>
        </a>

        {/* <button className={styles.buyBtn} >
        <a href="https://buy.stripe.com/aEU7uv3XT8qU4iAbIL" style={{ textDecoration: "none", color: "black", fontWeight: 100, fontFamily: "Open Sans", fontSize: "1rem"}}>Buy Size S</a>
        </button >
        <button className={styles.buyBtn} >
        <a href="https://buy.stripe.com/fZe0231PL7mQcP67su" style={{ textDecoration: "none", color: "black", fontWeight: 100, fontFamily: "Open Sans", fontSize: "1rem"}}>Buy Size M</a>
        </button >
        <button className={styles.buyBtn} >
        <a href="https://buy.stripe.com/4gweWXbql9uYbL29AE" style={{ textDecoration: "none", color: "black", fontWeight: 100, fontFamily: "Open Sans", fontSize: "1rem"}}>Buy Size L</a>
        </button > */}
        </div>      </div>
      <div className={styles.gallery}>
        <img src="/gallery/GL_GALLERY_1.jpg" className={styles.imageOne} alt="Gallery 1" />
        <img src="/gallery/GL_GALLERY_2.jpg" className={styles.imageTwo} alt="Gallery 2" />
        <img src="/gallery/GL_GALLERY_3.jpg" className={styles.imageThree} alt="Gallery 3" />
        <img src="/gallery/GL_GALLERY_4.jpg" className={styles.imageFour} alt="Gallery 4" />
        <img src="/gallery/GL_GALLERY_5.jpg" className={styles.imageFive} alt="Gallery 5" />
        <img src="/gallery/GL_GALLERY_6.jpg" className={styles.imageSix} alt="Gallery 6" />
      </div>
    </div>
  );
};

export default LeafLampInfo;
