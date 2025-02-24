import { LazyLoadImage } from "react-lazy-load-image-component";
import candleImage from "../../assets/candle.png";
import { Button } from "../ui/button";
import phoneBackground from "../../assets/hero_section_background.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MotionWrapper from "@/components/MotionWrapper";
import { motion } from "framer-motion";

export default function SMCStrategy() {
  return (
    <div className="relative bg-[#0B0E15] text-white mt-40">
      <div
        className="min-h-[30vh] bg-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${phoneBackground})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>
      <div
        id="content"
        className="flex flex-col justify-center items-center bg-black w-[full]"
      >
        <div className="flex flex-col md:flex-row  justify-between items-center w-full px-8 container h gap-10 my-28">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative mb-4 flex justify-center items-center">
              <LazyLoadImage
                effect="blur"
                src={candleImage}
                className="sm:h-[300px] md:h-[400px] sm:w-[400px] md:w-[650px]"
                alt={"candle"}
              />
              <div
                className="absolute w-[15px] h-[15px] bg-[#3652d9] rounded-full top-[65%] right-[39%] 
               animate-pulse-blue transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              >
                <span className="absolute top-[2px] left-[-350%] text-white text-[0.70rem]">
                  ACHAT
                </span>
              </div>

              <div
                className="absolute w-[15px] h-[15px] bg-[#d93636] rounded-full top-[15%] right-[35%] 
               animate-pulse-red transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              >
                <span className="absolute top-[0px] left-[-270%] text-white text-[0.7rem]">
                  VENTE
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center ">
            <MotionWrapper>
              <div className="flex justifu-center items-center mb-7 text-center md:text-left ">
                <h2
                  id="scroll_location"
                  className="text-2xl border-l-4 border-primary pl-6"
                >
                  Découvre ma stratégie avec le
                </h2>

                <motion.h2 className="text-center text-5xl leading-normal font-semibold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent ml-2">
                  {" "}
                  trading SMC
                </motion.h2>
              </div>

              <p className="mb-10 text-md text-center md:text-left">
                Le Smart Money Concept (SMC) aide les traders à identifier les
                zones clés d’achat et de vente sur le marché. Grâce à cette
                approche, il est possible de suivre les mouvements des grandes
                institutions financières et de mieux anticiper les tendances.{" "}
                <br />
                <br />
                Une analyse graphique précise permet d'optimiser les points
                d’entrée et de sortie des trades.
              </p>
            </MotionWrapper>
            <Button
              variant="outline"
              className="rounded-full w-fit"
              onClick={() =>
                window.open("https://www.youtube.com/@HonmaTradingClub")
              }
            >
              Mes vidéos SMC
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
