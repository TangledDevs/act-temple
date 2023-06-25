import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const NavBar = ({language, changeLanguage}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLanguage = (e) => {
    changeLanguage(e.target.value)
  }
  return (
    <div className="bg-orange-400 px-2 md:px-4 flex justify-between items-center">
      <div className="cursor-pointer flex flex-row items-center">
        <img
          src="Logo.jpg"
          className="w-12 h-12 rounded-full"
          alt="కోటిలింగాల ఆలయం"
        />
        <span className="text-white font-bold py-6 px-3 text-lg md:text-2xl">
          {language==='Telugu'? "కోటిలింగాల ఆలయం": "Kotilingaala Temple"}
        </span>
      </div>
      <div className="ml-auto mr-4">
        <select name="language" id="language" className="cursor-pointer bg-white text-black p-2 font-medium text-lg rounded-lg focus:outline-0" onChange={handleLanguage}>
          <option value="Telugu" className="cursor-pointer">తెలుగు</option>
          <option value="English" className="cursor-pointer">English</option>
        </select>
      </div>
      <nav className="hidden md:block">
        <ul className="flex md:gap-6 lg:gap-10 md:pr-4 lg:pr-8">
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <Link
              activeClass="active"
              to="/#hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="font-semibold cursor-pointer"
            >
              {language==="Telugu" ? "హోమ్":"Home"}
            </Link>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="font-semibold cursor-pointer"
            >
              {language==="Telugu" ? "అబౌట్":"About"}
            </Link>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <Link
              activeClass="active"
              to="donations"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className="font-semibold cursor-pointer"
            >
              {language==="Telugu" ? "విరాళాలు":"Donations"}
            </Link>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="font-semibold cursor-pointer"
            >
              {language==="Telugu" ? "గ్యాలరీ":"Gallery"}
            </Link>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="font-semibold cursor-pointer"
            >
              {language==="Telugu" ? "కాంటాక్ట్":"Contact"}
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={handleMenu} className="text-3xl cursor-pointer md:hidden">
        {showMenu ? (
          <AiOutlineClose className="text-slate-100 font-bold" />
        ) : (
          <GiHamburgerMenu className="text-slate-100" />
        )}
      </div>
      {showMenu && (
        <div className="absolute right-0 top-20 w-full z-10">
          <ul className="flex flex-col items-center gap-12 bg-white lg:hidden p-4 mt-4 min-h-screen">
            <li className="my-3 cursor-pointer px-4 flex" onClick={handleMenu}>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-semibold text-xl"
                onClick={handleMenu}
              >
                {language==="Telugu" ? "హోమ్":"Home"}
              </Link>
            </li>
            <li
              className="my-3 cursor-pointer px-4  flex items-center"
              onClick={handleMenu}
            >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-semibold text-xl"
                onClick={handleMenu}
              >
                {language==="Telugu" ? "అబౌట్":"About"}
              </Link>
            </li>
            <li
              className="my-3 cursor-pointer  px-4  flex items-center"
              onClick={handleMenu}
            >
              <Link
                activeClass="active"
                to="donations"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleMenu}
                className="font-semibold text-xl"
              >
                {language==="Telugu" ? "విరాళాలు":"Donations"}
              </Link>
            </li>
            <li
              className="my-3 cursor-pointer  px-4  flex items-center"
              onClick={handleMenu}
            >
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-semibold text-xl"
                onClick={handleMenu}
              >
                {language==="Telugu" ? "గ్యాలరీ":"Gallery"}
              </Link>
            </li>
            <li
              className="my-3 cursor-pointer  px-4  flex items-center"
              onClick={handleMenu}
            >
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-semibold text-xl"
                onClick={handleMenu}
              >
                {language==="Telugu" ? "కాంటాక్ట్":"Contact"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
