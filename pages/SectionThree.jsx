import React from 'react'
import One from '../assets/One.jpeg'
import Two from '../assets/Two.jpg'
import Three from '../assets/Three.jpeg'
import Four from '../assets/Four.png'

export default function sectionthree() {
  return (
    <>
    <section className='sectionthree'>
      <div className='first-image' >
        <img className='first-image' src={One} alt="" />
      </div>
      <div className='main-image'>
          <div className='second-image'>
            <img className='circle' src={Two} alt="" />
            <img className='circle' src={Three} alt="" />
          </div>
        <img className='fourth' src={Four} alt="" />
      </div>
    </section>
    </>
  )
}
