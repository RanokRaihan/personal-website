import type { Metadata } from "next";

import { getSiteSettings } from "@/actions/settingAction";
import AboutBio from "@/components/about/AboutBio";
import AboutCTA from "@/components/about/AboutCTA";
import AboutOutside from "@/components/about/AboutOutside";
import AboutSidebar from "@/components/about/AboutSidebar";
import AboutStack from "@/components/about/AboutStack";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutValues from "@/components/about/AboutValues";
import { DEFAULT_SETTINGS } from "@/constants";

export const metadata: Metadata = {
  title: "About · Ranok Raihan",
  description:
    "Ranok Raihan — self-taught full-stack developer in Havertown, PA. Physics background, ~5 years building on the web with Next.js, Node.js, and TypeScript. Open to full-time roles.",
};

export default async function AboutPage() {
  const result = await getSiteSettings();
  const settings = "name" in result ? result : DEFAULT_SETTINGS;

  return (
    <section className="section-shell">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          {/* Sticky identity sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <AboutSidebar settings={settings} />
          </div>

          {/* Scrollable narrative */}
          <div className="space-y-20 md:space-y-24">
            <AboutBio />
            <AboutStack />
            <AboutTimeline />
            <AboutValues />
            <AboutOutside />
            <AboutCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
