import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/CatStuffTree.module.css";

const CatStuffTree = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.infoTitle}>Cat Tree</h1>
        <div className={styles.info}>
          Steel, aluminum, felt, oak<br></br>
          <span>120cm <br></br>2800€</span>
          <p></p>
          My brother Léo and I wanted to create high
          quality, poetic furniture, handcrafted in France. From a cat's point
          of view, plants become landscapes and furniture becomes architecture.
          Our approach was to find a common scale between cats and humans. This
          cat tree is the fruit of a close collaboration with craftsmen and
          every component has been sourced in France to limit our carbon
          footprint and to encourage local supply chains.{" "}
        </div>
        <button className={styles.buyBtn}>
          <a
            href="https://buy.stripe.com/28obKL66136AaGYbIJ"
            style={{ textDecoration: "none", color: "black", fontWeight: 100, fontFamily: "Open Sans", fontSize: "1rem" }}
            target="_blank"
          >
            Buy
          </a>
        </button>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/CS_GALLERY_TREE_1.png" className={styles.imageOne} />

        <img src="/gallery/CS_GALLERY_TREE_2.jpg" className={styles.imageTwo} />
        <img
          src="/gallery/CS_GALLERY_TREE_3.jpg"
          className={styles.imageThree}
        />
        <img
          src="/gallery/CS_GALLERY_TREE_4.jpg"
          className={styles.imageFour}
        />
        <img
          src="/gallery/CS_GALLERY_TREE_5.jpg"
          className={styles.imageFive}
        />
        <img src="/gallery/CS_GALLERY_TREE_6.jpg" className={styles.imageSix} />
        <img src="/gallery/CS_GALLERY_TREE_7.jpg" className={styles.imageSix} />
        <img src="/gallery/CS_GALLERY_TREE_8.png" className={styles.imageSix} />
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default CatStuffTree;
