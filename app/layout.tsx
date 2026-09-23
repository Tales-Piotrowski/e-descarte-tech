import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Descarte.tech | Tecnologia com destino certo",
  description: "Uma experiência educativa sobre resíduos eletroeletrônicos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
