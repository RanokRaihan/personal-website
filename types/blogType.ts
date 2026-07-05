// Shape mirrors the public API contract (api-contract-public/blog.md).
// `addedBy`, `isDeleted`, and `deletedAt` are excluded from public responses.
export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  content: string; // Markdown
  coverImage?: string;
  tags: string[];
  status: "PUBLISHED";
  views: number;
  readTime: number;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  featured: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}
