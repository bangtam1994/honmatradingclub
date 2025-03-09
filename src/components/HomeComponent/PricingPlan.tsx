import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, CardContent } from "@/components/ui/card";

import { plans, PlanType } from "@/utils/plans";
import { cn } from "@/lib/utils";
import MotionWrapper from "@/components/MotionWrapper";

import { FlipText } from "../magicui/flip-text";
import { TextAnimate } from "../magicui/text-animate";
import { ShimmerButton } from "../magicui/shimmer-button";

const PricingPlans: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  return (
    <MotionWrapper>
      <div
        ref={ref}
        id="pricing-section"
        className="relative w-full overflow-hidden py-16 "
      >
        {/* Background Video */}
        <video
          src="https://cdn.pixabay.com/video/2021/10/06/91089-629483832_large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[12%] md:top-[20%] left-0 w-full  h-[40%] md:h-[90%] object-cover z-[-1]"
        />

        {/* Section Title */}
        <div className="relative flex justify-center items-center mb-12">
          <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-full flex justify-center items-center">
            <i className="fas fa-arrow-down text-gray-400 text-2xl"></i>
          </div>
        </div>
        <div className="text-center text-white">
          {/* <h2 className="text-h2 font-bold">Les offres Honma</h2> */}
          <FlipText className="text-2xl md:text-h2 font-bold mb-10" as="h2">
            Les offres Honma
          </FlipText>

          <TextAnimate
            animation="blurInUp"
            by="character"
            delay={2}
            className="w-[90%] m-auto text-[18px] md:text-[30px]  text-primary-light "
          >
            Combien vas-tu investir dans ton succès
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="character"
            delay={2}
            className="w-[90%] m-auto text-[18px] md:text-[30px]  text-primary-light "
          >
            en tant que trader aujourd'hui ?
          </TextAnimate>
        </div>
        <div className="flex justify-center p-6 ">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 justify-center">
            {plans.map((plan) => {
              const isClubPrivate = plan.type === PlanType.LE_CLUB_PRIVE;
              const handleClick = () => {
                // if (plan.type === PlanType.FORMATION_HTC) {
                //   window.open(DISCORD_URL);
                // } else {
                navigate(`/${plan.type}`);
                // }
              };
              return (
                <Card
                  key={plan.name}
                  onClick={handleClick}
                  className={cn(
                    `w-full max-w-[400px] mx-auto px-4 md:px-6 md:py-10 py-6 rounded-2xl  transition-transform hover:-translate-y-2 border-none shadow-inner  duration-300 ease-out hover:scale-102 cursor-pointer`,
                    isClubPrivate
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-black"
                  )}
                  style={
                    isClubPrivate
                      ? {
                          boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.9",
                        }
                      : {}
                  }
                >
                  <CardContent className="flex flex-col justify-between h-full">
                    <div>
                      {/* Plan Name */}
                      <div className="h-[180px] flex flex-col  justify-between">
                        <h3 className="mt-2 text-[26px] md:text-4xl font-bold text-center">
                          {plan.name}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-center text-[18px]">
                          {plan.description}
                        </p>
                        {/* Divider */}
                        <div
                          className={cn(
                            "w-full border-t mt-2 ",
                            isClubPrivate ? "border-white" : "border-gray-500"
                          )}
                        ></div>
                      </div>
                      {/* Features List */}
                      <div className="mt-8  space-y-1 md:space-y-3">
                        {plan.features.map((feature, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-2  ${
                              isClubPrivate ? "text-white" : "text-black"
                            }`}
                          >
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className={`w-[20px] h-[20px] mr-2 ${
                                isClubPrivate ? "text-white" : "text-primary"
                              }`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Price */}
                    <div className="mt-8 md:mt-9">
                      {" "}
                      {plan.monthlyPrice > 0 && (
                        <motion.div
                          initial={{ opacity: 0.3, scale: 0.9 }}
                          animate={{ opacity: 0.9, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className=""
                        >
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold">
                              {Number(plan.monthlyPrice).toFixed(
                                plan.type !== PlanType.MENTORAT ? 2 : 0
                              )}
                              €
                            </span>
                            <span> /mois</span>
                          </div>
                        </motion.div>
                      )}
                      {/* CTA Button */}
                      <ShimmerButton
                        className={cn(
                          "w-full mt-10 font-bold h-14 shadow-2xl hover:scale-105 transition-transform duration-300 ease-out",
                          isClubPrivate ? " text-black" : " text-white"
                        )}
                        disabled={!plan.active}
                        onClick={handleClick}
                        background={isClubPrivate ? "white" : "#7c3aed"}
                        shimmerColor={isClubPrivate ? "#7c3aed" : "white"}
                        shimmerSize={"0.1em"}
                      >
                        {plan.type === PlanType.MENTORAT
                          ? "ME CONTACTER"
                          : "REJOINDRE"}
                      </ShimmerButton>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default PricingPlans;
