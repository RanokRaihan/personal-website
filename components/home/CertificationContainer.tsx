import { getAllCertifications } from "@/actions/certificationAction";
import CertificationSummary from "./CertificationSummary";
import CertificationTimelineItem from "./CertificationTimelineItem";

const CertificationContainer = async () => {
  const result = await getAllCertifications();

  if (!Array.isArray(result)) {
    return (
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Certifications could not be loaded. Please try again later.
      </p>
    );
  }

  const featured = result.filter((certification) => certification.featured);

  if (featured.length === 0) {
    return (
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Certifications are coming soon.
      </p>
    );
  }

  const issuers = new Set(featured.map((c) => c.issuer)).size;
  const lifetime = featured.filter((c) => c.isLifetime).length;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-4 top-1 bottom-1 w-px bg-gradient-to-b from-amber-400/70 via-orange-400/30 to-transparent sm:left-6 md:left-8"
        />
        <ol className="space-y-10 sm:space-y-12">
          {featured.map((certification, index) => (
            <li
              key={certification._id}
              className="relative pl-12 sm:pl-16 md:pl-20"
            >
              <CertificationTimelineItem
                certification={certification}
                index={index}
              />
            </li>
          ))}
        </ol>
      </div>

      <CertificationSummary
        total={featured.length}
        issuers={issuers}
        lifetime={lifetime}
      />
    </div>
  );
};

export default CertificationContainer;
