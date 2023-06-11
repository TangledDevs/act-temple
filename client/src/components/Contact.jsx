import { IoLocationSharp } from "react-icons/io5";
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
const Contact = () => {
  return (
    <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2 lg:items-center px-4 md:px-10 gap-6" id="contact">
      {/* contact info div */}
      <div className="flex justify-start flex-col gap-6">
        <h2 className="text-red-800 font-bold text-4xl text-center">Contact</h2>
        {/* Address */}
        <div className="justify-center items-center">
          <IoLocationSharp className="text-2xl inline-block mr-2"/>
          <p className="inline">
            Sri Durga Malleswara Swamy Varla Devasthanam, Indrakeeladri,
            Kanakadurga Nagar, Mallikarjunapeta, Vijayawada - 520 001. Krishna
            District. Andhra Pradesh. India.
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <FaPhoneAlt className="text-2xl ml-2"/>
          <a href="tel:+918887776665">+91 8887776665</a>
        </div>
        <div className="flex gap-4 items-center ">
          <GrMail className="text-2xl ml-2"/>
          <a href="mailto:testmail@gmail.com">testmail@gmail.com</a>
        </div>
      </div>
      {/* google maps div */}
      <div className="p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.585697799789!2d80.52192967480501!3d16.344099984375998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5c460ab7d1d%3A0x8c86e4f36490336b!2sVasireddy%20Venkatadri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1686209175692!5m2!1sen!2sin"
          className="w-full md:w-[90%] md:h-80 md:mx-auto"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
