import React from 'react';
import { githubLogo } from '../assets';

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import { logoLightt, paymentLogo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 '>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>

            <div className='flex flex-col gap-7'>
                <img className='w-32' src={logoLightt}/>
                <p className='text-white text-sm tracking-wide'> @white.com</p>
                <img className='w-56' src={paymentLogo}/>
                <div className='flex gap-5 text-lg text-gray-400' >
                <githubLogo/>
                <FaYoutube className='hover:text-white duration-300 cursor-pointer' ></FaYoutube>
                <FaFacebookF className='hover:text-white duration-300 cursor-pointer' ></FaFacebookF>
                <FaTwitter className='hover:text-white duration-300 cursor-pointer' ></FaTwitter>
               <FaInstagram className='hover:text-white duration-300 cursor-pointer' ></FaInstagram>
               <FaHome className='hover:text-white duration-300 cursor-pointer' ></FaHome>
                
                </div>
            </div>
            <div>
                  <h2 className='text-2x1 font-semibold text-white mb-4'>Locate us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>mbd,otowa, canada</p>
                        <p>Mobile: 09383838383</p>
                        <p>Phone: 002020202000</p>
                        <p>email: gmik4091@gmail.com</p>
                    </div>
                    </div>

                    <div>
                    <h2 className='text-2x1 font-semibold text-white mb-4'> Profile</h2>  
                    <div className='flex flex-col gap-2 text-base'>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    
                        My account</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    
                       Checkout</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    
                        Order tracking</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    
                      Help and support</p>
                      </div>
                    </div>

<div className='flex flex-col justify-center'>
    <input 
      className='bg-transparent border px-4 py-2 text-sm' type='text' placeholder="email"
    />
    <button className='text-sm border text-white border-t-0 hover:bg-gray-900
    active:bg-white active:text-black'>Subscribe</button>
</div>
       
       
        </div>
        </div>
  )
}

export default Footer