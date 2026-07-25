import Link from "next/link";
import { Category, getListingsByCategory } from "@/lib/listings";
import { CategoryIcon } from "./CategoryIcon";

export function CategoryCard({ category }: { category: Category }) {
  const listings = getListingsByCategory(category.slug);
  const available = listings.filter((l) => !l.sold).length;

  return (
    <Link
      href={`/${category.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
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
