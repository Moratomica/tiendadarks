import React from 'react'
import separador from '../assets/separador.png'

function About() {
  return (
    <div className='bg-black'>
        <div className='flex flex-col justify-center items-center w-full'> 
            <div>
                <h2 className='font-vigran text-white text-4xl lg:text-6xl text-center'>ABOUT US</h2>
                <p className='font-nyali text-white text-[18px] lg:text-[28px] tracking-wider mx-12 text-center mb-4 lg:mb-2 lg:my-10 lg:max-w-2xl'>Fashion & Lifestyle brand with a twist of darkness, channeling emotional power and raw energy into every thread.</p>
            </div>

            <div className='mt-1 '>
                <img src={separador} className='w-[280px] lg:w-[600px]'/>
            </div>
        </div>
    </div>
  )
}

export default About