import { Listing, SELLERS } from "@/lib/listings";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ListingGallery } from "./ListingGallery";

export function ListingCard({ listing }: { listing: Listing }) {
  const seller = SELLERS[listing.seller];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg hover:shadow-black/5">
      <ListingGallery
        photos={listing.photos}
        title={listing.title}
        category={listing.category}
        sold={listing.sold}
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug text-foreground">{listing.title}</h3>
          <span className="shrink-0 font-display text-lg text-accent">
            {formatPrice(listing.price)}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
            {listing.condition}
          </span>
          {listing.year && (
            <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {listing.year}
            </span>
          )}
          {listing.languages?.map((language) => (
            <span
              key={language}
              className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
            >
              {language}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{listing.description}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-xs text-muted-foreground">
            Com <span className="text-foreground">{seller.name}</span>
          </span>

          {listing.sold ? (
            <span className="text-xs text-muted-foreground italic">Indisponível</span>
          ) : (
            <a
              href={buildWhatsAppLink(listing.seller, listing.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Chamar no WhatsApp
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
