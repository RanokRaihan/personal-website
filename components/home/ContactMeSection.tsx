import ContactForm from "../forms/ContactForm";
import ContactGraphic from "./ContactGraphic";

const ContactMeSection = () => {
  return (
    <section id="contact" className="section-shell">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-14 text-center md:text-left">
          <span className="section-eyebrow">{"// contact"}</span>
          <h2 className="section-heading mt-3">Let&apos;s build something</h2>
          <div className="section-rule mx-auto md:mx-0" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            Have a question, a project in mind, or just want to say hi? Drop me a
            message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
          <div className="flex w-full justify-center lg:w-1/2">
            <ContactGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
