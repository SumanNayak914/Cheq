import React from "react";
import Inc42 from "../assets/newslogo/inc.avif"
import News18 from "../assets/newslogo/news18.avif"
import Cnbc18 from "../assets/newslogo/cnbc.avif"
import YourStory from "../assets/newslogo/yourstory.svg"
import { motion } from "framer-motion";

const NewsSection = () => {
  const newsLogos = [
    { src: Inc42, alt: "Inc42" },
    { src: News18, alt: "News18" },
    { src: Cnbc18, alt: "CNBCTV18" },
    { src: YourStory, alt: "YourStory" },
  ];

  return (
    <section className="w-full  bg-white py-16 px-4 md:px-10 lg:px-20"> 
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-2xl md:text-3xl font-semibold text-gray-800"  initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
          We are in <span className="text-red-400 font-bold">the news</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-[#FAF8F8] p-12 rounded-4xl shadow-xl border border-[#e7dede]">
          {newsLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white flex items-center justify-center p-8 rounded-2xl shadow-md hover:scale-105 duration-200"
            >
             <div className="">
               <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 object-contain duration-200"
              />
               </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
