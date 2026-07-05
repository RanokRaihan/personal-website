// Section 1 — the hook. Establishes who Ranok is, the physics-not-CS angle
// (a genuine differentiator), what he's shipped, and what he's after.
const AboutBio = () => {
  return (
    <section>
      <span className="section-eyebrow">{"// about"}</span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-50">
        I build things for the web.
      </h2>
      <div className="section-rule" />

      <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
        <p>
          I&apos;m a self-taught full-stack developer based in Havertown, PA. I
          build web applications end to end — from database design to the UI
          people actually use.
        </p>
        <p>
          My background is in Physics, not Computer Science. That means I came
          to software through curiosity and problem-solving, not a curriculum.
          I&apos;ve been building on the web seriously since 2021 and
          haven&apos;t stopped since.
        </p>
        <p>
          I&apos;ve shipped a two-sided task marketplace with Stripe payments
          and real-time mapping, a barcode-driven pharmacy inventory tool, and
          this portfolio — which runs on a custom CMS I built myself. I care
          about the full picture: clean APIs, thoughtful data models, and UIs
          that don&apos;t fight the user.
        </p>
        <p>
          Right now I&apos;m actively looking for full-stack roles — remote or
          hybrid in the Philadelphia area. I work best in environments where I
          can own features end to end and ship things that matter.
        </p>
      </div>
    </section>
  );
};

export default AboutBio;
