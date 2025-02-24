import Footer from "@/components/Footer";
import HeaderSecondary from "@/components/HeaderSecondary";
import mentorshipPicture from "../assets/mentorship.png";
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

interface PagePageInterface {
  plan: PlanType;
}

const PlanPage = ({ plan }: PagePageInterface) => {
  const [data, setData] = useState<Plan>();
  useEffect(() => {
    const planData = plans.find((el) => el.type === plan);
    if (!planData) return;
    setData(planData);
  }, [plan]);
  return !data ? (
    <div>No data found for this plan</div>
  ) : (
    <div className="">
      <HeaderSecondary />
      <div className="container m-auto mt-10 p-8">
        <div className="flex justify-center">
          <motion.h1 className="text-5xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-700 bg-clip-text text-transparent text-center">
            {data.details?.title}
          </motion.h1>
        </div>
        <p className="text-xl text-gray-400 mb-6 text-center mt-10">
          {data.details?.caption}
        </p>
        <MotionWrapper>
          <div className="py-16 px-6 m-auto">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">
              {/* Image à gauche */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={mentorshipPicture}
                  alt="Mentor"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Détails à droite */}
              <div className="md:w-1/2 text-center md:text-left">
                {/* Liste des points */}
                {data.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2  text-white leading-10 text-lg`}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className={`w-[20px] h-[20px] mr-2  text-primary `}
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Bouton  */}
          <div className="flex flex-col justify-center  mt-10 ">
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
          </div>
        </MotionWrapper>
      </div>

      <MotionWrapper>
        "Il n'y a pas de vent favorable à celui qui ne sait pas où il va."
        Sénèque
      </MotionWrapper>

      <MyCertification />

      <MotionWrapper>
        <FAQPage data={data.faq} isHomepage={false} />
      </MotionWrapper>
      <MotionWrapper>
        <Footer />
      </MotionWrapper>
    </div>
  );
};

export default PlanPage;
