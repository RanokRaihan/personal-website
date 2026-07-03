import { getAllCertifications } from "@/actions/certificationAction";
import CertificationCard from "./CertificationCard";

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

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent dark:from-slate-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent dark:from-slate-900" />

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 -mx-4">
        {featured.map((certification, index) => (
          <CertificationCard
            key={certification._id}
            certification={certification}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationContainer;
