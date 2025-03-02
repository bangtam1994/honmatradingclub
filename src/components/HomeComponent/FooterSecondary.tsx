import "@fortawesome/fontawesome-free/css/all.min.css";
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

export default function FooterSecondary() {
  return (
    <div className="relative h-[20rem] w-full mt-20 text-gray-200">
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-center px-6">
        <hr className="border-black w-9/12 m-auto" />

        <div className="flex justify-evenly items-center text-lg mt-3">
          <a href={`mailto:${EMAIL}`} className="text-right">
            {EMAIL}
          </a>
        </div>
      </div>

      <footer className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center  mt-auto">
        <div className="container mx-auto text-sm">
          <p className="text-sm">
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
            <a href="/terms-of-service" className="text-sm  hover:text-primary">
              Conditions Générales
            </a>
          </div>
          <div className="mt-1">
            <a href="/privacy-policy" className="text-sm  hover:text-primary">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
