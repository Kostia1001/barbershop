import React from "react";
import styles from "./AboutUsSection.module.scss";
const AboutUsSection = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>О нас</h2>
        <p className={styles.sectionDescription}>
          Добро пожаловать в <strong>Barber Room</strong> — уютный барбершоп в
          Харькове. Мы — это небольшое, но атмосферное место, где забота о вашем
          стиле и комфорте стоит на первом месте. Наша команда профессионалов
          всегда готова предоставить вам качественные услуги по уходу за
          волосами и бородой, используя только лучшие средства и современные
          техники.
        </p>
        <p className={styles.sectionDescription}>
          В <strong>Barber Room</strong> мы ценим индивидуальный подход к
          каждому клиенту и создаем уникальную атмосферу, чтобы вы могли
          расслабиться и насладиться процессом. Наша задача — сделать так, чтобы
          каждый визит в наш барбершоп стал для вас приятным и незабываемым
          опытом.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
