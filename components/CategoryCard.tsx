import Link from "next/link";
import { Category, getCategoryDatesAdded, getListingsByCategory } from "@/lib/listings";
import { CategoryIcon } from "./CategoryIcon";
import { NewBadge } from "./NewBadge";

export function CategoryCard({ category }: { category: Category }) {
  const listings = getListingsByCategory(category.slug);
  const available = listings.filter((l) => l.status === "disponivel").length;
  const datesAdded = getCategoryDatesAdded(category.slug);

  return (
    <Link
      href={`/${category.slug}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      <NewBadge dates={datesAdded} />

      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <CategoryIcon category={category.slug} className="h-5 w-5" />
      </span>

      <div>
        <h3 className="font-display text-xl text-foreground">{category.label}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
      </div>

      <span className="mt-auto text-xs text-muted-foreground">
        {available} {available === 1 ? category.singular : category.plural}{" "}
        {available === 1 ? "disponível" : "disponíveis"}
      </span>
    </Link>
  );
}
