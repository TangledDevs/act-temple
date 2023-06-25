import React from 'react'

const DonationDetails = ({language}) => {
  return (
    <div>
        <section className=''>
        <p className='font-semibold text-red-800 text-3xl md:text-4xl text-center'>{language==="Telugu" ? "విరాళం వివరాలు":"Donation Details"}</p>
        <div className='flex flex-col mx-4 md:mx-0 lg:flex-row items-center justify-center gap-10 '>
          {/* QR div */}
          <div className='lg:w-1/2 flex flex-col p-7 items-center justify-center gap-6 md:p-10 '>
              <p className='font-semibold text-xl'>
              {language==="Telugu" ? "విరాళం ఇవ్వడానికి QR కోడ్‌ని స్కాన్ చేయండి" : "Scan the QR Code to donate"}
              </p>
              <img src="QR-Code.jpg" alt="qr code" className='md:w-80 md:h-80 lg:w-64 lg:h-64'/>
          </div>
          <div className='lg:w-1/2 mx-4 md:mx-0 flex flex-col gap-6 justify-center'>
              <p className='font-bold text-xl'>
                {language==="Telugu" ? "దిగువ బ్యాంక్ వివరాలను ఉపయోగించి విరాళం ఇవ్వండి":"Donate using below Bank Details"}
              </p>
              <div>
                  <label className='font-normal text-xl md:text-2xl'>{language==="Telugu" ? "బ్యాంక్ పేరు":"Bank Name"}: </label>
                  <span className='text-xl font-semibold'>Union Bank of India</span>
              </div>
              <div>
                  <label className='font-normal text-xl md:text-2xl'>{language==="Telugu" ? "ఖాతా పేరు":"Account Name"}: </label>
                  <span className='text-xl font-semibold'>KOTILINGALA SMSSMA SEVASAMSTHA</span>
              </div>
              <div>
                  <label className='font-normal text-xl md:text-2xl'>{language==="Telugu" ? "ఖాతా సంఖ్య":"Account Number"}: </label>
                  <span className='text-xl font-semibold'>510101003887986</span>
              </div>
              <div>
                  <label className='font-normal text-xl md:text-2xl'>{language==="Telugu" ? "IFSC కోడ్":"IFSC Code"}: </label>
                  <span className='text-xl font-semibold'>UBIN0901504</span>
              </div>
              {/* <div>
                  <label className='font-normal text-2xl'>UPI Number : </label>
                  <span className='text-xl font-semibold'>9346160711</span>
              </div> */}
            </div>
          </div>
        </section>
    </div>
  )
}

export default DonationDetails