import React from "react";
import styles from "./PriceBox.module.scss";
import PriceBoxItem from "./PriceBoxItem/PriceBoxItem";
const PriceBox = () => {
  return (
    <div id="section1" className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>НАШІ ПОСЛУГИ</h2>
        </div>
      <div className={styles.priceBox}>
        <PriceBoxItem/>       
      </div>
    </div>
  );
};

export default PriceBox;

