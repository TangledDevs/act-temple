import { MdLocationPin } from "react-icons/md";
const Contact = () => {
  return (
    <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2 lg:items-center">
      {/* contact info div */}
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-center">Contact</h2>
        {/* Address */}
        <div className="flex gap-4">
          <MdLocationPin size={30} />
          <p>
            Sri Durga Malleswara Swamy Varla Devasthanam, Indrakeeladri,
            Kanakadurga Nagar, Mallikarjunapeta, Vijayawada - 520 001. Krishna
            District. Andhra Pradesh. India.
          </p>
        </div>
      </div>
      {/* google maps div */}
      <div className="p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.585697799789!2d80.52192967480501!3d16.344099984375998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5c460ab7d1d%3A0x8c86e4f36490336b!2sVasireddy%20Venkatadri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1686209175692!5m2!1sen!2sin"
          className="w-full md:w-4/5 md:h-80 md:mx-auto"
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
