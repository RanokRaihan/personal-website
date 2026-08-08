import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import type { ComponentType } from "react";

export interface ITool {
  title: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const tools: ITool[] = [
  {
    title: "Query Builder",
    href: "/tools/query-builder",
    icon: LinkedInLogoIcon,
  },
];
