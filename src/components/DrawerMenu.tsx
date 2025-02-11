import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const DrawerMenu: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isDrawerOpen]);

  return (
    <div>
      <div className="lg:hidden">
        <Button onClick={toggleDrawer} variant="link">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </Button>
      </div>

      <div
        className={`fixed top-0 right-0 bg-primary text-white w-full z-[1000] h-full transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer} aria-label="Close Menu">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6">
          <Link to="/about-honma">
            <span className="text-xl font-[500]">A PROPOS</span>
          </Link>
          <Link to="/mentorship">
            <span className="text-xl font-[500]">Mentorat</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default DrawerMenu;
