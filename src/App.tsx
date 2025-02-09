import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import AboutHonma from "./pages/AboutHonma";
import Mentorship from "./pages/Mentorat";

// import StripeStatusPage from "./components/Course/StripeStatusPage";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-honma" element={<AboutHonma />} />
        <Route path="/mentorship" element={<Mentorship />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
