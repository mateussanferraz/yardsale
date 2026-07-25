import { SELLERS, SellerId } from "./listings";

export function buildWhatsAppLink(sellerId: SellerId, itemTitle: string): string {
  const seller = SELLERS[sellerId];
  const message = `Oi ${seller.name}, estou interessado em "${itemTitle}", você ainda tem disponível?`;
  return `https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(message)}`;
}
