"use client";

import { useState } from "react";
import { useWindowSize } from "@/utils";
import { SideElement } from "./SideElement";
import { WelcomeScreen } from "../Animations";
import { Card } from "../Card";
import { Github, LinkedIn } from "../SVG";
import { SOCIAL_LINKS } from "./data";

export function HeroSection() {
  const [showAnimation, setShowAnimation] = useState(false);
  const windowSize = useWindowSize();
  const onWelcomeAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      {showAnimation && (
        <WelcomeScreen
          onWelcomeAnimationComplete={onWelcomeAnimationComplete}
        />
      )}
      {windowSize.width >= 900 && (
        <SideElement orientation="left">
          <ul className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  href={link.link}
                  className="p-4 text-text text-sm sideways-lr tracking-widest hover:text-primary"
                >
                  {link.node || link.label}
                </a>
              </li>
            ))}
          </ul>
        </SideElement>
      )}
      <section className="min-h-full flex justify-center items-center">
        <Card>
          <h1 className="content text-text text-[4rem]">Hi there</h1>
        </Card>
      </section>
      {windowSize.width >= 900 && (
        <SideElement orientation="right">
          <a
            href="mailto:rakshitagr1012@gmail.com"
            className="text-text text-opacity-50 text-sm tracking-widest vertical-lr hover:text-opacity-100 transition-all duration-200 cursor-pointer"
          >
            rakshitagr1012@gmail.com
          </a>
        </SideElement>
      )}
    </>
  );
}
