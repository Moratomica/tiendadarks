import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <div className=' bg-rose-600'>
        <div className='flex flex-col w-full justify-center items-center bg-rose-600'>
            <div className='flex flex-row w-full justify-center items-center gap-3 mt-2'>
                <FaFacebookSquare className='text-[18px] lg:text-[32px] lg:mx-5 hover:text-white cursor-pointer'/>
                <FaInstagramSquare className='text-[18px] lg:text-[32px] lg:mx-5 hover:text-white cursor-pointer'/>
                <GiShoppingBag className='text-[18px] lg:text-[32px] lg:mx-5 hover:text-white cursor-pointer'/>
                <AiFillMail className='text-[18px] lg:text-[32px] lg:mx-5 hover:text-white cursor-pointer'/>
            </div>

            <div className='text-black font-nyali text-sm mb-2 lg:mt-3 lg:text-lg lg:mb-4'>
                Jaizmora Media All Rights Reserved 
            </div>
        </div>

    </div>
  )
}

export default Footer