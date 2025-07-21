import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import phone from "../assets/1image.avif";

const cards = [
  {
    id: 1,
    cardName: "Bajaj Finserv",
    cardNumber: "21XX XXXX",
    bg: "bg-white",
    border: "border-blue-300",
    animationClass: "card-animate-lg",
  },
  {
    id: 2,
    cardName: "HDFC Regalia",
    cardNumber: "... 3425",
    bg: "bg-blue-50",
    border: "border-blue-500",
    animationClass: "card-animate-md",
  },
  {
    id: 3,
    cardName: "Axis My Zone Credit Card",
    cardNumber: "... 6725",
    bg: "bg-pink-100",
    border: "border-pink-500",
    animationClass: "card-animate-sm",
  },
];

const PayTogether = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const controls = useAnimation();

  const playFullAnimation = async () => {
    setStartAnimation(true);
    // Wait for cards to animate out
    await new Promise((res) => setTimeout(res, 2500));

    // Button animation
    await controls.start({ scale: 1.1, transition: { duration: 0.1 } });
    await controls.start({ scale: 0.8, transition: { duration: 0.2 } });
    await controls.start({ scale: 1, transition: { duration: 0.2 } });

    // Wait for a moment before resetting for the next loop
    await new Promise((res) => setTimeout(res, 1500));
    setStartAnimation(false);
    // Small delay to allow CSS transition to reset before next animation starts
    await new Promise((res) => setTimeout(res, 200));
  };

  useEffect(() => {
    let isActive = true;
    const loop = async () => {
      while (isActive) {
        await playFullAnimation();
      }
    };
    loop();
    // Cleanup function to stop the loop when the component unmounts
    return () => {
      isActive = false;
    };
  }, [controls]);

  return (
    <div
      className="min-h-screen bg-green-100 font-sans overflow-hidden rounded-[40px] md:rounded-[60px]
                  w-[90vw] sm:w-[90vw] md:w-[80vw]  mx-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* 1️⃣ Section: Card + Button */}
        <section className="w-full py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 ">
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Multiple Bills,
                <br />
                <span className="text-[#00C197]">One Single</span>
                <br />
                <span className="text-[#00C197]">Payment</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-lg max-w-md "
              >
                Consolidate and "Pay Together". Experience hassle-free payments
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-600 text-lg mb-6 max-w-md"
              >
                for all your credit bills in one go.
              </motion.p>
            </div>

            {/* Cards + Button Section - Corrected for right-side positioning and responsiveness */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative">
              <div className="relative h-[600px] w-[300px] sm:w-[350px] md:w-[450px] max-w-sm bg-[#E0F7FA] rounded-[40px] p-4 shadow-xl overflow-hidden flex items-center justify-center">
                {/* Inner container for cards and button to control their positioning */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {cards
                    .slice()
                    .reverse()
                    .map((card, index) => {
                      const originalIndex = cards.length - 1 - index;
                      const zIndex =
                        originalIndex === 0
                          ? "z-30"
                          : originalIndex === 1
                          ? "z-20"
                          : "z-10";

                      // Define responsive card dimensions using Tailwind classes
                      const cardClasses = `w-[150px] h-[260px] sm:w-[180px] sm:h-[300px] md:w-[220px] md:h-[380px]`;

                      // Responsive offsetX values for horizontal spread (from the right)
                      // Adjusted values for better left alignment on small devices
                      const smallRightOffset = 30 + originalIndex * 40; // Starts further left
                      const smRightOffset = 40 + originalIndex * 50; // Slightly more spread for sm screens
                      const mdRightOffset = 120 + originalIndex * 25; // Original for medium+

                      return (
                        <div
                          key={card.id}
                          className={`absolute p-4 rounded-2xl shadow-lg border-2 bottom-[160px] transition-all duration-300 ease-out ${card.bg} ${card.border} ${zIndex} ${
                            startAnimation ? card.animationClass : ""
                          } ${cardClasses}`}
                          style={{
                            // Default (small screens) uses smallRightOffset
                            right: `${smallRightOffset}px`,
                            // Override for sm breakpoint
                            "@media (min-width: 640px)": {
                              right: `${smRightOffset}px`,
                            },
                            // Override for md breakpoint (original behavior)
                            "@media (min-width: 768px)": {
                              right: `${mdRightOffset}px`,
                            },
                          }}
                        >
                          <div className="text-center font-semibold text-gray-700 text-sm">
                            {card.cardName}
                            <br />
                            <span className="text-xs">{card.cardNumber}</span>
                          </div>
                        </div>
                      );
                    })}
                  <motion.button
                    animate={controls}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#00C197] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-emerald-600 transition"
                  >
                    PAY TOGETHER
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        {/* 2️⃣ Section: Credit Report */}
        <section className="w-full py-32 rounded-b-[10%] bg-green-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Line + Phone */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative  w-[300px] md:w-2/3 lg:w-3/5 xl:w-1/2 aspect-[3/4] max-w-md mx-auto bg-white shadow-xl rounded-3xl p-7 flex flex-col items-start justify-start overflow-hidden">
                {/* Snake Line */}
                <motion.svg
                  viewBox="0 0 400 120"
                  width="100%"
                  height="100"
                  className="z-10"
                >
                  <motion.path
                    d="M0 90 Q 50 110, 100 60 Q 150 10, 200 60 Q 250 110, 300 40 Q 350 -10, 400 50"
                    fill="transparent"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2,
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                </motion.svg>
                {/* Phone Image */}
                <motion.div
                  initial={{ opacity: 0, y: 100, rotate: 0 }}
                  animate={{
                    opacity: [0, 0, 1, 1],
                    y: [100, 100, 0, 0],
                    rotate: [0, 8, -8, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  // Responsive sizing for the phone image container
                  className="absolute bottom-[-40px] w-4/5 h-3/5 sm:w-3/4 sm:h-2/3 md:w-2/3 md:h-3/4 rounded-2xl overflow-hidden"
                >
                  <img
                    src={phone}
                    alt="Phone UI"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Get your free <br />
                <span className="text-[#00C197]">Credit Report</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-lg mb-6 max-w-md"
              >
                Dive deep with a free, detailed credit report. Understand your
                credit standing and get actionable insights.
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PayTogether;