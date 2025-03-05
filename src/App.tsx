import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutHonma from "./pages/AboutHonma";
import ScrollToTop from "./components/HomeComponent/ScrollToTop";
import PlanPage from "./pages/PlanPage";
import { PlanType } from "./utils/plans";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "sonner";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StripeStatusPage from "./pages/StripeStatusPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 4000,
          style: {
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
          },
        }}
      />
      {/* <Header /> */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/about-honma" element={<AboutHonma />} />
          <Route
            path={PlanType.FORMATION_HTC}
            element={<PlanPage plan={PlanType.FORMATION_HTC} />}
          />
          <Route
            path={PlanType.LE_CLUB_PRIVE}
            element={<PlanPage plan={PlanType.LE_CLUB_PRIVE} />}
          />
          <Route
            path={PlanType.MENTORAT}
            element={<PlanPage plan={PlanType.MENTORAT} />}
          />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/payment-status" element={<StripeStatusPage />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
