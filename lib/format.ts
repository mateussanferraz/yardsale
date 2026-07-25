export function formatPrice(value?: number): string {
  if (value === undefined) return "Preço a definir";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
