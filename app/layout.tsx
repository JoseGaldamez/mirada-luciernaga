import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirada Luciérnaga | Ilumina tu camino hacia el bienestar",
  description: "Descubre la sanación a través de terapias holísticas que nutren tu alma, mente y cuerpo. Acompañamiento profesional en tu proceso de crecimiento personal.",
  keywords: [
    "terapias holísticas",
    "sanación emocional",
    "bienestar integral",
    "crecimiento personal",
    "terapia de constelaciones familiares",
    "niño interior",
    "esencias florales",
    "meditación guiada",
    "terapia de sanación",
    "terapia de sanación emocional",
    "terapia de sanación holística",
    "terapia de sanación espiritual",
    "terapia de sanación energética",
    "terapia de sanación con esencias florales",
    "terapia de sanación con meditación",
    "terapia de sanación con constelaciones familiares",
    "terapia de sanación con niño interior",
    "terapia de sanación con técnicas holísticas",
    "terapia de sanación con técnicas de sanación emocional",
    "terapia de sanación con técnicas de sanación holística",
    "terapia de sanación con técnicas de sanación espiritual",
    "terapia de sanación con técnicas de sanación energética",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
