import Footer from "@/components/Footer";
import HeaderSecondary from "@/components/HeaderSecondary";
import VisionSection from "@/components/VisionSection";
import React from "react";
import { Link } from "react-router-dom";

const AboutHonma: React.FC = () => {
  return (
    <div>
      <HeaderSecondary />
      <div className="py-10 px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Section: Hero */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              À propos de Honma
            </h1>
            <p className="text-lg text-white max-w-4xl mx-auto">
              Honma est un club d'investissement axé sur l'éducation et
              l'accompagnement des investisseurs dans le monde du trading. Notre
              mission est de rendre le trading accessible à tous et de guider
              nos membres vers une gestion financière réussie et éclairée.
            </p>
          </section>

          {/* Section: Vision */}
          {/* <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-primary">
                Notre Vision
              </h2>
              <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
                Chez Honma, notre vision est de créer une communauté de traders
                passionnés et engagés, capable d'atteindre l'excellence dans
                leurs stratégies d'investissement tout en restant éthiques et
                responsables. Nous croyons en la puissance du savoir et du
                travail d'équipe.
              </p>
            </div>
            <div className="flex justify-center gap-10">
              <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-primary">
                  Formation Continue
                </h3>
                <p className="text-gray-500 mt-4">
                  Nous offrons des formations régulières et des ressources
                  pratiques pour que vous puissiez améliorer vos compétences en
                  trading, peu importe votre niveau.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-primary">
                  Communauté Solidaire
                </h3>
                <p className="text-gray-500 mt-4">
                  Rejoignez une communauté soudée où les traders échangent des
                  idées, des stratégies et des conseils dans un environnement
                  bienveillant.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-primary">
                  Objectifs Partagés
                </h3>
                <p className="text-gray-500 mt-4">
                  Nous mettons l'accent sur des objectifs d'investissement
                  communs et soutenons chaque membre dans ses projets financiers
                  personnels.
                </p>
              </div>
            </div>
          </section> */}
          <VisionSection />

          {/* Section: YT */}
          <div className="h-[400px] md:w-[700px] sm:w-full m-auto mt-[100px]">
            <iframe
              src="https://www.youtube.com/embed/Fje4bk6cvfg?si=XSudVYpj4NxsX-Qb"
              className="w-full  h-[300px] md:h-[400px] border-none flex-1"
              allowFullScreen
            ></iframe>
          </div>
          {/* Section: Call to Action */}
          <section className="text-center my-20">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Rejoignez-nous dès aujourd'hui !
            </h2>
            <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
              Faites partie d'une communauté en pleine croissance, prête à vous
              aider à atteindre vos objectifs financiers. Ensemble, nous pouvons
              faire évoluer vos compétences et atteindre de nouveaux sommets.
            </p>
            <Link
              to="/inscription"
              className="bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-primary-dark"
            >
              Inscrivez-vous maintenant
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutHonma;
