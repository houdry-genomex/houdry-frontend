import { COMPANY } from "@ao/shared/constants";

export interface NavLink {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
}

export const PRODUCT_LINKS: NavLink[] = [
  {
    href: "/#see-it",
    label: "Demo",
    description: "Watch Houdry work a task end to end, fully offline.",
  },
  {
    href: "/#features",
    label: "Features",
    description: "What Houdry Fabric and Houdry Agent do.",
  },
];

export const RESOURCE_LINKS: NavLink[] = [
  {
    href: "/docs",
    label: "Documentation",
    description: "Guides, references, and integrations.",
  },
  {
    href: COMPANY.GITHUB_URL,
    label: "GitHub",
    description: "Houdry Fabric and Houdry Agent on GitHub.",
    external: true,
  },
];

export const TOP_LEVEL_LINKS: NavLink[] = [];
