import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-orange-400 px-2 md:px-4 flex justify-between items-center">
      <RouterLink to={"/"}>
        <div className="cursor-pointer flex flex-row items-center">
          <img
            src="Logo.jpg"
            className="w-12 h-12 rounded-full"
            alt="కోటిలింగాల ఆలయం"
          />
          <span className="text-white font-bold py-6 px-3 text-2xl">
            కోటిలింగాల ఆలయం
          </span>
        </div>
      </RouterLink>
      <nav className="hidden md:block">
        <ul className="flex md:gap-6 lg:gap-10 md:pr-4 lg:pr-8">
          <li className="text-white font-semibold text-lg hover:text-gray-200">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="font-bold cursor-pointer"
            >
              Home
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
              className="font-bold cursor-pointer"
            >
              About
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
              className="font-bold cursor-pointer"
            >
              Donations
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
              className="font-bold cursor-pointer"
            >
              Gallery
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
              className="font-bold cursor-pointer"
            >
              Contact
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
        <div className="absolute right-0 top-12 w-full z-10">
          <ul className="flex flex-col justify-end  items-center bg-white lg:hidden p-4 mt-4 ">
            <li className="my-3 cursor-pointer px-4  flex" onClick={handleMenu}>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-bold"
                onClick={handleMenu}
              >
                Home
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
                className="font-bold"
                onClick={handleMenu}
              >
                About
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
                className="font-bold"
              >
                Donations
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
                className="font-bold"
                onClick={handleMenu}
              >
                Gallery
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
                className="font-bold"
                onClick={handleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
