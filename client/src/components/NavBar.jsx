import { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-orange-400 px-2 md:px-8 flex justify-between items-center">
      {/* left side - logo */}
      <div>
        <img src={logo} alt="temple logo" className="w-64 md:w-80" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex md:gap-6 lg:gap-10 md:pr-4 lg:pr-8">
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <a href="#home">Home</a>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <a href="#about">About</a>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <a href="#donations">Donations</a>
          </li>
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div onClick={handleMenu} className="text-3xl cursor-pointer md:hidden">
        <GiHamburgerMenu className="text-slate-100" />
      </div>
      {showMenu && (
        <div className="absolute right-0 top-14 w-full">
          <ul className="flex flex-col justify-end  items-center bg-white lg:hidden p-4 mt-4 ">
            <li className="my-3 cursor-pointer px-4  flex" onClick={handleMenu}>
              <a href="#home" className="font-bold">Home</a>
            </li>
            <li className="my-3 cursor-pointer px-4  flex items-center" onClick={handleMenu}>
              <a href="#about" className="font-bold">About</a>
            </li>
            <li className="my-3 cursor-pointer  px-4  flex items-center" onClick={handleMenu}>
              <a href="#gallery" className="font-bold">Gallery</a>
            </li>
            <li className="my-3 cursor-pointer  px-4  flex items-center" onClick={handleMenu}>
              <a href="#donations" className="font-bold">Donations</a>
            </li>
            <li className="my-3 cursor-pointer  px-4  flex items-center" onClick={handleMenu}>
              <a href="#contact" className="font-bold">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
