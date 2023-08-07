import React, { useState, useEffect } from "react";
import NextImage from 'next/image';
import styles from "../styles/LeafLamp.module.css";
import LeafPopup from "./popupInfo/LeafPopup";
import Link from "next/link";



function LeafLamp() {

  const images = {
    off: "/GL_WIDESCREEN_OFF.jpg",
    left: "/GL_WIDESCREEN_LEFT.jpg",
    right: "/GL_WIDESCREEN_RIGHT.jpg",
    middle: "/GL_WIDESCREEN_MIDDLE.jpg",
  };


  const [backgroundImage, setBackgroundImage] = useState(images.off);
  const [showImage, setShowImage] = useState(false);
  const [showPopUpA, setShowPopUpA] = useState(false); // Separate state for each popup
  const [showPopUpB, setShowPopUpB] = useState(false);
  const [showPopUpC, setShowPopUpC] = useState(false);
  const [plusless, setPlusless] = useState('+');

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

  const handleHotspotClickA = () => {
    if (!showPopUpA) {
      setShowPopUpA(true);
      setBackgroundImage(images.left);
      setShowPopUpB(false);
      setShowPopUpC(false);
    } else {
      setShowPopUpA(false);
      setBackgroundImage(images.off);
    }
  };

  const handleHotspotClickB = () => {
    if (!showPopUpB) {
      setShowPopUpB(true);
      setBackgroundImage(images.middle);
      setShowPopUpA(false);
      setShowPopUpC(false);
      setPlusless('-')
    } else {
      setShowPopUpB(false);
      setBackgroundImage(images.off);
      setPlusless('+')
    }
  };
  const handleHotspotClickC = () => {
    if (!showPopUpC) {
      setShowPopUpC(true);
      setBackgroundImage(images.right);
      setShowPopUpA(false);
      setShowPopUpB(false);
    } else {
      setShowPopUpC(false);
      setBackgroundImage(images.off);
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



  return (
    <div className={styles.hotspots}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transition: "background-image 0.3s ease-in-out, opacity 0.3s ease-in-out",
          opacity: showImage ? 1 : 0, // Apply opacity based on showImage state
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <NextImage src="/GL_WIDESCREEN_OFF.jpg"   width={1} height={1} />
      <NextImage src="/GL_WIDESCREEN_MIDDLE.jpg"  width={1} height={1} />
      <NextImage src="/GL_WIDESCREEN_LEFT.jpg"   width={1} height={1} />
      <NextImage src="/GL_WIDESCREEN_RIGHT.jpg"  width={1} height={1} />

        <button className={styles.hotspotA} onClick={handleHotspotClickA}></button>
        <button className={styles.hotspotB} onClick={handleHotspotClickB}>
          {plusless}
        </button>
        <button className={styles.hotspotC} onClick={handleHotspotClickC}></button>
        <div className={styles.popUpA}>
        {showPopUpA && (
          <LeafPopup onClose={handleClosePopUp} popupText="Size L (~80cm)" >
            <div className={styles.popupBtn}>
            <Link href="/LeafLampInfo">
              <button className={styles.insideBtn}>More</button>
            </Link>
            <button className={styles.insideBtn}>Buy</button>
            </div>
          </LeafPopup>
        )}
        </div>
        <div className={styles.popUpB}>
        {showPopUpB && (
          <LeafPopup onClose={handleClosePopUp} popupText="Size S (~20cm)" className={styles.popup}>
            <div className={styles.popupBtn}>
            <Link href="/LeafLampInfo">
              <button className={styles.insideBtn}>More</button>
            </Link>
            <button className={styles.insideBtn}>Buy</button>
            </div>
          </LeafPopup>
        )}
        </div>
        <div className={styles.popUpC}>
        {showPopUpC && (
          <LeafPopup onClose={handleClosePopUp} popupText="Size M (~50cm)" className={styles.popup}>
            <div className={styles.popupBtn}>
            <Link href="/LeafLampInfo">
              <button className={styles.insideBtn}>More</button>
            </Link>
            <button className={styles.insideBtn}>Buy</button>
            </div>
          </LeafPopup>
        )}
        </div>

      </div>
    </div>
  );
}

export default LeafLamp;
