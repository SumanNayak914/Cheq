import DoubleMarquee from "./DoubleMarquee";

const brands = [
  { name: "Zingbus", logo: "/assets/zingbus.png", bg: "bg-[#F3F2FF]" },
  { name: "Domino's", logo: "/assets/dominos.png", bg: "bg-[#F9F9F9]" },
  { name: "BookMyShow", logo: "/assets/bookmyshow.png", bg: "bg-[#FFF1F2]" },
  { name: "Gullak", logo: "/assets/gullak.png", bg: "bg-[#FFF8E1]" },
  { name: "Snitch", logo: "/assets/snitch.png", bg: "bg-[#FAFAFA]" },
  { name: "Talking Sox", logo: "/assets/talkingsox.png", bg: "bg-[#F7F8FC]" },
  { name: "Cleartax", logo: "/assets/cleartax.png", bg: "bg-[#FFF5F5]" },
];

const BrandVouchers = () => {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-white text-center">
      <DoubleMarquee />

      {/* CTA Box */}
      <div className="mt-10 sm:mt-12 max-w-3xl sm:max-w-5xl mx-auto px-4 sm:px-8 py-4 sm:py-6 border rounded-xl text-sm flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-6 shadow-sm  border-gray-200">
        <div className="flex flex-col text-[15px] sm:text-[14px] leading-snug text-center sm:text-left sm:items-start">
          <span className="font-semibold text-gray-700 sm:whitespace-nowrap">
            Got a brand{" "}
            <span className="text-green-600 font-semibold">people love?</span>
          </span>
          <span className="text-gray-500 mt-1 text-[13px] sm:text-[14px] sm:whitespace-nowrap">
            Partner with CheQ. Elevate your brand's visibility among our growing
            user base.
          </span>
        </div>

        {/* Button */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold w-auto text-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:text-black sm:ml-auto">
          PARTNER WITH US
        </button>
      </div>
    </section>
  );
};

export default BrandVouchers;
