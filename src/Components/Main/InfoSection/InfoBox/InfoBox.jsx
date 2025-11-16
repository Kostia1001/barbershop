import React from 'react'
import styles from './InfoBox.module.scss'
import { address, phone, hours } from '../../../../img/svg'

const InfoBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box} href={`#${"section4"}`}>
        <div className={styles.itemBox} href={"section4"} component="a">
          <img src={address} alt="Address icon" />
          <h2 className={styles.title}>Адреса</h2>
          <hr className={styles.line} />
          <div className={styles.infoTitle}>
            <p>м. ХАРКІВ, </p>
            <p>пр Героїв Харкова 162</p>
          </div>
        </div>
        <div className={styles.itemBox}>
          <img src={phone} alt="Phone icon" />
          <h2 className={styles.title}>Телефон</h2>
          <hr className={styles.line} />
          <div className={styles.infoTitle}>
            <p>
              <a href="tel:+621234567890">+380 66 225 19 99</a>
  
            </p>
          </div>
        </div>
        <div className={styles.itemBox}>
          <img src={hours} alt="Hours icon" />
          <h2 className={styles.title}>Часи</h2>
          <hr className={styles.line} />
          <div className={styles.infoTitle}>
            <p>
              Понеділок – Неділя <br />
              8:00 – 21:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;