import Form from "../components/Form";
import { ScrollerMotion } from "scroller-motion";

export default function Contact() {
  return (
    <ScrollerMotion className="bg-cosmiclatte">
    <div className="pt-40 md:pt-80 pb-10 px-4 md:px-8 bg-cosmiclatte">
      <div>
        <h1 className="text-6xl md:text-9xl font-vollkorn font-black text-feldgrau">
          Get in touch
        </h1>
        <p className="text-gunmetal font-sourcecode lg:text-xl text-lg pt-12 xl:w-6/12">
          Got questions or ideas? Reach out! We&apos;re here to transform your
          digital dreams into reality. Let&apos;s chat about websites, designs,
          and strategies that&apos;ll make your online presence stand out.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 gap-10 text-gunmetal font-sourcecode lg:text-xl text-lg py-20 select-none">
        <p>
        <span className="font-bold">Location:</span> <br />South Yorkshire, <br /> United Kingdom
        </p>
        <p>
        <span className="font-bold">Email:</span> <br /> projects@blackgourd.com
        </p>
        <p>
          <span className="font-bold">Call:</span> <br /> 01234567890
        </p>
      </div>
      <div className="xl:w-5/12 lg:w-8/12 px-5 border-2 border-crayola flex py-3">
        <p className="text-gunmetal font-sourcecode uppercase lg:text-xl text-lg">
          Call, send an email or use the form below:
        </p>
      </div>
      <div className="flex justify-center"></div>
      <div className="pt-40 pb-64 flex xl:w-6/12 text-2xl">
        <Form />
      </div>
    </div>
    </ScrollerMotion>
  );
}
