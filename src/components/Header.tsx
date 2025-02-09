import { Link } from "react-router-dom";
import Logo from "../assets/logo_round.png";
export default function Header() {
  return (
    <header>
      <Link to="/" className="flex items-center ">
        <img
          src={Logo}
          alt="logo honma trading club"
          className="w-10 h-10 md:w-14 md:h-14 mr-4"
        />
        <h2 className="text-[20px] md:text-2xl font-[600] tracking-wider  hover:text-primary transition-colors duration-300 cursor-pointer">
          HONMA TRADING CLUB
        </h2>
      </Link>
      <nav className="hidden md:block">
        <ul>
          <li>
            <Link to="/about-honma">
              <span className="text-xl font-[500]">A PROPOS</span>
            </Link>
          </li>
          {/* <li>
            <a href="/ebook">
              <span className="text-xl font-[500]">E-BOOK</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
