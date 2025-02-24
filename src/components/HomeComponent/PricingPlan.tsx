import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import theme from "../../theme/theme";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, CardContent } from "@/components/ui/card";

import { plans, PlanType } from "@/utils/plans";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionWrapper from "@/components/MotionWrapper";

const PricingPlans: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  return (
    <MotionWrapper>
      <div
        ref={ref}
        id="pricing-section"
        className="relative w-full overflow-hidden py-16"
      >
        {/* Background Video */}
        <video
          src="https://cdn.pixabay.com/video/2021/10/06/91089-629483832_large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[15%] left-0 w-full object-cover z-[-1] bg-black"
        />

        {/* Section Title */}
        <div className="relative flex justify-center items-center mb-12">
          <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-full flex justify-center items-center">
            <i className="fas fa-arrow-down text-gray-400 text-2xl"></i>
          </div>
        </div>
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Les offres Honma</h2>
          <p className="mt-10 w-[70%] m-auto text-xl text-primary-light uppercase ">
            Combien vas-tu investir dans ton succès en tant que trader
            aujourd'hui ?
          </p>
        </div>
        <div className="flex justify-center p-6">
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
                    `w-full max-w-[400px] mx-auto px-6 py-10 rounded-2xl  transition-transform hover:-translate-y-2 border-none shadow-inner  duration-300 ease-out hover:scale-102 cursor-pointer`,
                    isClubPrivate
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-black"
                  )}
                >
                  <CardContent className="flex flex-col justify-between h-full">
                    <div>
                      {/* Plan Name */}
                      <div className="h-[250px] flex flex-col  justify-between">
                        <h3 className="text-2xl font-bold text-center">
                          {plan.name}
                        </h3>
                        {/* Price */}
                        {plan.monthlyPrice > 0 && (
                          <motion.div
                            initial={{ opacity: 0.3, scale: 0.9 }}
                            animate={{ opacity: 0.9, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-center mt-8"
                          >
                            <div className="flex items-baseline justify-center">
                              <span className="text-4xl font-bold">
                                {Number(plan.monthlyPrice).toFixed(
                                  plan.type !== PlanType.MENTORAT ? 2 : 0
                                )}
                                €
                              </span>
                            </div>
                          </motion.div>
                        )}

                        {/* Description */}
                        <p className="mt-8 text-center text-s[14px]">
                          {plan.description}
                        </p>
                        {/* Divider */}
                        <div
                          className={cn(
                            "w-full border-t mt-8",
                            isClubPrivate ? "border-white" : "border-gray-500"
                          )}
                        ></div>
                      </div>
                      {/* Features List */}
                      <div className="mt-8 space-y-2">
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

                    {/* CTA Button */}
                    <Button
                      className={cn(
                        "w-full mt-10 font-bold h-12",
                        isClubPrivate
                          ? "bg-white text-black"
                          : "bg-primary text-white"
                      )}
                      variant={"reserve"}
                      disabled={!plan.active}
                      onClick={handleClick}
                    >
                      {plan.type === PlanType.MENTORAT
                        ? "ME CONTACTER"
                        : "REJOINDRE"}
                    </Button>
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
