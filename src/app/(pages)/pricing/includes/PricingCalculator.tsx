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

const PricingCalculator = () => {
    const [selectedPackage, setSelectedPackage] = useState('monthly');
    const [selectedTier, setSelectedTier] = useState('gold');

    const currentTier = tiers.find(t => t.id === selectedTier);
    const currentPackage = packages.find(p => p.id === selectedPackage);

    const basePrice = currentTier?.basePrice || 0;
    const discount = currentPackage?.discount || 0;
    const discountAmount = (basePrice * discount) / 100;
    const finalPrice = basePrice - discountAmount;

    const packageMultiplier = selectedPackage === 'monthly' ? 1 :
        selectedPackage === '3months' ? 3 :
            selectedPackage === '6months' ? 6 : 12;

    const totalPrice = finalPrice * packageMultiplier;


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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Customize Your Plan
                    </h2>
                    <p className="text-gray-400">
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
                        className="bg-gray-900 rounded-3xl p-8 border border-gray-800"
                    >
                        {/* Tier Selection */}
                        <div className="mb-8">
                            <label className="block text-white font-semibold mb-4">Select Tier</label>
                            <div className="grid grid-cols-3 gap-3">
                                {tiers.map((tier) => (
                                    <button
                                        key={tier.id}
                                        onClick={() => setSelectedTier(tier.id)}
                                        className={`py-3 px-4 rounded-xl font-medium transition-all ${selectedTier === tier.id
                                            ? 'bg-[#63a567] text-white'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        {tier.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Package Selection */}
                        <div className="mb-6">
                            <label className="block text-white font-semibold mb-4">Select Package</label>
                            <div className="grid grid-cols-2 gap-3">
                                {packages.map((pkg) => (
                                    <button
                                        key={pkg.id}
                                        onClick={() => setSelectedPackage(pkg.id)}
                                        className={`py-3 px-4 rounded-xl font-medium transition-all relative ${selectedPackage === pkg.id
                                            ? 'bg-[#63a567] text-white'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        {pkg.label}
                                        {pkg.discount > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                                -{pkg.discount}%
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
                        className="bg-gray-900 rounded-3xl p-8 border border-gray-800"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Price Breakdown</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                                <span className="text-gray-400">Base Price ({currentTier?.name})</span>
                                <span className="text-white font-semibold">${basePrice}/month</span>
                            </div>

                            {discount > 0 && (
                                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                                    <span className="text-gray-400">Package Discount ({currentPackage?.label})</span>
                                    <span className="text-green-500 font-semibold">-${discountAmount.toFixed(2)}/month</span>
                                </div>
                            )}

                            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                                <span className="text-gray-400">Monthly Price</span>
                                <span className="text-white font-semibold">${finalPrice.toFixed(2)}/month</span>
                            </div>

                            {packageMultiplier > 1 && (
                                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                                    <span className="text-gray-400">Duration</span>
                                    <span className="text-white font-semibold">{packageMultiplier} months</span>
                                </div>
                            )}
                        </div>

                        <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-300 text-lg">Total Price</span>
                                <span className="text-3xl font-bold text-[#63a567]">${totalPrice.toFixed(2)}</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                {packageMultiplier > 1 ? `Billed every ${packageMultiplier} months` : 'Billed monthly'}
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#63a567] hover:bg-[#5a9460] text-white py-4 px-6 rounded-full font-semibold text-lg transition-all"
                        >
                            Get Started Now
                        </motion.button>

                        <p className="text-center text-gray-400 text-sm mt-4">
                            30-day money-back guarantee • No setup fees
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PricingCalculator;
