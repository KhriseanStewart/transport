import React from 'react'
import Assetone from '../assets/Assetone.png'

export default function HeroSection() {
  return (
    <div className='Hero'>
        <img className='Assetone' src={Assetone} alt="" />
            <div className='HeroText'>
                <h1 className='hero-statement'>Explore the <br /> Majestic Island of <br /> Jamaica with us</h1>
            </div>
    </div>
  )
}
