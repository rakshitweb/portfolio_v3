import { ReactNode } from "react";
import { Github, LinkedIn } from "../SVG";

export const SOCIAL_LINKS: {
  id: string;
  link: string;
  label?: string;
  node?: ReactNode;
}[] = [
  {
    id: "resume",
    link: "/resume.pdf",
    label: "Resume",
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/rakshit-agrawal-a1883b192/",
    node: <LinkedIn />,
  },
  {
    id: "github",
    link: "https://github.com/rakshitweb",
    node: <Github />,
  },
];
