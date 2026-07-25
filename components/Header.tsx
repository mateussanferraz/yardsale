import Link from "next/link";

export function Header({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg text-foreground">Mateus e Bella</span>
          <span className="text-xs text-muted-foreground">vendem tudo</span>
        </Link>

        {current ? (
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Todas as categorias
          </Link>
        ) : (
          <a
            href="#categorias"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver categorias
          </a>
        )}
      </div>
    </header>
  );
}
