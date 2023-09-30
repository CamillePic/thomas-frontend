import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/CatStuffBowl.module.css";
import Link from "next/link";

const CatStuffBowl = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>Pebble Bowl</div>
        <div className={styles.info}>
          Enameled ceramic<br></br><span>50€</span><p></p>La grande majorité des meubles pour chats sont
          inesthétiques, de mauvaise qualité et fabriqués en masse dans des pays
          lointains. Nous avons voulu créer du mobilier poétique, de manière
          artisanale, en France. Prenant le point de vue d’un chat, les plantes
          deviennent des paysages et le mobilier de l’architecture. Notre
          approche consiste à trouver une échelle commune entre les chats et les
          humains à travers du mobilier poétique. Les produits sont les fruits
          d’une étroite collaboration avec des artisans et chaque composante a
          été sourcé en France pour limiter l’empreinte carbone et encourager
          les filières locales.{" "}
        </div>
        <button className={styles.buyBtn} >
        <a href="https://buy.stripe.com/7sIcOPgKF0YsbL25kq" style={{ textDecoration: "none", color: "black" }}>Buy</a>
        </button >
        </div>
      <div className={styles.gallery}>
        <img src="/gallery/CS_GALLERY_BOWL_1.jpg" className={styles.imageOne} />
        <img src="/gallery/CS_GALLERY_BOWL_2.jpg" className={styles.imageTwo} />
        <img src="/gallery/CS_GALLERY_BOWL_3.jpg" className={styles.imageThree} />
        <img src="/gallery/CS_GALLERY_BOWL_4.jpg" className={styles.imageFour} />
        <img src="/gallery/CS_GALLERY_BOWL_5.jpg" className={styles.imageFive} />
        <img src="/gallery/CS_GALLERY_BOWL_6.jpg" className={styles.imageSix} />
        <img src="/gallery/CS_GALLERY_BOWL_7.jpg" className={styles.imageSix} />
        <img src="/gallery/CS_GALLERY_BOWL_8.jpg" className={styles.imageSix} />
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default CatStuffBowl;
