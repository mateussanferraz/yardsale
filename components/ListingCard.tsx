import { Listing, SELLERS, SEPTEMBER_DELIVERY_TAG, DONATION_TAG } from "@/lib/listings";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ListingGallery } from "./ListingGallery";

export function ListingCard({ listing }: { listing: Listing }) {
  const seller = SELLERS[listing.seller];
  const isDonation = listing.tags?.includes(DONATION_TAG) ?? false;

  return (
    <article
      id={listing.id}
      className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      <ListingGallery
        photos={listing.photos}
        title={listing.title}
        category={listing.category}
        status={listing.status}
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg leading-snug text-foreground">{listing.title}</h3>
            {listing.author && (
              <p className="text-sm text-muted-foreground">{listing.author}</p>
            )}
          </div>
          <span className="shrink-0 font-display text-lg text-accent">
            {isDonation ? "Doação" : formatPrice(listing.price)}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {listing.condition && (
            <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {listing.condition}
            </span>
          )}
          {listing.size && (
            <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              Tamanho {listing.size}
            </span>
          )}
          {listing.color && (
            <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {listing.color}
            </span>
          )}
          {listing.brand && (
            <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {listing.brand}
            </span>
          )}
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
          {listing.tags?.map((tag) => {
            if (tag === SEPTEMBER_DELIVERY_TAG) {
              return (
                <span
                  key={tag}
                  className="w-fit rounded-full bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              );
            }
            if (tag === DONATION_TAG) {
              return (
                <span
                  key={tag}
                  className="w-fit rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              );
            }
            return (
              <span
                key={tag}
                className="w-fit rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            );
          })}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{listing.description}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-xs text-muted-foreground">
            Com <span className="text-foreground">{seller.name}</span>
          </span>

          {listing.status !== "disponivel" ? (
            <span className="text-xs text-muted-foreground italic">
              {listing.status === "reservado" ? "Reservado" : "Vendido"}
            </span>
          ) : (
            <a
              href={buildWhatsAppLink(listing)}
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
