
import React from "react";
import styles from "./MapSection.module.scss";
import { mapLocation } from "../../../img/img";

const MapSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mapBox}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5286935000895!2d36.31404706525037!3d49.9639429884357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270b88c400ab5d%3A0x84e81ba21f48e30a!2sBarber%20Room!5e0!3m2!1sru!2sua!4v1719317409327!5m2!1sru!2sua"
          width="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapItem}
          id="section4"
        ></iframe>
        <img src={mapLocation} alt="Map Location" className={styles.mapImage} />
      </div>
    </section>
  );
};

export default MapSection;