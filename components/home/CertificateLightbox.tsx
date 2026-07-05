"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { formatMonthYear, getCertificationStatus } from "@/lib/certification";
import { BadgeCheck, ExternalLink, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CertificateLightboxProps {
  certificateUrl: string;
  name: string;
  issuer: string;
  issuedAt: string;
  expiresAt?: string | null;
  isLifetime: boolean;
  isExpired: boolean;
  credentialId?: string;
  credentialUrl?: string;
}

const CertificateLightbox = ({
  certificateUrl,
  name,
  issuer,
  issuedAt,
  expiresAt,
  isLifetime,
  isExpired,
  credentialId,
  credentialUrl,
}: CertificateLightboxProps) => {
  const status = getCertificationStatus({ isLifetime, isExpired, expiresAt });
  const [loaded, setLoaded] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`View certificate: ${name}`}
          className="group relative block w-full max-w-[220px] overflow-hidden rounded-lg border border-slate-200/80 dark:border-slate-700/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          <AspectRatio ratio={4 / 3}>
            <Image
              src={certificateUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 220px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          <span className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors group-hover:bg-slate-900/40">
            <ZoomIn className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl gap-0 overflow-hidden p-0 sm:rounded-xl">
        <div className="bg-slate-950 p-4">
          <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
            {!loaded && (
              <Skeleton className="absolute inset-0 h-full w-full bg-slate-800" />
            )}
            <Image
              src={certificateUrl}
              alt={`${name} certificate issued by ${issuer}`}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              onLoad={() => setLoaded(true)}
              className={`object-contain transition-opacity duration-300 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </AspectRatio>
        </div>
        <div className="space-y-3 p-6">
          <DialogHeader>
            <DialogTitle className="font-display">{name}</DialogTitle>
            <DialogDescription>{issuer}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Badge
              variant="secondary"
              className={`border-0 text-xs font-medium ${status.classes}`}
            >
              {status.label}
            </Badge>
            <span>Issued {formatMonthYear(issuedAt)}</span>
            {credentialId && (
              <span className="font-mono text-xs">ID: {credentialId}</span>
            )}
          </div>
          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
            >
              <BadgeCheck className="h-4 w-4" />
              Verify credential
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateLightbox;
