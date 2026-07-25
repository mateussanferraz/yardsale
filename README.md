# yardsale

Site da mudança para a Espanha — Mateus e Bella vendem tudo: jogos de tabuleiro, roupas, móveis,
sapatos e discos.

Contato de cada anúncio é feito direto pelo WhatsApp de quem está vendendo (Mateus ou Bella).
Não há carrinho/checkout — é um site de vitrine, marcação manual de "vendido".

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Adicionando ou editando itens

Todos os itens ficam em [`lib/listings.ts`](./lib/listings.ts), em um único array `LISTINGS`.
Cada item segue este formato:

```ts
{
  id: "identificador-unico",
  title: "Nome do item",
  category: "jogos-de-tabuleiro" | "roupas" | "moveis" | "sapatos" | "discos",
  price: 100, // em reais, sem vírgula
  condition: "Bem conservado" | "Com marcas de uso" | "Com defeitos ou problemas",
  languages: ["🇧🇷 Português"], // opcional, usado principalmente nos jogos
  description: "Descrição curta e honesta do estado do item.",
  photos: [
    { src: "/images/categoria/nome-do-arquivo.jpg", alt: "Texto alternativo descrevendo a foto" },
  ],
  seller: "mateus" | "bella",
  sold: false,
}
```

Para marcar um item como vendido, basta trocar `sold: false` para `sold: true` — o card fica
esmaecido com um selo "Vendido" e o botão de WhatsApp some.

### Fotos

Coloque os arquivos de imagem em `public/images/<categoria>/`, e referencie o caminho (começando
com `/images/...`) no campo `src` de cada foto. Preencha o `alt` com uma descrição do que aparece
na imagem (ex.: "Capa da caixa", "Componentes sobre a mesa") — é o texto lido por leitores de tela.
Itens sem foto mostram um ícone da categoria no lugar, então não tem problema adicionar itens antes
de tirar as fotos.

## Deploy

O projeto está configurado para exportação estática (`output: "export"`) com deploy automático para
o GitHub Pages via `.github/workflows/deploy.yml` a cada push na branch `main`. Para o primeiro
deploy funcionar, é preciso habilitar uma vez em **Settings → Pages → Source → GitHub Actions** no
repositório. O site fica disponível em `https://mateussanferraz.github.io/yardsale/`.
