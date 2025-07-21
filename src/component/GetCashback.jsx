import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import coin from "../assets/coin.png";
import rewards from "../assets/1image.avif"; // phone image with gift cards

const GetCashback = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section className="relative w-[90vw] md:w-[80vw] mx-auto py-16 px-4 bg-[#DEF9EE] from-green-50 to-white overflow-hidden rounded-[40px] md:rounded-[60px]">
      {/* Floating coin */}
      <img
        src={coin}
        alt="coin"
        className="absolute top-4 left-4 w-16 animate-float"
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Animated Image */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 flex justify-center relative min-h-[400px] md:min-h-[500px]"
        >
          <motion.img
            src={rewards}
            alt="Tilted rewards"
            className="absolute w-[80%] max-w-[300px] transform -rotate-[10deg] drop-shadow-2xl top-20"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            <span className="text-brand">Get 1% back</span> on every payment
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Get back 1% CheQ Chips with every payment. Convert them to vouchers
            from leading brands or get discounts on your upcoming bills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetCashback;
