import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SEO from "../utils/SEO";
import FadeInSection from "../utils/FadeInSection";
import { trackLinkClick } from "../utils/Analytics";

const link = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="#F7F3E3"
    className="w-6 h-6 lg:w-14 lg:h-14 z-30"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const linkMotionVariant = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 100, damping: 17 },
};

export default function About() {
  // Track GA4 link clicks

  const handleLinkClick = () => {
    trackLinkClick("About page links");
  };

  return (
    <main className="bg-cosmiclatte">
      <SEO
        title="About - Black Gourd"
        description="Black Gourd is a global multidisciplinary digital agency based in South Yorkshire, United Kingdom. We help you develop ideal solutions to optimise your business and customer needs, creating digital-first web platforms that align brand and product."
        name="Black Gourd"
        type="page"
      />
      {/* start sections */}

      <section className="h-screen w-screen bg-mobile md:bg-tab xl:bg-desktop bg-center bg-no-repeat">
        <div className="h-full w-full flex justify-start text-center items-center">
          <h1 className="font-vollkorn font-black text-gunmetal text-5xl md:text-9xl xl:px-64 md:px-8 px-4">
            We deliver unique digital solutions.
            <br />
            <br />
            <br />
          </h1>
        </div>
      </section>

      {/* section break */}
      <FadeInSection>
        <section className="">
          <div className="grid xl:grid-cols-2 gap-10 md:px-8 px-4 py-20 xl:py-52">
            <div className="flex flex-col justify-between">
              <h2 className="font-sourcecode font-light text-xl text-gunmetal md:text-4xl xl:pr-32">
                <span className="text-crayola font-semibold">Black Gourd</span>{" "}
                is a global multidisciplinary digital agency based in South
                Yorkshire, United Kingdom. We help you develop ideal solutions
                to optimise your business and customer needs, creating
                digital-first web platforms that align brand and product.
              </h2>
              <ul className="text-gunmetal uppercase font-sourcecode text-sm md:text-xl list-disc font-light md:px-8 px-4 xl:py-0 py-32">
                <li>Copywriting & editing</li>
                <li>Responsive web design</li>
                <li>E-commerce website development</li>
                <li>CMS integration & customisation</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <motion.img
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/wudiweber-hands.webp"
                alt="team image"
                className="shadow-xl hover:shadow-2xl"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* section break */}
      <FadeInSection>
        <section>
          <div className="grid xl:grid-cols-2 gap-10 md:px-8 px-4 pb-10">
            <h3 className="font-montserrat text-2xl md:text-[40px] text-gunmetal xl:py-0 py-10">
              Our clients
            </h3>
            <p className="font-sourcecode font-light text-xl text-gunmetal md:text-4xl">
              We have had the privilege of working with a diverse range of
              clients across industries, helping them engage customers,
              establish strong brands and achieve tangible results.
            </p>
          </div>
          <div className="horizontal-scrolling-items w-full lg:py-5">
            <div className="horizontal-scrolling-items__item item1"></div>
            <div className="horizontal-scrolling-items__item item2"></div>
            <div className="horizontal-scrolling-items__item item3"></div>
            <div className="horizontal-scrolling-items__item item4"></div>
            <div className="horizontal-scrolling-items__item item5"></div>
            <div className="horizontal-scrolling-items__item item6"></div>
            <div className="horizontal-scrolling-items__item item7"></div>
          </div>
        </section>
      </FadeInSection>

      {/* section break */}
      <FadeInSection>
        <section>
          <div className="grid xl:grid-cols-2 gap-10 md:px-8 px-4 pb-20 pt-20 xl:pb-52">
            <div className="">
              <motion.img
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/about-wudiweber-team.webp"
                alt=""
                className="shadow-xl hover:shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-sourcecode font-light text-xl text-gunmetal md:text-4xl xl:pr-32 xl:py-0 py-10">
                Whether we&apos;re creating a standout brand look, building
                engaging online experiences or planning effective marketing
                efforts, we tackle each project with careful attention to detail
                and a strong commitment to quality.
              </p>
              <p className="text-gunmetal font-sourcecode font-light text-sm md:text-lg uppercase xl:pr-32 py-10">
                We&apos;re dedicated to giving you outstanding solutions, going
                above and beyond to surpass your expectations and support you in
                reaching your goals.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* section break */}
      <FadeInSection>
        <section>
          <div className="grid xl:grid-cols-2 gap-5 md:px-8 px-4 h-96">
            <NavLink
              reloadDocument
              to="/services"
              className="bg-gunmetal flex xl:flex-col justify-center items-center pump-feldgrau transition-all duration-1000"
              onClick={handleLinkClick}
            >
              <span className="px-8 font-vollkorn font-black text-engviolet text-4xl lg:text-7xl z-20">
                Services
              </span>
              {link}
            </NavLink>
            <NavLink
              reloadDocument
              to="/contact"
              className="bg-crayola flex xl:flex-col justify-center items-center pump-cosmic"
              onClick={handleLinkClick}
            >
              <span className="px-8 font-vollkorn font-black text-gunmetal text-4xl lg:text-7xl z-20">
                Contact us
              </span>
              {link}
            </NavLink>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
