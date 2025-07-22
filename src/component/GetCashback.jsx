import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

import coin from "../assets/coin.png";
import rewards from "../assets/1image.avif"; // phone image with gift cards

const GetCashback = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to image movement
  // Image will move from bottom (200px down) to top (-100px) as user scrolls
  const imageY = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-15, -5]);
  
  // Text animations
  const textY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  
  // Coin animation
  const coinY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const coinRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section 
      ref={containerRef}
      className="relative w-[90vw] md:w-[80vw] mx-auto py-16 px-4 bg-[#DEF9EE] from-green-50 to-white overflow-hidden rounded-[40px] md:rounded-[60px]"
    >
      {/* Floating coin with scroll animation */}
      <motion.img
        src={coin}
        alt="coin"
        className="absolute top-4 left-4 w-16"
        style={{ 
          y: coinY,
          rotate: coinRotate
        }}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Scroll-Animated Image */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 flex justify-center relative min-h-[400px] md:min-h-[500px]"
        >
          <motion.img
            src={rewards}
            alt="Tilted rewards"
            className="absolute w-[80%] max-w-[300px] transform drop-shadow-2xl top-20"
            style={{ 
              y: imageY,
              opacity: imageOpacity,
              rotate: imageRotate
            }}
          />
        </div>

        {/* Right: Text with scroll animation */}
        <motion.div 
          className="w-full md:w-1/2 max-w-xl text-center md:text-left"
          style={{ 
            y: textY,
            opacity: textOpacity
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            <span className="text-brand">Get 1% back</span> on every payment
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Get back 1% CheQ Chips with every payment. Convert them to vouchers
            from leading brands or get discounts on your upcoming bills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetCashback;