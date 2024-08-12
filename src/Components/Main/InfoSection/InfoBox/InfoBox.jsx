import React from 'react'
import styles from './InfoBox.module.scss'
import { address, phone, hours } from '../../../../img/svg'

const InfoBox = () => {
  return (
   <div  className={styles.container}>
   <div className={styles.box}>
     <div href={`#${"section4"}`} className={styles.itemBox}>
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
         <p >+62(123)-456-7890</p>
         <p >+62(123)-456-7890</p>
       </div>
     </div>
     <div className={styles.itemBox}>
       <img src={hours} alt="Hours icon" />
       <h2 className={styles.title}>Часи</h2>
       <hr className={styles.line} />
       <div className={styles.infoTitle}>
         <p>Mon – Sat: 9AM – 8PM</p>
         <p>Sun: 9AM – 6PM</p>
       </div>
     </div>
   </div>
 </div>
  )
}

export default InfoBox;