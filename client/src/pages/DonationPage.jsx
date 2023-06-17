import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';

const DonationPage = () => {
  return (
    <div>
        <Header/>
        <section className='p-4 flex justify-center flex-col py-14'>
            <p className='font-semibold text-4xl text-center'>Donation</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
                {/* QR div */}
                <div className='lg:w-1/2 flex flex-col p-7 items-center justify-center gap-6 md:p-10'>
                    <p className='font-bold text-xl md:text-2xl'>Scan the QR Code to donate</p>
                    <img src="QR-Code.jpg" alt="qr code" className='md:w-80 md:h-80 lg:w-64 lg:h-64'/>
                </div>
                <div className='lg:w-1/2 flex flex-col gap-6'>
                    <p className='font-bold text-xl md:text-2xl'>Donate using below Bank Details</p>
                    <div>
                        <label className='font-normal text-xl md:text-2xl'>Bank Name : </label>
                        <span className='text-lg font-bold'>Union Bank of India</span>
                    </div>
                    <div>
                        <label className='font-normal text-xl md:text-2xl'>Account Number : </label>
                        <span className='text-lg font-bold'>510101003887986</span>
                    </div>
                    <div>
                        <label className='font-normal text-xl md:text-2xl'>IFSC Code : </label>
                        <span className='text-lg font-bold'>UBIN0901504</span>
                    </div>
                    {/* <div>
                        <label className='font-normal text-2xl'>UPI Number : </label>
                        <span className='text-lg font-bold'>9346160711</span>
                    </div> */}
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default DonationPage