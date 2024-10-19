import React from 'react'
import Hero from '../components/Hero/Hero'
import TypingEffect from '../components/TypingEffect/TypingEffect'
import Cards from '../components/Cards/Cards'
import TrustedPartners from '../components/TrustedPartners/TrustedPartners'
import Features from '../components/Features/Features'

const Homepage = () => {
  return (
    <>
    <Hero />  
     
    <TrustedPartners/>
    <Features/>
    <Cards/>
    <TypingEffect /> 
    </>
  )
}

export default Homepage