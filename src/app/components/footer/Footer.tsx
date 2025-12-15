
'use client'

import React from 'react'
import Link from 'next/link'


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className='footer bg-[var(--light-bg)] text-[var(--primary-navy)] px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 '
    >
      <footer className='mx-auto max-w-7xl'>
        <div className='flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 mb-8 sm:mb-12 lg:mb-16'>
          <div className='flex-1'>
            <p className='text-xs sm:text-sm font-semibold mb-2 sm:mb-4 tracking-wider'>EMAIL US</p>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 break-all sm:break-normal'>hello@daffodil.com</p>

            <p className='text-xs sm:text-sm font-semibold mb-2 sm:mb-4 tracking-wider text-[var(--accent-blue)]'>CALL US</p>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8'>+1 999 888-76-54</p>

            <div className='flex flex-col sm:flex-row sm:space-x-4 md:space-x-8 space-y-2 sm:space-y-0 text-xs sm:text-sm text-[var(--charcoal)]'>
              <span>Opening hours: 9am—6pm</span>
              <Link href="/privacy" className='hover:text-[var(--accent-blue)] cursor-pointer transition-colors'>Privacy Policy</Link>
              <Link href="/terms" className='hover:text-[var(--accent-blue)] cursor-pointer transition-colors'>Terms & Conditions</Link>
            </div>
          </div>

          <div className='md:text-right'>
            <p className='text-base sm:text-lg font-semibold mb-4 sm:mb-6 lg:mb-8 text-[var(--primary-navy)]'>Services</p>
            <div className='space-y-3 sm:space-y-4 text-sm sm:text-base'>
              <Link href="/about" className='hover:text-[var(--accent-gold)] transition-colors cursor-pointer block'>About Us</Link>
              <Link href="/history" className='hover:text-[var(--accent-gold)] transition-colors cursor-pointer block'>History</Link>
              <Link href="/career" className='hover:text-[var(--accent-gold)] transition-colors cursor-pointer block'>Careers</Link>
              <Link href="/contact" className='hover:text-[var(--accent-gold)] transition-colors cursor-pointer block'>Contacts Us</Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-6 sm:pt-8 border-t border-gray-200'>
          <p className='text-xs sm:text-sm text-[var(--charcoal)]'>Copyright © 2025 AIHR</p>
          <button
            onClick={scrollToTop}
            className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] flex items-center justify-center 
                cursor-pointer text-white transition-all hover:scale-110 active:scale-95 focus:outline-none shadow-md'
            aria-label='Back to top'
          >
            <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth='2.5'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Footer