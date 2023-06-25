import React, { useState } from 'react'
import Header from '../components/Header'
import About from "../components/About"
import Gallery from "../components/Gallery"
import Committee from "../components/Committee"
import Hero from "../components/Hero"
import Donation from "../components/Donation"
import Contact from "../components/Contact"
import Footer from '../components/Footer'
import DonationDetails from '../components/DonationDetails'
const Home = () => {
  const [language, setLanguage] = useState('Telugu')
  const handleLanguageChange = (lang) => setLanguage(lang);
  return (
    <div>
      <Header language={language} changeLanguage={handleLanguageChange} />
      <Hero />
      <About language={language} />
      <Donation language={language}/>
      <DonationDetails language={language}/>
      <Gallery language={language}/>
      <Committee language={language}/>
      <Contact language={language}/>
      <Footer />
    </div>
  )
}

export default Home