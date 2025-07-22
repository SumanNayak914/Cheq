import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const articles = [
  {
    title: "What is a good Credit Mix for your credit profile?",
    desc: "Credit mix refers to the different types of credit accounts you have. Its impact on your",
    date: "Oct 4, 2023",
    image: "src/assets/box1.avif",
  },
  {
    title: "The History of Credit Scores",
    desc: "In ancient Egypt, merchants used a primitive form of credit scoring, relying on",
    date: "Oct 4, 2023",
    image: "src/assets/box2.avif",
  },
  {
    title: "Decoding Your Credit Card Number",
    desc: "Credit cards throughout the world follow the same standard for...",
    date: "Oct 4, 2023",
    image: "src/assets/box3.avif",
  },
];

const CreditArticlesSection = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}

        <h2
          ref={headingRef}
          className="text-2xl text-black sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-12 opacity-0"
        >
          Learn more about
          <span className="text-red-400 font-bold ml-4">credit</span>
        </h2>

        {/*  Small Device Slider */}
        <div className="block sm:hidden overflow-x-auto">
          <div className="flex gap-4 w-max px-1">
            {articles.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-2 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm pt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                      />
                    </svg>
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🟢 Grid for Medium and Larger Devices */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 overflow-hidden border border-gray-200 shadow-sm  transition-all bg-white flex flex-col z-10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-56 object-cover rounded-3xl z-50 hover:shadow-2xl duration-150 "
              />

              <div className="p-5 space-y-3 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <div className="flex items-center text-gray-400 text-sm pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                    />
                  </svg>
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditArticlesSection;
