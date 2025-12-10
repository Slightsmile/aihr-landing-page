import React from 'react';
import PricingHero from './includes/PricingHero';
import PricingCards from './includes/PricingCards';
import PricingCalculator from './includes/PricingCalculator';
import FeatureComparison from './includes/FeatureComparison';
import Guarantees from './includes/Guarantees';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gray-950">
            <PricingHero />
            <PricingCards />
            <FeatureComparison />
            <PricingCalculator />
            <Guarantees />
        </div>
    );
}
