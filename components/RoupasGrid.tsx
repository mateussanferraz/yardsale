"use client";

import { useState } from "react";
import { Listing, SellerId } from "@/lib/listings";
import { ListingCard } from "./ListingCard";

type Filter = "todos" | SellerId;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "mateus", label: "Masculino" },
  { value: "bella", label: "Feminino" },
];

export function RoupasGrid({ listings }: { listings: Listing[] }) {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = listings.filter((listing) => filter === "todos" || listing.seller === filter);

  return (
    <>
      <div className="mb-6 inline-flex rounded-full border border-border bg-surface p-1">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === value
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Nenhuma peça encontrada com esse filtro.</p>
      )}
    </>
  );
}
