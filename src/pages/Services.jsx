import { useEffect, useState } from "react";
import * as contentful from "contentful";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowSide from "../components/ArrowSide";
import { ScrollerMotion } from "scroller-motion";
import { trackLinkClick } from "../utils/Analytics";

// const tick = ("test")

export default function Services() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    previewAccessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  });

  // Track GA4 link clicks

  const handleLinkClick = () => {
    trackLinkClick("Services contact button");
  };



  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (projects.length === 0) {
          const response = await client.getEntries({
            content_type: "services",
          });

          setProjects(response.items);
        }
      } catch (error) {
        console.error("Error fetching Contentful entries:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching, regardless of success or failure
      }
    };

    fetchProjects();
  }, [client, projects]);

  return (
    <ScrollerMotion className="bg-cosmiclatte">
    <main className="py-40 md:pt-80 px-4 md:px-8 bg-cosmiclatte">
      {/* First section starts */}
      <section>
        <div>
          <h1 className="text-5xl md:text-8xl text-crayola font-vollkorn font-black">
            What we do
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-20 font-sourcecode text-xl text-gunmetal">
          {projects.map((project) => (
            <div
              key={project.sys.id}
              className="h-[35rem] p-6 lg:p-10 border-x-[0.5px] border-y-[0.5px] border-crayola flex flex-col justify-between"
            >
              <p className="uppercase">{project.fields.title}</p>
              <div className="flex">
                <ArrowSide />
                <span className="px-2">{project.fields.details}</span>
              </div>
              <p className="">{project.fields.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New section starts */}
      <section className="py-40">
        <div className="grid xl:grid-cols-2 gap-20">
          <motion.img
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            src="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/wudiweber-services.webp"
            alt="team image"
            className="shadow-xl hover:shadow-2xl"
          />
          <div className="grid content-between">
            <h2 className="text-gunmetal font-sourcecode font-light text-xl md:text-4xl py-32 xl:py-0">
              Creativity is what keeps us going. We love pushing limits and
              thinking outside the box. Our creative approach is fueled by
              curiosity, a strong desire to develop unique ideas, and a
              commitment to doing great work. We&apos;re all about trying new
              things and encouraging our team to think differently, so we can
              always deliver awesome results.
            </h2>

            <div className="font-sourcecode py-32 xl:py-0 text-gunmetal text-sm md:text-lg">
              <div>
                <p className="uppercase py-5">Collaborative partnership</p>
                <p>
                  We&apos;re always exploring new tech, ideas, and strategies to
                  give you top-notch solutions that set you apart from the
                  competition.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Innovation & creativity</p>
                <p>
                  We believe in building a strong partnership with our clients.
                  We work closely with you, valuing your input and feedback
                  every step of the way.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Commitment to quality</p>
                <p>
                  Making sure you&apos;re happy is our main goal. We go the
                  extra mile to make sure our clients are pleased with the
                  results. We&apos;re committed to providing exceptional
                  quality.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Expertise & experience</p>
                <p>
                  With lots of experience in the industry, our team brings a ton
                  of knowledge to the table. We have a proven track record of
                  delivering exceptional results.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Tailored solutions</p>
                <p>
                  We believe in understanding your unique needs and customizing
                  our solutions accordingly. Our approach is flexible to ensure
                  a perfect fit for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section start */}
      <section>
        <div className="grid xl:grid-cols-2 border-y-[0.5px] border-crayola">
          <div className="grid content-around">
            <h2 className="font-vollkorn font-black text-crayola text-4xl lg:text-6xl lg:pr-64 py-10">
              Why our partners work with us
            </h2>
            <NavLink
              reloadDocument
              to="/contact"
              className="p-2 font-sourcecode text-xl w-[9rem] text-crayola rounded-full hover:border-crayola hover:border-2 border-2 border-crayola hover:text-cosmiclatte hover:bg-crayola transition-all duration-1000"
              onClick={handleLinkClick}
            >
              <span className="">Contact us</span>
            </NavLink>
          </div>

          <div className="h-82 grid content-evenly xl:border-l-[0.5px] border-crayola font-sourcecode divide-y-[0.5px] divide-crayola text-xl text-gunmetal">
            <p className="py-10 xl:px-12">
              We help your brand connect better with your audience by carefully
              choosing styles that send a strong message.
            </p>
            <p className="py-10 xl:px-12">
              We create cool stuff that&apos;s both creative and practical,
              using the best tech out there to make sure you get great results.
            </p>
            <p className="py-10 xl:px-12">
              We&apos;re always working to make things even better, aiming to
              deliver quality and giving you top-notch service every time.
            </p>
          </div>
        </div>
      </section>
    </main>
    </ScrollerMotion>
  );
}
