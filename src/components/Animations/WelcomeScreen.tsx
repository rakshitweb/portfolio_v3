"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const LANGUAGES = ["Hello", "नमस्ते", "Hola", "こんにちは"];
const INTERVAL = 1200;
let intervalID: NodeJS.Timeout | undefined = undefined;
let bodyTag: HTMLElement | null = null;

export function WelcomeScreen({
  onWelcomeAnimationComplete,
}: {
  onWelcomeAnimationComplete?: () => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const welcomeTextRef = useRef<HTMLHeadingElement>(null);
  const [languageIndex, setLanguageIndex] = useState(0);

  useEffect(() => {
    bodyTag = document.querySelector("body");
    if (bodyTag) {
      bodyTag.style.overflow = "hidden";
    }
  }, []);

  useGSAP(
    () => {
      intervalID = setInterval(() => {
        gsap.to(welcomeTextRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => {
            setLanguageIndex((prev) => prev + 1);
          },
        });
      }, INTERVAL);
    },
    { scope: sectionRef },
  );

  useGSAP(() => {
    gsap.fromTo(
      welcomeTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
    );
  }, [languageIndex]);

  useGSAP(() => {
    if (languageIndex > LANGUAGES.length - 2) {
      gsap.to(sectionRef.current, {
        scale: 10,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        onComplete: () => {
          if (bodyTag) {
            bodyTag.style.overflow = "auto";
          }
          if (onWelcomeAnimationComplete) {
            onWelcomeAnimationComplete();
          }
        },
      });
    }
  }, [languageIndex]);

  useEffect(() => {
    if (languageIndex > LANGUAGES.length - 2) {
      clearInterval(intervalID);
    }
  }, [languageIndex]);

  return (
    <section
      ref={sectionRef}
      className="bg-background fixed inset-0 z-overlay flex justify-center items-center w-full h-full"
    >
      <h3
        ref={welcomeTextRef}
        className="content relative text-primary text-[4.5rem] lg:text-[6rem] pl-10 before:content-[''] before:absolute before:top-[50%] before:left-0 before:translate-y-[-50%] before:w-4 before:h-4 before:bg-primary before:rounded-[100%]"
      >
        {LANGUAGES[languageIndex]}
      </h3>
    </section>
  );
}
