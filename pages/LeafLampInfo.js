import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import styles from "../styles/LeafLampInfo.module.css";
import NextImage from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


const LeafLampInfo = () => {



  const photos = [
    {
      img: "/gallery/GL_GALLERY_1.jpg",
      title: "Leaf Lamp 1",
      width: 4,
    height: 3
        
    },
    {
      img: "/gallery/GL_GALLERY_2.jpg",
      title: "Leaf Lamp 2",
      width: 4,
    height: 3
      
    },
    {
      img: "/gallery/GL_GALLERY_3.jpg",
      title: "Leaf Lamp 3",
      width: 4,
    height: 3
      
    },
    {
      img: "/gallery/GL_GALLERY_4.jpg",
      title: "Leaf Lamp 4",
      width: 4,
    height: 3
    },
    {
      img: "/gallery/GL_GALLERY_5.jpg",
      title: "Leaf Lamp 5",
      width: 4,
    height: 3
    },
    {
      img: "/gallery/GL_GALLERY_6.jpg",
      title: "Leaf Lamp 6",
      width: 4,
    height: 3
    },
    // Add more image data here...
  ];
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }`,
    };
  }
  // const [backgroundImage, setBackgroundImage] = useState(images.one);


  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2>Leaf Lamp Information</h2>
          <div className={styles.info}>
            These lamps are about our relationship with nature. The natural
            elements are not only decorative but structural and essential to the
            function of the lamp. The owner of the lamp is required to go
            outside and find a nice leaf and an interesting rock. Depending on
            the season, the leaf will have a different color. Different climates
            and geological histories can be revealed, perhaps encouraging us to
            learn more about the trees surrounding us and the ground we walk on.
            Eventually, the leaf will wither away, requiring us to find a new
            one. The man made elements are minimal and express fragility. They
            have been weathered and are somewhat imperfect. They are held
            together by leather. Teflon wiring, socket, switch, plug, E14 LED
            light bulb, weathered steel, leather, stone, leaf
        </div>

        <div className={styles.gallery}>
        <Gallery photos={photos} />;
            </div>
            </div>
      <div className={styles.menu}>
      <Menu />
      </div>
      {/* Add more content about the Leaf Lamp here */}
    </div>
  );
};

export default LeafLampInfo;


