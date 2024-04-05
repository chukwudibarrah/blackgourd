import GourdSVG from "./GourdSVG";

// Wrapper component to use the SVG
export default function Logo() {
  return (
    <div className="">
      <div
        className="grid grid-cols-2 border-2 border-[#EF7B45] divide-x-2 divide-[#EF7B45] hover:scale-105 transition-all duration-700"
        style={{
          "--color-start": "#EF7B45",
          "--color-mid": "#4281a4",
          "--color-end": "#BA7BA1",
          animation: "gradient 15s linear infinite",
        }}
      >
        <div className="flex justify-center items-center">
          <GourdSVG />
        </div>
        <div
          className="font-vollkorn font-bold md:text-lg divide-y-2 divide-[#EF7B45]"
          style={{
            backgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, var(--color-start), var(--color-mid), var(--color-end))",
          }}
        >
          <p className="p-1 ">black</p>
          <p className="p-1 ">gourd</p>
        </div>
      </div>
    </div>
  );
}
