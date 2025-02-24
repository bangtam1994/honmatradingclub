import { motion } from "framer-motion";
import Header from "../Header";
import ScrollDownArrow from "../ScrollDownArrow";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import PhonePic from "../../assets/phone_hero.svg";

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
      <div className="h-[90vh] p-10 md:ml-20 flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-[50px]">
        <div className="flex flex-col text-center md:text-left  pt-[10%] ">
          {/* <p className="text-[13px] md:text-[16px]">
            Une communauté de traders passionnés
          </p> */}
          <h2 className="text-[20px] md:text-[30px]">
            Rejoins la <br />
          </h2>
          <h1 className="text-[40px] md:text-[60px]">SMART TRADER FAMILY 🍥</h1>
          <h4 className="mt-6 text-h6 md:text-h4 text-gray-300">
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

        <motion.img
          src={PhonePic}
          alt="Phone"
          className="w-[300px] md:w-[700px] h-[700px] md:mr-28"
          animate={{
            y: [0, -10, 0], // Moves up and down
            x: [-5, 5, -5], // Moves left and right slightly
            rotateY: [-10, 10, -10], // Simulates inward/outward 3D turn
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
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
