import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import shield from "../assets/shield.png"; // Assuming shield.png is your correct shield image

const CheqHero = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 6000); // full animation cycle duration

    return () => clearInterval(loop);
  }, []);

  return (
    <section className="min-h-screen w-[80%] bg-[#DFF9EC]  font-sans container mx-auto rounded-[7%] flex items-center justify-center mt-[10%] ">
      <div className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 md:mx-auto items-center justify-center ">
        {/* Card Animation Section */}
        <div className="mx-auto h-[510px] w-auto flex justify-center items-center">
          <div>
            <AnimatePresence mode="wait">
              <AnimatedCard key={animationKey} />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="min-w-sm h-auto  p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Never miss a due date with CheQ Safe
          </h2>
          <p className="text-gray-600 text-lg">
            No more missed due dates. Automatic reminders with real-time updates
            on due amounts ensure timely payments.
          </p>
        </div>
      </div>
    </section>
  );
};

// Data for the cards to display
const paymentCardsData = [
  { bank: "HDFC Regalia", lastFour: "3423", amount: "₹30,000" },
  { bank: "Axis My Zone", lastFour: "6879", amount: "₹30,000" },
  { bank: "Bajaj Finserv", lastFour: "5423", amount: "₹30,000" },
];

const AnimatedCard = () => {
  const [showCards, setShowCards] = useState(false);
  const [showBillFound, setShowBillFound] = useState(true);

  useEffect(() => {
    // Hide "Bill found" after shield animation
    const hideBillFoundTimeout = setTimeout(() => {
      setShowBillFound(false);
    }, 1500); // Should align with shield animation duration

    const showCardsTimeout = setTimeout(() => {
      setShowCards(true);
    }, 1800); // show cards after shield finishes animation

    return () => {
      clearTimeout(hideBillFoundTimeout);
      clearTimeout(showCardsTimeout);
    };
  }, []);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl relative overflow-hidden p-6 min-h-[380px] w-[320px] flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Shield and Border Animation Container */}
      <motion.div
        className="absolute z-10"
        style={{ width: 70, height: 70, top: "20px", left: "50%", x: "-50%" }} // Adjusted size to give room for border
        initial={{
          scale: 3,
          top: "50%",
          y: "-50%",
        }}
        animate={{
          scale: 1,
          top: "20px",
          y: "0%",
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Shield Image */}
        <img
          src={shield}
          alt="Shield"
          className="w-full h-full object-contain"
        />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 border-2 border-green-500 rounded-full" // Added rounded-full for circular border
          initial={{
            clipPath: "inset(0% 100% 100% 0%)", // Start hidden (top-right to bottom-left)
          }}
          animate={{
            clipPath: [
              "inset(0% 100% 100% 0%)", // Start (hidden)
              "inset(0% 0% 100% 0%)", // Draw top
              "inset(0% 0% 0% 0%)", // Draw right, then bottom, then left
            ],
          }}
          transition={{
            duration: 1, // Total duration for border drawing
            delay: 0.5, // Start border animation after shield starts
            ease: "linear",
            times: [0, 0.33, 1], // Control timing for each clipPath step
          }}
        />
      </motion.div>

      {/* Bill Found text */}
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

      {/* Card List Animation */}
      {showCards && (
        <motion.div
          className="mt-24 space-y-4 z-0 w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {paymentCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">{card.bank}</span>
                <span className="text-sm text-gray-500">-{card.lastFour}</span>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">PAYABLE AMOUNT</p>
                <p className="text-lg font-bold text-gray-900">{card.amount}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CheqHero;
