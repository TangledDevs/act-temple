import React from 'react'
import Header from '../components/Header'
import About from "../components/About"
import Gallery from "../components/Gallery"
import Committee from "../components/Committee"
import Hero from "../components/Hero"
import Donation from "../components/Donation"
import Contact from "../components/Contact"
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Donation/>
      <Gallery/>
      <Committee />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home