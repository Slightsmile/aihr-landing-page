'use client';

import React from 'react';
import { motion } from 'motion/react';

interface Feature {
    name: string;
    description: string;
    silver: boolean;
    gold: boolean;
    platinum: boolean;
}

const features: Feature[] = [
    {
        name: 'Recruitment & Talent Acquisition',
        description: 'AI scans CVs, matches candidates to job descriptions',
        silver: true,
        gold: true,
        platinum: true,
    },
    {
        name: 'Employee Onboarding Chatbot',
        description: 'Personalized onboarding through AI chatbots',
        silver: true,
        gold: true,
        platinum: true,
    },
    {
        name: 'Employee Engagement & Retention',
        description: 'AI predicts attrition risks and suggests interventions',
        silver: false,
        gold: true,
        platinum: true,
    },
    {
        name: 'Performance Management',
        description: 'Data-driven evaluations and burnout detection',
        silver: false,
        gold: true,
        platinum: true,
    },
    {
        name: 'Learning & Development (L&D)',
        description: 'Personalized training and skill gap identification',
        silver: false,
        gold: true,
        platinum: true,
    },
    {
        name: 'Diversity, Equity & Inclusion (DEI)',
        description: 'Reduce bias in hiring and promotions',
        silver: false,
        gold: false,
        platinum: true,
    },
    {
        name: 'HR Chatbots & Self-Service',
        description: 'AI-powered chatbots for instant HR queries',
        silver: true,
        gold: true,
        platinum: true,
    },
    {
        name: 'Workforce Planning & Forecasting',
        description: 'AI predicts workforce needs and staffing alignment',
        silver: false,
        gold: false,
        platinum: true,
    },
];

const FeatureComparison = () => {
    return (
        <div className="bg-gray-950 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
                >
                    Compare Features
                </motion.h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-800">
                                <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                                <th className="text-center py-4 px-6 text-white font-semibold">Silver</th>
                                <th className="text-center py-4 px-6 text-white font-semibold">Gold</th>
                                <th className="text-center py-4 px-6 text-white font-semibold">Platinum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <motion.tr
                                    key={feature.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                                >
                                    <td className="py-4 px-6">
                                        <div>
                                            <p className="text-white font-medium">{feature.name}</p>
                                            <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                                        </div>
                                    </td>
                                    <td className="text-center py-4 px-6">
                                        {feature.silver ? (
                                            <svg
                                                className="w-6 h-6 text-[#63a567] mx-auto"
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
                                        ) : (
                                            <svg
                                                className="w-6 h-6 text-gray-600 mx-auto"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        )}
                                    </td>
                                    <td className="text-center py-4 px-6">
                                        {feature.gold ? (
                                            <svg
                                                className="w-6 h-6 text-[#63a567] mx-auto"
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
                                        ) : (
                                            <svg
                                                className="w-6 h-6 text-gray-600 mx-auto"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        )}
                                    </td>
                                    <td className="text-center py-4 px-6">
                                        {feature.platinum ? (
                                            <svg
                                                className="w-6 h-6 text-[#63a567] mx-auto"
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
                                        ) : (
                                            <svg
                                                className="w-6 h-6 text-gray-600 mx-auto"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeatureComparison;
