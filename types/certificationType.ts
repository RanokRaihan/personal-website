export interface ICertification {
  _id: string;
  name: string;
  issuer: string;
  issuerLogoUrl?: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateUrl?: string;
  badgeUrl?: string;
  isExpired: boolean;
  isLifetime: boolean;
  issuedAt: string;
  expiresAt?: string | null;
  courseStartDate?: string | null;
  courseEndDate?: string | null;
  featured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}
