import { CategorySlug } from "@/lib/listings";

const paths: Record<CategorySlug, React.ReactNode> = {
  "jogos-de-tabuleiro": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  roupas: (
    <path d="M8 4 L4 8 L6.5 10.5 L8 9.5 V20 H16 V9.5 L17.5 10.5 L20 8 L16 4 C16 5.5 14.5 6.5 12 6.5 C9.5 6.5 8 5.5 8 4 Z" />
  ),
  moveis: (
    <>
      <path d="M5 11 V19 M19 11 V19" />
      <path d="M4 11 C4 8 6 6 9 6 H15 C18 6 20 8 20 11" />
      <path d="M4 15 H20" />
    </>
  ),
  sapatos: (
    <path d="M4 17 V13 C4 11.5 5.5 10.5 6.5 9.5 C7.5 8.5 8 7 9.5 7 C10.5 7 10.5 8.5 11.5 9.5 C12.5 10.5 14.5 10.5 16.5 11.5 C18.5 12.5 20 13.5 20 15.5 V17 Z" />
  ),
  discos: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),
};

export function CategoryIcon({
  category,
  className,
}: {
  category: CategorySlug;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[category]}
    </svg>
  );
}
