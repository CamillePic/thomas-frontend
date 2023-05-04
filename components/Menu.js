import styles from "../styles/Home.module.css";
import * as React from "react";
// import Image from "next/image";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useState } from "react";

function Menu() {
  // const menu = return (<MainMenu />);
const [fontStyle, setFontStyle] = useState(!'italic');

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
    setFontStyle(!fontStyle);
  }

  return (
    <div>
      <main className={styles.main}>
        {/* <MainMenu /> */}
        <div className={styles.container}>
          <h1>Thomas Takada</h1>
          <div role="presentation" onClick={handleClick}>
            <div className={styles.menu}>
              <Link underline="hover" color="inherit" href="/" sx={{marginTop: '1%', fontStyle: fontStyle}}>
                Projet 01
              </Link>
              {/* <Link underline="hover" color="inherit" href="/" sx={{marginTop: '1%', fontStyle: fontStyle}}>
                Projet 02
              </Link>
              <Link underline="hover" color="inherit" href="/" sx={{marginTop: '1%', fontStyle: fontStyle}}>
                Projet 03
              </Link> */}
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Menu;
