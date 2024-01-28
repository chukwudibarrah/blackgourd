import FetchCopywriting from "../components/FetchCopywriting";

export default function Copywriting() {
  return (
    <div className="pt-40 md:pt-80 pb-10 bg-cosmiclatte">
      <div className="">
        <h1 className="text-5xl md:text-8xl font-vollkorn font-black px-4 md:px-8 text-gunmetal">
          Editing & copywriting
        </h1>
      </div>
      <div className="py-20">
        <FetchCopywriting />
      </div>
    </div>
  );
}