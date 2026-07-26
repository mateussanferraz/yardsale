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
  "objetos-gerais": (
    <>
      <path d="M4 8 L12 4 L20 8 L12 12 Z" />
      <path d="M4 8 V16 L12 20 V12" />
      <path d="M20 8 V16 L12 20" />
    </>
  ),
  cozinha: (
    <>
      <path d="M4 10 H18 V13 C18 16.5 15.5 19 12 19 C8.5 19 6 16.5 6 13 V10 Z" />
      <path d="M18 11 H19.5 C20.5 11 21 11.5 21 12.5 C21 13.5 20.5 14 19.5 14 H18" />
      <path d="M8 8 V5 M12 8 V5 M16 8 V5" />
    </>
  ),
  livros: (
    <>
      <path d="M12 6 C10.5 5 8 4.5 5 5 V17 C8 16.5 10.5 17 12 18" />
      <path d="M12 6 C13.5 5 16 4.5 19 5 V17 C16 16.5 13.5 17 12 18" />
      <path d="M12 6 V18" />
    </>
  ),
  eletronicos: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M9 19 H15 M12 16 V19" />
    </>
  ),
  acessorios: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <path d="M8 9 V7 C8 5 9.5 4 12 4 C14.5 4 16 5 16 7 V9" />
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
