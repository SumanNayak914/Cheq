import coin from "../assets/coin.png";
import rewards from "../assets/1image.avif"; // phone image with gift cards


const GetCashback = () => {
  return (
    <section className="relative w-[365px] md:w-[80%] mx-auto py-16 px-4 bg-amber-300 from-green-50 to-white overflow-hidden  rounded-[40px]">
      {/* Floating coin (optional) */}
      <img
        src={coin}
        alt="coin"
        className="absolute top-4 left-4 w-16 animate-float"
      />

      {/* Main Content - Adjusted container width here */}
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Tilted Image - Added min-h-[400px] */}
        <div className="w-full md:w-1/2 flex justify-center relative min-h-[400px] md:min-h-[500px]"> {/* Adjusted min-heights */}
          <img
            src={rewards}
            alt="Tilted rewards"
            className="absolute w-[80%] max-w-[300px] transform -rotate-[10deg] drop-shadow-2xl top-20"
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