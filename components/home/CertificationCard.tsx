import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ICertification } from "@/types/certificationType";
import { Award, BadgeCheck, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";

interface CertificationCardProps {
  certification: ICertification;
}

const CARD_GLOWS = [
  "from-amber-500/[0.07] to-orange-500/[0.07]",
  "from-yellow-500/[0.07] to-amber-500/[0.07]",
  "from-orange-500/[0.07] to-rose-500/[0.07]",
  "from-amber-400/[0.07] to-yellow-500/[0.07]",
];

const formatMonthYear = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

const CertificationCard = ({
  certification,
  index = 0,
}: CertificationCardProps & { index?: number }) => {
  const {
    name,
    issuer,
    issuerLogoUrl,
    credentialUrl,
    certificateUrl,
    isExpired,
    isLifetime,
    issuedAt,
    expiresAt,
  } = certification;

  const status = isLifetime
    ? { label: "Lifetime", classes: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" }
    : isExpired
    ? { label: "Expired", classes: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" }
    : {
        label: expiresAt
          ? `Valid until ${formatMonthYear(expiresAt)}`
          : "Valid",
        classes: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
      };

  const cardGlow = CARD_GLOWS[index % CARD_GLOWS.length];

  return (
    <Card
      className={`group relative w-[300px] sm:w-[340px] shrink-0 snap-start h-full flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-700/60 bg-gradient-to-br ${cardGlow} bg-white dark:bg-slate-800/60 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5`}
    >
      <div className="flex items-start gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-slate-200/80 bg-white dark:border-white/10 dark:bg-slate-900">
          {issuerLogoUrl ? (
            <Image
              src={issuerLogoUrl}
              alt={issuer}
              fill
              sizes="44px"
              className="object-contain p-1.5"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-300 dark:text-slate-600">
              <Award className="h-5 w-5" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-semibold leading-snug text-slate-900 line-clamp-2 dark:text-slate-50">
            {name}
          </h3>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
            {issuer}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <Badge
          variant="secondary"
          className={`border-0 text-xs font-medium ${status.classes}`}
        >
          {status.label}
        </Badge>
        <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">
          Issued {formatMonthYear(issuedAt)}
        </span>
      </div>

      {(credentialUrl || certificateUrl) && (
        <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3 dark:border-slate-700/50">
          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Verify
            </a>
          )}
          {certificateUrl && (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <FileText className="h-3.5 w-3.5" />
              Certificate
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </Card>
  );
};

export default CertificationCard;
