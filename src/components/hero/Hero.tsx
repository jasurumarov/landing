import React, { useEffect } from 'react'

// Aos kutubxonasi - animatsiyalar uchun ishlatiladi
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
    // Komponent render bo'lganda birinchilardan bo'lib aos kutub xonasini ishga tushuradi.
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="">
            <div className='max-w-[1110px] mx-auto px-4'>
                <div className='bg-hero mt-28 sm:mt-10 py-10 sm:py-40'>
                    <div className='max-w-[540px]'>
                        <h2 className='mb-3 sm:mb-5 text-[32px] lg:text-[50px] font-roboto5 text-[#091133] leading-normal lg:leading-[58px]'>Introduce Your Product Quickly & Effectively</h2>
                        <p className='text-[#505F98] text-[16px] lg:text-[18px]'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            <br className='mb-5' />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div className='mt-[50px] lg:mt-[69px] flex gap-8'>
                            <button className='w-[130px] sm:w-[180px] bg-[#111B47]  border-2 border-[#111B47] text-white text-sm py-1.5 font-roboto sm:font-roboto5 rounded active:scale-[.97] hover:opacity-90 duration-200'>Purchase UI Kit</button>
                            <button className='w-[130px] sm:w-[180px] bg-white border-2 border-[#111B47] text-[#111B47] text-sm py-1.5 font-roboto sm:font-roboto5 rounded active:scale-[.97] hover:opacity-90 duration-200'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
