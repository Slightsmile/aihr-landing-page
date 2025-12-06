'use client'

import React from 'react'
import Image from 'next/image'
import LetsDo from '@/app/static/images/landing_page/lets_do.png'

const GetInTouch = () => {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center bg-[url('/images/get_in_touch_bg.jpg')] flex items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"> LET&apos;S DO</h2>
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">THIS</span>

                    <div className="relative w-[100px] h-[64px] sm:w-[120px] sm:h-[77px] md:w-[140px] md:h-[90px] lg:w-[156px] lg:h-[100px]">
                        <Image src={LetsDo} alt="Business collaboration" fill className="object-cover" />
                    </div>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#9dffa1]"> TOGETHER  </h3>
                  </div>
                </div>

                <p className="text-white text-sm sm:text-base md:text-md font-semibold mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                    We believe the best work is born out of collaboration. Getting to know you
                    intimately.
                    <br className="hidden sm:block" />
                    <span className="inline sm:inline"> </span>Becoming as invested in your future as you are.
                </p>

              <div className="p-0.5 bg-gradient-to-r from-[#dbdddc] to-[#39b63e] rounded-full inline-block">
                <button className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 bg-[#9dffa1] text-gray-900 font-semibold rounded-full
                 hover:opacity-90 shadow-lg text-base sm:text-lg">
                  Get In Touch
                </button>
              </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
