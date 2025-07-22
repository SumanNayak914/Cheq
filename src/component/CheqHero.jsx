import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import shield from "../assets/shield.png"; // Ensure this is the correct path

const CheqHero = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  
  // Use Framer Motion's useInView hook for scroll triggering
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  const textInView = useInView(textRef, { 
    once: true, 
    amount: 0.5 
  });

  const cardInView = useInView(cardRef, { 
    once: true, 
    amount: 0.3 
  });

  useEffect(() => {
    const loop = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(loop);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen w-[90vw] md:w-[80vw] bg-[#DFF9EC] font-sans rounded-[36px] flex items-center justify-center px-4 md:px-12 py-16 mx-auto mt-10"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Card Section */}
        <div 
          ref={cardRef}
          className="flex justify-center"
        >
          <AnimatePresence mode="wait">
            <AnimatedCard key={animationKey} />
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <motion.div 
          ref={textRef}
          className="text-center md:text-left px-2 md:px-4"
          variants={textVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            variants={childVariants}
          >
            Never miss a due date with CheQ Safe
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-base sm:text-lg"
            variants={childVariants}
          >
            No more missed due dates. Automatic reminders with real-time updates
            on due amounts ensure timely payments.
          </motion.p>
          
          {/* Optional: Add a subtle CTA button with animation */}
          <motion.div
            variants={childVariants}
            className="mt-6"
          >
            <motion.button
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const paymentCardsData = [
  { bank: "HDFC Regalia", lastFour: "3423", amount: "₹30,000" },
  { bank: "Axis My Zone", lastFour: "6879", amount: "₹30,000" },
  { bank: "Bajaj Finserv", lastFour: "5423", amount: "₹30,000" },
];

const AnimatedCard = () => {
  const [showCards, setShowCards] = useState(false);
  const [showBillFound, setShowBillFound] = useState(true);
  const [showRipple, setShowRipple] = useState(false);

  useEffect(() => {
    const hideBillTimeout = setTimeout(() => {
      setShowBillFound(false);
    }, 1500);

    const rippleTimeout = setTimeout(() => {
      setShowRipple(true);
    }, 1600);

    const showCardsTimeout = setTimeout(() => {
      setShowCards(true);
    }, 1800);

    return () => {
      clearTimeout(hideBillTimeout);
      clearTimeout(showCardsTimeout);
      clearTimeout(rippleTimeout);
    };
  }, []);

  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-6 h-[450px] w-[90vw] max-w-xs sm:max-w-sm flex flex-col items-center justify-center overflow-hidden" >
      {/* Shield */}
      <motion.div
        className="absolute z-10"
        style={{ width: 70, height: 70, top: "20px", left: "50%", x: "-50%" }}
        initial={{ scale: 3, top: "50%", y: "-50%" }}
        animate={{ scale: 1, top: "20px", y: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img src={shield} alt="Shield" className="w-full h-full object-contain" />

        {/* Ripple Effect */}
        {showRipple && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-500"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
      </motion.div>

      {/* Bill Found */}
      {showBillFound && (
        <motion.div
          className="absolute top-20 flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="mr-2">✔️</span> Bill found
        </motion.div>
      )}

      {/* Cards */}
      {showCards && (
        <motion.div
          className="mt-20 space-y-3 w-full z-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {paymentCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-800 text-sm">{card.bank}</span>
                <span className="text-xs text-gray-500">-{card.lastFour}</span>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">PAYABLE AMOUNT</p>
                <p className="text-base font-bold text-gray-900">{card.amount}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CheqHero;