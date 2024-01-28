import "./App.css";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  // Get the current location (route)
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Drawer />
      
      {/* Always render the Outlet, which represents the content of the current route */}
      <Outlet />

      {/* Always render the Footer on all pages except the home page */}
      {!isHomePage && <Footer />}
    </>
  );
}

export default App;
