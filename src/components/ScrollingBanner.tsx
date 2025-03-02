import React from "react";
import telegramImage from "../assets/partners_banner/telegram.png";
import youtubeImage from "../assets/partners_banner/youtube.png";
import tradingViewImage from "../assets/partners_banner/tradingview.svg";
import ftmoImage from "../assets/partners_banner/ftmo.png";
import alphacapital from "../assets/partners_banner/alphacapital.png";
import vantageImage from "../assets/partners_banner/vantage.png";
import metatrader from "../assets/partners_banner/metatrader4.png";
import { TELEGRAM_URL, YOUTUBE_URL } from "@/utils/personalInfo";

const bannerItems = [
  {
    text: "Telegram",
    image: telegramImage,
    link: TELEGRAM_URL,
  },
  {
    text: "YouTube",
    image: youtubeImage,
    link: YOUTUBE_URL,
  },
  {
    text: "TradingView",
    image: tradingViewImage,
    link: "https://tradingview.com",
  },
  { text: "FTMO", image: ftmoImage, link: "https://ftmo.com/fr/" },
  {
    text: "Alpha",
    image: alphacapital,
    link: "https://app.alphacapitalgroup.uk/",
  },
  {
    text: "Vantage",
    image: vantageImage,
    link: "https://www.vantagemarkets.com/fr/",
  },
  {
    text: "MetaTrader",
    image: metatrader,
    link: "https://www.metatrader4.com/fr",
  },
];

const ScrollingBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-t border-gray-300 bg-white">
      <div className="flex whitespace-nowrap animate-scroll gap-10">
        {bannerItems.concat(bannerItems).map((item, index) => (
          <div key={index} className="flex items-center mx-3 ">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.text}
                className="p-1 h-[70px] object-contain max-w-none"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
