'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md text-[var(--primary-navy)] border-b border-gray-100 shadow-sm'>
            <div className="absolute top-1 left-10 w-36 h-36 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />

            <div className='flex justify-between items-center px-6 md:px-20 py-6'>
                {/* Logo - AIHR Text */}
                <div className="pointer-events-auto z-50">
                    <Link href="/home" className="cursor-pointer hover:opacity-90 transition">
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
                            AIHR
                        </span>
                    </Link>
                </div>



                {/* Desktop Menu */}
                <div className='hidden md:flex flex-1 justify-center'>
                    <ul className='flex gap-8 text-sm font-medium'>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition'>
                            <Link href="/home" className='cursor-pointer'>Home</Link>
                        </li>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition'>
                            <Link href="/home#services" className='cursor-pointer'>Services</Link>
                        </li>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition'>
                            <Link href="/home#features" className='cursor-pointer'>Features</Link>
                        </li>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition'>
                            <Link href="/pricing" className='cursor-pointer'>Pricing</Link>
                        </li>
                    </ul>
                </div>

                {/* Login/Signup Buttons - Desktop */}
                <div className='hidden md:flex items-center gap-3'>
                    <Link href="/login">
                        <button className='px-5 py-2 text-sm font-medium text-[var(--primary-navy)] border border-gray-200 rounded-full hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all duration-300'>
                            Login
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className='px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full hover:shadow-lg hover:opacity-90 transition-all duration-300'>
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* <button
            className="hidden md:inline-flex group items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#dcdedd] to-[#3eb343]
                                    hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105"
                        >
            <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-4 py-3 md:py-2.5 rounded-full
                        bg-gradient-to-t from-[#92eb95] via-[#9dffa1] to-[#c3ffc6]
                       text-[#2d4c2e] font-semibold text-sm md:text-base">
                            Schedule A Demo
                        
            </span>
        </button> */}

                {/* Mobile Hamburger Menu */}
                <div className='md:hidden shrink-0'>
                    <button
                        onClick={toggleMenu}
                        className='flex flex-col gap-1.5 w-8 h-8 justify-center items-center focus:outline-none'
                        aria-label='Toggle menu'
                    >
                        <span className={`w-8 h-0.5 bg-[var(--primary-navy)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-8 h-0.5 bg-[var(--primary-navy)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-8 h-0.5 bg-[var(--primary-navy)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='px-6 pb-6 pt-2 bg-white border-b border-gray-100'>
                    <ul className='flex flex-col gap-4 text-sm font-medium text-[var(--primary-navy)]'>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition py-2 border-b border-gray-100'>
                            <Link href="/home" className='cursor-pointer' onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition py-2 border-b border-gray-100'>
                            <Link href="/home#services" className='cursor-pointer' onClick={closeMenu}>Services</Link>
                        </li>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition py-2 border-b border-gray-100'>
                            <Link href="/home#features" className='cursor-pointer' onClick={closeMenu}>Features</Link>
                        </li>
                        <li className='hover:text-[var(--accent-blue)] cursor-pointer transition py-2 border-b border-gray-100'>
                            <Link href="/pricing" className='cursor-pointer' onClick={closeMenu}>Pricing</Link>
                        </li>
                    </ul>

                    {/* Login/Signup Buttons - Mobile */}
                    <div className='flex flex-col gap-3 mt-6'>
                        <Link href="/login" onClick={closeMenu}>
                            <button className='w-full px-5 py-2.5 text-sm font-medium text-[var(--primary-navy)] border border-gray-200 rounded-full hover:border-[var(--accent-blue)] transition-all duration-300'>
                                Login
                            </button>
                        </Link>
                        <Link href="/signup" onClick={closeMenu}>
                            <button className='w-full px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full hover:shadow-lg transition-all duration-300'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;