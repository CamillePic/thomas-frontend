import React, { useState } from "react";
import styles from "../styles/LeafLampInfo.module.css";
import { useShoppingCart } from "use-shopping-cart";
import { products } from "../data/products";

const LeafLampInfo = () => {
  // Define the product ID you want to find
  const productIdToFind = "price_1NfQ8fBBUlEBHPZ6MAOhYZej"; // Replace with the correct ID

  // Use the find method to find the product by its ID
  const product = products.find((p) => p.id === productIdToFind);

  const { addItem } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    addItem(product, { count: quantity });
    setQuantity(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>Grandpa's Lamp</div>
        <div>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button onClick={addToCart}>Add to Cart</button>

        <div className={styles.info}>
          These lamps are about our relationship with nature. The natural
          elements are not only decorative but structural and essential to the
          function of the lamp. The owner of the lamp is required to go outside
          and find a nice leaf and an interesting rock. Depending on the season,
          the leaf will have a different color. Different climates and
          geological histories can be revealed, perhaps encouraging us to learn
          more about the trees surrounding us and the ground we walk on.
          Eventually, the leaf will wither away, requiring us to find a new one.
          The man-made elements are minimal and express fragility. They have
          been weathered and are somewhat imperfect. They are held together by
          leather. Teflon wiring, socket, switch, plug, E14 LED light bulb,
          weathered steel, leather, stone, leaf
        </div>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery/GL_GALLERY_1.jpg" className={styles.imageOne} alt="Gallery 1" />
        <img src="/gallery/GL_GALLERY_2.jpg" className={styles.imageTwo} alt="Gallery 2" />
        <img src="/gallery/GL_GALLERY_3.jpg" className={styles.imageThree} alt="Gallery 3" />
        <img src="/gallery/GL_GALLERY_4.jpg" className={styles.imageFour} alt="Gallery 4" />
        <img src="/gallery/GL_GALLERY_5.jpg" className={styles.imageFive} alt="Gallery 5" />
        <img src="/gallery/GL_GALLERY_6.jpg" className={styles.imageSix} alt="Gallery 6" />
      </div>
    </div>
  );
};

export default LeafLampInfo;
