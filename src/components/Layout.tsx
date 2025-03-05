import FooterSecondary from "./FooterSecondary";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary-darkmode py-20">
        <Outlet />
      </div>
      <FooterSecondary />
    </div>
  );
};

export default Layout;
