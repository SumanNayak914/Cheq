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
  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <h2 style={styles.title}>Exclusive Vouchers</h2>
        <p style={styles.subtitle}>from Premium Brands</p>
      </div>

      {/* Top Marquee */}
      <div style={styles.marqueeWrapper}>
        <div style={styles.marqueeTrack("left")}>
          {[...brands, ...brands].map((brand, i) => (
            <div key={`top-${i}`} className="marquee-card" style={{ ...styles.card(brand.color) }}>
              <img src={brand.src} alt={brand.name} style={styles.img} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div style={{ ...styles.marqueeWrapper, marginTop: "2rem" }}>
        <div style={styles.marqueeTrack("right")}>
          {[...brands, ...brands].map((brand, i) => (
            <div key={`bottom-${i}`} className="marquee-card" style={{ ...styles.card(brand.color) }}>
              <img src={brand.src} alt={brand.name} style={styles.img} />
            </div>
          ))}
        </div>
      </div>

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

        .marquee-card {
          flex: 0 0 20%;
          box-sizing: border-box;
        }

        @media (max-width: 1024px) {
          .marquee-card {
            flex: 0 0 33.33%;
          }
        }

        @media (max-width: 768px) {
          .marquee-card {
            flex: 0 0 50%;
          }
        }

        @media (max-width: 480px) {
          .marquee-card {
            flex: 0 0 100%;
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
  },
  marqueeTrack: (direction) => ({
    display: "flex",
    gap: "1.5rem",
    animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} 25s linear infinite`,
    width: "fit-content",
  }),
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
  img: {
    maxHeight: "40px",
    width: "auto",
    objectFit: "contain",
  },
};

export default DoubleMarquee;
