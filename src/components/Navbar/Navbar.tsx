"use client";

import Link from "next/link";
import { Hamburger, Logo } from "../SVG";
import {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

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

const NavLinkList = ({
  className = "",
  style = {},
  ref = undefined,
  onClick = undefined,
}: {
  className?: string;
  style?: React.CSSProperties;
  ref?: RefObject<HTMLUListElement | null>;
  onClick?: MouseEventHandler;
}) => (
  <ul ref={ref} className={className} style={style}>
    {NAV_LINKS.map((link, index) => (
      <li key={link.id} className="px-6" onClick={onClick}>
        <Link
          href={link.href}
          className="text-sm text-text capitalize hover:text-primary transition-all duration-150"
        >
          {(index + 1).toString().padStart(2, "0")}. {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

const navLinkLocation: { top: number | undefined; right: number | undefined } =
  {
    top: undefined,
    right: undefined,
  };

export function Navbar() {
  const hamburgerRef = useRef(null);
  const drawerRef = useRef(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 900) return;

    function handleDrawerOnScroll() {
      if (openDrawer) setOpenDrawer(false);
    }

    function handleDrawerOnClick(e: MouseEvent) {
      if (!openDrawer) return;
      const { x, y } = e;
      if (drawerRef.current) {
        //@ts-expect-error Get bounding client Rect giving typescript error
        const dimension = drawerRef.current.getBoundingClientRect();
        const { left, right, bottom, top } = dimension;
        if (x < left || x > right || y < top || y > bottom)
          setOpenDrawer(false);
      }
    }

    function handleDrawerOnResize() {
      if (openDrawer) setOpenDrawer(false);
    }

    document.addEventListener("scroll", handleDrawerOnScroll);
    document.addEventListener("click", handleDrawerOnClick);
    window.addEventListener("resize", handleDrawerOnResize);

    return () => {
      document.removeEventListener("scroll", handleDrawerOnScroll);
      document.removeEventListener("click", handleDrawerOnClick);
      window.removeEventListener("resize", handleDrawerOnResize);
    };
  }, [openDrawer]);

  const handleHamburgerClick = () => {
    if (openDrawer) {
      setOpenDrawer(false);
      return;
    }
    if (hamburgerRef.current) {
      //@ts-expect-error Get bounding client Rect giving typescript error
      const dimension = hamburgerRef.current.getBoundingClientRect();
      navLinkLocation.top = dimension.top + dimension.height + 15;
      navLinkLocation.right = window.innerWidth - dimension.right;
      setOpenDrawer(true);
    }
  };

  return (
    <nav className="fixed top-0 z-navbar w-full px-4 sm:px-8 py-2 lg:py-4 flex justify-between gap-4 items-stretch bg-white bg-opacity-10 backdrop-filter backdrop-blur-md">
      <Link href="/">
        <Logo />
      </Link>
      <Hamburger
        ref={hamburgerRef}
        onClick={handleHamburgerClick}
        className="relative cursor-pointer md:hidden"
      />
      <NavLinkList className="hidden md:flex items-center" />
      {openDrawer && (
        <NavLinkList
          ref={drawerRef}
          onClick={() => setOpenDrawer(false)}
          className="bg-white bg-opacity-15 p-3 rounded-md absolute flex flex-col gap-2"
          style={{
            top: navLinkLocation.top + "px",
            right: navLinkLocation.right + "px",
          }}
        />
      )}
    </nav>
  );
}
