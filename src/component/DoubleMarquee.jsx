import React, { useState, useEffect } from 'react';
import zingbus from "../assets/brandlogos/zingbus.avif";
import dominos from "../assets/brandlogos/Dominos.avif";
import bookmyshow from "../assets/brandlogos/bookmyshow.avif";
import gullak from "../assets/brandlogos/gullak.avif";
import snitch from "../assets/brandlogos/uber.avif";
import talkingsox from "../assets/brandlogos/tsox.avif";
import cleo from "../assets/brandlogos/cleartrip.avif";

const brands = [
  { src: zingbus, name: "Zingbus", color: "bg-blue-50", width: 120 },
  { src: dominos, name: "Domino's", color: "bg-pink-50", width: 140 },
  { src: bookmyshow, name: "BookMyShow", color: "bg-purple-50", width: 160 },
  { src: gullak, name: "Gullak", color: "bg-green-50", width: 100 },
  { src: snitch, name: "Snitch", color: "bg-yellow-50", width: 110 },
  { src: talkingsox, name: "Talking Sox", color: "bg-emerald-50", width: 130 },
  { src: cleo, name: "Cleo", color: "bg-indigo-50", width: 90 },
];

const DoubleMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full bg-white py-8 md:py-16 px-2 md:px-4">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-4xl md:text-4xl font-bold text-teal-500 mb-2">
          Exclusive Vouchers
        </h2>
        <p className="text-xl md:text-xl font-semibold text-gray-900">
          from Premium Brands
        </p>
      </div>

      {/* First Marquee - Left */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto px-5 md:px-5">
        <div className="flex gap-4 md:gap-4 animate-scroll-left">
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={`first-${i}`} 
              className={`
                ${brand.color} 
                h-30 md:h-30 rounded-3xl md:rounded-3xl p-4 md:p-4
                flex items-center justify-center shadow-sm transition-transform hover:scale-105 flex-shrink-0
              `}
              style={{
                width: '200px',
                minWidth: '200px'
              }}
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="max-h-10 md:max-h-10 max-w-[80%] w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Fade overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Second Marquee - Right */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto px-5 md:px-5 mt-6 md:mt-6">
        <div className="flex gap-4 md:gap-4 animate-scroll-right">
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={`second-${i}`} 
              className={`
                ${brand.color} 
                h-30 md:h-30 rounded-3xl md:rounded-3xl p-4 md:p-4
                flex items-center justify-center shadow-sm transition-transform hover:scale-105 flex-shrink-0
              `}
              style={{
                width: '200px',
                minWidth: '200px'
              }}
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="max-h-10 md:max-h-10 max-w-[80%] w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Fade overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Third Marquee - Left (only visible on mobile) */}
      <div className="block md:hidden relative overflow-hidden w-full max-w-7xl mx-auto px-5 mt-6">
        <div className="flex gap-4 animate-scroll-left">
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={`third-${i}`} 
              className={`
                ${brand.color} 
                h-30 rounded-3xl p-4
                flex items-center justify-center shadow-sm transition-transform hover:scale-105 flex-shrink-0
              `}
              style={{
                width: '200px',
                minWidth: '200px'
              }}
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="max-h-10 max-w-[80%] w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Fade overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          width: fit-content;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
          width: fit-content;
        }

        @media (min-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 45s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 45s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default DoubleMarquee;