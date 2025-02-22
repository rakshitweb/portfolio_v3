"use client";

import { useEffect, useRef, useState } from "react";

const translateTransform = "translate(-50%, -50%)";

export function MousePointer() {
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const previousMouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  let currentScale = useRef(0);
  let currentAngle = useRef(0);
  const speed = 0.17;

  useEffect(() => {
    if (window.navigator.maxTouchPoints > 0) {
      setIsTouchScreen(true);
    } else {
      if (outerCursorRef.current) {
        outerCursorRef.current.classList.remove("hidden");
      }
      if (innerCursorRef.current) {
        innerCursorRef.current.classList.remove("hidden");
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const tick = () => {
      // MOVE
      circle.current.x += (mouse.current.x - circle.current.x) * speed;
      circle.current.y += (mouse.current.y - circle.current.y) * speed;

      // SQUEEZE
      const deltaMouseX = mouse.current.x - previousMouse.current.x;
      const deltaMouseY = mouse.current.y - previousMouse.current.y;
      previousMouse.current.x = mouse.current.x;
      previousMouse.current.y = mouse.current.y;
      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150,
      );
      const scaleValue = (mouseVelocity / 150) * 0.5;
      currentScale.current += (scaleValue - currentScale.current) * speed;
      const scaleTransform = `scale(${1 + currentScale.current}, ${
        1 - currentScale.current
      })`;

      // ROTATE
      const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
      if (mouseVelocity > 20) {
        currentAngle.current = angle;
      }
      const rotateTransform = `rotate(${currentAngle.current}deg)`;

      if (outerCursorRef.current) {
        outerCursorRef.current.style.top = circle.current.y + "px";
        outerCursorRef.current.style.left = circle.current.x + "px";
        outerCursorRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
      }
      if (innerCursorRef.current) {
        innerCursorRef.current.style.top = circle.current.y + "px";
        innerCursorRef.current.style.left = circle.current.x + "px";
        innerCursorRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
      }

      if (outerCursorRef.current && innerCursorRef.current) {
        const mouseOverElement = document.elementFromPoint(
          circle.current.x,
          circle.current.y,
        );

        if (
          mouseOverElement &&
          mouseOverElement.classList.contains("content")
        ) {
          outerCursorRef.current.classList.add("active");
          innerCursorRef.current.classList.add("active");
        } else {
          outerCursorRef.current.classList.remove("active");
          innerCursorRef.current.classList.remove("active");
        }
      }

      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isTouchScreen) {
    return null;
  }

  return (
    <>
      <div
        ref={outerCursorRef}
        className="hidden cursor-outer z-mouse-pointer fixed left-0 top-0 pointer-events-none w-[5rem] aspect-square border-2 border-solid border-primary rounded-full transition-all duration-100"
      />
      <div
        ref={innerCursorRef}
        className="hidden cursor-inner fixed z-mouse-pointer left-0 top-0 w-4 aspect-square bg-primary rounded-full pointer-events-none transition-all duration-110"
      />
    </>
  );
}
