"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

function getTimeLeft(targetMs: number) {
  const diff = Math.max(0, targetMs - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const target = new Date(siteConfig.weddingDateISO).getTime();
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    // Immediately sync the clock on mount, then tick once a second.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { label: "days", value: time?.days },
    { label: "hours", value: time?.hours },
    { label: "minutes", value: time?.mins },
    { label: "seconds", value: time?.secs },
  ];

  return (
    <div
      className="mt-14 grid max-w-lg grid-cols-4 gap-3.5"
      aria-label="Countdown to the wedding"
    >
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-sm border border-forest/10 bg-ivory px-1.5 py-4 text-center shadow-[0_18px_40px_rgba(46,58,40,0.10)]"
        >
          <span className="font-display block text-[clamp(1.7rem,4vw,2.5rem)] font-semibold leading-none text-wine-deep">
            {c.value === undefined ? "00" : pad(c.value)}
          </span>
          <span className="mt-1.5 block text-[0.72rem] tracking-wide text-forest/65">
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
}
