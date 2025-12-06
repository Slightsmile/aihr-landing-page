import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import contactImage1 from '../../../static/images/contact_us/image_248.png';
import contactImage2 from '../../../static/images/contact_us/image_249.png';
import contactImage3 from '../../../static/images/contact_us/image_250.png';

interface Card {
    id: number;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    img: StaticImageData;
}

const RelatedBlog: React.FC = () => {
    const cards: Card[] = [
        {
            id: 1,
            title: 'Revolutionizing Customer Support with AI-Assisted Inbound Routing',
            category: 'Analyst Reports',
            date: '13 December, 2024',
            excerpt:
                "Explore how DRC's advanced AI tools streamline inbound inquiries across voice, email, chat, and social media — reducing wait times and boosting resolution rates.",
            img: contactImage1,
        },
        {
            id: 2,
            title: 'The Power of 24/7 Omnichannel Inbound Services for Global Businesses',
            category: 'Analyst Reports',
            date: '13 December, 2024',
            excerpt:
                "Discover how DRC's contact center excellence ensures seamless, empathetic customer interactions and drives loyalty in the digital age.",
            img: contactImage3,
        },
        {
            id: 3,
            title: "Optimizing Inbound Operations: Lessons from DRC's Edu-Tech Implementations",
            category: 'Analyst Reports',
            date: '13 December, 2024',
            excerpt:
                "Learn from real-world case studies where DRC's inbound services transformed educational institutions and personalized student support using AI.",
            img: contactImage2,
        },
    ];

    return (
        <section className="py-20 bg-gray-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#142a1e] rounded-full blur-3xl opacity-60 -mr-40 -mt-40" />

            <div className="container mx-auto px-6 md:px-20 relative z-10">

                <div className="text-center mb-10">
                    
                    <button className="group inline-flex items-center gap-2 md:gap-3 p-[2px] rounded-full bg-gradient-to-r from-[#848484] to-[#056809] ">
                            <span className="inline-flex items-center gap-2 md:gap-3 px-6
                                md:px-2 py-3 md:py-1 rounded-full bg-gray-950 text-[#ffffff] font-semibold text-sm md:text-base">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#C6FEC8" fillOpacity="0.32"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.414 20.836L16.8685 21.739C16.7838 21.7692 16.6922 21.7747 16.6044 21.755C16.5167 21.7352 16.4363 21.6909 16.3727 21.6273C16.3091 21.5637 16.2648 21.4833 16.245 21.3956C16.2253 21.3078 16.2308 21.2162 16.261 21.1315L17.164 18.586C17.1689 18.5718 17.1771 18.5589 17.188 18.5485L23.9222 11.8135C24.0819 11.6539 24.2984 11.5642 24.5241 11.5642C24.7499 11.5642 24.9664 11.6539 25.126 11.8135L26.1865 12.874C26.3461 13.0336 26.4358 13.2501 26.4358 13.4759C26.4358 13.7016 26.3461 13.9181 26.1865 14.0778L19.4515 20.812C19.4411 20.8229 19.4282 20.8311 19.414 20.836ZM22 20.3853V22.75C22 23.347 21.763 23.9193 21.3407 24.3407C21.132 24.5498 20.884 24.7157 20.611 24.8288C20.3381 24.9419 20.0455 25.0001 19.75 25H7.75C7.45453 25.0001 7.16193 24.9419 6.88897 24.8288C6.61601 24.7157 6.36804 24.5498 6.15925 24.3407C5.95017 24.132 5.78432 23.884 5.6712 23.611C5.55808 23.3381 5.4999 23.0455 5.5 22.75V12.25H21.3647L16.1268 17.488C15.9583 17.6564 15.8297 17.8604 15.7502 18.085L14.8472 20.6298C14.7225 20.9817 14.7 21.3617 14.7823 21.7259C14.8647 22.0901 15.0485 22.4235 15.3125 22.6875C15.5765 22.9515 15.9099 23.1353 16.2741 23.2177C16.6383 23.3 17.0183 23.2775 17.3702 23.1528L19.915 22.2498C20.14 22.1702 22 20.3853 22 20.3853ZM9.25 21.25H11.6267C11.8257 21.25 12.0164 21.171 12.1571 21.0303C12.2977 20.8897 12.3767 20.6989 12.3767 20.5C12.3767 20.3011 12.2977 20.1103 12.1571 19.9697C12.0164 19.829 11.8257 19.75 11.6267 19.75H9.25C9.05109 19.75 8.86032 19.829 8.71967 19.9697C8.57902 20.1103 8.5 20.3011 8.5 20.5C8.5 20.6989 8.57902 20.8897 8.71967 21.0303C8.86032 21.171 9.05109 21.25 9.25 21.25ZM9.25 18.25H13.1267C13.3257 18.25 13.5164 18.171 13.6571 18.0303C13.7977 17.8897 13.8767 17.6989 13.8767 17.5C13.8767 17.3011 13.7977 17.1103 13.6571 16.9697C13.5164 16.829 13.3257 16.75 13.1267 16.75H9.25C9.05109 16.75 8.86032 16.829 8.71967 16.9697C8.57902 17.1103 8.5 17.3011 8.5 17.5C8.5 17.6989 8.57902 17.8897 8.71967 18.0303C8.86032 18.171 9.05109 18.25 9.25 18.25ZM9.25 15.25H16.1268C16.3257 15.25 16.5164 15.171 16.6571 15.0303C16.7977 14.8897 16.8768 14.6989 16.8768 14.5C16.8768 14.3011 16.7977 14.1103 16.6571 13.9697C16.5164 13.829 16.3257 13.75 16.1268 13.75H9.25C9.05109 13.75 8.86032 13.829 8.71967 13.9697C8.57902 14.1103 8.5 14.3011 8.5 14.5C8.5 14.6989 8.57902 14.8897 8.71967 15.0303C8.86032 15.171 9.05109 15.25 9.25 15.25ZM5.5 10.75V9.25C5.5 8.653 5.737 8.08075 6.15925 7.65925C6.36804 7.45017 6.61601 7.28432 6.88897 7.1712C7.16193 7.05808 7.45453 6.9999 7.75 7H19.75C20.347 7 20.9193 7.237 21.3407 7.65925C21.763 8.08075 22 8.653 22 9.25V10.75H5.5Z" fill="#9DFFA1"/>
                            </svg>
                                Related Blog
                            </span>
                        </button>
                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
                        Related <span className="text-[#9dffa1]">Blogs</span>
                    </h2>
                    <p className="mt-3 text-gray-300 text-xl md:text-2xl">
                        Insights and best practices for maximizing your inbound service operations 
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-0 md:px-8">
                    {cards.map((c) => (
                        <article key={c.id} className="p-[1px] rounded-2xl bg-gradient-to-r from-[#a9aaa9] to-[#3d603f] group  h-full w-full">

                            <div className="rounded-xl bg-gradient-to-b from-[#042114] to-[#07120f] overflow-hidden shadow-lg h-full flex flex-col">

                                <div className="relative w-full h-48 md:h-56 lg:h-64 flex-shrink-0">
                                    <Image
                                        src={c.img}
                                        alt={c.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="w-full h-full object-cover rounded-t-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="text-xs  bg-gradient-to-r from-[#e4e6e4] to-[#8b8c8c] bg-clip-text text-transparent font-semibold mb-3">
                                        <span>{c.category}</span>
                                        <span className="mx-2">|</span>
                                        <span>{c.date}</span>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug bg-clip-text text-transparent bg-gradient-to-r from-[#fdfdfd] to-[#999999]">
                                        {c.title}
                                    </h3>

                                    <p className="text-sm mb-4 flex-grow bg-clip-text text-transparent font-semibold bg-gradient-to-r from-[#fdfdfd] to-[#999999]">{c.excerpt}</p>
                                  
                                </div>

                            </div>
                        </article>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default RelatedBlog;