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
      <div className="shadow-md mt-10 sm:mt-12 max-w-5xl mx-auto p-4 md:p-6 border rounded-xl text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4  text-left">
        <p className="text-[15px] leading-snug text-black font-bold mx-auto">
          Got a brand
          <span className="font-semibold text-green-400 mr-2">
            People Love?
          </span>
        </p>
        <br className=" hidden md:block" />
        <p className="text-gray-600 font-light md:text-nowrap mx-auto">
          Partner with CheQ. Elevate your brand's visibility among our growing
          user base.{" "}
        </p>
        <button className="bg-green-400 mx-auto text-nowrap text-white px-4 py-2 rounded-md font-semibold w-fit sm:w-auto text-sm">
          PARTNER WITH US
        </button>
      </div>
    </section>
  );
};

export default BrandVouchers;
