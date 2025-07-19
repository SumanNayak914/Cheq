import { useEffect, useState } from "react";
import credit from '../assets/credit.png'
const cards = [
  {
    id: 1,
    bank: "Bajaj Finserv",
    bg: "bg-white",
    border: "border-blue-300",
    animationClass: "card-animate-lg",
    cardName: "Bajaj Finserv",
    cardNumber: "21XX XXXX",
    widthClass: "w-[220px]", // Vertical card width
    heightClass: "h-[380px]", // Vertical card height
  },
  {
    id: 2,
    bank: "HDFC Bank",
    bg: "bg-blue-50",
    border: "border-blue-500",
    animationClass: "card-animate-md",
    cardName: "HDFC Regalia",
    cardNumber: "... 3425",
     widthClass: "w-[220px]", // Vertical card width
    heightClass: "h-[380px]", // Vertical card height
  },
  {
    id: 3,
    bank: "Axis Bank",
    bg: "bg-pink-100",
    border: "border-pink-500",
    animationClass: "card-animate-sm",
    cardName: "Axis My Zone Credit Card",
    cardNumber: "... 6725",
   widthClass: "w-[220px]", // Vertical card width
    heightClass: "h-[380px]", // Vertical card height
  },
];

const PayTogether = () => {
  const [startCardAnimation, setStartCardAnimation] = useState(false);
  const [startPhoneAnimation, setStartPhoneAnimation] = useState(false);

  useEffect(() => {
    const cardTimer = setTimeout(() => {
      setStartCardAnimation(true);
    }, 500);

    const phoneTimer = setTimeout(() => {
      setStartPhoneAnimation(true);
    }, 1000);

    return () => {
      clearTimeout(cardTimer);
      clearTimeout(phoneTimer);
    };
  }, []);

  return (
    <div className="min-h-screen w-[80%] bg-green-100  font-sans container mx-auto rounded-[5%]">
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Multiple Bills,
              <br />
              <span className="text-[#00C197]">One Single</span>
              <br />
              <span className="text-[#00C197]">Payment</span>
            </h2>
            <p className="text-gray-600 text-lg  max-w-md text-nowrap">
              Consolidate and "Pay Together". Experience hassle-free payments
            </p>
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              Consfor all your credit bills in one go.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
            {/* Parent container for cards and button */}
            <div className="relative h-[600px] w-[450px] bg-[#E0F7FA] rounded-[14%] p-4 shadow-xl overflow-hidden ">

              {cards.slice().reverse().map((card, index) => {
                const originalIndex = cards.length - 1 - index;

               let commonClasses = `absolute p-4 rounded-2xl shadow-lg border-2 transition-all duration-300 ease-out ${card.bg} ${card.border} bottom-[160px]`;


                let zIndexClass = "";
                if (originalIndex === 0) {
                  zIndexClass = "z-30";
                } else if (originalIndex === 1) {
                  zIndexClass = "z-20";
                } else {
                  zIndexClass = "z-10";
                }

                const offsetX = originalIndex * 25; // Adjust spread for narrower cards
                const initialRight = 120; // Base right position

                return (
                <div
  key={card.id}
  className={` object-fil ${commonClasses} ${card.widthClass} ${card.heightClass} ${zIndexClass} ${startCardAnimation ? card.animationClass : ""}`}
  style={{ right: `${initialRight + offsetX}px` }}
>
gdfgdfgdfgdfg
</div>

                );
              })}

              {/* PAY TOGETHER Button */}
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#00C197] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-emerald-600 transition whitespace-nowrap">
                PAY TOGETHER
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4  rounded-b-[20%]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className={`relative h-[400px] w-[250px] bg-white rounded-3xl shadow-xl flex items-center justify-center p-4 overflow-hidden
							${startPhoneAnimation ? "phone-wobble" : ""}`}
            >
              <img
                src="http://googleusercontent.com/gd/uploaded:Screenshot%20(38).png-6ae5a57e-865a-46a4-a17e-effd4e51af82"
                alt="Credit Report Mobile UI"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-b-lg"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left ">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Get your free
              <br />
              <span className="text-[#00C197]">Credit Report</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              Dive deep with a free, detailed credit report. Understand your
              credit standing and get actionable insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayTogether;