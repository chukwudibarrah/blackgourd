import FetchCopywriting from "../components/FetchCopywriting";
import FadeInSection from "../utils/FadeInSection";

export default function Copywriting() {
  return (
    <div className="pt-40 md:pt-80 pb-10 bg-cosmiclatte">
      <FadeInSection>
      <div className="">
        <h1 className="text-5xl md:text-8xl font-vollkorn font-black px-4 md:px-8 text-gunmetal">
          Editing & copywriting
        </h1>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div className="py-20">
        <FetchCopywriting />
      </div>
      </FadeInSection>
    </div>
  );
}
