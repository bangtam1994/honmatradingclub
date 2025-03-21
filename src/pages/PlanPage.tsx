import { Button } from "@/components/ui/button";
import { Plan, plans, PlanType } from "@/utils/plans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { DISCORD_URL, MENTORSHIP_FORM } from "@/utils/personalInfo";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";
import MyCertification from "@/components/MyCertification";
import FAQPage from "@/components/FAQ";
import { useState, useEffect } from "react";
import TestimonialsBanner from "@/components/Testimonials";
import StripeCheckout from "@/components/StripeCheckout";

import { BlurFade } from "@/components/magicui/blur-fade";
interface PagePageInterface {
  plan: PlanType;
}

const PlanPage = ({ plan }: PagePageInterface) => {
  const [data, setData] = useState<Plan>();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const planData = plans.find((el) => el.type === plan);
    if (!planData) return;
    setData(planData);
    setPrice(planData?.monthlyPrice);
  }, [data, plan]);
  return !data ? (
    <div>No data found for this plan</div>
  ) : (
    <div className="bg-primary-darkmode ">
      <div className="m-auto pt-[60px] px-8 md:px-10 md:pt-[130px]  bg-primary-darkmode max-w-screen-2xl">
        <div className="flex justify-center  mx-auto">
          <motion.h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-700 bg-clip-text text-transparent text-center">
            {data.details?.title}
          </motion.h1>
        </div>
        <p className="text-lg md:text-2xl text-gray-400 mb-6 text-center mt-10">
          {data.details?.caption}
        </p>
        <MotionWrapper>
          <div className="py-16 md:px-6 m-auto">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">
              {/* Image à gauche */}
              <div className="md:w-1/2 mb-8 md:mb-0 ">
                <div
                  className="bg-[#1e173c] rounded-[20px] p-[15px] md:p-[25px] "
                  style={{
                    boxShadow:
                      "-2px -6px 16px #933aff30, inset 0 0 12px #898ca53d",
                  }}
                >
                  <img
                    src={data.details?.picture}
                    alt="Mentor"
                    className="w-full min-w-[300px] rounded-[10px]"
                  />
                </div>
              </div>

              {/* Détails à droite */}
              <div className="md:w-1/2  text-left">
                {/* Liste des points */}
                {data.features.map((feature, index) => (
                  <BlurFade delay={0.3 + index * 0.5} inView>
                    <div
                      key={index}
                      className={`flex items-center  gap-3  text-gray-200 leading-10 text-[14px] md:text-[22px] md:mb-4`}
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={`w-[20px] h-[20px] mr-2  text-primary `}
                      />
                      {feature}
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
          {/* Bouton / STRIPE CHECKOUT */}
          <div className="flex flex-col justify-center  mt-10 ">
            {data.type === PlanType.MENTORAT ? (
              <Button
                onClick={() => {
                  if (data.type === PlanType.FORMATION_HTC) {
                    window.open(DISCORD_URL);
                  } else {
                    window.open(MENTORSHIP_FORM);
                  }
                }}
                className="px-8 py-8 bg-primary text-white text-xl font-semibold shadow-lg hover:bg-primary-dark transition-all w-fit m-auto mb-10"
                variant={"reserve"}
              >
                Rejoindre
              </Button>
            ) : (
              <>
                <motion.h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                  Rejoignez {data.details?.title}
                </motion.h2>{" "}
                <StripeCheckout
                  price={Number(price)}
                  priceId={data.priceId}
                  product={data.type}
                />
              </>
            )}
          </div>
        </MotionWrapper>
      </div>

      <div className="w-full bg-gray-700 bg-opacity-10 p-8 my-20">
        <MotionWrapper className="text-center text-gray-200 text-2xl md:text-3xl italic my-10">
          "Il n'y a pas de vent favorable à celui qui ne sait pas où il va."
          <br />
          <span className="text-gray-500 font-bold text-h6">Sénèque</span>
        </MotionWrapper>
      </div>

      <MyCertification />
      <TestimonialsBanner />
      <MotionWrapper>
        <FAQPage data={data.faq} isHomepage={false} />
      </MotionWrapper>
    </div>
  );
};

export default PlanPage;
