import { Badge } from "@/components/ui/badge";
import { formatMonthYear, getCertificationStatus } from "@/lib/certification";
import { ICertification } from "@/types/certificationType";
import { Award, BadgeCheck, Calendar } from "lucide-react";
import Image from "next/image";
import CertificateLightbox from "./CertificateLightbox";

interface CertificationTimelineItemProps {
  certification: ICertification;
  index: number;
}

const CertificationTimelineItem = ({
  certification,
  index,
}: CertificationTimelineItemProps) => {
  const {
    name,
    issuer,
    issuerLogoUrl,
    badgeUrl,
    credentialId,
    credentialUrl,
    certificateUrl,
    isExpired,
    isLifetime,
    issuedAt,
    expiresAt,
    courseStartDate,
    courseEndDate,
  } = certification;

  const status = getCertificationStatus({ isLifetime, isExpired, expiresAt });

  return (
    <>
      <span
        aria-hidden
        className={`absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-2 bg-white shadow-sm shadow-amber-500/20 dark:bg-slate-900 sm:left-6 md:left-8 ${status.ring}`}
      >
        {issuerLogoUrl ? (
          <Image
            src={issuerLogoUrl}
            alt=""
            fill
            sizes="32px"
            className="object-contain p-1"
          />
        ) : (
          <Award className="h-4 w-4 text-amber-500" />
        )}
      </span>

      <div
        className="animate-fade-in flex flex-col gap-4 md:flex-row md:items-start"
        style={{ animationDelay: `${index * 90}ms`, animationFillMode: "both" }}
      >
        {certificateUrl ? (
          <CertificateLightbox
            certificateUrl={certificateUrl}
            name={name}
            issuer={issuer}
            issuedAt={issuedAt}
            expiresAt={expiresAt}
            isLifetime={isLifetime}
            isExpired={isExpired}
            credentialId={credentialId}
            credentialUrl={credentialUrl}
          />
        ) : (
          <div className="flex h-32 w-full max-w-[220px] items-center justify-center rounded-lg border border-dashed border-slate-200 text-slate-300 dark:border-slate-700 dark:text-slate-600">
            <Award className="h-6 w-6" />
          </div>
        )}

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
              {name}
            </h3>
            {badgeUrl && (
              <Image
                src={badgeUrl}
                alt=""
                width={20}
                height={20}
                className="rounded-full"
              />
            )}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {issuer}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="secondary"
              className={`border-0 text-xs font-medium ${status.classes}`}
            >
              {status.label}
            </Badge>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              Issued {formatMonthYear(issuedAt)}
            </span>
          </div>

          {courseStartDate && courseEndDate && (
            <p className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              Studied {formatMonthYear(courseStartDate)} –{" "}
              {formatMonthYear(courseEndDate)}
            </p>
          )}

          {credentialId && (
            <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
              ID: {credentialId}
            </p>
          )}

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Verify credential
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificationTimelineItem;
