import Image from "next/image";
import ContactForm from "../forms/ContactForm";

const ContactMeSection = () => {
  return (
    <section className="bg-emerald-100/25 dark:bg-slate-950/25 py-4 min-h-screen flex items-center">
      <div className="container mx-auto p-4 text-center space-y-6">
        <h2 className="mb-4">
          <span className="home-heading">Contact Me</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I would love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to reach out using the
          form below.
        </p>
        <div className="flex flex-col-reverse gap-8 lg:flex-row items-center justify-between">
          <ContactForm />
          <div className="lg:w-1/2 w-full flex justify-center items-center mt-4 lg:mt-0 p-6">
            <Image
              src="/assets/images/contact-image.svg"
              width={500}
              height={500}
              alt="My Skills"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
