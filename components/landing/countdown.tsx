"use client";

import { useSyncExternalStore } from "react";

import { CAMPAIGN_ENDS_AT } from "@/lib/offers";

const target = new Date(CAMPAIGN_ENDS_AT).getTime();

const subscribe = (onTick: () => void) => {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
};

const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => null;

const pad = (value: number) => String(value).padStart(2, "0");

export const Countdown = () => {
  const nowSeconds = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const remaining =
    nowSeconds === null
      ? null
      : Math.max(0, Math.floor(target / 1000) - nowSeconds);

  const units = [
    {
      label: "dias",
      value: remaining === null ? null : Math.floor(remaining / 86_400),
    },
    {
      label: "horas",
      value:
        remaining === null ? null : Math.floor((remaining % 86_400) / 3600),
    },
    {
      label: "min",
      value: remaining === null ? null : Math.floor((remaining % 3600) / 60),
    },
    { label: "seg", value: remaining === null ? null : remaining % 60 },
  ];

  return (
    <div
      role="timer"
      aria-label="Tempo restante da Black Friday Macedo"
      className="flex items-stretch gap-2"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-16 flex-col items-center rounded-md border border-white/15 bg-white/5 px-3 py-2"
        >
          <span className="font-display text-gold text-3xl leading-none font-bold tabular-nums">
            {unit.value === null ? "--" : pad(unit.value)}
          </span>
          <span className="mt-1 text-xs font-medium tracking-wide text-white/70 uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
