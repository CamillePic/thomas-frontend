import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import styles from "../styles/LeafLamp.module.css";
import LeafPopup from "./popupInfo/LeafPopup";
import Link from "next/link";

function GrandpasLamp() {
  const images = {
    off: "/GL_WIDESCREEN_OFF.jpg",
    left: "/GL_WIDESCREEN_M.jpg",
    right: "/GL_WIDESCREEN_L.jpg",
    middle: "/GL_WIDESCREEN_S.jpg",
  };

  const [backgroundImage, setBackgroundImage] = useState(images.off);
  const [showImage, setShowImage] = useState(false);
  const [showPopUpA, setShowPopUpA] = useState(false); // Separate state for each popup
  const [showPopUpB, setShowPopUpB] = useState(false);
  const [showPopUpC, setShowPopUpC] = useState(false);
  const [pluslessA, setPluslessA] = useState("+");
  const [pluslessB, setPluslessB] = useState("+");
  const [pluslessC, setPluslessC] = useState("+");

  const handleHotspotClickA = () => {
    if (!showPopUpA) {
      setShowPopUpA(true);
      setBackgroundImage(images.right);
      setShowPopUpB(false);
      setShowPopUpC(false);
      setPluslessA("-");
      setPluslessC("+");
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
      setBackgroundImage(images.middle);
      setShowPopUpA(false);
      setShowPopUpC(false);
      setPluslessB("-");
      setPluslessA("+");
      setPluslessC("+");
    } else {
      setShowPopUpB(false);
      setBackgroundImage(images.off);
      setPluslessB("+");
    }
  };
  const handleHotspotClickC = () => {
    if (!showPopUpC) {
      setShowPopUpC(true);
      setBackgroundImage(images.left);
      setShowPopUpA(false);
      setShowPopUpB(false);
      setPluslessC("-");
      setPluslessB("+");
      setPluslessA("+");
    } else {
      setShowPopUpC(false);
      setBackgroundImage(images.off);
      setPluslessC("+");
    }
  };

  const handleClosePopUp = () => {
    setBackgroundImage(images.off);
    setTimeout(() => {
      setShowPopUpA(false);
      setShowPopUpB(false);
      setShowPopUpC(false);
    }, 200); // Set the delay time to match the fade-out duration
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

  return (
    <div className={styles.hotspots}>
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
          priority: "true",
        }}
      >
        {/* <NextImage src="/GL_WIDESCREEN_OFF.jpg"   width={1} height={1}  priority={true}/>
      <NextImage src="/GL_WIDESCREEN_MIDDLE.jpg"  width={1} height={1}  priority={true}/>
      <NextImage src="/GL_WIDESCREEN_LEFT.jpg"   width={1} height={1}  priority={true}/>
      <NextImage src="/GL_WIDESCREEN_RIGHT.jpg"  width={1} height={1}  priority={true}/> */}

        <div className={styles.contentA}>
          <button className={styles.hotspotA} onClick={handleHotspotClickA}>
            {pluslessA}
          </button>
          <div className={styles.popUpA}>
            {showPopUpA && (
              <LeafPopup onClose={handleClosePopUp} >
                <div className={styles.popupBtnA}>
                <p>Large Grandpas's Lamp (130cm)</p><p>A lamp where nature is not only decorative but essential... 
                <Link href="/Grandpas-Lamp-more">
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
              <LeafPopup
                onClose={handleClosePopUp}
                className={styles.popup}
              >
                <div className={styles.popupBtnB}>
                <p className={styles.highlight}>Small Grandpas's Lamp (50cm)</p><p>A lamp where nature is not only decorative but essential... 
                  <Link href="/Grandpas-Lamp-more">
                    <button className={styles.insideBtn}>See more</button>
                  </Link>
                  </p>
                </div>
              </LeafPopup>
            )}
          </div>
        </div>
        <div className={styles.contentC}>
          <button className={styles.hotspotC} onClick={handleHotspotClickC}>
            {pluslessC}
          </button>
          <div className={styles.popUpC}>
            {showPopUpC && (
              <LeafPopup
                onClose={handleClosePopUp}
                className={styles.popup}
              >
                <div className={styles.popupBtnC}>
                <p>Medium Grandpas's Lamp (75cm)</p><p>A lamp where nature is not only decorative but essential... 
                <Link href="/Grandpas-Lamp-more">
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

export default GrandpasLamp;
