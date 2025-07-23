import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import icici from "../assets/bankslogo/icici.svg";
import axis from "../assets/bankslogo/axis.svg";
import cicra from "../assets/bankslogo/cicra.svg";
import pcidss from "../assets/bankslogo/pcidss.svg";
const SecureSection = () => {
  const [showRipples, setShowRipples] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setShowRipples(false);
      setRippleKey((prev) => prev + 1);

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
        <motion.h2
          className="text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <span className="text-green-500 font-bold">100% secure</span>{" "}
          <span className="text-black">and encrypted</span>
        </motion.h2>

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
            <h4 className="text-sm text-gray-600 uppercase font-medium">
              Security Partners
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <img
                src={pcidss}
                alt="PCI DSS"
                className="h-20 bg-[#F5F5F5]  rounded-lg shadow-md "
              />
              <img
                src={cicra}
                alt="ISO"
                className="h-20 bg-[#F5F5F5]   rounded-lg shadow-md "
              />
            </div>
          </div>

          {/* Bank Partners */}
          <div className="space-y-4 text-center md:text-right">
            <h4 className="text-sm text-gray-600 uppercase font-medium">
              Bank Partners
            </h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <img
                src={axis}
                alt="Axis Bank"
                className="h-20 bg-[#F5F5F5]  rounded-lg shadow-md "
              />
              <img
                src={icici}
                alt="ICICI Bank"
                className="h-20 bg-[#F5F5F5]  rounded-lg shadow-md "
              />
            </div>
          </div>
        </div>

        {/* Lending Services Text */}
        <motion.h3
          className="pt-14 text-2xl sm:text-3xl lg:text-4xl font-bold text-center "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <span className="text-green-600">Lending </span>
          <span className="text-black">services via </span>
        </motion.h3>

        {/* Bitrocket Box */}
        <div className="mt-10 flex justify-center w-full px-4 sm:px-6 lg:px-0">
          <div className="relative bg-[#f9f7f6] rounded-[32px] p-10 sm:p-8 md:p-10 shadow-inner max-w-[90%] sm:max-w-[70%] md:max-w-[500px]">
            <div className="bg-white rounded-[32px] px-6 py-4 sm:px-10 sm:py-6 flex flex-col items-center shadow-md text-center hover:scale-105 duration-200 ">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-black p-6">
                Bitrocket
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureSection;
