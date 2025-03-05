import "react-lazy-load-image-component/src/effects/blur.css";
import discordPhone from "../../assets/phone_mockup.png";
import MotionWrapper from "@/components/MotionWrapper";
import { DISCORD_RECORD } from "@/utils/personalInfo";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <MotionWrapper>
      <div
        id="info-section"
        className="my-10 md:my-20 text-white  px-6 lg:px-20 md:p-10 mb-"
      >
        <div className="mx-auto flex flex-col  gap-8  items-center justify-between space-y-8 md:space-y-0 mb-16">
          <h1 className="text-[25px] md:text-[35px] font-bold mt-2 flex text-center items-end">
            Tradez en
            <motion.span className="text-center  font-semibold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent ml-4">
              communauté
            </motion.span>
          </h1>
          <h3 className="text-center text-h6 md:text-h4 text-gray-300">
            HTC, c'est un vrai club. Pas de vendeur de rêves, que du savoir que
            je te partage en live sur mes réseaux.
          </h3>
        </div>
        <div className="flex md:flex-row flex-col gap-20 justify-center items-center">
          <div className="relative">
            {/* iPhone Mockup Image */}
            <img
              src={discordPhone}
              alt="iPhone Mockup"
              className="w-full z-20 h-[600px]"
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-3 left-4 w-[91%] h-[96%] object-cover  z-10 rounded-[35px]"
            >
              <source src={DISCORD_RECORD} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* YOUTUBe  */}
        </div>
      </div>
    </MotionWrapper>
  );
}
