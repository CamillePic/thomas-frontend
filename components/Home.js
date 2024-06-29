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
          <div className={styles.infoTitle}>Architecte DE HMONP, French born in Shizuoka, Japan, working across architecture, design and art</div>
          <div className={styles.info}>
            <p className={styles.paragraphe}>
              I am inspired by the feeling of alienation from our physical
              environment as a symptom of a disaster that has already happened
              with consequences yet to be lived. Our physical environment is
              made abstract by complex global processes and materials with
              shaky, ever changing meanings. At the same time, the environmental
              impacts of our production model have delayed but physical effects
              on day to day life. 
             </p>
             <p className={styles.paragraphe}> 
              This uncomfortable feeling of disconnection
              and disorientation has led me to a therapeutic process of sourcing
              ubiquitous materials in my immediate vicinity. Materials are
              subsequently assembled into fragile structures suggesting
              dependence, degradation and vitality. The repetition of this
              process, from collection to assembly reveals larger cycles such as
              seasons and memory within a specific locality.
            </p>

            <p className={styles.paragraphe}>
              Feel free to contact me if you would like to collaborate.
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
