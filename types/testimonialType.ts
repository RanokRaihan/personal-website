export type TestimonialRelation =
  | "MENTOR"
  | "PEER"
  | "CLIENT"
  | "INSTRUCTOR"
  | "OTHER";

export interface ITestimonial {
  _id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  linkedIn?: string;
  quote: string;
  relation: TestimonialRelation;
  featured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ITestimonialPayload {
  name: string;
  email: string;
  role: string;
  company?: string;
  linkedIn?: string;
  quote: string;
  relation: TestimonialRelation;
}
