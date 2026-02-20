import { siteConfig } from "../config";

export interface NavLink {
  href: string;
  label: string;
}

export function getNavLinks(): NavLink[] {
  const links = [
    { href: "#about", label: "About", show: true },
    { href: "#skills", label: "Skills", show: siteConfig.skills && siteConfig.skills.length > 0 },
    { 
      href: "#projects", 
      label: "Projects", 
      show: siteConfig.projects && siteConfig.projects.length > 0 
    },
    { 
      href: "#experience", 
      label: "Experience", 
      show: siteConfig.experience && siteConfig.experience.length > 0 
    },
    { 
      href: "#education", 
      label: "Education", 
      show: siteConfig.education && siteConfig.education.length > 0 
    },
  ];

  return links.filter((link) => link.show);
}