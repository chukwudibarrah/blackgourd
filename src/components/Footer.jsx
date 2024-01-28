import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-montserrat md:text-2xl bg-cosmiclatte">
      <div className=" px-4 md:px-8 md:py-10">
        <hr className="border-2 border-crayola" />
      </div>
      <div className="">
        <img
          src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/wudi-weber-footer.webp"
          alt="footer image"
          className="my-10 px-4 md:px-8"
        />
      </div>
      <div className="w-screen">
        <hr className="border-crayola border-2" />
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-5">
        <div className="border-crayola lg:border-r-2 border-b-2 lg:border-b-0 lg:py-16 py-8 px-4 lg:px-8">
          <NavLink reloadDocument to="/">
          <img
            src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/black-gourd.webp"
            alt="Logo"
            className="transition-transform duration-1000 ease-in-out transform hover:scale-105"
          />
            <p className="uppercase font-sourcecode text-xs md:text-sm text-gunmetal">
              creative collective
            </p>
          </NavLink>
          <p className="my-3 font-sourcecode text-gunmetal text-xs md:text-lg">
            Developing digital experiences
          </p>
        </div>
        <div className="grid grid-cols-1 border-crayola lg:border-r-2 border-b-2 lg:border-b-0 lg:py-16 py-8 uppercase px-4 lg:px-8 font-sourcecode text-gunmetal text-xs md:text-lg  group transition-all duration-300 ease-in-out">
          <NavLink
            reloadDocument
            className="my-3 group text-gunmetal main-decor"
            to="#"
          >
            <span className="animate-decor">Instagram</span>
          </NavLink>
          <NavLink
            reloadDocument
            className="my-3 group text-gunmetal main-decor"
            to="#"
          >
            <span className="animate-decor">Facebook</span>
          </NavLink>
          <NavLink
            reloadDocument
            className="my-3 group text-gunmetal main-decor"
            to="#"
          >
            <span className="animate-decor">LinkedIn</span>
          </NavLink>
        </div>
        <div className="lg:py-16 py-8 px-4 text-gunmetal lg:px-8 font-sourcecode text-xs md:text-lg">
          <p>
            © 2024 Black Gourd Creative Collective.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
