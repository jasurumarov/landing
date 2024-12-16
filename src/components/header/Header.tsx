import React, { useState } from 'react'

// Icons
import { IoMenu } from 'react-icons/io5'

const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    return (
        <header className='fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 bg-white'>
            <div className='max-w-[1110px] mx-auto px-4 flex items-center justify-between'>
                <ul className={`w-full sm:w-auto bg-white flex flex-col sm:flex-row items-center sm:gap-6 md:gap-10 lg:gap-[60px] fixed sm:static z-10 left-0 top-[55px] duration-300 origin-top shadow sm:shadow-none sm:scale-100 ${toggleMenu ? 'scale-y-100' : 'scale-y-0'}`}>
                    <li className='py-2 border-y-2 w-full text-center sm:border-none'>
                        <a href={'#'} className='text-[#505F98] font-roboto5 hover:border-b-2 border-[#505F98] duration-75'>Home</a>
                    </li>
                    <li className='py-2 w-full text-center sm:border-none'>
                        <a href={'#about'} className='text-[#505F98] font-roboto5 hover:border-b-2 border-[#505F98] duration-75'>About</a>
                    </li>
                    <li className='py-2 border-y-2 w-full text-center sm:border-none'>
                        <a href={'#contact'} className='text-[#505F98] font-roboto5 hover:border-b-2 border-[#505F98] duration-75'>Contact</a>
                    </li>
                    <button className='my-4 sm:hidden sm:ml-10 md:ml-24 w-[100px] sm:w-[160px] bg-[#111B47] text-white text-sm py-1 font-roboto sm:font-roboto5 rounded active:scale-[.97] hover:opacity-90 duration-200'>Buy Now</button>
                </ul>
                <h1 className='text-[#37447E] font-roboto9 text-[26px] select-none'>Landing</h1>
                <div className='flex items-center gap-3'>
                    <button className='hidden sm:block sm:ml-10 md:ml-24 w-[100px] sm:w-[160px] bg-[#111B47] text-white text-sm py-1 font-roboto sm:font-roboto5 rounded active:scale-[.97] hover:opacity-90 duration-200'>Buy Now</button>
                    <button onClick={() => setToggleMenu(prev => !prev)} ><IoMenu className='sm:hidden text-[30px] text-[#111B47]' /></button>
                </div>
            </div>
        </header>
    )
}

export default Header
