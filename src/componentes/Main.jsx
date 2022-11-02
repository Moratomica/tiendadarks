import React from 'react'
import separador from '../assets/separador.png'

function Main() {
  return (
    <div className='bg-black w-full'>
        <div className='flex flex-col w-full justify-center items-center'>
            
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-sabrina text-9xl text-rose-600 mt-7 lg:text-[180px]'>Jinx.</h1>
                <p className='font-nyali text-white text-[18px] lg:text-[38px] tracking-wider mx-12 text-center'>Witchy clothing to suit whatever your favourite witchy vibe is</p>
            </div>

            <div className='mt-1 '>
                <img src={separador} className='w-[280px] lg:w-[600px]'/>
            </div>

        </div>

    </div>
  )
}

export default Main