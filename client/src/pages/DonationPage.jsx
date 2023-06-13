import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
const DonationPage = () => {
  return (
    <div>
        <Header/>
        <section className='p-10 flex  justify-center flex-col py-14'>
            
                <p className='font-semibold text-3xl text-center'>Donation</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
                {/* QR div */}
                <div className='lg:w-1/2 flex flex-col p-10 items-center justify-center gap-6'>
                    <p className='font-bold text-lg'>Scan the QR Code to donate</p>
                    <img src="qrcode.png" alt="qr code" className='lg:w-60 lg:h-60'/>
                </div>
                <div className='lg:w-1/2 flex flex-col gap-6'>
                    <p className='font-bold text-lg'>Donate Using the Below Bank Details</p>
                    <div>
                        <label className='font-semibold text-lg'>Bank Name: </label>
                        <span>State Bank of India</span>
                    </div>
                    <div>
                        <label className='font-semibold text-lg'>Account Number: </label>
                        <span>State Bank of India</span>
                    </div>
                    <div>
                        <label className='font-semibold text-lg'>IFSC Code: </label>
                        <span>State Bank of India</span>
                    </div>
                    <div>
                        <label className='font-semibold text-lg'>Branch Name: </label>
                        <span>State Bank of India</span>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default DonationPage