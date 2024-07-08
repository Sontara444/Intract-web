import React from 'react'
import CryptoDictionary from '../Components/CryptoDictionary/CryptoDictionary'
import Projects from '../Components/Projects/Projects'
import Recommended from '../Components/Recommended/Recommended'
import Popular from '../Components/Popular/Popular'
// import Slider from '../Components/Slider/Slider'


function Home() {
  return (
    <>
      {/* <Slider/> */}
      <Popular/>
      <Recommended/>
      <Projects/>
      <CryptoDictionary/>
    </>
  )
}

export default Home