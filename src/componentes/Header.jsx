import React from 'react'
import nube1 from '../assets/nube1.png'
import nube2 from '../assets/nube2.png'
import lunas from '../assets/moon.png'

function Header() {
  return (
    <div className='bg-black w-full'>
        <img src={nube1} className='w-1/3 absolute m-0'/>
        <img src={nube2} className='w-1/3 absolute right-0 '/>
            
        <div className='flex flex-col w-full justify-center items-center'>   
            <img src={lunas} className='w-2/3 mt-20 md:w-96 lg:w-1/3' />
            <ul className='flex text-white uppercase space-x-6 text-2xl font-vigran lg:text-4xl'>
                <li className='hover:underline decoration-4 cursor-pointer'>Home</li>
                <li className='hover:underline decoration-4 cursor-pointer'>about us</li>
                <li className='hover:underline decoration-4 cursor-pointer'>shop</li>
                <li className='hover:underline decoration-4 cursor-pointer'>contact</li>
            </ul>
        </div>



    </div>
  )
}

export default Header