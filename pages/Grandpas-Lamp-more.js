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
          Steel<br></br>2W LED lightbulb maximum<br></br>Handmade in France
          <br></br>
          <br></br>
          <span>
            L 130cm 700€<br></br>M 75cm 600€<br></br>S 50cm 500€
          </span>
          <p></p>
          These lamps are about our relationship with nature. The natural
          elements are not only decorative but structural and essential to the
          function of the lamp.<br></br>
          <br></br>
          Each lamp is shipped with a rock and a leaf but you are encouraged to
          go out and find a nice leaf and an interesting rock. Depending on the
          season, the leaf will have a different color. Differences in climate
          and geological history might be revealed.
          <br></br>
          <br></br>
          Eventually, the leaf will wither away, requiring you to find a new
          one.
          <br></br>
          <br></br>
          Steel has been chosen for its ability to rust and patina with time.
        </div>
        <div className={styles.optionsBtn}>
          {/* <a href="mailto: takadathomas@yahoo.com" className={styles.buyBtn}>
          <p className={styles.inquire}>Inquire</p>
        </a> */}
          <button className={styles.buyBtn}>
            <a
              href="https://buy.stripe.com/7sIaGH6618qU3ew008"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 100,
                fontFamily: "Open Sans",
                fontSize: "1rem",
              }}
            >
              Buy Size S
            </a>
          </button>
          <button className={styles.buyBtn}>
            <a
              href="https://buy.stripe.com/00gcOP6616iM7uMaEN"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 100,
                fontFamily: "Open Sans",
                fontSize: "1rem",
              }}
            >
              Buy Size M
            </a>
          </button>
          <button className={styles.buyBtn}>
            <a
              href="https://buy.stripe.com/7sIaGH6618qU3ew008"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 100,
                fontFamily: "Open Sans",
                fontSize: "1rem",
              }}
            >
              Buy Size L
            </a>
          </button>
        </div>
      </div>
      <div className={styles.gallery}>
        <img
          src="/gallery/GL_GALLERY_1.jpg"
          className={styles.imageOne}
          alt="Gallery 1"
        />
        <img
          src="/gallery/GL_GALLERY_2.jpg"
          className={styles.imageTwo}
          alt="Gallery 2"
        />
        <img
          src="/gallery/GL_GALLERY_3.jpg"
          className={styles.imageThree}
          alt="Gallery 3"
        />
        <img
          src="/gallery/GL_GALLERY_4.jpg"
          className={styles.imageFour}
          alt="Gallery 4"
        />
        <img
          src="/gallery/GL_GALLERY_5.jpg"
          className={styles.imageFive}
          alt="Gallery 5"
        />
        <img
          src="/gallery/GL_GALLERY_6.jpg"
          className={styles.imageSix}
          alt="Gallery 6"
        />
        <img
          src="/gallery/GL_GALLERY_7.jpg"
          className={styles.imageThree}
          alt="Gallery 7"
        />
        <img
          src="/gallery/GL_GALLERY_8.jpg"
          className={styles.imageThree}
          alt="Gallery 8"
        />
        <img
          src="/gallery/GL_GALLERY_9.jpg"
          className={styles.imageThree}
          alt="Gallery 9"
        />
      </div>
    </div>
  );
};

export default LeafLampInfo;
