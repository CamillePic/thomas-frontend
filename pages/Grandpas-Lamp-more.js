import React, { useState } from "react";
import styles from "../styles/LeafLampInfo.module.css";
import { products } from "../data/products";

const LeafLampInfo = () => {
  // Define the product ID you want to find

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>Grandpa's Lamp</div>
        <div className={styles.info}>
          These lamps are about our relationship with nature. The natural
          elements are not only decorative but structural and essential to the
          function of the lamp. The owner of the lamp is required to go outside
          and find a nice leaf and an interesting rock. Depending on the season,
          the leaf will have a different color. Different climates and
          geological histories can be revealed, perhaps encouraging us to learn
          more about the trees surrounding us and the ground we walk on.
          Eventually, the leaf will wither away, requiring us to find a new one.
          The man-made elements are minimal and express fragility. They have
          been weathered and are somewhat imperfect. They are held together by
          leather. Teflon wiring, socket, switch, plug, E14 LED light bulb,
          weathered steel, leather, stone, leaf
        </div>
        <div className={styles.optionsBtn}>
        <button className={styles.buyBtn}>Buy Size S</button>
        <button className={styles.buyBtn}>Buy Size M</button>
        <button className={styles.buyBtn}>Buy Size L</button>
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
