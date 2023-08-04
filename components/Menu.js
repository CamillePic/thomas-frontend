import React, { useState } from "react";
import BranchLamp from "./BranchLamp";
import CatStuff from "./CatStuff";
import LeafLamp from "./LeafLamp";
import OllainvilleHouse from "./OllainvilleHouse";
import ChickenGarage from "./ChickenGarage";
import styles from "../styles/Menu.module.css";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryOpen, setCategoryOpen] = useState(null);

  const handleItemClick = (type, item) => {
    if (selectedType !== type) {
      setSelectedType(type);
      setSelectedItem(item);
      setCategoryOpen(type);
    } else {
      setSelectedItem(selectedItem === item ? null : item);
    }
  };

  const toggleCategoryOpen = (type) => {
    setCategoryOpen((prev) => (prev === type ? null : type));
  };

  const objects = [
    { name: "Project 01 - Grandpa's Lamp", component: <LeafLamp /> },
    { name: "Project 02 - Branch Lamp", component: <BranchLamp /> },
    { name: "Project 03 - Cat Stuff", component: <CatStuff /> },
  ];

  const spaces = [
    // { name: "Ollainville House", component: <OllainvilleHouse /> },
    { name: "ChickenGarage", component: <ChickenGarage /> },
  ];

  return (
    <div>

      <div className={styles.main}>

        <div className={styles.shop}>
          {selectedItem && selectedItem.component}
        </div>
        <div className={styles.menu}>
        <h1 className={styles.thomas}>Thomas Takada</h1>
        <div className={styles.separation}></div>
          <div>
            <h3
              className={`${styles.menuHeader} ${
                categoryOpen === "objects" ? styles.open : ""
              }`}
              style={{
                fontStyle: selectedType === "objects" && categoryOpen === "objects" ? "italic" : "normal",
              }}
              onClick={() => toggleCategoryOpen("objects")}
            >
              {/* Display +/- sign based on the categoryOpen state */}
              Objects {categoryOpen === "objects" ? "-" : "+"}
            </h3>
            {categoryOpen === "objects" &&
              objects.map((item, i) => (
                <div
                  key={i}
                  className={styles.menuItem}
                  style={{
                    fontStyle:
                      selectedItem && selectedItem.name === item.name
                        ? "italic"
                        : "normal",
                  }}
                  onClick={() => handleItemClick("objects", item)}
                >
                  {item.name}
                </div>
              ))}
          </div>
          <div>
            <h3
              className={`${styles.menuHeader} ${
                categoryOpen === "spaces" ? styles.open : ""
              }`}
              style={{
                fontStyle: selectedType === "spaces" && categoryOpen === "spaces" ? "italic" : "normal",
              }}
              onClick={() => toggleCategoryOpen("spaces")}
            >
              {/* Display +/- sign based on the categoryOpen state */}
              Spaces {categoryOpen === "spaces" ? "-" : "+"}
            </h3>
            {categoryOpen === "spaces" &&
              spaces.map((item, i) => (
                <div
                  key={i}
                  className={styles.menuItem}
                  style={{
                    fontStyle:
                      selectedItem && selectedItem.name === item.name
                        ? "italic"
                        : "normal",
                  }}
                  onClick={() => handleItemClick("spaces", item)}
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
