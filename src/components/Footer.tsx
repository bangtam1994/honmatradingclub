import "@fortawesome/fontawesome-free/css/all.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Typewriter from "typewriter-effect";
import houseMountainsImage from "../assets/sky_cloud.jpg";
import {
  DISCORD_URL,
  EMAIL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  YOUTUBE_URL,
} from "@/utils/personalInfo";
import {
  faYoutube,
  faTelegram,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="relative text-black bg-white h-[60rem] w-full mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[8%] w-full"></div>

      <LazyLoadImage
        src={houseMountainsImage}
        className="w-full h-full object-cover"
      />

      <div className="absolute top-[16%] md:top-[30%] left-1/2 transform -translate-x-1/2 text-center px-6">
        <h1 className="text-2xl font-semibold mb-4">
          <Typewriter
            options={{
              strings: ["Ta liberté financière commence ici"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 10,
            }}
          />
        </h1>
        <p className="text-lg mb-6 w-[100%] md:w-[60%] m-auto">
          Ma mission est de vous accompagner dans votre évolution à la fois en
          tant que trader expérimenté et armé, mais aussi dans votre mindset et
          approche autour de la liberté financière. Vivez cette aventure avec
          moi, et avec Honma !
        </p>
        <hr className="border-black w-9/12 m-auto" />

        <div className="flex justify-evenly items-center text-lg mt-3">
          <a href={`mailto:${EMAIL}`} className="text-right">
            {EMAIL}
          </a>
        </div>
      </div>

      <footer className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center  mt-20">
        <div className="container mx-auto text-sm text-black">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Honma Trading Club. All rights
            reserved.
          </p>
          <div className="mt-3 flex justify-center space-x-4">
            <button
              className="text-primary"
              onClick={() => window.open(YOUTUBE_URL)}
            >
              <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
            </button>
            <button
              className="text-primary"
              onClick={() => window.open(DISCORD_URL)}
            >
              <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
            </button>
            <button
              className="text-primary"
              onClick={() => window.open(TELEGRAM_URL)}
            >
              <FontAwesomeIcon icon={faTelegram} className="w-6 h-6" />
            </button>
            <button
              className="text-primary"
              onClick={() => window.open(INSTAGRAM_URL)}
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6">
            <Link
              to="/terms-of-service"
              className="text-sm  hover:text-primary"
            >
              Conditions Générales
            </Link>
          </div>
          <div className="mt-1">
            <Link to="/privacy-policy" className="text-sm  hover:text-primary">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
