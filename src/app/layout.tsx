import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 0 12 9.5 24 12C24 12 12 14.5 12 24C12 24 12 14.5 0 12C0 12 12 9.5 12 0Z" />
  </svg>
);

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
      <body className="relative min-h-screen">
        {/* Thematic Decorative Background (Jewelry Sparkles) */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          {/* Top Right Sparkle Group */}
          <div className="absolute top-20 right-16 flex flex-col gap-6 opacity-20 text-gold drop-shadow-[0_0_8px_rgba(201,168,76,0.5)] animate-pulse" style={{ animationDuration: '4s' }}>
            <Sparkle className="w-8 h-8 ml-8" />
            <Sparkle className="w-4 h-4" />
            <Sparkle className="w-6 h-6 ml-12" />
          </div>
          
          {/* Bottom Left Large Sparkle */}
          <div className="absolute bottom-32 left-12 opacity-[0.15] text-gold animate-pulse" style={{ animationDuration: '6s' }}>
            <Sparkle className="w-16 h-16" />
          </div>

          {/* Middle Left Tiny Sparkles */}
          <div className="absolute top-1/2 left-8 opacity-20 text-gold/70">
            <Sparkle className="w-3 h-3 mb-4" />
            <Sparkle className="w-5 h-5 ml-4" />
          </div>

          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>
        </div>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
