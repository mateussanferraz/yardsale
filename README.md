# yardsale

Site da mudança para a Espanha — Mateus e Bella vendem tudo: jogos de tabuleiro, roupas, móveis,
sapatos, discos, objetos gerais, cozinha, livros e eletrônicos.

Contato de cada anúncio é feito direto pelo WhatsApp de quem está vendendo (Mateus ou Bella).
Não há carrinho/checkout — é um site de vitrine, marcação manual de status.

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
  category: "jogos-de-tabuleiro" | "roupas" | "moveis" | "sapatos" | "discos" | "objetos-gerais" | "cozinha" | "livros" | "eletronicos",
  price: 100, // em reais, sem vírgula; opcional (some vazio como "Preço a definir")
  condition: "Lacrado" | "Bem conservado" | "Com marcas de uso" | "Com defeitos ou problemas",
  languages: ["🇧🇷 Português"], // opcional, usado principalmente nos jogos
  description: "Descrição curta e honesta do estado do item.",
  photos: [
    { src: "/images/categoria/nome-do-arquivo.jpg", alt: "Texto alternativo descrevendo a foto" },
  ],
  seller: "mateus" | "bella",
  status: "disponivel" | "reservado" | "vendido",
  buyerName: "Nome de quem reservou/comprou", // opcional, só controle interno — nunca aparece no site
}
```

Para marcar um item como reservado ou vendido, troque `status` para `"reservado"` ou `"vendido"` —
o card fica esmaecido com um selo correspondente e o botão de WhatsApp some. Use `buyerName` para
anotar quem reservou/comprou; esse campo é só para controle nosso e nunca é exibido no site — mas
como o repositório é público no GitHub, qualquer pessoa que abrir o código-fonte em
`lib/listings.ts` consegue ver esse valor.

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
