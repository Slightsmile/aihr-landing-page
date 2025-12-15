'use client';

import React from 'react';
import { motion } from 'motion/react';

interface PricingTier {
    name: string;
    users: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
}

const pricingTiers: PricingTier[] = [
    {
        name: 'Silver',
        users: 'Up to 100 users per month',
        price: '$499',
        period: '/month',
        features: [
            'Recruitment & Talent Acquisition',
            'Employee Onboarding Chatbot',
            'HR Chatbots & Self-Service',
            'Basic Analytics Dashboard',
            'Email Support',
        ],
    },
    {
        name: 'Gold',
        users: 'Up to 250 users per month',
        price: '$999',
        period: '/month',
        features: [
            'All Silver Features',
            'Employee Engagement & Retention',
            'Performance Management',
            'Learning & Development (L&D)',
            'Advanced Analytics',
            'Priority Support',
        ],
        popular: true,
    },
    {
        name: 'Platinum',
        users: 'Unlimited users',
        price: '$1,999',
        period: '/month',
        features: [
            'All Gold Features',
            'Diversity, Equity & Inclusion (DEI)',
            'Workforce Planning & Forecasting',
            'Custom Integrations',
            'Dedicated Account Manager',
            '24/7 Premium Support',
        ],
    },
];

const PricingCards = () => {
    return (
        <div className="bg-[var(--light-bg)] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-[var(--card-bg)] rounded-3xl p-8 border ${tier.popular ? 'border-[var(--accent-gold)] shadow-lg' : 'border-gray-100 shadow-md'
                                } hover:border-[var(--accent-gold)] transition-all duration-300 hover:scale-105 flex flex-col`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--accent-gold)] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-2">{tier.name}</h3>
                                <p className="text-[var(--charcoal)] text-sm">{tier.users}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-[var(--primary-navy)]">{tier.price}</span>
                                    <span className="text-[var(--charcoal)] ml-2">{tier.period}</span>
                                </div>
                            </div>

                            <div className="mb-8 flex-grow">
                                <p className="text-sm font-semibold text-[var(--secondary-navy)] mb-4">Includes</p>
                                <ul className="space-y-3">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-[var(--accent-blue)] mr-3 mt-0.5 flex-shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-[var(--charcoal)] text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 px-6 rounded-full font-semibold transition-all mt-auto ${tier.popular
                                    ? 'bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] text-white hover:opacity-90'
                                    : 'bg-[var(--light-bg)] text-[var(--primary-navy)] hover:bg-gray-200 border border-gray-200'
                                    }`}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingCards;
