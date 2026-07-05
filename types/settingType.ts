export interface ISocials {
  github?: string;
  linkedin?: string;
  twitter?: string;
  devTo?: string;
  youtube?: string;
  email?: string;
}

export interface ISetting {
  _id?: string;
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  resumeUrl?: string;
  openToWork: boolean;
  availableFrom?: string;
  socials: ISocials;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  footerText?: string;
  createdAt?: string;
}
