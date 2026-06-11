import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Discarada Acessórios | Nos detalhes que constroem lembranças",
  description:
    "A Discarada existe para acompanhar mulheres em diferentes fases da vida. Acessórios que reforçam identidade e sustentam presença. Conheça nossas lojas em Friburgo, Gama, Centro e Valparaíso.",
  keywords: [
    "acessórios femininos",
    "bijuterias",
    "brincos",
    "bolsas",
    "óculos de sol",
    "Discarada",
    "moda feminina",
    "acessórios Friburgo",
    "acessórios Gama",
    "acessórios Valparaíso",
  ],
  openGraph: {
    title: "Discarada Acessórios",
    description: "Nos detalhes que constroem lembranças.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${montserrat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
