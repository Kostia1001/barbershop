import React from "react";
import styles from "./FirstSection.module.scss";
import ButtonContact from "../../ButtonContact/ButtonContact";

const FirstSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerBox}>
        <div className={styles.boxTitle}>
          <h1>BARBER ROOM</h1>
          <h2>Фортеця чоловічого стилю</h2>
          <h3>проспект Героїв Харкова, 162</h3>
          <div id="section2" ><ButtonContact isBlinking={false}/></div>
        </div>

      </div>
    </section>
  );
};

export default FirstSection;
