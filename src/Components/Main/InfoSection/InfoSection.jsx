import React from 'react'
import InfoBox from './InfoBox/InfoBox'
import styles from './InfoSection.module.scss'
import PriceBox from './PriceBox/PriceBox'

const InfoSection = () => {
  return (
    <section className={styles.container}>
        <InfoBox/>
        <PriceBox/>
    </section>
    
  )
}

export default InfoSection