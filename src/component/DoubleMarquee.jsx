import { useState, useEffect } from "react";
import zingbus from "../assets/brandlogos/zingbus.avif";
import dominos from "../assets/brandlogos/Dominos.avif";
import bookmyshow from "../assets/brandlogos/bookmyshow.avif";
import gullak from "../assets/brandlogos/gullak.avif";
import snitch from "../assets/brandlogos/uber.avif";
import talkingsox from "../assets/brandlogos/tsox.avif";
import cleo from "../assets/brandlogos/cleartrip.avif";

const brands = [
  { src: zingbus, name: "Zingbus", color: "#E6F7FF" },
  { src: dominos, name: "Domino's", color: "#FFF0F6" },
  { src: bookmyshow, name: "BookMyShow", color: "#F9F0FF" },
  { src: gullak, name: "Gullak", color: "#F6FFED" },
  { src: snitch, name: "Snitch", color: "#FFFBE6" },
  { src: talkingsox, name: "Talking Sox", color: "#E8F5E9" },
  { src: cleo, name: "Cleo", color: "#F0F5FF" },
];

const DoubleMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Triple brands for mobile infinite scroll
  const mobileBrands = [...brands, ...brands, ...brands];
  const desktopBrands = [...brands, ...brands];

  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <h2 style={styles.title}>Exclusive Vouchers</h2>
        <p style={styles.subtitle}>from Premium Brands</p>
      </div>

      {/* Desktop/Tablet: 2 Marquees */}
      {!isMobile && (
        <>
          {/* Top Marquee - Left */}
          <div style={styles.marqueeWrapper}>
            <div style={styles.marqueeTrack("left")}>
              {desktopBrands.map((brand, i) => (
                <div key={`top-${i}`} className="marquee-card" style={{ ...styles.card(brand.color) }}>
                  <img src={brand.src} alt={brand.name} style={styles.img} />
                </div>
              ))}
            </div>
            {/* Fade overlays */}
            <div style={{...styles.fadeOverlay, ...styles.fadeLeft}}></div>
            <div style={{...styles.fadeOverlay, ...styles.fadeRight}}></div>
          </div>

          {/* Bottom Marquee - Right */}
          <div style={{ ...styles.marqueeWrapper, marginTop: "2rem" }}>
            <div style={styles.marqueeTrack("right")}>
              {desktopBrands.map((brand, i) => (
                <div key={`bottom-${i}`} className="marquee-card" style={{ ...styles.card(brand.color) }}>
                  <img src={brand.src} alt={brand.name} style={styles.img} />
                </div>
              ))}
            </div>
            {/* Fade overlays */}
            <div style={{...styles.fadeOverlay, ...styles.fadeLeft}}></div>
            <div style={{...styles.fadeOverlay, ...styles.fadeRight}}></div>
          </div>
        </>
      )}

      {/* Mobile: 3 Marquees with Slower Speed */}
      {isMobile && (
        <div style={{position: 'relative'}}>
          {/* First Marquee - Left */}
          <div style={{...styles.marqueeWrapper, overflow: 'visible', padding: '0'}}>
            <div style={styles.marqueeTrack("left", "mobile")}>
              {mobileBrands.map((brand, i) => (
                <div key={`mobile-top-${i}`} className="marquee-card mobile-card" style={{ ...styles.mobileCard(brand.color) }}>
                  <img src={brand.src} alt={brand.name} style={styles.mobileImg} />
                </div>
              ))}
            </div>
          </div>

          {/* Second Marquee - Right */}
          <div style={{ ...styles.marqueeWrapper, overflow: 'visible', padding: '0' }}>
            <div style={styles.marqueeTrack("right", "mobile")}>
              {mobileBrands.map((brand, i) => (
                <div key={`mobile-middle-${i}`} className="marquee-card mobile-card" style={{ ...styles.mobileCard(brand.color) }}>
                  <img src={brand.src} alt={brand.name} style={styles.mobileImg} />
                </div>
              ))}
            </div>
          </div>

          {/* Third Marquee - Left */}
          <div style={{ ...styles.marqueeWrapper, overflow: 'visible', padding: '0' }}>
            <div style={styles.marqueeTrack("left", "mobile")}>
              {mobileBrands.map((brand, i) => (
                <div key={`mobile-bottom-${i}`} className="marquee-card mobile-card" style={{ ...styles.mobileCard(brand.color) }}>
                  <img src={brand.src} alt={brand.name} style={styles.mobileImg} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Fade overlays - covering all three marquees */}
          <div style={{
            ...styles.fadeOverlay, 
            ...styles.fadeLeft,
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '80px'
          }}></div>
          <div style={{
            ...styles.fadeOverlay, 
            ...styles.fadeRight,
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '80px'
          }}></div>
        </div>
      )}

      {/* Style tag */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes mobileScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes mobileScrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .marquee-card {
          flex: 0 0 auto;
          box-sizing: border-box;
        }

        /* Desktop Cards */
        @media (min-width: 769px) {
          .marquee-card {
            flex: 0 0 20%;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .marquee-card {
            flex: 0 0 33.33%;
          }
        }

        /* Mobile Cards */
        .mobile-card {
          flex: 0 0 150px !important;
          margin-right: 15px;
        }

        @media (max-width: 480px) {
          .mobile-card {
            flex: 0 0 140px !important;
            margin-right: 12px;
          }
        }

        /* Mobile overflow fix */
        @media (max-width: 768px) {
          .marquee-wrapper-mobile {
            overflow: visible !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "4rem 1rem",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
  },
  heading: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#00c9a7",
    margin: 0,
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#111",
    marginTop: "0.5rem",
  },
  marqueeWrapper: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 20px",
    "@media (max-width: 768px)": {
      overflow: "visible",
      padding: "0",
    }
  },
  fadeOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100px",
    zIndex: 2,
    pointerEvents: "none",
  },
  fadeLeft: {
    left: 0,
    background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
  },
  fadeRight: {
    right: 0,
    background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
  },
  marqueeTrack: (direction, device = "desktop") => {
    // Mobile को slow करने के लिए 15s से 35s कर दिया
    const speed = device === "mobile" ? "35s" : "25s";
    const animation = device === "mobile" 
      ? `${direction === "left" ? "mobileScrollLeft" : "mobileScrollRight"} ${speed} linear infinite`
      : `${direction === "left" ? "scrollLeft" : "scrollRight"} ${speed} linear infinite`;
    
    return {
      display: "flex",
      gap: device === "mobile" ? "0" : "1.5rem",
      animation: animation,
      width: "fit-content",
    };
  },
  card: (bgColor) => ({
    height: "140px",
    width: "100%",
    backgroundColor: bgColor,
    borderRadius: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    transition: "transform 0.3s",
  }),
  mobileCard: (bgColor) => ({
    height: "120px",
    width: "100%",
    backgroundColor: bgColor,
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    boxShadow: "0 0 8px rgba(0,0,0,0.08)",
    transition: "transform 0.3s",
    minWidth: "140px",
  }),
  img: {
    maxHeight: "40px",
    width: "auto",
    objectFit: "contain",
  },
  mobileImg: {
    maxHeight: "50px",
    width: "auto",
    objectFit: "contain",
    maxWidth: "90px",
  },
};

export default DoubleMarquee;