import "./App.css";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import SEO from "./utils/SEO";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  // Get the current location (route)
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      <SEO
          title="Black Gourd"
          description="Black Gourd is a global multidisciplinary digital agency based in the United Kingdom. We create digital-first web platforms and content that align brand and product."
          name="@blackgourd"
          type="website"
          imageUrl="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/blackgourd.webp"
          url="https://blackgourd.com"
        />
      <Drawer />
      <Outlet /> {/* This replaces the specific route components with a placeholder for the matched route */}
      {!isHomePage && <Footer />}
    </>
  );
}

export default Layout;
