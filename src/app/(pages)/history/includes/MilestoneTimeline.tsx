import React from 'react';
import Image from 'next/image';
import { timelineData } from '../data/milestoneData';
import historyImage from '../../../static/images/history_page/image 269.png';
import historyImageLeft from '../../../static/images/history_page/image 268.png';
import CeoImage from '../../../static/images/history_page/image 267.png';
import LeftMiddle from '../../../static/images/history_page/image 270.png';
import LeftBottom from '../../../static/images/history_page/image 271.png';

const MilestoneTimeline = () => {
    return (
        <section className="relative py-20 px-6 sm:px-8 lg:px-12 overflow-hidden ">
            <div className="hidden absolute top-10 -right-20 w-160 h-120 bg-amber-50 rounded-full blur-3xl" />

            {/* Header */}
            <div className="mb-16 sm:mb-20">
                <h2 className="text-2xl sm:text-5xl lg:text-4xl font-semibold text-[var(--primary-navy)] text-center">
                    Daffodil Group: <span className="text-[var(--accent-blue)] font-normal">Milestone</span> Timeline
                </h2>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-full lg:px-30 px-2 mx-auto">

                {/* Timeline Items */}
                <div className="space-y-12 sm:space-y-16">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Year */}
                            <h3 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-[var(--accent-blue)] mb-6 sm:mb-8">
                                {item.year}
                            </h3>

                            {/* Milestones */}
                            <div className="space-y-1 sm:space-y-2 pl-5 border-l-2 border-[var(--accent-gold)]">
                                {item.milestones.map((milestone, milestoneIndex) => (
                                    <div
                                        key={milestoneIndex}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-[var(--accent-gold)] text-sm sm:text-lg shrink-0 mt-0.5">•</span>
                                        <p className="text-[var(--charcoal)] text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed font-normal">
                                            {milestone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Gallery Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6  mt-10 px-4 sm:px-6 md:px-8 lg:px-35">

                <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-16">
                    {/* Top Left Image */}
                    <div className="h-32 sm:h-40 md:h-48 lg:h-[300px]  overflow-hidden rounded-2xl shadow-md">
                        <Image src={historyImageLeft} alt="History Page Top Left" className="w-full h-full object-cover" />
                    </div>

                    {/* CEO Section */}
                    <div className="h-auto flex flex-col justify-center">
                        <div className="flex flex-col items-start bg-[var(--card-bg)] p-6 rounded-2xl shadow-lg border border-gray-100">
                            <div className="mb-3 sm:mb-4">
                                <Image src={CeoImage} alt="CEO Image" className="w-28 sm:w-32 md:w-40 lg:w-[189px] h-auto object-cover rounded-xl" />
                            </div>
                            <div className="mt-2 sm:mt-3 md:mt-4">
                                <p className='text-[var(--primary-navy)] font-semibold text-sm sm:text-base md:text-lg lg:text-[24px] leading-snug'>
                                    Dr. Mohammad Nuruzzaman <br className="hidden sm:block" />
                                    <span className="block sm:inline text-[var(--accent-blue)] text-base font-normal">Group CEO, Daffodil Group</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - 3 Images */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-10">
                    {/* Top Right Image */}
                    <div className="h-32 sm:h-40 md:h-48 lg:h-[255px]  overflow-hidden rounded-2xl shadow-md">
                        <Image src={historyImage} alt="History Page Right Top" className="w-full h-full object-cover" />
                    </div>

                    {/* Middle Right Image */}
                    <div className="h-32 sm:h-40 md:h-48 lg:h-56  overflow-hidden rounded-2xl shadow-md">
                        <Image src={LeftMiddle} alt="History Page Middle Right" className="w-full h-full object-cover" />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="h-32 sm:h-40 md:h-48 lg:h-40  overflow-hidden rounded-2xl shadow-md">
                        <Image src={LeftBottom} alt="History Page Bottom Right" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MilestoneTimeline;