import React, { useState, useEffect } from "react";
import styles from "../styles/Menu.module.css";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import { FaArrowCircleUp } from "react-icons/fa";
import Image from "next/image";
import { products } from "../data/products";
// import { cartItems } from "../data/cartItems";

const Menu = () => {
  const [categoryOpen, setCategoryOpen] = useState(null);
  const router = useRouter();
  const currentPath = router.asPath;


  const objects = [
    { name: "Grandpa's Lamp", path: "/Grandpas-Lamp", secondPath: "/Grandpas-Lamp-more", type: "objects" },
    { name: "Branch Lamp", path: "/Branch-Lamp", secondPath: "/Branch-Lamp-more", type: "objects" },
    { name: "Cat Stuff", path: "/Cat-Stuff", secondPath: "/CatStuffInfo", type: "objects" },
    { name: "Branch Shelves", path: "/Branch-Shelves", secondPath: "/Branch-Shelves-more", type: "objects" },
    { name: "Anyone's Lamp", path: "/Lamp-Anyone-Can-Make", secondPath: "/Lamp-Anyone-Can-Make-more", type: "objects" },
  ];

  const spaces = [
    { name: "Innermost House", path: "/Innermost-House", secondPath: "/Innermost-House-more", type: "spaces" },
    { name: "ChickenGarage", path: "/Chicken-Garage", secondPath: "/Chicken-Garage-more", type: "spaces" },
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
        setMenuOpacity(1 - scrollY / 100); // Adjust the 200 to control the fade out speed
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
{/* <h3>Cart</h3>
<button className="relative" onClick={() => handleCartClick()}> */}
        {/* <Image
          // src="./cart.svg"
          width={40}
          height={40}
          alt="shopping cart icon"
        /> */}
        {/* <div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
          {cartCount}
        </div>
      </button> */}
      {/* <ShoppingCart /> */}
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
