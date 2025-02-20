import { forwardRef } from "react";

export const Ball = forwardRef<
  SVGSVGElement,
  {
    className?: string;
    width?: number | string;
    height?: string | number;
  }
>(({ className = "", width = 350, height = 350 }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 750 750"
      fill="none"
    >
      <g filter="url(#filter0_f_1_2)">
        <circle cx="375" cy="375" r="200" fill="inherit" />
      </g>
      <defs>
        <filter
          id="filter0_f_1_2"
          x="0"
          y="0"
          width="750"
          height="750"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_1_2"
          />
        </filter>
      </defs>
    </svg>
  );
});

Ball.displayName = "Ball";
