import { useEffect, useState, useCallback } from "react";
import Form from "../components/Form";
import { NavLink } from "react-router-dom";
import ArrowDown from "../components/ArrowDown";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.2;

    const newActiveSection = Math.floor(
      (scrollPosition + threshold) / windowHeight
    );

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const threshold = windowHeight * 0.495;

      const newActiveSection = Math.floor(
        (scrollPosition + threshold) / windowHeight
      );

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleImageScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const threshold = windowHeight * 0.495;

    const newActiveSection = Math.floor(
      (scrollPosition + threshold) / windowHeight
    );

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleImageScroll);

    return () => {
      window.removeEventListener("scroll", handleImageScroll);
    };
  }, [handleImageScroll]);

  return (
      <main className="min-h-screen w-screen overscroll-none overflow-hidden flex flex-col items-center justify-center bg-charcoal relative">
        {/* First section */}
        <section
          className={`h-screen bg-feldgrau w-full relative ${
            activeSection === 0 ? "active" : ""
          }`}
        >
          <div className="grid justify-items-center text-center mt-28 md:mt-32 mb-0 md:mb-60">
            <p className="w-9/12 lg:w-4/12 mb-3 font-sourcecode md:text-2xl text-cosmiclatte">
              We&apos;re a digital agency with more than a decade of experience
              in innovative development
            </p>
            {/* {arrow} */}
            <ArrowDown />
          </div>
          {activeSection === 0 && (
            <div className="h-full flex justify-center items-center text-center">
              <h2 className="text-5xl mb-11 md:text-8xl font-vollkorn font-extrabold fixed top-1/2 transform -translate-y-1/2">
                <span>
                  <NavLink
                    reloadDocument
                    to="/webdevelopment"
                    className="text-crayola"
                  >
                    Web Development
                  </NavLink>
                </span>
              </h2>
              <div className="">
                <img
                  src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/webdev.webp"
                  alt="Web Development"
                  className="w-60 lg:w-[30rem] xl:w-[20rem] z-0 fixed bottom-0 left-1/2 transform -translate-x-1/2 drop-shadow-3xl"
                />
              </div>
            </div>
          )}
        </section>

        {/* Second section */}
        <section
          className={`h-screen bg-gunmetal w-full relative ${
            activeSection === 1 ? "active" : ""
          }`}
        >
          {activeSection === 1 && (
            <div className="h-full flex justify-center items-center text-center">
              <h2 className="text-5xl mb-11 md:text-8xl font-vollkorn font-extrabold fixed top-1/2 transform -translate-y-1/2 z-10">
                <span>
                  <NavLink
                    reloadDocument
                    to="/copywriting"
                    className="text-engviolet drop-shadow-3xl"
                  >
                    Editing & Copywriting
                  </NavLink>
                </span>
              </h2>
              <div className="">
                <img
                  src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/rediting.webp"
                  alt="Editing & Copywriting"
                  className="xl:w-[35rem] z-0 fixed bottom-0 left-1/2 transform -translate-x-1/2"
                />
              </div>
            </div>
          )}
        </section>

        {/* Third section */}
        <section className="h-screen bg-cosmiclatte z-20 flex justify-center">
          <div className="md:w-8/12 xl:w-6/12 w-11/12 grid content-center">
            <h2 className="text-center text-feldgrau font-vollkorn text-4xl md:text-6xl font-extrabold md:mt-0 mt-32">
              Send us a message
            </h2>
            <div className="flex justify-center my-10">
              <Form />
            </div>
          </div>
        </section>
      </main>
  );
}
