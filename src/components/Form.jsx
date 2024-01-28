import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [buttonLoading, setButtonLoading] = useState(false);

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);

    // call emailjs method to send email

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent!");
          setButtonLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Error sending email. Please try again.");
          e.target.reset();
        }
      );
  };


  return (
    <div>
      <form ref={form} onSubmit={handleSubmit} className="font-sourcecode lg:text-xl text-lg text-gunmetal border-2 border-crayola p-5 shadow-xl">
        <p>
          Hello! My name is{" "}
          <span className="appearance-none">
            <input id="name" type="text" name="from_name" autoComplete="name" placeholder="Name" className="border-b-4 border-crayola/30 outline-none bg-transparent placeholder:text-crayola placeholder:text-[15px]"/>
          </span>{" "}
          and I&apos;m contacting you about{" "}
          <span>
            <input id="message" type="textarea" name="message" autoComplete="off" placeholder="Details" className="border-b-4 border-crayola/30 outline-none bg-transparent placeholder:text-crayola placeholder:text-[15px] resize-y" />
          </span>
          . You can reach me via my{" "}
          <span>
            <input id="email" type="email" name="from_email" autoComplete="email" placeholder="Email" className="border-b-4 border-crayola/30 outline-none bg-transparent placeholder:text-crayola placeholder:text-[15px]" />
          </span>{" "}
          or call my number{" "}
          <span>
            <input id="phone" type="phone" name="phone" autoComplete="phone" placeholder="Phone number" className="border-b-4 border-crayola/30 outline-none bg-transparent placeholder:text-crayola placeholder:text-[15px]" />
          </span>
          . Looking forward to hearing from you!
        </p>
        <div className="my-7">
          <button 
          id="submit" 
          type="submit" 
          disabled={buttonLoading && true}
          className="border-2 border-crayola text-crayola rounded-2xl px-3 hover:bg-crayola hover:text-cosmiclatte transition-all duration-1000"
          >{buttonLoading ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}
