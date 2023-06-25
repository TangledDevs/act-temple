import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="mt-4">
      <footer className="w-full bg-black text-white font-semibold p-4">
        {/* Social Media handles */}
        <div className="flex flex-col items-center md:flex-row justify-between p-4 gap-4">
          <div>
            <p className="text-gray-500 text-sm mb-2">
              Connect with us on social media
            </p>
            <div className="flex justify-between mt-2">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <BsWhatsapp className="text-3xl cursor-pointer" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <FaInstagram className="text-3xl cursor-pointer" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <BsYoutube className="text-3xl cursor-pointer" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-3xl cursor-pointer" />
              </a>
            </div>
          </div>

          <div>
            <p>&#169; {new Date().getFullYear()} All rights Reserved</p>
          </div>
          <div className="">
            <p>Made with ❤️ by Tangled Devs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
