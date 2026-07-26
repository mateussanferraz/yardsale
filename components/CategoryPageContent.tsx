import { CategorySlug, getCategory, getListingsByCategory } from "@/lib/listings";
import { ListingCard } from "./ListingCard";
import { CategoryIcon } from "./CategoryIcon";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RoupasGrid } from "./RoupasGrid";

export function CategoryPageContent({ slug }: { slug: CategorySlug }) {
  const category = getCategory(slug);
  const listings = getListingsByCategory(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Header current={category.label} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <div className="mb-10 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
            <CategoryIcon category={slug} className="h-6 w-6" />
          </span>
          <div>
            <h1 className="font-display text-3xl text-foreground">{category.label}</h1>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
        </div>

        {listings.length > 0 ? (
          slug === "roupas" ? (
            <RoupasGrid listings={listings} />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )
        ) : (
          <p className="text-sm text-muted-foreground">
            Ainda não há itens nessa categoria. Volte em breve.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
