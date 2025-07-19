// import { motion } from "framer-motion";
// import coinss from "../assets/coinss.png";
// import phone from "../assets/1image.avif";

// const lines = [
//   "India's Best",
//   "Rewards on Credit",
//   "Card Bill Payments",
// ];

// const subtext = "Free Payments. Real Rewards.";

// const splitText = (text) => text.split("");

// const HeroSection = () => {
//   return (
//     <section className=" relative overflow-hidden bg-gradient-to-b from-green-100 via-white to-white ">
//       {/* Floating coins */}
//      <img
//   src={coinss}
//   className="absolute w-28 sm:w-32 md:w-36 top-32 left-1/4 md:left-[9%]  "
//    style={{ filter: 'blur(5px)' }}
// />
// <img
//   src={coinss}
//   className="absolute w-32 sm:w-36 md:w-40 top-20 right-1/6  delay-200"
//   style={{ filter: 'blur(5px)' }}
// />
// <img
//   src={coinss}
//   className="absolute w-24 sm:w-28 md:w-32 bottom-20 left-1/4 delay-500"
//   style={{ filter: 'blur(5px)' }}
// />
// <img
//   src={coinss}
//   className="absolute w-28 sm:w-32 md:w-36 bottom-10 right-10   delay-700"
//   style={{ filter: 'blur(5px)' }}
// />



//       {/* Centered animated text */}
      
//       <div className="max-w-4xl mx-auto text-center py-20 px-4 relative z-10">
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 space-y-3 leading-snug sm:leading-tight md:leading-[1.2]">
//           {lines.map((line, lineIndex) => (
//             <div key={lineIndex} className="flex justify-center flex-wrap">
//               {splitText(line).map((char, charIndex) => (
//                 <motion.span
//                   key={charIndex}
//                   initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
//                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//                   transition={{ delay: (lineIndex * 0.5) + charIndex * 0.03 }}
//                   className="inline-block"
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </motion.span>
//               ))}
//             </div>
//           ))}
//         </h2>


//         {/* Subtitle animation */}
//         <p className="text-lg text-gray-600 flex justify-center flex-wrap">
//           {splitText(subtext).map((char, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
//               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               transition={{ delay: 1.2 + index * 0.02 }}
//               className="inline-block"
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </p> 
//       </div>

//       {/* Phone Image */}
//       <div className="flex justify-center relative z-10">
//         <img src={phone} alt="app preview" className="w-72 sm:w-96 drop-shadow-xl" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import coinss from "../assets/coinss.png";
import phone from "../assets/1image.avif";

const lines = [
  "India's Best",
  "Rewards on Credit",
  "Card Bill Payments",
];

const subtext = "Free Payments. Real Rewards.";

const splitText = (text) => text.split("");

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-100 via-white to-white">
      {/* Floating coins */}
      <img
        src={coinss}
        className="absolute w-28 sm:w-32 md:w-36 top-32 left-1/4 md:left-[9%]"
        style={{ filter: "blur(5px)" }}
      />
      <img
        src={coinss}
        className="absolute w-32 sm:w-36 md:w-40 top-20 right-1/6 delay-200"
        style={{ filter: "blur(5px)" }}
      />
      <img
        src={coinss}
        className="absolute w-24 sm:w-28 md:w-32 bottom-20 left-1/4 delay-500"
        style={{ filter: "blur(5px)" }}
      />
      <img
        src={coinss}
        className="absolute w-28 sm:w-32 md:w-36 bottom-10 right-10 delay-700"
        style={{ filter: "blur(5px)" }}
      />

      {/* Animated text */}
      <div className="max-w-4xl mx-auto text-center py-20 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 space-y-3 leading-snug sm:leading-tight md:leading-[1.2]">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex justify-center flex-wrap">
              {splitText(line).map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{
                    delay: lineIndex * 0.5 + charIndex * 0.03,
                    type: "spring",
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          ))}
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 flex justify-center flex-wrap">
          {splitText(subtext).map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.2 + index * 0.02 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
      </div>

    
      {/* Card Slider Showcase */}
      <div className="bg-gradient-to-r from-white to-[#f4fbff] py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto relative flex justify-center items-center overflow-hidden">

          {/* Tilted Left Card */}
          <div className="hidden md:block absolute left-[20%] -rotate-[15deg] scale-[0.9] opacity-40 z-0">
            <div className="w-[250px] h-[500px] rounded-3xl bg-white shadow-xl border flex flex-col p-4 justify-between">
              <div className="h-1/2 bg-gray-100 rounded-lg"><img src="sasrc/assets/1image.avif" alt="" /></div>
              <div className="h-1/4 bg-gray-200 rounded-lg"><video src="src/assets/1st video.mp4"></video></div>
              <div className="h-1/4 bg-gray-100 rounded-lg"><img src="" alt="src/assets/2nd imag.avif" /></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="z-10">
            <div className="w-[270px] sm:w-[300px] md:w-[320px] lg:w-[360px] h-[520px] rounded-3xl bg-white shadow-2xl border p-6 flex flex-col justify-between transition-transform hover:scale-105 duration-300">
              <div className="h-2/5 bg-blue-50 rounded-xl mb-4"></div>
              <div className="space-y-3">
                <div className="bg-gray-200 h-6 w-2/3 rounded-lg"></div>
                <div className="bg-gray-100 h-6 w-1/2 rounded-lg"></div>
                <div className="flex justify-between items-center">
                  <div className="bg-gray-300 h-10 w-24 rounded-xl"></div>
                  <div className="bg-green-400 text-white text-sm px-4 py-2 rounded-xl font-semibold shadow hover:bg-green-500 cursor-pointer">
                    PAY NOW
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tilted Right Card */}
          <div className="hidden md:block absolute right-[20%] rotate-[15deg] scale-[0.9] opacity-40 z-0">
            <div className="w-[250px] h-[500px] rounded-3xl bg-white shadow-xl border flex flex-col p-4 justify-between">
             <img src="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


