'use client';

import React from 'react';
import { motion } from 'motion/react';

const PricingHero = () => {
    return (
        <div className="relative bg-gray-950 text-white py-20 px-4 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-20 w-80 h-80 bg-[#202f22] rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-10 -right-50 w-160 h-160 bg-[#2f4930] rounded-full blur-3xl opacity-30" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Choose Your Perfect Plan
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                >
                    Scale your AI-powered HR services with transparent pricing. No hidden fees, cancel anytime.
                </motion.p>
            </div>
        </div>
    );
};

export default PricingHero;
