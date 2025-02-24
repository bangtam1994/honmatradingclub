import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import AboutHonma from "./pages/AboutHonma";
import ScrollToTop from "./components/HomeComponent/ScrollToTop";
import PlanPage from "./pages/PlanPage";
import { PlanType } from "./utils/plans";

// import StripeStatusPage from "./components/Course/StripeStatusPage";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
