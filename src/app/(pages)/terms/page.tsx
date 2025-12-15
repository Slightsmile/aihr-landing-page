'use client';

import React from 'react';

const Terms = () => {
    return (
        <div className="bg-[var(--light-bg)] min-h-screen flex flex-col">
            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-navy)] mb-8">Terms and Conditions</h1>

                    <div className="prose prose-lg text-[var(--charcoal)] max-w-none space-y-8">
                        <p className="text-xl">Last Updated: {new Date().getFullYear()}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">1. Introduction</h2>
                            <p>Welcome to AIHR. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">2. Use of Services</h2>
                            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services complies with all applicable laws and regulations.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">3. Intellectual Property</h2>
                            <p>All content, features, and functionality regarding our services, including designs, text, graphics, and logos, are the exclusive property of AIHR and are protected by copyright and other intellectual property laws.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">4. Limitation of Liability</h2>
                            <p>In no event shall AIHR, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">5. Changes to Terms</h2>
                            <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--primary-navy)] mb-4">6. Contact Us</h2>
                            <p>If you have any questions about these Terms, please contact us at:</p>
                            <p className="font-semibold text-[var(--accent-blue)]">hello@aihr.com</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Terms;
