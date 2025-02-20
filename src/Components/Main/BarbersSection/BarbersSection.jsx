 import React from "react";
import styles from "./BarbersSection.module.scss";
import CarouselIndex from "../../Carousel";
// import Component from "./Viewpager/Viewpager";

const BarbersSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h2 id="section3" className={styles.title}>
          НАШІ РОБОТИ
        </h2>
        <CarouselIndex/>
      </div>
    </section>
  );
};

export default BarbersSection;
