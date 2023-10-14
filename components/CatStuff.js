import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import styles from "../styles/CatStuff.module.css";
import LeafPopup from "./popupInfo/LeafPopup";
import Link from "next/link";

function CatStuff() {
  const images = {
    off: "/CS_WIDESCREEN_OFF.jpg",
    tree: "/CS_WIDESCREEN_TREE.jpg",
    bowl: "/CS_WIDESCREEN_BOWL.jpg",
  };

  const [backgroundImage, setBackgroundImage] = useState(images.off);
  const [showImage, setShowImage] = useState(false);
  const [showPopUpA, setShowPopUpA] = useState(false); // Separate state for each popup
  const [showPopUpB, setShowPopUpB] = useState(false);
  const [pluslessA, setPluslessA] = useState("+");
  const [pluslessB, setPluslessB] = useState("+");

  const handleHotspotClickA = () => {
    if (!showPopUpA) {
      setShowPopUpA(true);
      setBackgroundImage(images.tree);
      setShowPopUpB(false);
      setPluslessA("-");
      setPluslessB("+");
    } else {
      setShowPopUpA(false);
      setBackgroundImage(images.off);
      setPluslessA("+");
    }
  };

  const handleHotspotClickB = () => {
    if (!showPopUpB) {
      setShowPopUpB(true);
      setBackgroundImage(images.bowl);
      setShowPopUpA(false);
      setPluslessB("-");
      setPluslessA("+");
    } else {
      setShowPopUpB(false);
      setBackgroundImage(images.off);
      setPluslessB("+");
    }
  };

  useEffect(() => {
    // Preload the images
    const preloadImages = Object.values(images).map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // After preloading, set the initial backgroundImage
    setBackgroundImage(images.off);

    // Show the component after the images are preloaded
    setShowImage(true);
  }, []);

  const handleClosePopUp = () => {
    setBackgroundImage(images.off);
    setTimeout(() => {
      setShowPopUpA(false);
      setShowPopUpB(false);
    }, 200); // Set the delay time to match the fade-out duration
  };

  CatStuff.category = "objects";
  CatStuff.path = "/CatStuffPage";

  return (
    <div>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transition:
            "background-image 0.3s ease-in-out, opacity 0.3s ease-in-out",
          opacity: showImage ? 1 : 0, // Apply opacity based on showImage state
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.contentA}>
          <button className={styles.hotspotA} onClick={handleHotspotClickA}>
            {pluslessA}
          </button>
          <div className={styles.popUpA}>
            {showPopUpA && (
              <LeafPopup onClose={handleClosePopUp}>
                <div className={styles.popupBtnA}>
                  <p>Nenuphar Perch</p>
                  <p>
                    A minimalist and poetic cat tree entirely made in France...  
                    <Link href="Cat-Stuff-Tree">
                      <button className={styles.insideBtn}>See more</button>
                    </Link>
                  </p>
                </div>
              </LeafPopup>
            )}
          </div>
        </div>
        <div className={styles.contentB}>
          <button className={styles.hotspotB} onClick={handleHotspotClickB}>
            {pluslessB}
          </button>
          <div className={styles.popUpB}>
            {showPopUpB && (
              <LeafPopup onClose={handleClosePopUp} className={styles.popup}>
                <div className={styles.popupBtnB}>
                  <p>Pebble Bowl</p>
                  <p>
                    A bowl, like a pebble, seemingly sculpted by water...<span></span>
                    <Link href="/Cat-Stuff-Bowl">
                      <button className={styles.insideBtn}>See more</button>
                    </Link>
                  </p>
                </div>
              </LeafPopup>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatStuff;
