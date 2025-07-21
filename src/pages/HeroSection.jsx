import { motion } from "framer-motion";
import coinss from "../assets/coinss.png";
import image1 from "../assets/1image.avif"
import video from "../assets/vid.mp4"
import image2 from "../assets/2imag.avif"

const lines = ["India's Best", "Rewards on Credit", "Card Bill Payments"];
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
        alt="coins"
      />
      <img
        src={coinss}
        className="absolute w-32 sm:w-36 md:w-40 top-20 right-1/6 delay-200"
        style={{ filter: "blur(5px)" }}
        alt="coins"
      />
      <img
        src={coinss}
        className="absolute w-24 sm:w-28 md:w-32 bottom-20 left-1/4 delay-500"
        style={{ filter: "blur(5px)" }}
        alt="coins"
      />
      <img
        src={coinss}
        className="absolute w-28 sm:w-32 md:w-36 bottom-10 right-10 delay-700"
        style={{ filter: "blur(5px)" }}
        alt="coins"
      />

      {/* Animated text */}
      <div className="max-w-4xl mx-auto text-center py-20 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-snug sm:leading-tight md:leading-[1.2] space-y-3">
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

     <div className="flex justify-center items-center relative py-16 px-4">
  <div className="relative" style={{ width: "300px", height: "600px" }}>

    {/* Left Card - Green */}
    <motion.div
      className="absolute rounded-[30px] overflow-hidden hidden md:block"
      initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
      animate={{ rotate: -20, scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      style={{
        backgroundColor: "#00b050",
        height: "550px",
        width: "100%",
        left: "-250px",
        zIndex: 1,
      }}
    >
      <img
        src={image1}
        alt="Green Card"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>

    {/* Right Card - Sky Blue */}
    <motion.div
      className="absolute rounded-[30px] overflow-hidden hidden md:block"
      initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
      animate={{ rotate: 20, scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      style={{
        backgroundColor: "#4dd0e1",
        height: "550px",
        width: "100%",
        left: "250px",
        zIndex: 1,
      }}
    >
      <img
        src={image2}
        alt="Sky Blue Card"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>

    {/* Center Card - Orange with Video */}
    {/* Center Card - Orange with Video */}
<div
  className="absolute rounded-[30px] overflow-hidden"
  style={{
    backgroundColor: "#f7931e",
    height: "600px",
    top: "-8%",
    left: 0,
    right: 0,
    margin: "auto",
    zIndex: 2,
  }}
>
  <video
    src={video}
    autoPlay
    loop
    muted
    playsInline
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>

  </div>
</div>




    </section>
  );
};

export default HeroSection;
