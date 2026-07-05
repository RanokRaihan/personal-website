export const formatMonthYear = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

interface CertificationStatusInput {
  isLifetime: boolean;
  isExpired: boolean;
  expiresAt?: string | null;
}

export const getCertificationStatus = ({
  isLifetime,
  isExpired,
  expiresAt,
}: CertificationStatusInput) => {
  if (isLifetime) {
    return {
      label: "Lifetime",
      classes:
        "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      ring: "border-slate-300 dark:border-slate-600",
    };
  }

  if (isExpired) {
    return {
      label: "Expired",
      classes:
        "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
      ring: "border-rose-400 dark:border-rose-500",
    };
  }

  return {
    label: expiresAt ? `Valid until ${formatMonthYear(expiresAt)}` : "Valid",
    classes:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    ring: "border-emerald-400 dark:border-emerald-500",
  };
};
