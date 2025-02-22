"use client";

import { useEffect, useState } from "react";
import { WelcomeScreen } from "../Animations";
import { Card } from "../Card";
import { SideElement } from "./SideElement";
import { useWindowSize } from "@/utils";
import { Github, LinkedIn } from "../SVG";

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
            <li>
              <a
                target="_blank"
                href="/resume.pdf"
                className="p-4 text-text text-sm sideways-lr tracking-widest hover:text-primary"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rakshit-agrawal-a1883b192/"
                className="p-4 text-text sideways-lr tracking-widest hover:text-primary"
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/rakshitweb"
                className="p-4 text-text sideways-lr tracking-widest hover:text-primary"
              >
                <Github />
              </a>
            </li>
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
