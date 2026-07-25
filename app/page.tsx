import { CATEGORIES } from "@/lib/listings";
import { CategoryCard } from "@/components/CategoryCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const STEPS = [
  {
    title: "Escolha o item",
    description: "Navegue pelas categorias e veja fotos, preço e estado de cada peça.",
  },
  {
    title: "Chame no WhatsApp",
    description: "Cada anúncio tem um botão direto para o WhatsApp de quem está vendendo.",
  },
  {
    title: "Combine a entrega",
    description: "Retirada perto da Estação Santa Cruz, ou envio a combinar.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            Mudança para a Espanha
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Mateus e Bella vendem tudo
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Estamos arrumando as malas e vendendo o que não vai com a gente: jogos de tabuleiro,
            roupas, móveis, sapatos e discos. Retirada combinada perto da Estação Santa Cruz
            (Metrô) ou em pontos próximos — envio a combinar.
          </p>
        </section>

        <section id="categorias" className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="font-display text-2xl text-foreground">Como funciona</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <div key={step.title}>
                <span className="font-display text-3xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-medium text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
