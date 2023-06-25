import { useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Committee from "../components/Committee";
import Hero from "../components/Hero";
import Donation from "../components/Donation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DonationDetails from "../components/DonationDetails";

import { useRef } from "react";
import { useInView } from "framer-motion";
const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [language, setLanguage] = useState("Telugu");
  const handleLanguageChange = (lang) => setLanguage(lang);
  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Header language={language} changeLanguage={handleLanguageChange} />
        <Hero />
        <About language={language} />
        <Donation language={language} />
        <DonationDetails language={language}/>
        <Gallery language={language} />
        <Committee language={language} />
        <Contact language={language} />
        <Footer />
      </span>
    </div>
  );
};

export default Home;
