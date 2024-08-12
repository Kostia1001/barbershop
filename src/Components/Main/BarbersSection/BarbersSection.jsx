import React from "react";
import styles from "./BarbersSection.module.scss";
import { photoNastya, photoEmma } from "../../../img/img";
import BarberItem from "./BarberItem/BarberItem";
import { barberSvgTop, barberSvgBot } from "../../../img/svg";

const BarbersSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h2 id="section3" className={styles.title}>
          МАЙСТРИ
        </h2>
        <div className={styles.imgBox}>
          <div className={styles.imageStyle}>
            <BarberItem barberName="Анастасія" image={photoNastya} />
          </div>
          <div className={styles.imageStyle}>
            <BarberItem barberName="Емма" image={photoEmma} />
          </div>
        </div>
          {/* <div className={styles.aboutUs}>
            <p className={styles.sectionDescription}>
              Добро пожаловать в <strong>Barber Room</strong> — уютный барбершоп
              в Харькове. Мы — это небольшое, но атмосферное место, где забота о
              вашем стиле и комфорте стоит на первом месте. Наша команда
              профессионалов всегда готова предоставить вам качественные услуги
              по уходу за волосами и бородой, используя только лучшие средства и
              современные техники.
            </p>
            <p className={styles.sectionDescription}>
              В <strong>Barber Room</strong> мы ценим индивидуальный подход к
              каждому клиенту и создаем уникальную атмосферу, чтобы вы могли
              расслабиться и насладиться процессом. Наша задача — сделать так,
              чтобы каждый визит в наш барбершоп стал для вас приятным и
              незабываемым опытом.
            </p>
          </div> */}
      </div>
    </section>
  );
};

export default BarbersSection;
