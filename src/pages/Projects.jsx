import FetchWebDev from "../components/FetchWebDev";
import FetchCopywriting from "../components/FetchCopywriting";
import FadeInSection from "../utils/FadeInSection";

export default function Projects() {
  return (
    <div className="bg-cosmiclatte py-40 md:pt-80">
      <FadeInSection>
      <div className="">
        <h1 className="text-5xl md:text-8xl font-vollkorn text-gunmetal font-black px-4 md:px-8">
          Selected projects
        </h1>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div className="py-28">
        <FetchWebDev />
        <FetchCopywriting />
      </div>
      </FadeInSection>
    </div>
  );
}
