
'use client'

import React from 'react'


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className='footer bg-gray-950 text-white px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 '
    >
        <footer className='mx-auto max-w-7xl'>
          <div className='flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 mb-8 sm:mb-12 lg:mb-16'>
            <div className='flex-1'>
              <p className='text-xs sm:text-sm font-semibold mb-2 sm:mb-4 tracking-wider'>EMAIL US</p>
              <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 break-all sm:break-normal'>hello@daffodil.com</p>
              
              <p className='text-xs sm:text-sm font-semibold mb-2 sm:mb-4 tracking-wider'>CALL US</p>
              <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8'>+1 999 888-76-54</p>

              <div className='flex flex-col sm:flex-row sm:space-x-4 md:space-x-8 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-400'>
                  <span>Opening hours: 9am—6pm</span>
                  <span>Privacy Policy</span>
                  <span>Terms & Conditions</span>
              </div>
            </div>

            <div className='md:text-right'>
                <p className='text-base sm:text-lg font-semibold mb-4 sm:mb-6 lg:mb-8'>Services</p>
        <div className='space-y-3 sm:space-y-4 text-sm sm:text-base'>
          <a href="/about" className='hover:text-gray-300 transition-colors cursor-pointer block'>About Us</a>
          <a href="/history" className='hover:text-gray-300 transition-colors cursor-pointer block'>History</a>
          <a href="/career" className='hover:text-gray-300 transition-colors cursor-pointer block'>Careers</a>
          <a href="/contact" className='hover:text-gray-300 transition-colors cursor-pointer block'>Contacts Us</a>
        </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-6 sm:pt-8 border-t border-gray-700'>
              <p className='text-xs sm:text-sm text-gray-400'>Copyright © 2025 DRC</p>
              <button 
                onClick={scrollToTop}
                className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#63a567] flex items-center justify-center 
                cursor-pointer  transition-all hover:scale-110 active:scale-95 focus:outline-none   focus:ring-offset-gray-950'
                aria-label='Back to top'
              >
                <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth='2.5'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7'/>
                </svg>
              </button>
          </div>
        </footer> 
    </div>
  )
}

export default Footer