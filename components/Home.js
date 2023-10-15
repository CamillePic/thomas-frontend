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
    const leaves = document.querySelectorAll(".leaf1, .leaf2");
    leaves.forEach((leaf, index) => {
      leaf.style.animationPlayState = "running";
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.gradient}>
          <div className={styles.infoTitle}>Architecte DE HMONP</div>
          <div className={styles.info}>
            <p className={styles.paragraphe}>
              I am an architect based in Paris. Central to my design
              philosophy are ecology, material logic and poetic analogies.
            </p>

            <p className={styles.paragraphe}>
              I design objects and fabricate them in limited series by
              collaborating with local artisans. Find them for sale on this
              website or contact me for special orders.
            </p>

            <p className={styles.paragraphe}>
              I am also available for architectural design and project
              management services. Feel free to contact me if you would like to
              collaborate.
            </p>
            <p className={styles.contact}>
              {" "}
              <a
                href="https://www.instagram.com/thomastakada/"
                className={styles.instagram}
              >
                Instagram
              </a>
              <br></br>
              <a
                href="https://www.linkedin.com/in/thomas-takada-121338136/"
                className={styles.instagram}
              >
                Linkedin
              </a>
              <br></br>
              tt(at)thomastakada.com
              <br></br>
            </p>
            <p className={styles.mention}>
              Website co-created with Camille Picard
            </p>
          </div>
        </div>
      </div>

      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default Home;
