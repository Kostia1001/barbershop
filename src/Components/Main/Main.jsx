import React from 'react'
import FirstSection from './FirstSection/FirstSection'
import InfoSection from './InfoSection/InfoSection'
import BarbersSection from './BarbersSection/BarbersSection'
import MapSection from './MapSection/MapSection'
import AboutUsSection from './AboutAsSection/AboutUsSection'
import ButtonContact from '../ButtonContact/ButtonContact'
const Main = () => {
  return (
    <div>
      <FirstSection />
      <InfoSection />
      <BarbersSection />
      <MapSection />
      <div>
        <ButtonContact display={"none"}/>
      </div>
    </div>
  );
}

export default Main