"use client";

import { useCustomCursor } from "@/hooks/useCustomCursor";

// ─── CustomCursor ─────────────────────────────────────────────────────────────
export function CustomCursor() {
  const { cursorRef, followerRef } = useCustomCursor();

  return (
    <>
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={followerRef} className="cursor-follower" aria-hidden="true" />
    </>
  );
}
