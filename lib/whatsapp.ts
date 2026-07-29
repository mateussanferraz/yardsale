import { Listing, SELLERS } from "./listings";
import { formatPrice } from "./format";

const SITE_URL = "https://mateussanferraz.github.io/yardsale";

export function buildWhatsAppLink(listing: Listing): string {
  const seller = SELLERS[listing.seller];
  const link = `${SITE_URL}/${listing.category}/#${listing.id}`;
  const message = `Oi ${seller.name}, estou interessado em "${listing.title}" (${formatPrice(listing.price)}), você ainda tem disponível?\n${link}`;
  return `https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(message)}`;
}
