import type { Metadata } from "next";
import { CategoryPageContent } from "@/components/CategoryPageContent";

export const metadata: Metadata = {
  title: "Livros | Mateus e Bella vendem tudo",
};

export default function Page() {
  return <CategoryPageContent slug="livros" />;
}
