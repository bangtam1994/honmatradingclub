import Footer from "@/components/Footer";
import InspirationalMe from "@/components/HomeComponent/InspirationalMe";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StarParticlesComponent from "@/components/StarParticlesComponent";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Community from "../components/HomeComponent/Community";
import HeroSection from "../components/HomeComponent/HeroSection";
import PricingPlans from "../components/HomeComponent/PricingPlan";
import SMCStrategy from "../components/HomeComponent/SMCStrategy";
import YTWidget from "../components/HomeComponent/YTWidget";

function Home() {
  return (
    <>
      <LazyLoadComponent threshold={100}>
        <StarParticlesComponent />
        <HeroSection />
        <YTWidget />
        <Community />
        <PricingPlans />
        <SMCStrategy />
        <InspirationalMe />
        <Footer />
      </LazyLoadComponent>

      <ScrollToTopButton />
    </>
  );
}

export default Home;
