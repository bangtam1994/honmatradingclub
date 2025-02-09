import { motion } from "framer-motion";
import Header from "../Header";
import ScrollDownArrow from "../ScrollDownArrow";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const subtitles = [
  "Notre stratégie : Liquidity Concept",
  "Honma Trading Club, en honneur au créateur des bougies japonaises, Honma Munehisa",
  "Un groupe d'entraide, de partage de connaissances et de fun 🚀",
];

export default function HeroSection() {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      const offsetTop =
        pricingSection.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSubtitleIndex(
        (prevIndex) => (prevIndex + 1) % subtitles.length
      );
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="hero">
      <Header />
      <div className="content">
        <div className="centeredText">
          <p className="text-[13px] md:text-[16px]">
            Une communauté de traders passionnés
          </p>
          <h1 className="text-[40px] md:text-[60px]">
            Rejoins la SMART TRADER FAMILY 🍥
          </h1>
          <h4 className="mt-4 text-h4 text-gray-300">
            <motion.span
              key={currentSubtitleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {subtitles[currentSubtitleIndex]}
            </motion.span>
          </h4>
        </div>
      </div>

      <div className="reserve-btn-container">
        <center>
          <Button variant={"reserve"} onClick={handleScrollToPricing}>
            Rejoins le club HTC
          </Button>
        </center>
      </div>
      <ScrollDownArrow />
    </div>
  );
}
