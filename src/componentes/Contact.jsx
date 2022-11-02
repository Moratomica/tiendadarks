import React from 'react'
import separador from '../assets/separador.png'

function Contact() {
  return (
    <div className='bg-black'>
        <div className='flex flex-col justify-center items-center'>
           
            <div className='mt-1 '>
                <img src={separador} className='w-[280px] lg:w-[600px]'/>
            </div>

            <div className='flex flex-col justify-center items-center mb-4 lg:mt-0 lg:mb-8'>
                <h2 className='font-vigran text-white text-4xl lg:text-6xl'>Contact US</h2>
            </div>


            <div className='flex flex-col justify-center items-center mb-4 gap-2' >
                <input type="text" placeholder=' Nombre' className='w-96 rounded uppercase font-bold bg-black border-2 border-rose-600 text-white text-center'/>
                <input type="mail" placeholder='E-mail' className='w-96 rounded uppercase font-bold bg-black border-2 border-rose-600 text-white  text-center'/>
                <input type="text" placeholder='Message'className='w-96 rounded uppercase font-bold bg-black border-2 border-rose-600 text-white h-[100px] text-center'/>
                <input type="submit" placeholder='Sumbit' className='w-96 rounded bg-rose-600 text-white uppercase font-bold hover:bg-white hover:text-black cursor-pointer'/>
            </div>

            
        </div>


    </div>
  )
}

export default Contact