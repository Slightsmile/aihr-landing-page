'use client';

import React from 'react';
import { motion } from 'motion/react';

const PricingHero = () => {
    return (
        <div className="relative bg-[var(--light-bg)] text-[var(--primary-navy)] py-20 px-4 overflow-hidden">
            {/* Background decorative elements - matching AIHR page theme */}
            <div className="animate-pulse absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 mix-blend-multiply" />
            <div className="animate-pulse absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-70 mix-blend-multiply" />
            <div className="animate-pulse absolute top-10 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 mix-blend-multiply" />
            <div className="animate-pulse absolute top-0 right-120 w-96 h-106 bg-amber-50 rounded-full blur-3xl opacity-70 mix-blend-multiply" />

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
                    className="text-lg md:text-xl text-[var(--charcoal)] max-w-3xl mx-auto font-medium"
                >
                    Scale your AI-powered HR services with transparent pricing. No hidden fees, cancel anytime.
                </motion.p>
            </div>
        </div>
    );
};

export default PricingHero;
