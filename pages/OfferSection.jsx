import React from 'react'
import One from '../assets/One.jpeg'
import Two from '../assets/Two.jpg'
import Three from '../assets/Three.jpeg'
import Four from '../assets/Four.png'

export default function OfferSection() {
  return (
<>
    <div className='body'>
        <div className='TheOffer'>
            <h1 className='title'>
                Experience the Greatest Adventure of Your Life!
            </h1>
            <h4 className='tour'>
                Our Tours Include
            </h4>
            <ul className='list'>
                <li>
                Dunns River
                </li>
                <li>
                Lethe Bamboo Rafting
                </li>
                <li>
                Spanish Bridge
                </li>
                <li>
                A day in Montego Bay
                </li>
                <li>
                St Elizabeth Adventures
                </li>
                <li>
                Capital City Kingston Tours
                </li>
                <li>
                Blue Mountain trek
                </li>
            </ul>
        </div>

        <div className='image-container'>
        <a href="https://dunnsriverfallsja.com/">
            <img className='One' src={One} alt="" />
        </a>

        <a href="/">
            <img className='Two' src={Two} alt="" />
        </a>
        
        </div>

        <a href="/">
            <img className='Three' src={Three} alt="" />
        </a>
    </div>
</>
  )
}
