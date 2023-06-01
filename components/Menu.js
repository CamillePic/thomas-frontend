// export default MainMenu;
import React, { useState } from "react";
import BranchLamp from "./BranchLamp";
import CatStuff from "./products/CatStuff";
import LeafLamp from "./products/LeafLamp";
import CycleOfMeta from "./CycleOfMeta";
import MontDauphin from "./spaces/MontDauphin";
import OllainvilleHouse from "./spaces/OllainvilleHouse";
import Rhizome from "./spaces/Rhizome";

const MainMenu = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [objectsClicked, setObjectsClicked] = useState(false);
  const [spacesClicked, setSpacesClicked] = useState(false);
  const [selectedSubItemObjects, setSelectedSubItemObjects] = useState(null);
  const [selectedSubItemSpaces, setSelectedSubItemSpaces] = useState(null);
  const [fontItalic, setFontItalic] = useState("normal");

  const handleItemClick = (type, item) => {
    if (selectedType !== type) {
      setSelectedType(type);
      setSelectedItem(item);
      setSelectedSubItemObjects(null);
      setSelectedSubItemSpaces(null);
      setObjectsClicked(type === "objects");
      setSpacesClicked(type === "spaces");
      setFontItalic("italic");
    } else {
      setSelectedItem(selectedItem === item ? null : item);
    }
  };

  const objects = [
    { name: "Leaf Lamp", component: <LeafLamp /> },
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
      <h2>Menu</h2>
      <div>
        <h3
          style={{
            fontStyle: selectedType === "objects" ? "italic" : "normal",
          }}
          onClick={() => handleItemClick("objects", null)}
        >
          Objects
        </h3>
        {objectsClicked &&
          objects.map((item, i) => (
            <div
              key={i}
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
          style={{ fontStyle: selectedType === "spaces" ? "italic" : "normal" }}
          onClick={() => handleItemClick("spaces", null)}
        >
          Spaces
        </h3>
        {spacesClicked &&
          spaces.map((item, i) => (
            <div
              key={i}
              style={{
                fontStyle:
                  selectedItem && selectedItem.name === item.name
                    ? "italic"
                    : "normal",
              }}
              onClick={() => handleItemClick("spaces", item)}
            >
              {item.name}

              {/* {selectedType === "spaces" && selectedItem === item && (
                <div>
                  {item.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      style={{
                        fontStyle:
                          selectedSubItemSpaces === subItem
                            ? "italic"
                            : "normal",
                      }}
                      onClick={() => handleSubItemClick("spaces", subItem)}
                    >
                      {subItem.name}
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          ))}
      </div>
      {selectedItem && selectedItem.component}
    </div>
  );
};

export default MainMenu;
