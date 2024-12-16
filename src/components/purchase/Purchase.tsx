import React from 'react'

const Purchase: React.FC = () => {
    return (
        <section className={`sm:pb-[172px] sm:pt-[250px] pb-[102px] pt-[180px] bg-purchase`}>
            <div className='flex flex-col items-center max-w-[1110px] mx-auto px-4'>
                <h3 className='mb-4 font-roboto5 text-[32px] lg:text-3xl text-center text-[#091133]'>A Price To Suit Everyone</h3>
                <p className='mb-9 text-center text-[16px] text-[#505F98] max-w-[600px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                <h2 className='text-[50px] font-roboto5 text-[#222F65]'>$40</h2>
                <p className='-mt-1.5 mb-[60px] text-[#37447E] text-[16px]'>UI Design Kit</p>
                <p className='mb-[9px] text-[#5D6970] text-[14px]'>See, One price. Simple.</p>
                <button className='w-[189px] bg-[#111B47]  border-2 border-[#111B47] text-white text-sm py-1.5 font-roboto sm:font-roboto5 rounded active:scale-[.97] hover:opacity-90 duration-200'>Purchase Now</button>
            </div>
        </section>
    )
}

export default Purchase
