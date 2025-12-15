'use client';
import { useState, useRef, useEffect } from 'react';



interface Box {
  id: number;
  title: string;
  description: string;
  color: string;
  image: string;
}

const boxes: Box[] = [
  {
    id: 1,
    title: 'Optimize Your Operations',
    description: 'Streamline orders and inventory, cut overhead up to 40%.',
    color: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=700&fit=crop'
  },
  {
    id: 2,
    title: 'Optimize Your Operations', description: 'Streamline orders and inventory, cut overhead up to 40%.',
    color: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=700&fit=crop'
  },
  {
    id: 3,
    title: 'Optimize Your Operations',
    description: 'Streamline orders and inventory, cut overhead up to 40%.',
    color: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=700&fit=crop'
  },
  {
    id: 4,
    title: 'Optimize Your Operations',
    description: 'Streamline orders and inventory, cut overhead up to 40%.',
    color: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=700&fit=crop'
  },
  {
    id: 5,
    title: 'Optimize Your Operations',
    description: 'Streamline orders and inventory, cut overhead up to 40%.',
    color: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=700&fit=crop'
  },
];

export default function ThreeDCarousel() {
  const [current, setCurrent] = useState(2);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % boxes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = (x: number) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleMove = (x: number) => {
    if (!isDragging.current || startX.current === null) return;
    const diff = x - startX.current;

    if (diff > 50) {
      setCurrent((prev) => (prev - 1 + boxes.length) % boxes.length);
      isDragging.current = false;
    } else if (diff < -50) {
      setCurrent((prev) => (prev + 1) % boxes.length);
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
    startX.current = null;
  };

  return (
    <div
      className="flex flex-col items-center h-110 md:min-h-screen lg:min-h-screen justify-center 
       w-full overflow-hidden select-none relative "
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >

      <div className="relative w-full h-full flex items-center justify-center z-10 overflow-hidden">
        {boxes.map((box, index) => {
          const position = (index - current + boxes.length) % boxes.length;

          const positions = [
            { x: 0, scale: 1, rotateY: 0, zIndex: 50 },              // Center (main)
            { x: 150, scale: 0.85, rotateY: -15, zIndex: 40 },       // Right
            { x: 300, scale: 0.7, rotateY: -30, zIndex: 30 },        // Far right
            { x: -150, scale: 0.85, rotateY: 15, zIndex: 40 },       // Left
            { x: -300, scale: 0.7, rotateY: 30, zIndex: 20 },        // Far left
          ];

          const pos = positions[position];

          const transform = `
            translateX(${pos.x}px)
            scale(${pos.scale})
            rotateY(${pos.rotateY}deg)
          `;

          return (
            <div
              key={box.id}
              className={`absolute w-[55vw] sm:w-[250px] md:w-[300px] lg:w-[470px]
              h-[350px] sm:h-[350px] md:h-[450px] lg:h-[620px] rounded-3xl sm:rounded-4xl md:rounded-5xl 
              border border-gray-200 shadow-xl md:shadow-2xl flex flex-col items-start justify-end
              text-white font-medium transition-all duration-700 p-4 sm:p-5 overflow-hidden cursor-grab
              active:cursor-grabbing`}

              style={{
                transform,
                zIndex: pos.zIndex,
                backgroundImage: `url('${box.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >

              <div className="absolute inset-0 bg-linear-to-t from-[#163222] via-transparent to-transparent opacity-80" />
              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg md:text-3xl font-bold mb-1 sm:mb-2">{box.title}</h3>
                <p className="text-xs sm:text-sm md:text-xl opacity-90 mb-2 line-clamp-2">{box.description}</p>
                <a href="#" className="text-[var(--accent-gold)] underline text-xs md:text-xl sm:text-sm hover:opacity-80 transition-opacity"> Learn More </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
