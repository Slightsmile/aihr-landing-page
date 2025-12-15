'use client';

import React from 'react';

const Privacy = () => {
    return (
        <div className="bg-[var(--light-bg)] min-h-screen flex flex-col">
            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-navy)] mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg text-[var(--charcoal)] max-w-none space-y-8">
                        <p className="text-xl">Last Updated: {new Date().getFullYear()}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and other contact details.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">2. How We Use Your Information</h2>
                            <p>We use the information we collect to operate, maintain, and improve our services, to communicate with you, and to personalize your experience. We do not sell your personal information to third parties.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">3. Data Security</h2>
                            <p>We implement appropriate technical and organizational measures to protect specific personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">4. Cookies</h2>
                            <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <p className="font-semibold text-[var(--accent-blue)]">hello@aihr.com</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Privacy;
