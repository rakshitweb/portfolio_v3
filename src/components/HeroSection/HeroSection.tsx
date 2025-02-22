"use client";

import { useState } from "react";
import { WelcomeScreen } from "../Animations";
import { Card } from "../Card";
import { Wrapper } from "../Wrapper";

export function HeroSection() {
  const [showAnimation, setShowAnimation] = useState(false);

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
      <section className="my-10">
        <Wrapper>
          <Card>
            <h1 className="content text-text text-[4rem]">Hi there</h1>
          </Card>
        </Wrapper>
      </section>
    </>
  );
}
