import React from "react";
import { EMAIL } from "@/utils/personalInfo";

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto py-4 px-4 md:px-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Conditions Générales
        </h1>

        <h3 className="text-2xl font-semibold mb-2">1. Introduction</h3>
        <p className="mb-4">
          Bienvenue sur Honma Trading Club. Les présentes Conditions Générales
          régissent votre utilisation de nos services de formation en trading.
          En accédant à notre site et en utilisant nos services, vous acceptez
          ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas
          utiliser notre site.
        </p>

        <h3 className="text-2xl font-semibold mb-2">2. Services Proposés</h3>
        <p className="mb-4">
          Nous offrons trois types de formations en trading :
          <ul className="list-disc pl-5">
            <li>
              <strong>Formation HTC</strong> : Formation complète de trading
              pour tous niveaux.
            </li>
            <li>
              <strong>Le Club Privé</strong> : Formation HTC + Accès à un
              discord privé avec lives exclusives et des échanges privés.
            </li>
            <li>
              <strong>Mentorat HTC</strong> : Accès à la formation HTC + Le Club
              Privé + Mentorat personnalisé 1-to-1.
            </li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold mb-2">
          3. Inscription et Paiement
        </h3>
        <p className="mb-4">
          <strong>Inscription</strong> : Pour vous inscrire à nos formations,
          vous devez remplir le formulaire d'inscription et effectuer le
          paiement selon le type de formation choisi.
          <br />
          <strong>Paiement</strong> : Les paiements peuvent être effectués via
          les méthodes disponibles sur notre site. Les frais sont non
          remboursables, sauf indication contraire.
        </p>

        <h3 className="text-2xl font-semibold mb-2">4. Accès aux Contenus</h3>
        <p className="mb-4">
          <strong>Basic</strong> : Vous recevrez les signaux de trading via un
          canal Telegram. L'accès est valable tant que vous êtes abonné.
          <br />
          <strong>Premium</strong> : Vous aurez accès aux sessions de coaching
          en direct et aux enregistrements des sessions. L'accès est limité à la
          durée de votre abonnement.
          <br />
          <strong>Ultimate</strong> : Vous bénéficierez de sessions de mentorat
          1-to-1. L'accès aux sessions et au contenu est limité à la durée de
          votre abonnement.
        </p>

        <h3 className="text-2xl font-semibold mb-2">
          5. Utilisation des Services
        </h3>
        <p className="mb-4">
          <strong>Responsabilités</strong> : Vous êtes responsable de
          l'utilisation de vos informations de connexion et devez veiller à ce
          que votre compte ne soit pas utilisé par des tiers non autorisés.
          <br />
          <strong>Comportement</strong> : Vous devez respecter les règles de
          conduite lors de l'utilisation de nos services et éviter tout
          comportement inapproprié ou illégal.
        </p>

        <h3 className="text-2xl font-semibold mb-2">
          6. Propriété Intellectuelle
        </h3>
        <p className="mb-4">
          Tout le contenu disponible sur notre site, y compris les formations,
          les signaux de trading, et les documents associés, est protégé par des
          droits de propriété intellectuelle. Vous ne pouvez pas reproduire,
          distribuer ou utiliser ce contenu sans notre autorisation préalable.
        </p>

        <h3 className="text-2xl font-semibold mb-2">
          7. Limitation de Responsabilité
        </h3>
        <p className="mb-4">
          Nos formations sont fournies à titre d'information et d'éducation. Les
          performances passées ne garantissent pas les résultats futurs. Nous ne
          sommes pas responsables des pertes financières ou des dommages
          résultant de l'utilisation de nos services.
        </p>

        <h3 className="text-2xl font-semibold mb-2">8. Confidentialité</h3>
        <p className="mb-4">
          Nous respectons votre vie privée et nous engageons à protéger vos
          informations personnelles conformément à notre{" "}
          <a href="/privacy-policy" className="text-blue-500">
            Politique de Confidentialité
          </a>
          . En utilisant notre site, vous acceptez notre politique en matière de
          protection des données.
        </p>

        <h3 className="text-2xl font-semibold mb-2">
          9. Modifications des Conditions
        </h3>
        <p className="mb-4">
          Nous nous réservons le droit de modifier ces Conditions Générales à
          tout moment. Les modifications seront publiées sur notre site. Votre
          utilisation continue de nos services après de telles modifications
          constitue votre acceptation des nouvelles conditions.
        </p>

        <h3 className="text-2xl font-semibold mb-2">10. Résiliation</h3>
        <p className="mb-4">
          Nous nous réservons le droit de résilier ou de suspendre votre accès à
          nos services en cas de violation de ces conditions ou de comportement
          inapproprié.
        </p>

        <h3 className="text-2xl font-semibold mb-2">11. Contact</h3>
        <p className="mb-4">
          Pour toute question concernant ces Conditions Générales ou nos
          services, veuillez nous contacter à :{" "}
          <a href={`mailto:${EMAIL}`} className="text-blue-500">
            {EMAIL}{" "}
          </a>{" "}
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

export default TermsOfService;
