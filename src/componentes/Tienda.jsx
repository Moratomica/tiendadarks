import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'

function Tienda() {
  return (
    <div className='bg-black flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-vigran text-white text-4xl tracking-normal lg:text-6xl '>Join the coven</h2>
                <p className='font-nyali text-white text-[18px] lg:text-[32px] uppercase mt-1 mb-4'>Shop now</p>
            </div>
        <div className='grid grid-cols-2 gap-4 mx-4 xl:grid-cols-6 xl:justify-center xl:items-center lg:grid-cols-3'>
            <div>
                <img src={img1} className='mx-0 rounded-xl brightness-50 hover:brightness-100 cursor-pointer xl:h-[282px]' />
            </div>

            <div>
                <img src={img2} className='mx-0 rounded-xl brightness-50 hover:brightness-100 cursor-pointer xl:h-[282px]' />
            </div>

            <div>
                <img src={img3} className='mx-0 rounded-xl brightness-50 hover:brightness-100 cursor-pointer xl:h-[282px]' />
            </div>

            <div>
                <img src={img4} className='mx-0 rounded-xl brightness-50 hover:brightness-100 cursor-pointer xl:h-[282px]' />
            </div>

            <div>
                <img src={img5} className='mx-0 rounded-xl brightness-50 hover:brightness-100 cursor-pointer xl:h-[282px]' />
            </div>

            <div>
                <img src={img6} className='mx-0 rounded-xl brightness-50 hover:brightness-100 cursor-pointer xl:h-[282px]' />
            </div>

        </div>




    </div>
  )
}

export default Tienda