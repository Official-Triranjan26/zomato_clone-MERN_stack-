import React from 'react'
import NightLifeCarousel from './NightLifeCarousel'

import { TopTextSm,TopTextLg } from './TopText';
import ButtonBar from './ButtonBar';

const NightLife = () => {
  return (
    <div className="mb-10">
      <h1 className="text-xl my-3 md:my-5 md:text-3xl md:font-semibold">
        Night Life in Kolkata
      </h1>
      <TopTextSm/>
      <TopTextLg/>
      <ButtonBar/>
      <NightLifeCarousel/>
    </div>
  )
}

export default NightLife