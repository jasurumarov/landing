import React, { useEffect } from 'react'

// Aos kutubxonasi - animatsiyalar uchun ishlatiladi
import AOS from 'aos';
import 'aos/dist/aos.css';

// Image
import HeroImg from '../../assets/icons/about.svg'
import AboutIcon from '../../assets/icons/about-icon.png'

const About: React.FC = () => {
    // Komponent render bo'lganda birinchilardan bo'lib aos kutub xonasini ishga tushuradi.
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section data-aos="fade-up" id='about' className='py-[80px] sm:py-[108px]'>
            <div className='max-w-[1110px] mx-auto px-4 flex flex-col lg:flex-row gap-10 lg:gap-0 items-start lg:items-center justify-between'>
                <div className='max-w-max lg:max-w-[540px]'>
                    <h2 className='mb-3 sm:mb-5 text-[32px] lg:text-[50px] font-roboto5 text-[#091133] leading-normal lg:leading-[58px]'>Light, Fast & Powerful</h2>
                    <p className='text-[#505F98] text-[16px] lg:text-[18px]'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        <br className='mb-5' />
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                    <div className='mt-[60px] lg:mt-[80px] flex gap-7'>
                        <div className='max-w-[255px]'>
                            <img src={AboutIcon} alt="Icon" className='w-9 h-9 mb-[14px]' />
                            <h3 className='font-roboto5 text-[16px] text-[#091133] mb-2'>Title Goes Here</h3>
                            <p className='text-[12px] text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                        <div className='max-w-[255px]'>
                            <img src={AboutIcon} alt="Icon" className='w-9 h-9 mb-[14px]' />
                            <h3 className='font-roboto5 text-[16px] text-[#091133] mb-2'>Title Goes Here</h3>
                            <p className='text-[12px] text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                    </div>
                </div>
                <img src={HeroImg} alt="Hero img" className='lg:order-1 -order-1' />
            </div>
        </section>
    )
}

export default About
