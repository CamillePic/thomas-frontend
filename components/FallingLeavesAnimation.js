// components/FallingLeavesAnimation.js
import React from 'react';
import styles from '../styles/FallingLeavesAnimation.module.css';

const FallingLeavesAnimation = () => {
  return (
    <div className={styles.leavesContainer}>
      <img src="/hoja.png" alt="Leaf 1" className={styles.leaf1} />
      <img src="/hoja.png" alt="Leaf 2" className={styles.leaf2} />
    </div>
  );
};

export default FallingLeavesAnimation;
