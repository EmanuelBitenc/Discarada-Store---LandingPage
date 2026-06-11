import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://discarada.com.br"),
  title: {
    default: "Discarada Acessórios | Nos detalhes que constroem lembranças",
    template: "%s | Discarada Acessórios",
  },
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
  authors: [{ name: "Discarada Acessórios" }],
  creator: "Discarada Acessórios",
  publisher: "Discarada Acessórios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Discarada Acessórios",
    description: "Nos detalhes que constroem lembranças.",
    url: "/",
    siteName: "Discarada Acessórios",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Discarada Acessórios",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Discarada Acessórios",
    description: "Nos detalhes que constroem lembranças.",
    images: ["/logo/logo.png"],
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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
