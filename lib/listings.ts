export type CategorySlug =
  | "jogos-de-tabuleiro"
  | "roupas"
  | "moveis"
  | "sapatos"
  | "discos";

export interface Category {
  slug: CategorySlug;
  label: string;
  singular: string;
  plural: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "jogos-de-tabuleiro",
    label: "Jogos de Tabuleiro",
    singular: "jogo",
    plural: "jogos",
    description: "Jogos completos, com peças conferidas antes de anunciar.",
  },
  {
    slug: "roupas",
    label: "Roupas",
    singular: "peça",
    plural: "peças",
    description: "Peças em bom estado, lavadas e prontas para usar.",
  },
  {
    slug: "moveis",
    label: "Móveis",
    singular: "móvel",
    plural: "móveis",
    description: "Retirada combinada por causa do tamanho e do peso.",
  },
  {
    slug: "sapatos",
    label: "Sapatos",
    singular: "par",
    plural: "pares",
    description: "Numeração e estado de uso descritos em cada anúncio.",
  },
  {
    slug: "discos",
    label: "Discos",
    singular: "disco",
    plural: "discos",
    description: "Vinis de uma coleção pessoal, guardados com carinho.",
  },
];

export function getCategory(slug: CategorySlug): Category {
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) throw new Error(`Categoria desconhecida: ${slug}`);
  return category;
}

export type SellerId = "mateus" | "bella";

export interface SellerInfo {
  id: SellerId;
  name: string;
  whatsapp: string;
}

export const SELLERS: Record<SellerId, SellerInfo> = {
  mateus: { id: "mateus", name: "Mateus", whatsapp: "5511985073670" },
  bella: { id: "bella", name: "Bella", whatsapp: "5511987710543" },
};

export type Condition =
  | "Lacrado"
  | "Bem conservado"
  | "Com marcas de uso"
  | "Com defeitos ou problemas";

export interface Photo {
  src: string;
  alt: string;
}

export interface Listing {
  id: string;
  title: string;
  category: CategorySlug;
  price?: number;
  condition: Condition;
  year?: number;
  languages?: string[];
  description: string;
  photos: Photo[];
  seller: SellerId;
  sold: boolean;
}

export const LISTINGS: Listing[] = [
  {
    id: "sky-team",
    title: "Sky Team",
    category: "jogos-de-tabuleiro",
    price: 170,
    condition: "Bem conservado",
    languages: ["🇧🇷 Português"],
    description:
      "Jogo cooperativo para dois jogadores, poucas partidas jogadas. Caixa e componentes em ótimo estado.",
    photos: [
      { src: "/images/jogos-de-tabuleiro/sky-team/01.webp", alt: "Sky Team - foto 1" },
      { src: "/images/jogos-de-tabuleiro/sky-team/02.webp", alt: "Sky Team - foto 2" },
      { src: "/images/jogos-de-tabuleiro/sky-team/03.webp", alt: "Sky Team - foto 3" },
      { src: "/images/jogos-de-tabuleiro/sky-team/04.webp", alt: "Sky Team - foto 4" },
      { src: "/images/jogos-de-tabuleiro/sky-team/05.webp", alt: "Sky Team - foto 5" },
      { src: "/images/jogos-de-tabuleiro/sky-team/06.webp", alt: "Sky Team - foto 6" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "cores-com-dicas",
    title: "Cores com Dicas",
    category: "jogos-de-tabuleiro",
    price: 130,
    condition: "Com defeitos ou problemas",
    languages: ["🇧🇷 Português"],
    description:
      "Algumas cartas com problemas de desgaste (jogadas sem sleeves). Tabuleiro e demais componentes completos.",
    photos: [
      { src: "/images/jogos-de-tabuleiro/cores-com-dicas/01.webp", alt: "Cores com Dicas - foto 1" },
      { src: "/images/jogos-de-tabuleiro/cores-com-dicas/02.webp", alt: "Cores com Dicas - foto 2" },
      { src: "/images/jogos-de-tabuleiro/cores-com-dicas/03.webp", alt: "Cores com Dicas - foto 3" },
      { src: "/images/jogos-de-tabuleiro/cores-com-dicas/04.webp", alt: "Cores com Dicas - foto 4" },
      { src: "/images/jogos-de-tabuleiro/cores-com-dicas/05.webp", alt: "Cores com Dicas - foto 5" },
      { src: "/images/jogos-de-tabuleiro/cores-com-dicas/06.webp", alt: "Cores com Dicas - foto 6" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "heat-pedal-to-the-metal",
    title: "Heat: Pedal to the Metal + Expansão Chuva Forte",
    category: "jogos-de-tabuleiro",
    price: 530,
    condition: "Bem conservado",
    languages: ["🇧🇷 Português"],
    description:
      "Jogo base com a expansão Chuva Forte incluída. Cartas protegidas com sleeves desde a primeira partida.",
    photos: [
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/01.webp", alt: "Heat: Pedal to the Metal - foto 1" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/02.webp", alt: "Heat: Pedal to the Metal - foto 2" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/03.webp", alt: "Heat: Pedal to the Metal - foto 3" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/04.webp", alt: "Heat: Pedal to the Metal - foto 4" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/05.webp", alt: "Heat: Pedal to the Metal - foto 5" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/06.webp", alt: "Heat: Pedal to the Metal - foto 6" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/07.webp", alt: "Heat: Pedal to the Metal - foto 7" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/08.webp", alt: "Heat: Pedal to the Metal - foto 8" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/09.webp", alt: "Heat: Pedal to the Metal - foto 9" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/10.webp", alt: "Heat: Pedal to the Metal - foto 10" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/11.webp", alt: "Heat: Pedal to the Metal - foto 11" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/12.webp", alt: "Heat: Pedal to the Metal - foto 12" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/13.webp", alt: "Heat: Pedal to the Metal - foto 13" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/14.webp", alt: "Heat: Pedal to the Metal - foto 14" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/15.webp", alt: "Heat: Pedal to the Metal - foto 15" },
      { src: "/images/jogos-de-tabuleiro/heat-pedal-to-the-metal/16.webp", alt: "Heat: Pedal to the Metal - foto 16" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "robinson-crusoe",
    title: "Robinson Crusoe: Aventuras na Ilha Amaldiçoada",
    category: "jogos-de-tabuleiro",
    price: 250,
    condition: "Com marcas de uso",
    languages: ["🇧🇷 Português"],
    description:
      "Cartas protegidas com sleeves. Componentes completos, com marcas de uso normais de várias partidas.",
    photos: [
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/01.webp", alt: "Robinson Crusoe - foto 1" },
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/02.webp", alt: "Robinson Crusoe - foto 2" },
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/03.webp", alt: "Robinson Crusoe - foto 3" },
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/04.webp", alt: "Robinson Crusoe - foto 4" },
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/05.webp", alt: "Robinson Crusoe - foto 5" },
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/06.webp", alt: "Robinson Crusoe - foto 6" },
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/07.webp", alt: "Robinson Crusoe - foto 7" },
      { src: "/images/jogos-de-tabuleiro/robinson-crusoe/08.webp", alt: "Robinson Crusoe - foto 8" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "daybreak",
    title: "Daybreak",
    category: "jogos-de-tabuleiro",
    price: 330,
    condition: "Bem conservado",
    languages: ["🇧🇷 Português"],
    description:
      "Cartas protegidas com sleeves desde a primeira partida. Componentes completos e bem cuidados.",
    photos: [
      { src: "/images/jogos-de-tabuleiro/daybreak/01.webp", alt: "Daybreak - foto 1" },
      { src: "/images/jogos-de-tabuleiro/daybreak/02.webp", alt: "Daybreak - foto 2" },
      { src: "/images/jogos-de-tabuleiro/daybreak/03.webp", alt: "Daybreak - foto 3" },
      { src: "/images/jogos-de-tabuleiro/daybreak/04.webp", alt: "Daybreak - foto 4" },
      { src: "/images/jogos-de-tabuleiro/daybreak/05.webp", alt: "Daybreak - foto 5" },
      { src: "/images/jogos-de-tabuleiro/daybreak/06.webp", alt: "Daybreak - foto 6" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "harmonies",
    title: "Harmonies",
    category: "jogos-de-tabuleiro",
    price: 170,
    condition: "Bem conservado",
    languages: ["🇧🇷 Português"],
    description:
      "Cartas protegidas com sleeves. Jogo em ótimo estado, poucas partidas jogadas.",
    photos: [
      { src: "/images/jogos-de-tabuleiro/harmonies/01.webp", alt: "Harmonies - foto 1" },
      { src: "/images/jogos-de-tabuleiro/harmonies/02.webp", alt: "Harmonies - foto 2" },
      { src: "/images/jogos-de-tabuleiro/harmonies/03.webp", alt: "Harmonies - foto 3" },
      { src: "/images/jogos-de-tabuleiro/harmonies/04.webp", alt: "Harmonies - foto 4" },
      { src: "/images/jogos-de-tabuleiro/harmonies/05.webp", alt: "Harmonies - foto 5" },
      { src: "/images/jogos-de-tabuleiro/harmonies/06.webp", alt: "Harmonies - foto 6" },
      { src: "/images/jogos-de-tabuleiro/harmonies/07.webp", alt: "Harmonies - foto 7" },
      { src: "/images/jogos-de-tabuleiro/harmonies/08.webp", alt: "Harmonies - foto 8" },
      { src: "/images/jogos-de-tabuleiro/harmonies/09.webp", alt: "Harmonies - foto 9" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "spirit-island",
    title: "Spirit Island",
    category: "jogos-de-tabuleiro",
    price: 330,
    condition: "Bem conservado",
    languages: ["🇺🇸 Inglês"],
    description:
      "Edição em inglês (Fabled Nexus). Cartas protegidas com sleeves desde a primeira partida.",
    photos: [
      { src: "/images/jogos-de-tabuleiro/spirit-island/01.webp", alt: "Spirit Island - foto 1" },
      { src: "/images/jogos-de-tabuleiro/spirit-island/02.webp", alt: "Spirit Island - foto 2" },
      { src: "/images/jogos-de-tabuleiro/spirit-island/03.webp", alt: "Spirit Island - foto 3" },
      { src: "/images/jogos-de-tabuleiro/spirit-island/04.webp", alt: "Spirit Island - foto 4" },
      { src: "/images/jogos-de-tabuleiro/spirit-island/05.webp", alt: "Spirit Island - foto 5" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "jaqueta-jeans",
    title: "Jaqueta jeans tamanho M",
    category: "roupas",
    price: 80,
    condition: "Com marcas de uso",
    description: "Jaqueta jeans clássica, um pouco desbotada de propósito. Veste bem tamanho M.",
    photos: [],
    seller: "bella",
    sold: false,
  },
  {
    id: "camisas-sociais",
    title: "Lote de 3 camisas sociais tamanho G",
    category: "roupas",
    price: 90,
    condition: "Bem conservado",
    description: "Três camisas sociais de manga longa, cores lisas, pouco uso.",
    photos: [],
    seller: "mateus",
    sold: false,
  },
  {
    id: "vestido-verao",
    title: "Vestido de verão estampado",
    category: "roupas",
    price: 45,
    condition: "Com marcas de uso",
    description: "Tamanho P/M, leve, ótimo para o dia a dia.",
    photos: [],
    seller: "bella",
    sold: true,
  },
  {
    id: "mesa-centro",
    title: "Mesa de centro de madeira",
    category: "moveis",
    price: 250,
    condition: "Com marcas de uso",
    description:
      "Mesa de centro maciça, 90x50cm. Alguns riscos de uso normal. Retirada combinada.",
    photos: [],
    seller: "mateus",
    sold: false,
  },
  {
    id: "estante-livros",
    title: "Estante de livros 5 prateleiras",
    category: "moveis",
    price: 180,
    condition: "Bem conservado",
    description: "Estante branca, firme, ótima para livros ou plantas. Desmonta para transporte.",
    photos: [],
    seller: "bella",
    sold: false,
  },
  {
    id: "tenis-air-max",
    title: "Tênis Nike Air Max 42",
    category: "sapatos",
    price: 220,
    condition: "Com marcas de uso",
    description: "Numeração 42, solado ainda em bom estado, sem rasgos.",
    photos: [],
    seller: "mateus",
    sold: false,
  },
  {
    id: "botas-couro",
    title: "Botas de couro 37",
    category: "sapatos",
    price: 130,
    condition: "Bem conservado",
    description: "Botas de couro legítimo, numeração 37, poucas marcas de uso.",
    photos: [],
    seller: "bella",
    sold: false,
  },
  {
    id: "american-football",
    title: "American Football LP1",
    category: "discos",
    price: 200,
    condition: "Bem conservado",
    year: 2023,
    description: "Edição de 2023 (Polyvinyl/Balaclava) do álbum de estreia da banda.",
    photos: [
      { src: "/images/discos/american-football/01.webp", alt: "American Football - foto 1" },
      { src: "/images/discos/american-football/02.webp", alt: "American Football - foto 2" },
      { src: "/images/discos/american-football/03.webp", alt: "American Football - foto 3" },
      { src: "/images/discos/american-football/04.webp", alt: "American Football - foto 4" },
      { src: "/images/discos/american-football/05.webp", alt: "American Football - foto 5" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "ana-frango-eletrico",
    title: "Ana Frango Elétrico - Little Electric Chicken Heart",
    category: "discos",
    price: 150,
    condition: "Lacrado",
    year: 2026,
    description: "Vinil lacrado, edição Fábrica Rocinante / Três Selos.",
    photos: [
      {
        src: "/images/discos/ana-frango-eletrico/01.webp",
        alt: "Ana Frango Elétrico - Little Electric Chicken Heart - foto 1",
      },
      {
        src: "/images/discos/ana-frango-eletrico/02.webp",
        alt: "Ana Frango Elétrico - Little Electric Chicken Heart - foto 2",
      },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "criolo-amaro-e-dino",
    title: "Criolo, Amaro e Dino",
    category: "discos",
    price: 100,
    condition: "Lacrado",
    year: 2026,
    description:
      "Edição limitada e numerada do clube de assinantes Três Selos / Fábrica Rocinante. Ainda lacrado.",
    photos: [
      { src: "/images/discos/criolo/01.webp", alt: "Criolo, Amaro e Dino - foto 1" },
      { src: "/images/discos/criolo/02.webp", alt: "Criolo, Amaro e Dino - foto 2" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "dona-onete",
    title: "Dona Onete - Feitiço Caboclo",
    category: "discos",
    price: 100,
    condition: "Lacrado",
    year: 2026,
    description: "Vinil lacrado, edição do clube de assinantes Três Selos / Fábrica Rocinante.",
    photos: [
      { src: "/images/discos/dona-onete/01.webp", alt: "Dona Onete - Feitiço Caboclo - foto 1" },
      { src: "/images/discos/dona-onete/02.webp", alt: "Dona Onete - Feitiço Caboclo - foto 2" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "evangelion-finally",
    title: "Evangelion Finally",
    category: "discos",
    price: 120,
    condition: "Lacrado",
    year: 2026,
    description: "Vinil lacrado da trilha sonora de Evangelion.",
    photos: [
      { src: "/images/discos/evangelion/01.webp", alt: "Evangelion Finally - foto 1" },
      { src: "/images/discos/evangelion/02.webp", alt: "Evangelion Finally - foto 2" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "gabriela-leite",
    title: "Gabriele Leite - Gunûncho",
    category: "discos",
    price: 100,
    condition: "Lacrado",
    year: 2025,
    description: "Vinil lacrado, edição Fábrica Rocinante.",
    photos: [
      { src: "/images/discos/gabriela-leit/01.webp", alt: "Gabriele Leite - Gunûncho - foto 1" },
      { src: "/images/discos/gabriela-leit/02.webp", alt: "Gabriele Leite - Gunûncho - foto 2" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "house-of-sugar-alex-g",
    title: "Alex G - House of Sugar",
    category: "discos",
    price: 150,
    condition: "Bem conservado",
    year: 2020,
    description: "Edição Domino Recording Co.",
    photos: [
      { src: "/images/discos/house-of-sugar-alex-g/01.webp", alt: "Alex G - House of Sugar - foto 1" },
      { src: "/images/discos/house-of-sugar-alex-g/02.webp", alt: "Alex G - House of Sugar - foto 2" },
      { src: "/images/discos/house-of-sugar-alex-g/03.webp", alt: "Alex G - House of Sugar - foto 3" },
      { src: "/images/discos/house-of-sugar-alex-g/04.webp", alt: "Alex G - House of Sugar - foto 4" },
      { src: "/images/discos/house-of-sugar-alex-g/05.webp", alt: "Alex G - House of Sugar - foto 5" },
      { src: "/images/discos/house-of-sugar-alex-g/06.webp", alt: "Alex G - House of Sugar - foto 6" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "kero-kero-bonito",
    title: "Kero Kero Bonito - Civilisation",
    category: "discos",
    price: 140,
    condition: "Bem conservado",
    year: 2021,
    description: "Com arte gráfica em um alfabeto próprio criado pela banda.",
    photos: [
      { src: "/images/discos/kero-kero-bonito/01.webp", alt: "Kero Kero Bonito - foto 1" },
      { src: "/images/discos/kero-kero-bonito/02.webp", alt: "Kero Kero Bonito - foto 2" },
      { src: "/images/discos/kero-kero-bonito/03.webp", alt: "Kero Kero Bonito - foto 3" },
      { src: "/images/discos/kero-kero-bonito/04.webp", alt: "Kero Kero Bonito - foto 4" },
      { src: "/images/discos/kero-kero-bonito/05.webp", alt: "Kero Kero Bonito - foto 5" },
      { src: "/images/discos/kero-kero-bonito/06.webp", alt: "Kero Kero Bonito - foto 6" },
    ],
    seller: "mateus",
    sold: false,
  },
  {
    id: "milton-nascimento-travessia",
    title: "Milton Nascimento - Travessia",
    category: "discos",
    price: 150,
    condition: "Lacrado",
    year: 2026,
    description:
      "Reedição lacrada pelo clube de assinantes Três Selos / Fábrica Rocinante do álbum de estreia de Milton Nascimento.",
    photos: [
      { src: "/images/discos/milton-nascimento/01.webp", alt: "Milton Nascimento - Travessia - foto 1" },
      { src: "/images/discos/milton-nascimento/02.webp", alt: "Milton Nascimento - Travessia - foto 2" },
    ],
    seller: "mateus",
    sold: false,
  },
];

export function getListingsByCategory(slug: CategorySlug): Listing[] {
  return LISTINGS.filter((l) => l.category === slug);
}
