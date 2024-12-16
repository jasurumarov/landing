import React, { useEffect } from 'react'

// Aos kutubxonasi - animatsiyalar uchun ishlatiladi
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import SaleFirst from '../../assets/images/sale-first.svg'
import SaleSecond from '../../assets/images/sale-second.svg'
import SaleThird from '../../assets/images/sale-third.svg'

// Interfaces
interface SaleProps {
    heading: string
    img: string
    btn: boolean
}

const Sale: React.FC<SaleProps> = ({ heading, img, btn }) => {
    // Komponent render bo'lganda birinchilardan bo'lib aos kutub xonasini ishga tushuradi.
    useEffect(() => {
            AOS.init();
        }, []);
    return (
        <section data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='py-10 sm:py-[120px] flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0 justify-between max-w-[1110px] mx-auto px-4'>
            <div className='max-w-[540px] w-full flex justify-center'>
                <img src={img === 'first' ? SaleFirst : img === 'second' ? SaleSecond : SaleThird} alt="Image" />
            </div>
            <div className='max-w-max lg:max-w-[445px]'>
                <h2 className='mb-4 font-roboto5 text-[32px] lg:text-3xl text-[#091133]'>{heading}</h2>
                <p className='text-[16px] text-[#505F98]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    <br className='mb-3' />
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                {
                    btn ?
                        <button className='mt-10 w-[120px] sm:w-[150px] bg-[#111B47]  border-2 border-[#111B47] text-white text-sm py-1.5 font-roboto sm:font-roboto5 rounded active:scale-[.97] hover:opacity-90 duration-200'>Purchase Now</button>
                        : <></>
                }
            </div>
        </section>
    )
}

export default Sale
