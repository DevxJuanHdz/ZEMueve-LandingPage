import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZEMUEVE | Movimiento que construye",
  description:
    "Soluciones de transporte y logística para el siguiente movimiento.",
  generator: "v0.app",
  openGraph: {
    title: "ZEMUEVE | Movimiento que construye",
    description:
      "Soluciones de transporte y logística para el siguiente movimiento.",
    type: "website",
  },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#003A7D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
