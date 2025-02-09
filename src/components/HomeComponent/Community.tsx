import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import discord from "../../assets/discord.png";
import discordPhone from "../../assets/phone.png";
import MotionWrapper from "@/components/MotionWrapper";

export default function Community() {
  return (
    <MotionWrapper>
      <div
        id="info-section"
        className="m-10 text-white  px-6 lg:px-20 md:p-10"
        style={{}}
      >
        <div className="mx-auto flex flex-col  gap-8  items-center justify-between space-y-8 md:space-y-0 mb-16">
          <h1 className="text-[20px] font-bold mt-2 text-center">
            Tradez en
            <span className="text-[40px] text-primary font-bold  ml-4">
              communauté
            </span>
          </h1>
          <h3>
            HTC, c'est un vrai club. Pas de vendeur de rêves, pas de
            connaissances inutiles, que du savoir que je te partage en live sur
            mes réseaux.
          </h3>
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-center items-center">
          <LazyLoadImage
            effect="blur"
            src={discord}
            alt={"discord honma"}
            className="md:h-[450px] object-cover rounded-sm"
          />
          <LazyLoadImage
            effect="blur"
            src={discordPhone}
            alt={"discord phone honma"}
            className="md:h-[500px] object-cover rounded-sm"
          />
        </div>
        <div className="h-[400px] md:w-[700px] sm:w-full m-auto mt-[100px]">
          <iframe
            src="https://www.youtube.com/embed/QEIDA02VJkU?si=cRjxCdvdYzgSlmlX"
            className="w-full  h-[300px] md:h-[400px] border-none flex-1"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </MotionWrapper>
  );
}
