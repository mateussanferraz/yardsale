"use client";

import { useSyncExternalStore } from "react";

const NEW_LISTING_WINDOW_DAYS = 3;

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

export function NewBadge({ dates }: { dates: string[] }) {
  const isNew = useSyncExternalStore(
    subscribe,
    () => {
      const cutoff = Date.now() - NEW_LISTING_WINDOW_DAYS * 24 * 60 * 60 * 1000;
      return dates.some((date) => new Date(date).getTime() >= cutoff);
    },
    getServerSnapshot,
  );

  if (!isNew) return null;

  return (
    <span className="absolute top-4 right-4 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
      Novo
    </span>
  );
}
