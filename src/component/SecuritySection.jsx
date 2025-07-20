import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const SecureSection = () => {
  const [showRipples, setShowRipples] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setShowRipples(false);
      setRippleKey(prev => prev + 1);

      setTimeout(() => {
        setShowRipples(true);
      }, 600); // ripple after shield zoom
    }, 3000);

    return () => clearInterval(loop);
  }, []);

  const rippleDelays = [0, 0.2, 0.4];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 bg-[radial-gradient(#f2f2f2_1px,transparent_1px)] [background-size:32px_32px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-green-500 font-bold">100% secure</span>{" "}
          <span className="text-black">and encrypted</span>
        </h2>

        {/* Shield with horizontal lines */}
        <div className="w-full flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-green-300" />

          <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
            {/* Ripples (after shield) */}
            {showRipples &&
              rippleDelays.map((delay, index) => (
                <motion.div
                  key={`${rippleKey}-${index}`}
                  initial={{ scale: 0.5, opacity: 0.5 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    delay,
                    ease: "easeOut",
                  }}
                  className="absolute w-36 h-36 border-2 border-green-400 rounded-full"
                />
              ))}

            {/* Shield Icon with zoom */}
            <motion.div
              key={rippleKey}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gradient-to-br from-green-100 to-white p-7 rounded-full border-2 border-green-300 shadow-md z-10"
            >
              <ShieldCheck size={56} className="text-green-600" />
            </motion.div>
          </div>

          <div className="flex-1 h-px bg-green-300" />
        </div>

        

        {/* Partners */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mt-6">
          {/* Security Partners */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm text-gray-600 uppercase font-medium">Security Partners</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/pci-logo.png" alt="PCI DSS" className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border" />
              <img src="/iso-logo.png" alt="ISO" className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border" />
            </div>
          </div>

          {/* Bank Partners */}
          <div className="space-y-4 text-center md:text-right">
            <h4 className="text-sm text-gray-600 uppercase font-medium">Bank Partners</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <img src="/axis-bank-logo.png" alt="Axis Bank" className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border" />
              <img src="/icici-logo.png" alt="ICICI Bank" className="h-10 bg-white px-3 py-2 rounded-lg shadow-md border" />
            </div>
          </div>
        </div>

        {/* Lending Services Text */}
        <h3 className="pt-14 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          <span className="text-green-600">Lending</span> services via
        </h3>

        {/* Bitrocket Box */}
        <div className="mt-10 flex justify-center w-full px-4 sm:px-6 lg:px-0">
          <div className="relative bg-[#f9f7f6] rounded-3xl p-4 sm:p-6 md:p-8 shadow-inner max-w-[90%] sm:max-w-[70%] md:max-w-[500px]">
            <div className="bg-white rounded-2xl px-6 py-4 sm:px-10 sm:py-6 flex flex-col items-center shadow-md text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-black">Bitrocket</p>
              <div className="flex items-center gap-1 mt-1 text-sm sm:text-base text-gray-700">
                <span>by</span>
                <img src="/cheq-logo.svg" alt="CheQ" className="h-4 sm:h-5 object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecureSection;
