import Link from "next/link";
import { Logo } from "../SVG";
import { Wrapper } from "../Wrapper";

const NAV_LINKS: { id: string; href: string; label: string }[] = [
  {
    id: "about",
    href: "#about",
    label: "about",
  },
  {
    id: "experience",
    href: "#experience",
    label: "experience",
  },
  {
    id: "education",
    href: "#education",
    label: "education",
  },
  {
    id: "work",
    href: "#work",
    label: "work",
  },
  {
    id: "contact",
    href: "#contact",
    label: "contact",
  },
];

export function Navbar() {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md">
      <Wrapper className="py-2 lg:py-4 flex justify-between gap-4 items-stretch">
        <Logo />
        <ul className="flex items-center">
          {NAV_LINKS.map((link, index) => (
            <li key={link.id} className="px-6">
              <Link
                href={link.href}
                className="text-base text-text capitalize hover:text-primary transition-all duration-150"
              >
                {(index + 1).toString().padStart(2, "0")}. {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </nav>
  );
}
