import { Link } from "react-router-dom";
import Logo from "../assets/logo_round.png";
import DrawerMenu from "./DrawerMenu";

export default function Header() {
  return (
    <header className="flex justify-between p-[60px]">
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
        <Link to="/about-honma">
          <span className="text-xl font-[500] hover:text-[#d3d3d3] transition-colors duration-300 cursor-pointer">
            A PROPOS
          </span>
        </Link>
      </nav>

      <div className="block md:hidden">
        <DrawerMenu />
      </div>
    </header>
  );
}
