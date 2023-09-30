import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/CatStuffTree.module.css";
import Inrequire from "./popupInfo/Inrequire";

const CatStuffTree = () => {

  const [showPopUp, setShowPopUp] = useState(false); // Separate state for each popup

  const handlePopup = () => {
    if (!showPopUp) {
      setShowPopUp(true);
    } else {
      setShowPopUp(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>Cat Tree</div>
        <div className={styles.info}>
          Steel, aluminum, felt, oak La grande majorité des meubles pour chats
          sont inesthétiques, de mauvaise qualité et fabriqués en masse dans des
          pays lointains. Nous avons voulu créer du mobilier poétique, de
          manière artisanale, en France. Prenant le point de vue d’un chat, les
          plantes deviennent des paysages et le mobilier de l’architecture.
          Notre approche consiste à trouver une échelle commune entre les chats
          et les humains à travers du mobilier poétique. Les produits sont les
          fruits d’une étroite collaboration avec des artisans et chaque
          composante a été sourcé en France pour limiter l’empreinte carbone et
          encourager les filières locales.
        </div>
        <button className={styles.buyBtn}>
        {showPopUp && (
              <Inrequire onClose={handlePopup} >
                <div className={styles.popupBtnA}>
                  <p>Require more information</p>
                  <p>mail form</p>
                </div>
              </Inrequire>
            )}
          Require more information
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
