"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CategoryIcon } from "./CategoryIcon";
import { CategorySlug, Photo } from "@/lib/listings";
import { withBasePath } from "@/lib/basePath";

export function ListingGallery({
  photos,
  title,
  category,
  sold,
}: {
  photos: Photo[];
  title: string;
  category: CategorySlug;
  sold: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const hasPhotos = photos.length > 0;
  const hasMultiple = photos.length > 1;

  function goTo(nextIndex: number) {
    const total = photos.length;
    setIndex(((nextIndex % total) + total) % total);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      goTo(index + (deltaX < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  }

  useEffect(() => {
    if (!lightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, index]);

  return (
    <>
      <div
        className="relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden bg-muted"
        onTouchStart={hasMultiple ? handleTouchStart : undefined}
        onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      >
        {hasPhotos ? (
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="block h-full w-full cursor-zoom-in appearance-none border-0 bg-transparent p-0 text-left"
            aria-label={`Ampliar foto de ${title}`}
          >
            <Image
              src={withBasePath(photos[index].src)}
              alt={photos[index].alt}
              fill
              unoptimized
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <CategoryIcon category={category} className="h-9 w-9 opacity-40" />
            <span className="text-xs tracking-wide uppercase opacity-60">Foto em breve</span>
          </div>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Foto anterior"
              className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-0 text-lg text-white opacity-0 shadow transition-opacity group-hover:opacity-100 focus-visible:opacity-100 hover:bg-black/75"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Próxima foto"
              className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-0 text-lg text-white opacity-0 shadow transition-opacity group-hover:opacity-100 focus-visible:opacity-100 hover:bg-black/75"
            >
              ›
            </button>

            <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {photos.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full shadow transition-colors ${
                    i === index ? "bg-accent" : "bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {sold && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-[1px]">
            <span className="rotate-[-8deg] rounded-md border-2 border-foreground/80 px-4 py-1 text-sm font-semibold tracking-widest text-foreground/80 uppercase">
              Vendido
            </span>
          </div>
        )}
      </div>

      {lightboxOpen && hasPhotos && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fechar"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 p-0 text-xl text-white hover:bg-black/75"
          >
            ×
          </button>

          <div
            className="relative flex h-full w-full max-w-3xl flex-col items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative h-[75vh] w-full touch-pan-y select-none"
              onTouchStart={hasMultiple ? handleTouchStart : undefined}
              onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
            >
              <Image
                src={withBasePath(photos[index].src)}
                alt={photos[index].alt}
                fill
                unoptimized
                className="object-contain"
              />

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    aria-label="Foto anterior"
                    className="absolute top-1/2 left-0 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-0 text-2xl text-white hover:bg-black/75"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    aria-label="Próxima foto"
                    className="absolute top-1/2 right-0 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-0 text-2xl text-white hover:bg-black/75"
                  >
                    ›
                  </button>

                  <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 pb-2">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Ir para foto ${i + 1}`}
                        className={`h-2 w-2 rounded-full p-0 shadow transition-colors ${
                          i === index ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {photos[index].alt && (
              <p className="line-clamp-2 max-w-full px-4 text-center text-sm text-white/80">
                {photos[index].alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
