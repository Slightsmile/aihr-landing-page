import React from 'react';
import PricingHero from './includes/PricingHero';
import PricingCards from './includes/PricingCards';
import FeatureComparison from './includes/FeatureComparison';
import Guarantees from './includes/Guarantees';
import Footer from '@/app/components/footer/Footer';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gray-950">
            <PricingHero />
            <PricingCards />
            <FeatureComparison />
            <Guarantees />
            <Footer />
        </div>
    );
}
