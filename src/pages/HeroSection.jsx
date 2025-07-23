import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coinss from "../assets/coinss.png";
import image1 from "../assets/1image.avif";
import video from "../assets/vid.mp4";
import image2 from "../assets/2imag.avif";
import FloatingCoin from "../component/FloatingCoin";

gsap.registerPlugin(ScrollTrigger);

const lines = ["India's Best", "Rewards on Credit", "Card Bill Payments"];
const subtext = "Free Payments. Real Rewards.";

const splitText = (text) => text.split("");

const HeroSection = () => {
  const pinRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Pin the hero section
    const pinTrigger = ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: "+=800", // Extended pin duration
      pin: true,
      pinSpacing: false,
      markers: false,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      }
    });

    // Text zoom IN and fade animation
    gsap.to(textRef.current, {
      scale: 2.5, // Zoom IN effect
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: "+=400",
        scrub: 1.5,
        ease: "power2.out"
      }
    });

    // Cards zoom out and fade animation
    gsap.to(cardsRef.current, {
      scale: 0.2,
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: "+=600",
        scrub: 1.5,
        ease: "power2.out"
      }
    });

    // Background fade out
    gsap.to(pinRef.current, {
      backgroundColor: "rgba(240, 253, 244, 0)",
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: "+=800",
        scrub: 2,
      }
    });

    return () => {
      pinTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={pinRef}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-green-100 via-white to-white"
      style={{
        maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
      }}
    >
      {/* Floating Coins - with proper scroll disappear */}
      <div style={{ opacity: scrollProgress > 0.1 ? 0 : 1, transition: 'opacity 0.3s ease' }}>
        <FloatingCoin 
          className="w-28 sm:w-32 md:w-36 top-32 left-1/4 md:left-[9%]" 
          delay={0.2} 
          scrollThreshold={30}
          coinImage={coinss}
        />
        <FloatingCoin 
          className="w-32 sm:w-36 md:w-40 top-20 right-1/6" 
          delay={0.8} 
          scrollThreshold={40}
          coinImage={coinss}
        />
        <FloatingCoin 
          className="w-24 sm:w-28 md:w-32 bottom-20 left-1/4" 
          delay={1.0} 
          scrollThreshold={35}
          coinImage={coinss}
        />
        <FloatingCoin 
          className="w-28 sm:w-32 md:w-36 bottom-10 right-10" 
          delay={1.2} 
          scrollThreshold={45}
          coinImage={coinss}
        />
      </div>

      {/* Animated Text */}
      <div ref={textRef} className="max-w-4xl mx-auto text-center py-10 px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-snug sm:leading-tight md:leading-[1.2] space-y-3">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex justify-center flex-wrap">
              {splitText(line).map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{
                    delay: lineIndex * 0.8 + charIndex * 0.05, // Slower line timing
                    type: "spring",
                    duration: 0.6
                  }}
                  className="inline-block"
                  style={{
                    transform: `scale(${1 + scrollProgress * 1.5})`, // Zoom IN
                    opacity: 1 - scrollProgress * 1.5
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          ))}
        </h2>

        <p className="text-lg text-gray-600 flex justify-center flex-wrap">
          {splitText(subtext).map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.6 + index * 0.02 }} // After all text lines
              className="inline-block"
              style={{
                transform: `scale(${1 + scrollProgress * 0.8})`, // Zoom IN
                opacity: 1 - scrollProgress * 1.2
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
      </div>

      {/* Cards Section */}
      <div ref={cardsRef} className="flex justify-center items-center relative pt-8 px-4">
        <div className="relative w-48 h-96 sm:w-64 sm:h-[400px] md:w-[250px] md:h-[500px]">
          {/* Main Video Card - Appears after first line */}
          <motion.div
            className="absolute rounded-[30px] overflow-hidden w-full h-full left-0 right-0 m-auto z-20"
            style={{ top: "-5%" }}
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ 
              delay: 1.0, // After first line completes
              duration: 0.8, 
              ease: "backOut" 
            }}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ 
                opacity: 1 - scrollProgress * 1.2,
                transform: `scale(${1 - scrollProgress * 0.6}) translateY(${scrollProgress * 100}px)`
              }}
            />
          </motion.div>

          {/* Left Card - Same delay as right card */}
          <motion.div
            className="absolute rounded-[30px] overflow-hidden hidden md:block bg-[#00b050] w-full h-full z-10"
            initial={{ rotate: 0, scale: 0, opacity: 0, x: 0 }}
            animate={{ rotate: -20, scale: 1, opacity: 0.7, x: -200, y: '5%' }}
            transition={{ 
              delay: 2.0, // Same delay as right card
              duration: 1, 
              ease: "easeOut" 
            }}
            style={{
              opacity: 0.7 - scrollProgress * 0.7,
              transform: `rotate(-20deg) scale(${1 - scrollProgress * 0.8}) translateX(-200px) translateY(5%)`
            }}
          >
            <img src={image1} alt="Green Card" className="w-full h-full object-cover object-top" />
          </motion.div>

          {/* Right Card - Same delay as left card */}
          <motion.div
            className="absolute rounded-[30px] overflow-hidden hidden md:block bg-[#4dd0e1] w-full h-full z-10"
            initial={{ rotate: 0, scale: 0, opacity: 0, x: 0 }}
            animate={{ rotate: 20, scale: 1, opacity: 0.7, x: 200, y: '5%' }}
            transition={{ 
              delay: 2.0, // Same delay as left card - NOW BOTH APPEAR TOGETHER
              duration: 1, 
              ease: "easeOut" 
            }}
            style={{
              opacity: 0.7 - scrollProgress * 0.7,
              transform: `rotate(20deg) scale(${1 - scrollProgress * 0.8}) translateX(200px) translateY(5%)`
            }}
          >
            <img src={image2} alt="Sky Blue Card" className="w-full h-full object-cover object-top" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Indicator (Optional - for debugging) */}
      {/* <div className="fixed top-4 right-4 bg-black text-white p-2 rounded z-50">
        Scroll: {Math.round(scrollProgress * 100)}%
      </div> */}
    </section>
  );
};

export default HeroSection;