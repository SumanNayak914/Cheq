// src/components/FloatingCoin.jsx
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import coinss from "../assets/coinss.png";

const FloatingCoin = ({ className = "", style = {}, delay = 0 }) => {
  const controls = useAnimation();

  useEffect(() => {
    // Start initial animation, then begin looping
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }).then(() => {
      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    });
  }, [controls, delay]);

  return (
    <motion.img
      src={coinss}
      alt="coin"
      className={`absolute ${className}`}
      style={{ ...style, filter: "blur(5px)" }}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
    />
  );
};

export default FloatingCoin;
