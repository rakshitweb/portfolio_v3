"use client";

import { useState } from "react";
import { WelcomeScreen } from "../Animations";

export function HeroSection() {
  const [showAnimation, setShowAnimation] = useState(true);

  const onWelcomeAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      {showAnimation ? (
        <WelcomeScreen
          onWelcomeAnimationComplete={onWelcomeAnimationComplete}
        />
      ) : (
        <h1 className="text-text text-[40rem]">Hi there</h1>
      )}
    </>
  );
}
