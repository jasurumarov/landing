import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <footer className=' bg-[#E7ECFF] pt-[61px] pb-[32px]'>
            <div className='max-w-[1110px] mx-auto px-4'>
                <div className='pb-10 border-b border-[#CDD1D4] flex justify-between items-center'>
                    <p className='hidden sm:block text-sm text-[#939EA4] font-roboto5'>©2023 Yourcompany</p>
                    <h1 className='text-[#37447E] font-roboto9 text-[26px] select-none'>Landing</h1>
                    <button className='w-[109px] bg-[#111B47]  border-2 border-[#111B47] text-white text-[12px] py-1 font-roboto sm:font-roboto5 rounded active:scale-[.97] hover:opacity-90 duration-200'>Purchase Now</button>
                </div>
                <div className='mt-5 flex justify-between items-center'>
                    <ul className='flex flex-col sm:flex-row gap-[30px] sm:gap-[60px]'>
                        <li>
                            <a href={'#'} className='text-[#929ECC] hover:border-b-2 border-[#929ECC] duration-75'>Home</a>
                        </li>
                        <li>
                            <a href={'#about'} className='text-[#929ECC] hover:border-b-2 border-[#929ECC] duration-75'>About</a>
                        </li>
                        <li>
                            <a href={'#contact'} className='text-[#929ECC] hover:border-b-2 border-[#929ECC] duration-75'>Contact</a>
                        </li>
                    </ul>
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]'>
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF className='text-[#B0B8BC] text-[16px]' /></a>
                        <a href="https://www.linkedin.com/" target='_blank'><FaLinkedinIn className='text-[#B0B8BC] text-[16px]' /></a>
                        <a href="https://www.x.com/" target='_blank'><FaTwitter className='text-[#B0B8BC] text-[16px]' /></a>
                        <a href="https://www.youtube.com/" target='_blank'><FaYoutube className='text-[#B0B8BC] text-[16px]' /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram className='text-[#B0B8BC] text-[16px]' /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
