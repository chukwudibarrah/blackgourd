import FetchWebDev from "../components/FetchWebDev";
import FetchCopywriting from "../components/FetchCopywriting";

export default function Projects() {
  return (
    <div className="bg-cosmiclatte py-40 md:pt-80">
      <div className="">
        <h1 className="text-5xl md:text-8xl font-vollkorn text-gunmetal font-black px-4 md:px-8">
          Selected projects
        </h1>
      </div>
      <div className="py-28">
        <FetchWebDev />
        <FetchCopywriting />
      </div>
    </div>
  );
}
