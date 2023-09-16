import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import styles from "../styles/BranchLamp.module.css";
import LeafPopup from "./popupInfo/LeafPopup";
import Link from "next/link";

function BranchLamp() {
  const images = {
    off: "/BL_WIDESCREEN_OFF.jpg",
    on: "/BL_WIDESCREEN_ON.jpg",
  };

  const [backgroundImage, setBackgroundImage] = useState(images.off);
  const [showImage, setShowImage] = useState(false);
  const [showPopUpA, setShowPopUpA] = useState(false); // Separate state for each popup
  const [pluslessA, setPluslessA] = useState('+');


  const handleHotspotClickA = () => {
    if (!showPopUpA) {
      setShowPopUpA(true);
      setBackgroundImage(images.on);
      setPluslessA('-')
    } else {
      setShowPopUpA(false);
      setBackgroundImage(images.off);
      setPluslessA('+')
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
    }, 200); // Set the delay time to match the fade-out duration
  };

  BranchLamp.category = "objects";
  
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

        <button
          className={styles.hotspotA}
          onClick={handleHotspotClickA}
        >
          {pluslessA}
        </button>

        <div className={styles.popUpA}>
          {showPopUpA && (
            <LeafPopup onClose={handleClosePopUp} >
              <div className={styles.popupBtnA}>
                <p>Branch Lamp</p>
                <p> simple floor lamp held up by a branch... 
                <Link href="/BranchLampInfo">
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

export default BranchLamp;
