import React from "react";
import { EMAIL } from "@/utils/personalInfo";

const PrivaryPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-4 px-4 md:px-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Politique de Confidentialité
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          1. Introduction
        </h3>
        <p className="mb-4 text-sm md:text-base">
          Bienvenue sur Honma Trading Club. La protection de vos informations
          personnelles est importante pour nous. Cette Politique de
          Confidentialité explique comment nous collectons, utilisons, stockons
          et protégeons vos données personnelles lorsque vous utilisez notre
          site et nos services de formation en trading.
        </p>

        <h3 className="text-2xl font-semibold mb-6">
          2. Informations Collectées
        </h3>
        <p className="mb-4">
          Nous recueillons des informations que vous nous fournissez
          directement, comme votre nom, adresse e-mail, et autres informations
          de contact lorsque vous vous inscrivez à nos formations ou que vous
          nous contactez. Nous collectons également des informations
          automatiquement lorsque vous utilisez notre site, telles que les
          adresses IP, les informations sur le navigateur et les pages visitées.
        </p>

        <h3 className="text-2xl font-semibold mb-6">
          3. Utilisation des Informations
        </h3>
        <p className="mb-4">
          Nous utilisons vos informations pour vous fournir nos services,
          améliorer notre site, communiquer avec vous, et vous envoyer des
          informations importantes concernant vos formations. Nous pouvons
          également utiliser vos données pour vous envoyer des offres et des
          mises à jour que vous pouvez choisir de recevoir.
        </p>

        <h3 className="text-2xl font-semibold mb-6">
          4. Partage des Informations
        </h3>
        <p className="mb-4">
          Nous ne partageons vos informations personnelles avec des tiers que
          dans les cas suivants :
          <ul className="list-disc pl-5">
            <li>Pour respecter les obligations légales ou réglementaires.</li>
            <li>Pour protéger et défendre nos droits ou notre propriété.</li>
            <li>
              Avec des fournisseurs de services tiers qui nous aident à gérer
              notre site et nos services, sous réserve de leur accord de
              confidentialité.
            </li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold mb-6">5. Sécurité des Données</h3>
        <p className="mb-4">
          Nous mettons en œuvre des mesures de sécurité appropriées pour
          protéger vos informations personnelles contre la perte, l'abus et
          l'accès non autorisé. Cependant, aucune méthode de transmission sur
          Internet ou de stockage électronique n'est complètement sécurisée, et
          nous ne pouvons garantir une sécurité absolue.
        </p>

        <h3 className="text-2xl font-semibold mb-6">6. Vos Droits</h3>
        <p className="mb-4">
          Vous avez le droit d'accéder à vos informations personnelles, de les
          corriger ou de les supprimer. Vous pouvez également vous opposer au
          traitement de vos données ou demander la limitation de leur
          utilisation. Pour exercer ces droits, veuillez nous contacter à
          l'adresse e-mail fournie ci-dessous.
        </p>

        <h3 className="text-2xl font-semibold mb-6">
          7. Modifications de la Politique
        </h3>
        <p className="mb-4">
          Nous pouvons mettre à jour cette Politique de Confidentialité de temps
          à autre. Les modifications seront publiées sur cette page avec une
          date de mise à jour. Nous vous encourageons à consulter régulièrement
          cette politique pour être informé de toute modification.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-4">8. Contact</h3>
        <p className="mb-4 text-sm md:text-base">
          Si vous avez des questions ou des préoccupations concernant cette
          Politique de Confidentialité, veuillez nous contacter à :{" "}
          <a href={`mailto:${EMAIL}`} className="text-blue-500">
            {EMAIL}{" "}
          </a>
          ou via notre formulaire de contact sur{" "}
          <a href="/" className="text-blue-500">
            notre site
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivaryPolicy;
