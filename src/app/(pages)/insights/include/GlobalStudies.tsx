import React from 'react';
import ThreeDCarousel from './ThreeDCarousel ';

const GlobalStudies = () => {
    return (
        <div>
            {/*Header section*/}
            <section className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-2'>
                <div className="mb-6 md:mb-2">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] rounded-full" />
                        <p
                            className="relative inline-flex items-center gap-2 md:gap-3 lg:gap-2 lg:w-32 lg:h-11 bg-white
                            pl-1.5 md:pl-2 pr-3 md:pr-5 py-1.5 md:py-2 rounded-full text-[var(--primary-navy)] text-xs md:text-sm
                            font-medium m-0.5"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#E0F2FE" fillOpacity="1" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.509 7C17.7063 7.00237 17.8948 7.08243 18.0335 7.22283C18.1722 7.36322 18.25 7.55264 18.25 7.75V24.25C18.25 24.4472 18.1723 24.6365 18.0338 24.7769C17.8952 24.9173 17.707 24.9974 17.5098 25H9.25C9.05109 25 8.86032 24.921 8.71967 24.7803C8.57902 24.6397 8.5 24.4489 8.5 24.25V11.8007C8.49992 11.3388 8.64203 10.888 8.90704 10.5096C9.17204 10.1312 9.54709 9.84359 9.98125 9.68575L17.2435 7.045C17.323 7.0165 17.4047 7.0015 17.4865 7H17.4977H17.509ZM19.75 13.1485L22.1365 14.1707C22.5412 14.3443 22.8861 14.6328 23.1285 15.0005C23.3708 15.3682 23.5 15.7989 23.5 16.2393V24.25C23.5 24.4489 23.421 24.6397 23.2803 24.7803C23.1397 24.921 22.9489 25 22.75 25H19.6217C19.705 24.7652 19.75 24.5133 19.75 24.25V13.1485ZM14.5097 19.75C14.6082 19.7494 14.7056 19.7293 14.7964 19.691C14.8871 19.6528 14.9695 19.597 15.0387 19.5269C15.1078 19.4568 15.1626 19.3737 15.1997 19.2825C15.2367 19.1913 15.2555 19.0936 15.2549 18.9951C15.2542 18.8966 15.2342 18.7992 15.1959 18.7085C15.1576 18.6177 15.1019 18.5354 15.0318 18.4662C14.9617 18.397 14.8786 18.3423 14.7874 18.3052C14.6961 18.2681 14.5985 18.2494 14.5 18.25H12.25C12.0511 18.25 11.8603 18.329 11.7197 18.4697C11.579 18.6103 11.5 18.8011 11.5 19C11.5 19.1989 11.579 19.3897 11.7197 19.5303C11.8603 19.671 12.0511 19.75 12.25 19.75H14.5H14.5097ZM14.5097 16.75C14.7087 16.7487 14.8989 16.6684 15.0387 16.5269C15.1784 16.3853 15.2562 16.194 15.2549 15.9951C15.2536 15.7962 15.1733 15.606 15.0318 15.4662C14.8902 15.3265 14.6989 15.2487 14.5 15.25H12.25C12.0511 15.25 11.8603 15.329 11.7197 15.4697C11.579 15.6103 11.5 15.8011 11.5 16C11.5 16.1989 11.579 16.3897 11.7197 16.5303C11.8603 16.671 12.0511 16.75 12.25 16.75H14.5H14.5097ZM14.5097 13.75C14.7087 13.7487 14.8989 13.6684 15.0387 13.5269C15.1784 13.3853 15.2562 13.194 15.2549 12.9951C15.2536 12.7962 15.1733 12.606 15.0318 12.4662C14.8902 12.3265 14.6989 12.2487 14.5 12.25H12.25C12.0511 12.25 11.8603 12.329 11.7197 12.4697C11.579 12.6103 11.5 12.8011 11.5 13C11.5 13.1989 11.579 13.3897 11.7197 13.5303C11.8603 13.671 12.0511 13.75 12.25 13.75H14.5H14.5097Z" fill="#3B82F6" />
                            </svg>
                            Studies
                        </p>
                    </div>
                </div>
                <p className='text-[var(--primary-navy)] text-xl md:text-4xl xl:text-4xl font-bold'>Global <span className='bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent'>Studies</span></p>
                <p className='text-[var(--charcoal)] text-md md:text-2xl text-center'>Explore cutting-edge studies on digital transformation, <br />
                    sustainability, and future-ready business models.</p>

            </section>
            {/*Carousel section*/}
            <section>
                <ThreeDCarousel />
            </section>

        </div>
    );
};

export default GlobalStudies;