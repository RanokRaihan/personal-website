import type { Metadata } from "next";

import AvailabilityBanner from "@/components/contact/AvailabilityBanner";
import ConnectCard from "@/components/contact/ConnectCard";
import MessageTips from "@/components/contact/MessageTips";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Ranok Raihan",
  description:
    "Get in touch with Ranok Raihan — Full-Stack Developer (Next.js / Node.js / TypeScript). Actively open to full-time roles, remote or Philadelphia-area hybrid.",
};

export default function ContactPage() {
  return (
    <section className="section-shell">
      <div className="section-container">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <span className="section-eyebrow">{"// contact"}</span>
          <h2 className="section-heading mt-3">Let&apos;s build something</h2>
          <div className="section-rule mx-auto md:mx-0" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            Have a role to fill, a project in mind, or just want to say hi? Drop
            me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* Availability banner */}
        <div className="mb-14 max-w-3xl">
          <AvailabilityBanner />
        </div>

        {/* Form + connect card */}
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
          <div className="flex w-full justify-center lg:w-1/2">
            <ConnectCard />
          </div>
        </div>

        {/* What to include */}
        <div className="mt-24">
          <MessageTips />
        </div>
      </div>
    </section>
  );
}
