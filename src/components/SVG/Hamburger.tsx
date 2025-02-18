import React, { forwardRef } from "react";

export const Hamburger = forwardRef<
  SVGSVGElement,
  {
    width?: number | string;
    height?: number | string;
    className?: string;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
  }
>(({ width = 45, height = 45, className = "", onClick }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      viewBox="-2.4 -2.4 28.80 28.80"
      fill="none"
      stroke="url(#primary-gradient)"
      strokeWidth="1.104"
      transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
    >
      <defs>
        <linearGradient
          id="primary-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{ stopColor: "rgb(var(--primary))", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(var(--secondary))", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#primary-gradient)"
        strokeWidth="0.096"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M5 8H13.75M5 12H19M10.25 16L19 16"
          stroke="url(#primary-gradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
});

Hamburger.displayName = "Hamburger";
