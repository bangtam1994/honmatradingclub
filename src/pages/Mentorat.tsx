import React, { useState } from "react";

import Footer from "@/components/Footer";
import HeaderSecondary from "@/components/HeaderSecondary";
import mentorshipPicture from "../assets/mentorship.png";
import { Button } from "@/components/ui/button";
import Calendly from "@/components/Calendly";

const Mentorship = () => {
  const [openCalendly, setOpenCalendly] = useState(false);
  return (
    <div>
      <HeaderSecondary />
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
            <h2 className="text-3xl font-bold text-primary mb-4">
              Offre de Mentorat
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Notre programme de mentorat est notre offre la plus premium. Vous
              serez accompagné personnellement pour atteindre vos objectifs en
              trading, en suivant une méthodologie éprouvée.
            </p>

            {/* Liste des points */}
            <ul className="list-disc pl-5 space-y-3 text-lg text-white mb-6">
              <li>
                Accompagnement personnalisé tout au long de votre parcours.
              </li>
              <li>Analyse détaillée de vos performances de trading.</li>
              <li>Sessions hebdomadaires pour améliorer vos compétences.</li>
              <li>Accès exclusif à des ressources premium.</li>
              <li>Support direct via une plateforme dédiée.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bouton Calendly */}
      <div className="flex flex-col justify-center  gap-12 ">
        <Button
          onClick={() => {
            window.location.hash = "calendly";

            setOpenCalendly(true);
          }}
          className="px-8 py-8 bg-primary text-white text-xl font-semibold shadow-lg hover:bg-primary-dark transition-all w-fit m-auto"
          variant={"reserve"}
        >
          Réservez votre appel
        </Button>

        {openCalendly && (
          <div id="calendly" className="mt-8">
            <Calendly url="https://calendly.com/honmatradingclub/30min" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Mentorship;
