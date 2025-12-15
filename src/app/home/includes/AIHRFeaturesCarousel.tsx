'use client';
import { useState, useRef, useEffect } from 'react';

interface FeatureBox {
    id: string;
    title: string;
    description: string;
    icon: string;
    buttonText: string;
    details: string[];
}

const featureCards: FeatureBox[] = [
    {
        id: '1',
        title: 'Recruitment & Talent Acquisition',
        description: 'AI scans CVs, matches candidates to job descriptions, and analyzes video interviews to streamline hiring.',
        icon: '🎯',
        buttonText: 'Explore Offers',
        details: [
            'Automated CV screening and parsing',
            'AI-powered candidate matching',
            'Video interview analysis',
            'Predictive hiring analytics',
            'Bias reduction in selection'
        ]
    },
    {
        id: '2',
        title: 'Employee Onboarding Chatbot',
        description: 'AI provides personalized onboarding through chatbots, guiding new hires through paperwork, training, and compliance.',
        icon: '🤝',
        buttonText: 'Explore Offers',
        details: [
            '24/7 intelligent chatbot support',
            'Personalized onboarding paths',
            'Automated paperwork processing',
            'Training module recommendations',
            'Compliance tracking and alerts'
        ]
    },
    {
        id: '3',
        title: 'Employee Engagement & Retention',
        description: 'AI predicts attrition risks and suggests interventions to retain top talent.',
        icon: '💚',
        buttonText: 'Explore Offers',
        details: [
            'Attrition risk prediction',
            'Sentiment analysis from feedback',
            'Personalized retention strategies',
            'Engagement score tracking',
            'Proactive intervention alerts'
        ]
    },
    {
        id: '4',
        title: 'Performance Management',
        description: 'AI offers data-driven evaluations, detects burnout, and reduces bias in performance reviews.',
        icon: '📊',
        buttonText: 'Explore Offers',
        details: [
            'Objective performance metrics',
            'Burnout detection and prevention',
            'Bias-free review recommendations',
            'Goal tracking and alignment',
            'Continuous feedback loops'
        ]
    },
    {
        id: '5',
        title: 'Learning & Development (L&D)',
        description: 'AI personalizes training by identifying skill gaps and recommending adaptive learning modules.',
        icon: '📚',
        buttonText: 'Explore Offers',
        details: [
            'Skill gap analysis',
            'Personalized learning paths',
            'Adaptive course recommendations',
            'Progress tracking and analytics',
            'Certification management'
        ]
    },
    {
        id: '6',
        title: 'Diversity, Equity & Inclusion (DEI)',
        description: 'AI ensures fairness by reducing bias in hiring, promotions, and job descriptions.',
        icon: '🌈',
        buttonText: 'Explore Offers',
        details: [
            'Bias detection in job postings',
            'Fair promotion recommendations',
            'Diversity metrics and reporting',
            'Inclusive language suggestions',
            'Pay equity analysis'
        ]
    },
    {
        id: '7',
        title: 'HR Chatbots & Self-Service',
        description: 'AI-powered chatbots answer HR queries instantly, reducing support costs.',
        icon: '💬',
        buttonText: 'Explore Offers',
        details: [
            'Instant query resolution',
            'Multi-language support',
            'Policy and benefits information',
            'Leave and attendance tracking',
            'Reduced HR workload'
        ]
    },
    {
        id: '8',
        title: 'Workforce Planning & Forecasting',
        description: 'AI predicts workforce needs, helping HR align staffing with business strategy.',
        icon: '🔮',
        buttonText: 'Explore Offers',
        details: [
            'Demand forecasting',
            'Skill requirement prediction',
            'Budget optimization',
            'Scenario planning tools',
            'Strategic workforce alignment'
        ]
    },
];

export default function AIHRFeaturesCarousel() {
    const [current, setCurrent] = useState(0);
    const startX = useRef<number | null>(null);
    const isDragging = useRef(false);
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    useEffect(() => {
        if (!isAutoRotating) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % featureCards.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoRotating]);

    const handleStart = (x: number) => {
        startX.current = x;
        isDragging.current = true;
        setIsAutoRotating(false);
    };

    const handleMove = (x: number) => {
        if (!isDragging.current || startX.current === null) return;
        const diff = x - startX.current;

        if (diff > 50) {
            // Swipe right - go to previous (circular)
            setCurrent((prev) => (prev - 1 + featureCards.length) % featureCards.length);
            isDragging.current = false;
            startX.current = null;
        } else if (diff < -50) {
            // Swipe left - go to next (circular)
            setCurrent((prev) => (prev + 1) % featureCards.length);
            isDragging.current = false;
            startX.current = null;
        }
    };

    const handleEnd = () => {
        isDragging.current = false;
        startX.current = null;
        // Resume auto-rotation after 10 seconds of inactivity
        setTimeout(() => setIsAutoRotating(true), 10000);
    };

    return (
        <div
            className="flex flex-col items-center min-h-[600px] md:min-h-[700px] h-full justify-center w-full overflow-hidden select-none relative bg-[var(--light-bg)] py-8 md:py-10"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
        >
            {/* Subtle background blur elements matching the page */}
            <div className="animate-pulse absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-50 mix-blend-multiply" />
            <div className="animate-pulse absolute bottom-20 left-10 w-64 h-64 bg-amber-50 rounded-full blur-3xl pointer-events-none opacity-50 mix-blend-multiply" />

            <div className="relative w-full h-full flex items-center justify-center z-10 overflow-visible py-20">
                {featureCards.map((card, index) => {
                    const position = (index - current + featureCards.length) % featureCards.length;

                    const positions = [
                        { x: 0, scale: 1, rotateY: 0, zIndex: 50, opacity: 1 },              // Center (main)
                        { x: 350, scale: 0.85, rotateY: -15, zIndex: 40, opacity: 0.6 },     // Right
                        { x: 650, scale: 0.7, rotateY: -25, zIndex: 30, opacity: 0.3 },      // Far right
                        { x: -350, scale: 0.85, rotateY: 15, zIndex: 40, opacity: 0.6 },     // Left
                        { x: -650, scale: 0.7, rotateY: 25, zIndex: 30, opacity: 0.3 },      // Far left
                        { x: 900, scale: 0.5, rotateY: -35, zIndex: 20, opacity: 0 },        // Extra far right
                        { x: -900, scale: 0.5, rotateY: 35, zIndex: 20, opacity: 0 },        // Extra far left
                        { x: 1100, scale: 0.3, rotateY: -45, zIndex: 10, opacity: 0 },       // Hidden right
                    ];

                    const pos = positions[position] || { x: 0, scale: 0, rotateY: 0, zIndex: 0, opacity: 0 };

                    const transform = `
            translateX(${pos.x}px)
            scale(${pos.scale})
            rotateY(${pos.rotateY}deg)
          `;

                    return (
                        <div
                            key={card.id}
                            className={`absolute w-[80vw] sm:w-[320px] md:w-[380px] lg:w-[450px] xl:w-[480px]
              h-[420px] sm:h-[440px] md:h-[460px] lg:h-[500px] rounded-3xl
              border border-gray-100 shadow-2xl flex flex-col
              text-[var(--primary-navy)] font-medium transition-all duration-700 ease-in-out p-5 sm:p-6 md:p-7 lg:p-8 overflow-hidden cursor-grab
              active:cursor-grabbing bg-[var(--card-bg)]`}
                            style={{
                                transform,
                                zIndex: pos.zIndex,
                                opacity: pos.opacity,
                                pointerEvents: position === 0 ? 'auto' : 'none',
                                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(157, 255, 161, 0.15)',
                            }}
                        >
                            {/* Subtle background decorative gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-amber-50/30 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-50/50 rounded-full blur-3xl" />

                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Header */}
                                <div className="flex items-start gap-3 md:gap-4 mb-4">
                                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0 border border-gray-100 bg-white shadow-sm">
                                        <span className="text-xl md:text-2xl lg:text-3xl filter drop-shadow-sm">{card.icon}</span>
                                    </div>
                                    <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight pt-1 text-[var(--primary-navy)]">{card.title}</h2>
                                </div>

                                {/* Description */}
                                <p className="text-xs md:text-sm lg:text-base leading-relaxed text-[var(--charcoal)] mb-5">
                                    {card.description}
                                </p>

                                {/* Detailed Features - Bullet Points */}
                                <div className="flex-1 mb-5 overflow-y-auto scrollbar-hide">
                                    <h3 className="text-xs md:text-sm font-bold text-[var(--accent-blue)] mb-3 uppercase tracking-wide">Key Features</h3>
                                    <ul className="space-y-2 md:space-y-2.5">
                                        {card.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-[var(--secondary-navy)]">
                                                <span className="text-[var(--accent-gold)] mt-0.5 shrink-0 font-bold">✓</span>
                                                <span className="leading-relaxed font-medium">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Button */}
                                <a href="/pricing" className="mt-auto">
                                    <button
                                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all text-xs md:text-sm font-semibold hover:scale-105 active:scale-95 duration-300 group"
                                        style={{ background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-gold))', padding: '2px', borderRadius: '9999px' }}
                                    >
                                        <span className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--primary-navy)] font-bold w-full group-hover:bg-opacity-95 transition-all">
                                            {card.buttonText}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="var(--accent-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
                {featureCards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrent(index);
                            setIsAutoRotating(false);
                            setTimeout(() => setIsAutoRotating(true), 10000);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${index === current
                            ? 'bg-[var(--accent-gold)] w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
