import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Nav({ handleHideDrawer }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className="min-h-screen w-screen overscroll-none overflow-hidden flex items-center z-30 font-vollkorn font-black">
      <p className="absolute -z-10 text-[130px] leading-[200px] md:text-[400px] md:leading-[400px] opacity-5 text-gray-200 font-extrabold">
        menu
      </p>
      <div
        className={`fixed top-6 left-4 md:left-8 z-40 transition-all duration-1000 ${
          scrollY > 29 ? "hidden" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to="/" reloadDocument>
          {isHovered ? (
            <img
              src="https://raw.githubusercontent.com/chukwudibarrah/monggoose/main/public/monggoose.webp"
              alt="Logo"
              className="w-14 h-14 transition-transform duration-1000 ease-in-out transform hover:scale-105"
            />
          ) : (
            <h3 className="logo font-vollkorn text-xl md:text-3xl font-black leading-5 text-crayola">
              monggoose
            </h3>
          )}
        </NavLink>
      </div>
      <div>
        <motion.div className="grid items-center justify-items-center">
          <ul className="pt-10">
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 0.75 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/"
                reloadDocument
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/about"
                reloadDocument
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                About
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1.15 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/services"
                reloadDocument
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Services
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1.15 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/projects"
                reloadDocument
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Projects
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1.15 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/contact"
                reloadDocument
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Contact
              </NavLink>
            </motion.li>
          </ul>
          <div className="flex font-sourcecode font-normal justify-evenly mt-10 md:mt-20 w-screen uppercase">
            <NavLink className="my-3 group text-charcoal main-decor" to="#" reloadDocument>
              <span className="animate-decor">Instagram</span>
            </NavLink>
            <NavLink className="my-3 group text-charcoal main-decor" to="#"reloadDocument>
              <span className="animate-decor">Facebook</span>
            </NavLink>
            <NavLink className="my-3 group text-charcoal main-decor" to="#"reloadDocument>
              <span className="animate-decor">LinkedIn</span>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
