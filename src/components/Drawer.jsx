import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import { trackLinkClick } from "../utils/Analytics";

export default function Drawer() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function handleHideDrawer() {
    setShowDrawer(!showDrawer);
    trackLinkClick("Drawer or nav link clicked");
  }

  return (
    <>
      <div
        className={`fixed top-6 left-4 md:left-8 z-40 transition-opacity duration-500 ${
          scrollY > 29 ? "opacity-0" : "opacity-100"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to="/" reloadDocument>
          <img
            src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/blackgourd-light.webp"
            alt="Logo"
            className="h-16 lg:h-20 transition-transform duration-1000 ease-in-out transform hover:scale-105"
          />
        </NavLink>
      </div>

      {showDrawer ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-14 h-14 flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 stroke-2 stroke-crayola ${
            scrollY > 30 ? "bg-crayola stroke-white" : ""
          } px-3 hover:drop-shadow-2xl border-[1px] border-crayola hover:bg-crayola hover:stroke-white transition-colors duration-1000`}
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-14 h-14 flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 stroke-2 stroke-crayola ${
            scrollY > 30 ? "bg-crayola stroke-white" : ""
          } px-3 hover:drop-shadow-2xl border-[1px] border-crayola hover:bg-crayola hover:stroke-white transition-colors duration-1000`}
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      )}

      <div
        className={`top-0 left-0 overscroll-none overflow-hidden bg-gunmetal p-10 pl-15 text-crayola fixed min-h-screen z-40 ease-in-out duration-700 transform ${
          showDrawer ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ width: "100%" }}
      >
        <Nav handleHideDrawer={handleHideDrawer} />
      </div>
    </>
  );
}
