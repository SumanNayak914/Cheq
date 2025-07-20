import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import shield from "../assets/shield.png"; // Ensure this is the correct path

const CheqHero = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(loop);
  }, []);

  return (
    <section className="min-h-screen w-[80%] bg-[#DFF9EC] font-sans rounded-[7%] flex items-center justify-center px-4 md:px-12 py-16 mx-auto">
      <div className="w-full  mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Card Section */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <AnimatedCard key={animationKey} />
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left px-2 md:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Never miss a due date with CheQ Safe
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            No more missed due dates. Automatic reminders with real-time updates
            on due amounts ensure timely payments.
          </p>
        </div>
      </div>
    </section>
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
    <motion.div
      className="relative bg-white rounded-2xl shadow-xl p-6 min-h-[380px] w-[90vw] max-w-xs sm:max-w-sm flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          className="mt-24 space-y-4 w-full z-0"
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
