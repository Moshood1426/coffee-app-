import React from "react";
import styles from "./banner.module.css";

const Banner = ({ btnText, btnClick }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.title1}>Coffee </span>
        <span className={styles.title2}>Connoisseur</span>
      </h2>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={btnClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Banner;
