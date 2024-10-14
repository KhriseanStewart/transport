import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import '../Navbar.css'; // Ensure to import your CSS styles
import Socials from './Socials'

export default function Navbar() {
    const [click, setClick] = useState(false); // State for toggle
    const [isBlack, setIsBlack] = useState(false); // State for scroll

    const handleClick = () => setClick(!click); // Toggle menu
    const closeMobileMenu = () => setClick(false); // Close menu function

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsBlack(scrollPosition > 0); // Change navbar color based on scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`nav-bar ${isBlack ? 'black' : ''}`}>
                <div className='nav-logo'>
                    <a href="/">
                        <img className='Logo' src={Logo} alt="Logo" />
                    </a>
                </div>

                <h2 className='TRR'>Transporter Tours & Rentals</h2>

                <Socials></Socials>

                <div className='Menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="/" className='nav-links' onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/services" className='nav-links' onClick={closeMobileMenu}>Services</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/contacts" className='nav-links' onClick={closeMobileMenu}>Contact</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/info" className='nav-links' onClick={closeMobileMenu}>Info</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/sign-up" className='nav-links' onClick={closeMobileMenu}>Sign Up</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}