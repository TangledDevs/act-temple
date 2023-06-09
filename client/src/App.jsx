import About from "./components/About";
import Committee from "./components/Committee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className=" bg-[#f9ebb2]">
      <Header />
      <Hero />
      <About />
      <Gallery/>
      <Committee />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
