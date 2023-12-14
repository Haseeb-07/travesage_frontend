import React from 'react'
import Home from './Components/Home'
import Map from './Components/Map'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BestServices from './Components/BestServices'
import TopDestinations from './Components/TopDestinations'
import Testimonials from './Components/Testimonials'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Map/>
      <BestServices/>
      <TopDestinations/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
