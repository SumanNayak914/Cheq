import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

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
    await new Promise((res) => setTimeout(res, 2500));

    await controls.start({ scale: 1.1, transition: { duration: 0.1 } });
    await controls.start({ scale: 0.8, transition: { duration: 0.2 } });
    await controls.start({ scale: 1, transition: { duration: 0.2 } });

    await new Promise((res) => setTimeout(res, 1500));
    setStartAnimation(false);
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
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-green-100 font-sans overflow-hidden w-[80%] mx-auto rounded-[7%]">
      {/* 1️⃣ Section: Card + Button */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Multiple Bills,
              <br />
              <span className="text-[#00C197]">One Single</span>
              <br />
              <span className="text-[#00C197]">Payment</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-md text-nowrap">
              Consolidate and "Pay Together". Experience hassle-free payments
            </p>
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              for all your credit bills in one go.
            </p>
          </div>

          {/* Cards + Button */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
            <div className="relative h-[600px] w-[450px] bg-[#E0F7FA] rounded-[14%] p-4 shadow-xl overflow-hidden">
              {cards
                .slice()
                .reverse()
                .map((card, index) => {
                  const originalIndex = cards.length - 1 - index;
                  const zIndex = originalIndex === 0 ? "z-30" : originalIndex === 1 ? "z-20" : "z-10";
                  const offsetX = 120 + originalIndex * 25;
                  return (
                    <div
                      key={card.id}
                      className={`absolute p-4 rounded-2xl shadow-lg border-2 bottom-[160px] transition-all duration-300 ease-out ${card.bg} ${card.border} w-[220px] h-[380px] ${zIndex} ${
                        startAnimation ? card.animationClass : ""
                      }`}
                      style={{ right: `${offsetX}px` }}
                    >
                      <div className="text-center font-semibold text-gray-700">
                        {card.cardName}
                        <br />
                        <span className="text-sm">{card.cardNumber}</span>
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
      </section>

      {/* 2️⃣ Section: Credit Report */}
      <section className="w-full py-32 px-4 rounded-b-[10%] bg-green-100 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Line + Phone */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white shadow-xl rounded-3xl p-6 w-[300px] h-[500px] flex flex-col items-center justify-start overflow-hidden">
              {/* Snake Line */}
              <motion.svg viewBox="0 0 400 120" width="100%" height="100" className="z-10">
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
                className="absolute bottom-[-40px] w-[250px] h-[400px] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/250x400"
                  alt="Phone UI"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
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
  );
};

export default PayTogether;
