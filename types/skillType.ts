export interface ISkill {
  _id: string;
  name: string;
  slug: string;
  category: "FRONTEND" | "BACKEND" | "DATABASE" | "DEVOPS" | "LANGUAGE" | "TOOL" | "OTHER";
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";
  iconUrl: string;
  iconName: string;
  featured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}
