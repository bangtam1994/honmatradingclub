import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <Button
        className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg fixed bottom-10 right-11 z-50 transition-colors hover:bg-primary-hover"
        onClick={scrollToTop}
      >
        ↑
      </Button>
    )
  );
};

export default ScrollToTopButton;
