// import React, { useState, useEffect } from "react";
// import BranchLamp from "./BranchLamp";
// import CatStuff from "./CatStuff";
// import LeafLamp from "./LeafLamp";
// import CycleOfMeta from "./CycleOfMeta";
// import MontDauphin from "./MontDauphin";
// import OllainvilleHouse from "./OllainvilleHouse";
// import Rhizome from "./Rhizome";
// import styles from "../styles/Home.module.css";

// const Home = () => {
//   // State variables to manage the selected items and types
//   const [selectedType, setSelectedType] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [objectsClicked, setObjectsClicked] = useState(false);
//   const [spacesClicked, setSpacesClicked] = useState(false);
//   const [selectedSubItemObjects, setSelectedSubItemObjects] = useState(null);
//   // const [selectedSubItemSpaces, setSelectedSubItemSpaces] = useState(null);
//   const [fontItalic, setFontItalic] = useState("normal");

//   // Function to handle clicks on items in the menu
//   const handleItemClick = (type, item) => {
//     if (selectedType !== type) {
//       // If a different category (type) is clicked, update the selected type and item
//       setSelectedType(type);
//       setSelectedItem(item);
//       // Determine if "Objects" or "Spaces" was clicked and set the corresponding state variables
//       setObjectsClicked(type === "objects");
//       setSpacesClicked(type === "spaces");
//       // Set the font to italic when a category is clicked
//       setFontItalic("italic");
//     } else {
//       // If the same category is clicked again, toggle the selected item
//       setSelectedItem(selectedItem === item ? null : item);
//     }
//   };

//   // Array of objects available in the "Objects" category
//   const objects = [
//     { name: "Leaf Lamp", component: <LeafLamp /> },
//     { name: "Branch Lamp", component: <BranchLamp /> },
//     { name: "Cat Stuff", component: <CatStuff /> },
//   ];

//   // Array of objects available in the "Spaces" category
//   const spaces = [
//     { name: "Cycle", component: <CycleOfMeta /> },
//     { name: "Mont Dauphin", component: <MontDauphin /> },
//     { name: "Ollainville House", component: <OllainvilleHouse /> },
//     { name: "Rhizome", component: <Rhizome /> },
//   ];

//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         <div className={styles.shop}>
//           {/* Render the selected item's component */}
//           {selectedItem && selectedItem.component}
//         </div>
//         <div className={styles.menu}>
//           <h2>Menu</h2>
//           <div>
//             {/* "Objects" category header */}
//             <h3
//               style={{
//                 // Set font to italic if "Objects" is selected, otherwise normal
//                 fontStyle: selectedType === "objects" ? "italic" : "normal",
//               }}
//               onClick={() => handleItemClick("objects", null)}
//             >
//               Objects
//             </h3>
//             {objectsClicked &&
//               // Render items under the "Objects" category
//               objects.map((item, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     // Set font to italic if the item is selected, otherwise normal
//                     fontStyle:
//                       selectedItem && selectedItem.name === item.name
//                         ? "italic"
//                         : "normal",
//                   }}
//                   onClick={() => handleItemClick("objects", item)}
//                 >
//                   {/* Display the item's name */}
//                   {item.name}
//                 </div>
//               ))}
//           </div>
//           <div>
//             {/* "Spaces" category header */}
//             <h3
//               style={{
//                 // Set font to italic if "Spaces" is selected, otherwise normal
//                 fontStyle: selectedType === "spaces" ? "italic" : "normal",
//               }}
//               onClick={() => handleItemClick("spaces", null)}
//             >
//               Spaces
//             </h3>
//             {spacesClicked &&
//               // Render items under the "Spaces" category
//               spaces.map((item, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     // Set font to italic if the item is selected, otherwise normal
//                     fontStyle:
//                       selectedItem && selectedItem.name === item.name
//                         ? "italic"
//                         : "normal",
//                   }}
//                   onClick={() => handleItemClick("spaces", item)}
//                 >
//                   {/* Display the item's name */}
//                   {item.name}
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import BranchLamp from "./BranchLamp";
import CatStuff from "./CatStuff";
import LeafLamp from "./LeafLamp";
import CycleOfMeta from "./CycleOfMeta";
import MontDauphin from "./MontDauphin";
import OllainvilleHouse from "./OllainvilleHouse";
import Rhizome from "./Rhizome";
import styles from "../styles/Home.module.css";

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
    { name: "Project 01 - Leaf Lamp", component: <LeafLamp /> },
    { name: "Branch Lamp", component: <BranchLamp /> },
    { name: "Cat Stuff", component: <CatStuff /> },
  ];

  const spaces = [
    { name: "Cycle", component: <CycleOfMeta /> },
    { name: "Mont Dauphin", component: <MontDauphin /> },
    { name: "Ollainville House", component: <OllainvilleHouse /> },
    { name: "Rhizome", component: <Rhizome /> },
  ];

  return (
    <div>

      <div className={styles.main}>
      <footer className={styles.footer}>instagram <br></br> takadathomas@yahoo.com</footer>

        <div className={styles.shop}>
          {selectedItem && selectedItem.component}
        </div>
        <div className={styles.menu}>
        <h1>Thomas Takada</h1>
          <h2>Menu</h2>
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
