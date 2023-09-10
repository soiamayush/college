import React from 'react'
import Hero from './HomePage/Hero'
import Feature from './HomePage/Feature'
import Featured from './HomePage/Featured'
import Banner from './HomePage/Banner'
import Newarrivals from './HomePage/Newarrivals'
import Testimonials from './HomePage/Testimonials'
import MetaData from './layouts/MetaData'


const Home = () => {

  return (
    <>
            <MetaData title="Home"/>
    <Hero/>
    <Feature/>
    <Featured/>
    <Testimonials/>
    <Banner/>
    <Newarrivals/>
  </>
  )
}

export default Home