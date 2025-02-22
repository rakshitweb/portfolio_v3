import { forwardRef } from "react";

export const LinkedIn = forwardRef<
  SVGSVGElement,
  { width?: number | string; height?: number | string }
>(({ width = 20, height = 20 }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>LinkedIn</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
});

LinkedIn.displayName = "LinkedIn";
