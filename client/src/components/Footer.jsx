import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black text-white font-semibold p-4">
        {/* Social Media handles */}
        <div className="flex sm:flex-col items-center md:flex-row justify-between p-4">
          <div>
            <p className="text-gray-500 text-sm mb-2">
              Connect with us on social media
            </p>
            <div className="flex">
              <a
                href="www.google.com"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <BsWhatsapp className="text-3xl cursor-pointer" />
              </a>
              <a
                href="www.google.com"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <FaInstagram className="text-3xl cursor-pointer" />
              </a>
              <a
                href="www.google.com"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <BsYoutube className="text-3xl cursor-pointer" />
              </a>
              <a href="www.google.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-3xl cursor-pointer" />
              </a>
            </div>
          </div>
          <div>
            <p>&#169; {new Date().getFullYear()} All rights Reserved</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p>Made with love by Tangled Devs</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
