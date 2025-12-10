'use client';

import React from 'react';
import { motion } from 'motion/react';

const guarantees = [
    {
        title: '30-Day Money-Back',
        description: 'Not satisfied? Get a full refund within 30 days, no questions asked.',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
    },
    {
        title: 'No Setup Fees',
        description: 'Start immediately with zero upfront costs or hidden charges.',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        title: 'Cancel Anytime',
        description: 'No long-term contracts. Cancel your subscription at any time.',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
];

const Guarantees = () => {
    return (
        <div className="bg-gray-950 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm text-[#63a567] font-semibold mb-2">OUR GUARANTEE</p>
                    <p className="text-gray-400">30-day money-back guarantee • No setup fees</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guarantees.map((guarantee, index) => (
                        <motion.div
                            key={guarantee.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-[#63a567] transition-all duration-300"
                        >
                            <div className="text-[#63a567] mb-4">{guarantee.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{guarantee.title}</h3>
                            <p className="text-gray-400">{guarantee.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Guarantees;
