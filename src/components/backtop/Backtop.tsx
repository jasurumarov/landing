import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Backtop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    // Scroll bo'lganda state ga true qiymatini berdim state true bo'ganda button chiqadi
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const HandleTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <a onClick={HandleTop} href={'#'} className={`opacity-100 fixed z-20 right-[2%] bottom-[-10%] bg-white w-12 h-12 border flex items-center justify-center text-xl rounded-[50%] duration-500 shadow-lg text-colorBlack ${visible ? 'bottom-[2%]' : 'bottom-[-10%]'}`}><FaAngleUp /></a>
    )
}

export default Backtop