import styles from "../styles/Home.module.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MainMenu from '../components/Menu';
import Image from "next/image";

function Home() {

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.background}>
          {/* <Image
            src="/LIGHTS_Leaf lamp_Website_1_230302.png"
            layout="fill"
            objectFit="cover"
            alt="photo"
          /> */}
        </div>
        <div className={styles.container}>
          <MainMenu />
        </div>
      </main>
    </div>
  );
}

export default Home;
