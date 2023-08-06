// import React, { useState, useEffect } from "react";
// import styles from "../styles/Menu.module.css";
// import ActiveLink from "./ActiveLink";
// import { useRouter } from "next/router";

// const Menu = () => {
//   const [categoryOpen, setCategoryOpen] = useState(null);
//   const router = useRouter();
//   const currentPath = router.asPath;

//   const objects = [
//     { name: "Grandpa's Lamp", path: "/LeafLampPage", secondPath: "/LeafLampInfo", type: "objects" },
//     { name: "Branch Lamp", path: "/BranchLampPage", secondPath: "/BranchLampInfo", type: "objects" },
//     { name: "Cat Stuff", path: "/CatStuffPage", secondPath: "/CatStuffInfo", type: "objects" },
//   ];

//   const spaces = [
//     { name: "Ollainville House", path: "/OllainVilleHousePage", secondPath: "/OllainvilleHouseInfo", type: "spaces" },
//     { name: "ChickenGarage", path: "/ChickenGaragePage", secondPath: "/ChickenGarageInfo", type: "spaces" },
//   ];

//   useEffect(() => {
//     // Check if the current path matches any of the items in objects or spaces
//     const foundCategory = objects.find((item) => currentPath.startsWith(item.path) || currentPath.startsWith(item.secondPath));
//     if (!foundCategory) {
//       const foundSpace = spaces.find((item) => currentPath.startsWith(item.path) || currentPath.startsWith(item.secondPath));
//       if (foundSpace) {
//         setCategoryOpen(foundSpace.type);
//       }
//     } else {
//       setCategoryOpen(foundCategory.type);
//     }
//   }, [currentPath]);

//   const toggleCategoryOpen = (type) => {
//     setCategoryOpen((prev) => (prev === type ? null : type));
//   };

//   const isItemActive = (item) => {
//     return currentPath === item.path || currentPath === item.secondPath;
//   };

//   const handleHomeClick = () => {
//     router.push("/");
//   };
  
//   return (
//     <div>
//       <div className={styles.main}>
//         <div className={styles.menu}>
//           <h1 className={styles.thomas} onClick={handleHomeClick}>Thomas Takada</h1>
//           <div className={styles.separation}></div>
//           <div className={`${styles.menuContainer} ${styles.menuVisible}`}>
//             <div>
//               <h3
//                 className={`${styles.menuHeader} ${
//                   categoryOpen === "objects" ? styles.open : ""
//                 }`}
//                 onClick={() => toggleCategoryOpen("objects")}
//               >
//                 {/* Display +/- sign based on the categoryOpen state */}
//                 Objects {categoryOpen === "objects" ? "-" : "+"}
//               </h3>
//               {categoryOpen === "objects" && (
//                 <ul className={styles.nav}>
//                   {objects.map((item, i) => (
//                     <li key={i}>
//                       <ActiveLink
//                         activeClassName={styles.menuItemActive} // Add your CSS class for active link here
//                         href={item.path}
//                       >
//                         <a className={isItemActive(item) ? styles.menuItemActive : styles.navlink}>
//                           {item.name}
//                         </a>
//                       </ActiveLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div>
//               <h3
//                 className={`${styles.menuHeader} ${
//                   categoryOpen === "spaces" ? styles.open : ""
//                 }`}
//                 onClick={() => toggleCategoryOpen("spaces")}
//               >
//                 {/* Display +/- sign based on the categoryOpen state */}
//                 Spaces {categoryOpen === "spaces" ? "-" : "+"}
//               </h3>
//               {categoryOpen === "spaces" && (
//                 <ul className={styles.nav}>
//                   {spaces.map((item, i) => (
//                     <li key={i}>
//                       <ActiveLink
//                         activeClassName={styles.menuItemActive} // Add your CSS class for active link here
//                         href={item.path}
//                       >
//                         <a className={isItemActive(item) ? styles.menuItemActive : styles.navlink}>
//                           {item.name}
//                         </a>
//                       </ActiveLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React, { useState, useEffect } from "react";
import styles from "../styles/Menu.module.css";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import { FaArrowCircleUp } from "react-icons/fa";

const Menu = () => {
  const [categoryOpen, setCategoryOpen] = useState(null);
  const router = useRouter();
  const currentPath = router.asPath;


  const objects = [
    { name: "Grandpa's Lamp", path: "/LeafLampPage", secondPath: "/LeafLampInfo", type: "objects" },
    { name: "Branch Lamp", path: "/BranchLampPage", secondPath: "/BranchLampInfo", type: "objects" },
    { name: "Cat Stuff", path: "/CatStuffPage", secondPath: "/CatStuffInfo", type: "objects" },
  ];

  const spaces = [
    { name: "Ollainville House", path: "/OllainVilleHousePage", secondPath: "/OllainvilleHouseInfo", type: "spaces" },
    { name: "ChickenGarage", path: "/ChickenGaragePage", secondPath: "/ChickenGarageInfo", type: "spaces" },
  ];

 const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [menuOpacity, setMenuOpacity] = useState(1);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  useEffect(() => {
    // Check if the current path matches any of the items in objects or spaces
    const foundCategory = objects.find((item) => currentPath.startsWith(item.path) || currentPath.startsWith(item.secondPath));
    if (!foundCategory) {
      const foundSpace = spaces.find((item) => currentPath.startsWith(item.path) || currentPath.startsWith(item.secondPath));
      if (foundSpace) {
        setCategoryOpen(foundSpace.type);
      }
    } else {
      setCategoryOpen(foundCategory.type);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (windowWidth <= 800) {
        setIsMenuVisible(scrollY <= 100);
        setMenuOpacity(1 - scrollY / 200); // Adjust the 200 to control the fade out speed
        setVisible(scrollY > 300); // Show the "To the Top" button when scrolled down 300px
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    setWindowWidth(window.innerWidth);
    handleScroll(); // Initial check for menu visibility

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPath, windowWidth]);

  const toggleCategoryOpen = (type) => {
    setCategoryOpen((prev) => (prev === type ? null : type));
  };

  const isItemActive = (item) => {
    return currentPath === item.path || currentPath === item.secondPath;
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.menu}>
          <h1 className={styles.thomas} onClick={handleHomeClick}>
            Thomas Takada
          </h1>
          <div className={styles.separation}></div>
          <div className={`${styles.menuContainer} ${styles.menuVisible}`}  style={{ opacity: menuOpacity }}>
            <div>
              <h3
                className={`${styles.menuHeader} ${
                  categoryOpen === "objects" ? styles.open : ""
                }`}
                onClick={() => toggleCategoryOpen("objects")}
              >
                {/* Display +/- sign based on the categoryOpen state */}
                Objects {categoryOpen === "objects" ? "-" : "+"}
              </h3>
              {categoryOpen === "objects" && (
                <ul className={styles.nav}>
                  {objects.map((item, i) => (
                    <li key={i}>
                      <ActiveLink
                        activeClassName={styles.menuItemActive} // Add your CSS class for active link here
                        href={item.path}
                      >
                        <a className={isItemActive(item) ? styles.menuItemActive : styles.navlink}>
                          {item.name}
                        </a>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3
                className={`${styles.menuHeader} ${
                  categoryOpen === "spaces" ? styles.open : ""
                }`}
                onClick={() => toggleCategoryOpen("spaces")}
              >
                {/* Display +/- sign based on the categoryOpen state */}
                Spaces {categoryOpen === "spaces" ? "-" : "+"}
              </h3>
              {categoryOpen === "spaces" && (
                <ul className={styles.nav}>
                  {spaces.map((item, i) => (
                    <li key={i}>
                      <ActiveLink
                        activeClassName={styles.menuItemActive} // Add your CSS class for active link here
                        href={item.path}
                      >
                        <a className={isItemActive(item) ? styles.menuItemActive : styles.navlink}>
                          {item.name}
                        </a>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              )}


            </div>

          </div>
          
        </div>
      </div>
      {windowWidth <= 800 && !isMenuVisible && visible && (
        <button
          className={styles.toTopButton}
          onClick={handleToTop}
        >
          <FaArrowCircleUp />
        </button>
      )}
    </div>
  );
};

export default Menu;
