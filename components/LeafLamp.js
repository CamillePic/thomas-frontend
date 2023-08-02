import * as React from "react";
import Image from "next/image";
import styles from "../styles/LeafLamp.module.css";
import LeafPopup from "./popupInfo/LeafPopup";
import { useState } from "react";
import Link from "next/link";

function LeafLamp() {

  const [backgroundImage, setBackgroundImage] = useState("../public/GL_WIDESCREEN_OFF.jpg");


  const [showPopUp, setShowPopUp] = useState(false);

  const handleHotspotClickA = () => {
    setShowPopUp(true);
    setBackgroundImage("../public/GL_WIDESCREEN_LEFT.jpg");
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <div className={styles.hotspots}>
      <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>

        <button className={styles.hotspotA} onClick={handleHotspotClickA}></button>
        <div>      {showPopUp && (
        <LeafPopup onClose={handleClosePopUp}className={styles.popup}> 
          <Link href="productsInfo/LeafLampInfo">
            <button>More Info</button>
          </Link>
        </LeafPopup>
      )}</div>
        {/* <button className={styles.hotspotB} onClick={handleHotspotClickB}></button> */}
        {/* <button className={styles.hotspotC}></button> */}
      </div>
    </div>
  );
}

export default LeafLamp;
