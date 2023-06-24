import "react-multi-carousel/lib/styles.css";
import { BsFillCircleFill } from "react-icons/bs";

const Donation = ({language}) => {
  return (
    <div className="mt-4 lg:grid lg:grid-cols-2 items-center" id="donations">
      <div className="p-6 md:p-10">
        <div className="flex justify-center">
          <video src="donation/temple.mp4" alt="temple video" autoPlay={true} muted loop />
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <h2 className="text-red-800 font-bold text-4xl text-center">
          {language === "Telugu" ? "విరాళం" : "Donation"}
        </h2>
        <p className="px-8 py-4 md:text-lg text-center">
          {language === "Telugu" ? "సమాజానికి సేవ చేయడం మరియు ఆధ్యాత్మిక వృద్ధిని పెంపొందించడం అనే మా మిషన్‌ను కొనసాగించడంలో మాకు సహాయపడండి. మీ విరాళాలు ఆలయ నిర్వహణలో, ఈవెంట్‌లను నిర్వహించడంలో మరియు ధార్మిక కార్యక్రమాలకు మద్దతు ఇవ్వడంలో మార్పును కలిగిస్తాయి." : 
          `Help us continue our mission of serving the community and fostering
          spiritual growth. Your donations make a difference in maintaining the
          temple, organizing events, and supporting charitable initiatives.`}
        </p>
        <ul className="flex justify-center flex-col mx-7 my-4 md:mx-10">
          <li className="mt-2  items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
            {language === "Telugu" ? "ఆలయ ప్రాంగణాన్ని నిర్వహించండి." : "Maintain the temple premises."}
          </li>
          <li className="mt-2  items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
            {language === "Telugu" ? "మతపరమైన వేడుకలు మరియు పండుగలను నిర్వహించండి." : "Organize religious ceremonies and festivals."}
          </li>
          <li className="mt-2  items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
            {language === "Telugu" ? "ఆధ్యాత్మిక అభివృద్ధి కోసం విద్యా కార్యక్రమాలను అందించండి." : "Offer educational programs for spiritual growth."}
          </li>
          <li className="mt-2  items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
            {language === "Telugu" ? "కమ్యూనిటీ ఔట్రీచ్ కార్యక్రమాలకు మద్దతు ఇవ్వండి." : "Support community outreach initiatives."}
          </li>
          <li className="mt-2  items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
            {language === "Telugu" ? "ఆలయ అనుభవాన్ని మెరుగుపరచండి." : "Enhance the temple experience."}
          </li>
        </ul>
      </div>
      <section className='col-span-2'>
        <p className='font-semibold text-red-800 text-4xl text-center'>{language==="Telugu" ? "విరాళం వివరాలు":"Donation Details"}</p>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
          {/* QR div */}
          <div className='lg:w-1/2 flex flex-col p-7 items-center justify-center gap-6 md:p-10'>
              <p className='font-semibold text-xl'>
              {language==="Telugu" ? "విరాళం ఇవ్వడానికి QR కోడ్‌ని స్కాన్ చేయండి" : "Scan the QR Code to donate"}
              </p>
              <img src="QR-Code.jpg" alt="qr code" className='md:w-80 md:h-80 lg:w-64 lg:h-64'/>
          </div>
          <div className='lg:w-1/2 flex flex-col gap-6'>
              <p className='font-bold text-xl'>
                {language==="Telugu" ? "దిగువ బ్యాంక్ వివరాలను ఉపయోగించి విరాళం ఇవ్వండి":"Donate using below Bank Details"}
              </p>
              <div>
                  <label className='font-normal text-xl md:text-2xl'>{language==="Telugu" ? "బ్యాంక్ పేరు":"Bank Name"}: </label>
                  <span className='text-lg font-bold'>Union Bank of India</span>
              </div>
              <div>
                  <label className='font-normal text-xl md:text-2xl'>{language==="Telugu" ? "ఖాతా సంఖ్య":"Account Number"}: </label>
                  <span className='text-lg font-bold'>510101003887986</span>
              </div>
              <div>
                  <label className='font-normal text-xl md:text-2xl'>{language==="Telugu" ? "IFSC కోడ్":"IFSC Code"}: </label>
                  <span className='text-lg font-bold'>UBIN0901504</span>
              </div>
              {/* <div>
                  <label className='font-normal text-2xl'>UPI Number : </label>
                  <span className='text-lg font-bold'>9346160711</span>
              </div> */}
            </div>
          </div>
        </section>
    </div>
  );
};

export default Donation;
