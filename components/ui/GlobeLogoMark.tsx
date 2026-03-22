"use client";

import { forwardRef, useId } from "react";

/**
 * Vector recreation of the GlobeX mark — four independent petals for intro animation.
 * Top pair: light; bottom pair: brand gradient (matches site primary).
 */
export const GlobeLogoMark = forwardRef<SVGSVGElement, { className?: string }>(
  function GlobeLogoMark({ className }, ref) {
  const gradId = useId().replace(/:/g, "");
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="-60 -60 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0f0ee" />
          <stop offset="55%" stopColor="#6b9aad" />
          <stop offset="100%" stopColor="#0E516D" />
        </linearGradient>
      </defs>
      {/* NW — light */}
      <path
        className="globe-x-petal"
        data-petal="nw"
        fill="#d9d9d6"
        d="M0 0 C-6 -6 -28 -32 -38 -28 C-42 -22 -28 -10 -12 -4 C-4 -1 0 0 0 0 Z"
      />
      {/* NE — light */}
      <path
        className="globe-x-petal"
        data-petal="ne"
        fill="#d9d9d6"
        d="M0 0 C6 -6 28 -32 38 -28 C42 -22 28 -10 12 -4 C4 -1 0 0 0 0 Z"
      />
      {/* SW — gradient */}
      <path
        className="globe-x-petal"
        data-petal="sw"
        fill={`url(#${gradId})`}
        d="M0 0 C-6 6 -28 32 -38 28 C-42 22 -28 10 -12 4 C-4 1 0 0 0 0 Z"
      />
      {/* SE — gradient */}
      <path
        className="globe-x-petal"
        data-petal="se"
        fill={`url(#${gradId})`}
        d="M0 0 C6 6 28 32 38 28 C42 22 28 10 12 4 C4 1 0 0 0 0 Z"
      />
    </svg>
  );
  }
);
