import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import './Navbar.css'
import HeroSection from './pages/HeroSection'
import './HeroSection.css'
import SectionThree from './pages/SectionThree'
import './SectionThree.css'
import OfferSection from './pages/OfferSection'
import './OfferSection.css'
import BusinessCard from './pages/Business-Card'
import './Business-Card.css'
import Footer from './pages/Footer'
import './Footer.css'

import './socials.css'

export default function Homepage() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <SectionThree></SectionThree>
    <OfferSection></OfferSection>
    <BusinessCard></BusinessCard>
    <Footer></Footer>
    </>
  )
}