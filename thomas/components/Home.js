import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  // const [policeBlack, setPoliceBlack] = useState("grey");

  // const handleHotspotClickA = () => {
  //   if (policeBlack === "grey") {
  //     setPoliceBlack("black");
  //   } else {
  //     setPoliceBlack("grey");
  //   }
  // };
  useEffect(() => {
    // Start the animation when the component mounts
    const leaves = document.querySelectorAll('.leaf1, .leaf2');
    leaves.forEach((leaf, index) => {
      leaf.style.animationPlayState = 'running';
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.gradient}>
        <div className={styles.infoTitle} >Architecte DE HMONP</div>
        <div className={styles.info} >
          I am an architect and designer based in Paris. I am interested in
          creating things in connection with nature. Contact me for any
          projects or feel free to peruse my work.
          <br></br>
          <br></br>
          This website was co-created with Camille Picard.
        </div>
        </div>
      </div>


      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default Home;

// 
{/* <div className={styles.leavesContainer}> */}
{/* <img src="/WEBSITE_LEAF.png" alt="Leaf 1" className={styles.leaf1} /> */}
{/* <img src="/WEBSITE_LEAF.png" alt="Leaf 2" className={styles.leaf2} />
</div> */}
