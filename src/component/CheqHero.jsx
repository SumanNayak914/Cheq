import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import shield from "../assets/shield.png"; // Ensure this is the correct path

const CheqHero = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null); // This ref is for the *container* of the card

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

  const cardInView = useInView(cardRef, { // This is likely not needed if cardRef has a fixed height
    once: true,
    amount: 0.3
  });

  useEffect(() => {
    // This loop is ONLY for re-triggering the AnimatedCard component's animation cycle
    const loop = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 8000); // Increased time for complete animation cycle

    return () => clearInterval(loop);
  }, []);

  // Text animation variants (removed 'y' property for no vertical movement)
  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
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
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
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
      className="min-h-screen w-[90vw] lg:w-[80vw] bg-[#DFF9EC] font-sans rounded-[40px] md:rounded-[60px] flex items-center justify-center px-4 lg:px-12 py-16 mx-auto mt-10"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="w-full mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Card Section - Added a fixed height to prevent layout shifts */}
        <div
          ref={cardRef}
          className="flex justify-center"
          // Add min-h to maintain space even when AnimatedCard unmounts
          style={{ minHeight: '500px' }} // Use the max-h from AnimatedCard or slightly more
        >
          <AnimatePresence mode="wait">
            {/* key prop is essential for AnimatePresence to detect changes and trigger exit/enter */}
            <AnimatedCard key={animationKey} />
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <motion.div
          ref={textRef}
          className="text-center lg:text-left px-2 lg:px-4"
          variants={textVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            variants={childVariants}
          >
            Never miss a due date with CheQ Safe
          </motion.h2>
          <motion.p
            className="text-gray-700 text-base md:text-lg"
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
  const [phase, setPhase] = useState(1); // Phase 1: Logo animation, Phase 2: Cards, Phase 3: Exit
  const [cardLoaded, setCardLoaded] = useState(false); // New state to track card entry animation

  useEffect(() => {
    // This timeout sets cardLoaded to true after the main card box entry animation
    const cardEntryTimeout = setTimeout(() => {
      setCardLoaded(true);
    }, 600); // Matching the card's entry transition duration (0.6s)

    // This timeout transitions to phase 2 (showing payment cards)
    const phase2Timeout = setTimeout(() => {
      setPhase(2);
    }, 2000); // 2 seconds after card mounts (or overall start)

    // This timeout transitions to phase 3 (exit animation for the card)
    const phase3Timeout = setTimeout(() => {
      setPhase(3);
    }, 6000); // Total duration of the card's active state before it exits

    return () => {
      clearTimeout(cardEntryTimeout);
      clearTimeout(phase2Timeout);
      clearTimeout(phase3Timeout);
    };
  }, []); // Empty dependency array means this effect runs once per mount of AnimatedCard

  return (
    <AnimatePresence mode="wait">
      {phase < 3 && ( // Card stays mounted until phase 3
        <motion.div
          className="relative bg-white rounded-2xl shadow-xl p-6 h-[450px] md:h-[500px] w-[90vw] max-w-xs md:max-w-md flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: -50,
            transition: { duration: 0.5 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }} // This is the card's entry duration
        >
          {/* Shield Logo */}
          <motion.div
            className="absolute z-10"
            style={{ width: 70, height: 70 }}
            initial={{
              scale: 2, // Starts larger
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%"
            }}
            // Animate only if cardLoaded is true (card box has appeared)
            animate={cardLoaded && phase >= 1 ? {
              scale: 1, // Shrinks to normal size
              top: "30px", // Moves to top position
              left: "50%",
              x: "-50%",
              y: "0%"
            } : {}}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: cardLoaded ? 0.2 : 0 // Small delay after card is loaded
            }}
          >
            <img src={shield} alt="Shield" className="w-full h-full object-contain" />

            {/* Ripple Effect */}
            {cardLoaded && phase >= 2 && ( // Ripple appears with phase 2
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-500"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            )}
          </motion.div>

          {/* Bill Found Notification */}
          {cardLoaded && phase >= 1 && ( // Notification appears with phase 1 (after card loads)
            <motion.div
              className="absolute top-24 flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold z-20"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={cardLoaded && phase >= 1 ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                delay: 0.5, // Delay relative to when the shield starts its main animation
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <span className="mr-2">✔️</span> Bill found
            </motion.div>
          )}

          {/* Payment Cards */}
          {cardLoaded && phase >= 2 && ( // Payment cards appear with phase 2
            <motion.div
              className="mt-28 space-y-3 w-full z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {paymentCardsData.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-md border border-gray-200"
                  initial={{
                    opacity: 0,
                    y: 100,
                    scale: 0.8,
                    rotateX: 45
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0
                  }}
                  transition={{
                    delay: index * 0.2 + 0.3, // Staggered delay for each card
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800 text-sm">{card.bank}</span>
                    <span className="text-xs text-gray-500">-{card.lastFour}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">PAYABLE AMOUNT</p>
                    <p className="text-base font-bold text-gray-900">{card.amount}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheqHero;