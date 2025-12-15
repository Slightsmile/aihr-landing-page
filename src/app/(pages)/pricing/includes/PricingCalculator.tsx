'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

const packages = [
    { id: 'monthly', label: 'Monthly', discount: 0 },
    { id: '3months', label: '3 Months', discount: 5 },
    { id: '6months', label: '6 Months', discount: 10 },
    { id: '12months', label: '12 Months', discount: 15 },
];

const tiers = [
    { id: 'silver', name: 'Silver', basePrice: 499, maxUsers: 100 },
    { id: 'gold', name: 'Gold', basePrice: 999, maxUsers: 250 },
    { id: 'platinum', name: 'Platinum', basePrice: 1999, maxUsers: null },
];

const modules = [
    { id: 'recruitment', name: 'AI-Powered Recruitment', price: 100 },
    { id: 'onboarding', name: 'Intelligent Onboarding', price: 100 },
    { id: 'engagement', name: 'Employee Engagement', price: 100 },
    { id: 'performance', name: 'Performance Management', price: 100 },
    { id: 'learning', name: 'AI-Driven L&D', price: 100 },
    { id: 'dei', name: 'Diversity, Equity & Inclusion', price: 100 },
    { id: 'chatbots', name: 'HR Chatbots', price: 100 },
    { id: 'planning', name: 'Workforce Planning', price: 100 },
];

const PricingCalculator = () => {
    const [selectedDuration, setSelectedDuration] = useState('monthly');
    const [selectedTier, setSelectedTier] = useState<string | null>('gold');
    const [selectedModules, setSelectedModules] = useState<string[]>([]);

    const handleTierSelect = (tierId: string) => {
        setSelectedTier(tierId);
        setSelectedModules([]); // Clear modules when tier is selected
    };

    const handleModuleToggle = (moduleId: string) => {
        setSelectedTier(null); // Clear tier when module is selected
        setSelectedModules(prev => {
            const isSelected = prev.includes(moduleId);
            if (isSelected) {
                // If unselecting the last module, maybe don't re-select a tier automatically, allow empty state or reset
                return prev.filter(id => id !== moduleId);
            } else {
                return [...prev, moduleId];
            }
        });
    };

    const currentTier = tiers.find(t => t.id === selectedTier);
    const currentDuration = packages.find(p => p.id === selectedDuration);

    const modulesPrice = selectedModules.length * 100;
    const basePrice = currentTier ? currentTier.basePrice : modulesPrice;

    const discount = currentDuration?.discount || 0;
    const discountAmount = (basePrice * discount) / 100;
    const finalPrice = basePrice - discountAmount;

    const durationMultiplier = selectedDuration === 'monthly' ? 1 :
        selectedDuration === '3months' ? 3 :
            selectedDuration === '6months' ? 6 : 12;

    const totalPrice = finalPrice * durationMultiplier;


    return (
        <div className="bg-[var(--light-bg)] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-navy)] mb-4">
                        Customize Your Plan
                    </h2>
                    <p className="text-[var(--charcoal)] font-medium">
                        Choose your package and see real-time pricing with volume discounts
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Left Side - Configuration */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[var(--card-bg)] rounded-3xl p-8 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] h-full"
                    >
                        {/* Tier Selection */}
                        <div className="mb-8">
                            <label className="block text-[var(--primary-navy)] font-bold mb-4">Select Tier</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {tiers.map((tier) => (
                                    <button
                                        key={tier.id}
                                        onClick={() => handleTierSelect(tier.id)}
                                        className={`py-3 px-4 rounded-xl font-medium transition-all ${selectedTier === tier.id
                                            ? 'bg-[var(--accent-gold)] text-white shadow-md'
                                            : 'bg-[var(--light-bg)] text-[var(--charcoal)] hover:bg-gray-200 border border-gray-200'
                                            }`}
                                    >
                                        {tier.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Duration Selection (Renamed from Package) */}
                        <div className="mb-8">
                            <label className="block text-[var(--primary-navy)] font-bold mb-4">Select Duration</label>
                            <div className="grid grid-cols-2 gap-3">
                                {packages.map((pkg) => (
                                    <button
                                        key={pkg.id}
                                        onClick={() => setSelectedDuration(pkg.id)}
                                        className={`py-3 px-4 rounded-xl font-medium transition-all relative ${selectedDuration === pkg.id
                                            ? 'bg-[var(--accent-blue)] text-white shadow-md'
                                            : 'bg-[var(--light-bg)] text-[var(--charcoal)] hover:bg-gray-200 border border-gray-200'
                                            }`}
                                    >
                                        {pkg.label}
                                        {pkg.discount > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-[var(--accent-gold)] text-white text-xs px-2 py-1 rounded-full shadow-sm">
                                                -{pkg.discount}%
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Modules Selection */}
                        <div className="mb-6">
                            <label className="block text-[var(--primary-navy)] font-bold mb-4">Select Custom Modules</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {modules.map((module) => (
                                    <button
                                        key={module.id}
                                        onClick={() => handleModuleToggle(module.id)}
                                        className={`py-3 px-4 rounded-xl font-medium text-sm transition-all border text-left flex justify-between items-center ${selectedModules.includes(module.id)
                                            ? 'bg-[var(--primary-navy)] text-white border-[var(--primary-navy)] shadow-md'
                                            : 'bg-[var(--light-bg)] text-[var(--charcoal)] hover:bg-gray-200 border-gray-200'
                                            }`}
                                    >
                                        <span>{module.name}</span>
                                        {selectedModules.includes(module.id) && (
                                            <span className="bg-white/20 p-1 rounded-full">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Price Breakdown */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[var(--card-bg)] rounded-3xl p-8 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] h-full flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--primary-navy)] mb-6">Price Breakdown</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="text-[var(--charcoal)]">
                                        {selectedTier ? `Base Price (${currentTier?.name})` : `Custom Modules (${selectedModules.length})`}
                                    </span>
                                    <span className="text-[var(--primary-navy)] font-semibold">${basePrice}/month</span>
                                </div>

                                <div className={`flex justify-between items-center pb-3 border-b border-gray-100 ${discount > 0 ? '' : 'opacity-70'}`}>
                                    <span className="text-[var(--charcoal)]">Duration Discount ({currentDuration?.label})</span>
                                    <span className={`font-semibold ${discount > 0 ? 'text-[var(--accent-gold)]' : 'text-gray-400'}`}>-${discountAmount.toFixed(2)}/month</span>
                                </div>

                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="text-[var(--charcoal)]">Monthly Price</span>
                                    <span className="text-[var(--primary-navy)] font-semibold">${finalPrice.toFixed(2)}/month</span>
                                </div>

                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="text-[var(--charcoal)]">Duration</span>
                                    <span className={`font-semibold ${durationMultiplier > 1 ? 'text-[var(--primary-navy)]' : 'text-[var(--charcoal)]'}`}>{durationMultiplier} {durationMultiplier > 1 ? 'months' : 'month'}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[var(--light-bg)] rounded-2xl p-6 mb-6 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[var(--primary-navy)] text-lg font-bold">Total Price</span>
                                    <span className="text-3xl font-bold text-[var(--accent-blue)]">${totalPrice.toFixed(2)}</span>
                                </div>
                                <p className="text-[var(--charcoal)] text-sm">
                                    {durationMultiplier > 1 ? `Billed every ${durationMultiplier} months` : 'Billed monthly'}
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] hover:opacity-90 text-white py-4 px-6 rounded-full font-semibold text-lg transition-all shadow-lg"
                            >
                                Get Started Now
                            </motion.button>

                            <p className="text-center text-[var(--charcoal)] text-sm mt-4">
                                30-day money-back guarantee • No setup fees
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PricingCalculator;
