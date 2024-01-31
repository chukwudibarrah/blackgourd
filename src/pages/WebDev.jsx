import FetchWebDev from "../components/FetchWebDev";
import SEO from "../utils/SEO";
import FadeInSection from "../utils/FadeInSection";

export default function WebDev() {
  return (
    <div className="pt-40 md:pt-80 pb-10 bg-cosmiclatte">
      <SEO
        title="Web development - Black Gourd"
        description="Our responsive web design ensures your website looks fantastic and functions seamlessly on all devices. Enjoy a visually stunning and user-friendly website that adapts to your visitors' screens, enhancing your online presence."
        name="Black Gourd"
        type="page"
      />
      <FadeInSection>
        <div className="">
          <h1 className="text-5xl md:text-8xl font-vollkorn font-black px-4 md:px-8 text-gunmetal">
            Website development projects
          </h1>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="py-20">
          <FetchWebDev />
        </div>
      </FadeInSection>
    </div>
  );
}
