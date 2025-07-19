import coin from "../assets/coin.png";
import rewards from "../assets/1image.avif"; // phone image with gift cards


const GetCashback = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-green-50 to-white overflow-hidden">
      {/* Floating coin (optional) */}
      <img
        src={coin}
        alt="coin"
        className="absolute top-4 left-4 w-16 animate-float"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Tilted Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={rewards}
            alt="Tilted rewards"
            className="w-[90%] max-w-sm transform -rotate-[10deg] drop-shadow-2xl"
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

