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
    <section className="py-16 px-4 bg-white text-center">
      {/* Headings */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          <span className="text-brand">Exclusive Vouchers</span> <br />
          from Premium Brands
        </h2>
      </div>

<DoubleMarquee/>
      {/* Bottom CTA (Optional) */}
      <div className="mt-12 max-w-4xl mx-auto px-6 py-4 border rounded-2xl text-sm flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <p>
          <span className="font-semibold text-gray-700">Got a brand people love?</span><br />
          Partner with CheQ. Elevate your brand's visibility among our growing user base.
        </p>
        <button className="bg-brand text-white px-6 py-2 rounded-md font-semibold">
          PARTNER WITH US
        </button>
      </div>
    </section>
  );
};

export default BrandVouchers;
