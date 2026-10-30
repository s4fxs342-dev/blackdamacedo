import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  description:
    "Black Friday Macedo Materiais para Construção: chuveiros Zagonel e Lorenzetti, ventiladores Ventex, ferramentas e utilidades com entrega rápida pelo FULL e parcelamento sem juros no Mercado Livre.",
  icons: { icon: "/images/logo.jpg" },
  title: {
    default: "Black Friday Lojas Macedo | Ofertas no Mercado Livre",
    template: "%s · Lojas Macedo",
  },
};

export const viewport: Viewport = {
  themeColor: "#17120D",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html
    lang="pt-BR"
    className={`${geist.variable} ${geistMono.variable} ${barlow.variable} ${barlowCondensed.variable}`}
  >
    <body>
      <a
        href="#main"
        className="focus:bg-background sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:p-3"
      >
        Pular para o conteúdo
      </a>
      {children}
    </body>
  </html>
);

export default RootLayout;
