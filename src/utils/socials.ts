import { siteConfig } from "../config";
import { SOCIAL_ICONS, type SocialIconData } from "../data/socialIcons";

export interface SocialLinkItem {
  name: string;
  url: string;
  iconData: SocialIconData;
}

export function getSocialLinks(): SocialLinkItem[] {
  const links = [
    {
      name: "Email",
      url: siteConfig.social?.email ? `mailto:${siteConfig.social.email}` : undefined,
      iconData: SOCIAL_ICONS.Email,
    },
    {
      name: "LinkedIn",
      url: siteConfig.social?.linkedin,
      iconData: SOCIAL_ICONS.LinkedIn,
    },
    {
      name: "X (Twitter)",
      url: siteConfig.social?.twitter,
      iconData: SOCIAL_ICONS.Twitter,
    },
    {
      name: "GitHub",
      url: siteConfig.social?.github,
      iconData: SOCIAL_ICONS.GitHub,
    },
  ];

  return links.filter((link): link is SocialLinkItem => !!link.url);
}