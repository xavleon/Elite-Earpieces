import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <span className={styles.letter}>E</span>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.brandName}>ELITE EARBUDS</h1>
        <p className={styles.tagline}>SOUND YOU CAN FEEL</p>
      </div>
    </div>
  );
};

export default Logo;
