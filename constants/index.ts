import { FooterNavItem, LinkItem } from "@/types";
import { Github, Linkedin, Twitter } from "lucide-react";

export const links: LinkItem[] = [
  { id: 0, name: "Blog", to: "/blogs" },
  { id: 1, name: "About", to: "/about" },
  { id: 3, name: "Search", to: "/search" },
];

export const footerNavigation: FooterNavItem[] = [
  {
    name: "GitHub",
    href: "/",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "/",
    icon: Twitter,
  },
  {
    name: "Linkedin",
    href: "/",
    icon: Linkedin,
  },
];

export const postsPerPage = 5;

export const email = "siddabdullah46@gmail.com";
