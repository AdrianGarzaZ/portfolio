import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrián Garza Zapata | Physical Insight and Data Solutions",
  description: "Portfolio of Adrián Garza Zapata, MSc Photonics candidate bridging complex optical theory and production-grade data engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-slate-950 text-slate-100 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
