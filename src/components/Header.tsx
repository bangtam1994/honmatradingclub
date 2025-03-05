import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_round.png";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      // Adjust this value based on your header height
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 h-[80px] md:h-[100px] px-6 md:px-20  md:my-5 left-0 w-full z-50 transition-all duration-500   ${
        isScrolled
          ? "md:my-0 backdrop-blur-md bg-white bg-opacity-5 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="h-full flex justify-between items-center ">
        <Link to="/" className="flex items-center ">
          <img
            src={Logo}
            alt="logo honma trading club"
            className="w-10 h-10 md:w-14 md:h-14 mr-4"
          />
          <h2 className="text-[18px] md:text-2xl font-[600] tracking-wider  hover:text-primary transition-colors duration-300 cursor-pointer">
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
      </div>
    </header>
  );
};

export default Header;
