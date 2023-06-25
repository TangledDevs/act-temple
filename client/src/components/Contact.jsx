import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const Contact = ({ language }) => {
  return (
    <div
      className="flex flex-col mt-4 lg:grid lg:grid-cols-2 lg:items-center px-4 md:px-10 gap-6"
      id="contact"
    >
      {/* contact info div */}
      <div className="flex justify-start flex-col gap-6">
        <h2 className="text-red-800 font-bold text-4xl text-center">
          {language === "Telugu" ? "కాంటాక్ట్" : "Contact"}
        </h2>
        {/* Address */}
        <div className=" flex gap-2">
          <IoLocationSharp className="text-7xl inline-block  ml-1 md:text-5xl" />
          <p className="inline text-lg leading-loose">
            {language === "Telugu"
              ? "కోటి లింగాల శ్రీ మహాకాళి సహిత శ్రీ మహా కాళేశ్వర స్వామి క్షేత్రం, వేమవరం , ఫిరంగిపురం మండలం , గుంటూరు జిల్లా , ఆంధ్రప్రదేశ్ , భారతదేశం - 522529."
              : "Koti Lingala Sri MahaKali Sahitha Sri Maha Kaleswara Swamy kshetram, VemaVaram , PhirangiPuram Mandal , Guntur District , Andhra Pradesh , India - 522529."}
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <FaPhoneAlt className="text-xl ml-2" />
          <div className="flex flex-col gap-2">
            <a href="tel:+919949888171" className="text-lg">
              +91 9949888171,
            </a>
            <a href="tel:+919441545885" className="text-lg">
              +91 9441545885,
            </a>
            <a href="tel:+919885185082" className="text-lg">
              +91 9885185082
            </a>
          </div>
        </div>
          <a
            href="mailto:kotilingalamahakaleswara@gmail.com"
            className="text-lg flex md:gap-4"
          >
           <GrMail className="text-2xl ml-2" /> kotilingalamahakaleswara@gmail.com
          </a>
      </div>
      {/* google maps div */}
      <div className="p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d732.9389827834713!2d80.22490937588287!3d16.293888021077137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a788f3e1a0963%3A0xaa9e0c574a7cc4a6!2sKotilingala%20Sri%20Sri%20Sri%20Mahakali%20Sahitha%20Mahakaleshwara%20Temple!5e0!3m2!1sen!2sin!4v1686988837590!5m2!1sen!2sin"
          className="w-full md:w-[90%] md:h-80 md:mx-auto"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
