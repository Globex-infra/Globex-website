"use client";

import Image from "next/image";
import { useState } from "react";
import type { ClientLogo } from "@/types";

type Props = {
  client: ClientLogo;
  /** Lighter fallback text on second marquee row */
  muted?: boolean;
};

// ─── ClientMarqueeLogo — Clearbit logo with graceful name fallback ────────────
export function ClientMarqueeLogo({ client, muted }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`text-sm font-medium whitespace-nowrap max-w-[11rem] truncate ${
          muted ? "text-gray-300" : "text-gray-400"
        } group-hover/item:text-primary transition-colors duration-300`}
        title={client.name}
      >
        {client.name}
      </span>
    );
  }

  return (
    <Image
      src={client.logoUrl}
      alt={client.name}
      title={client.name}
      width={160}
      height={56}
      unoptimized
      className="h-10 w-auto max-w-[160px] object-contain object-left opacity-55 grayscale group-hover/item:opacity-100 group-hover/item:grayscale-0 transition-all duration-300"
      onError={() => setFailed(true)}
    />
  );
}
