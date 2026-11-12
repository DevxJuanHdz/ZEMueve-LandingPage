
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zemueve.com.mx";
const siteName = "ZEMUEVE";

export interface PageSEO {
  title: string;
  description: string;
  url?: string;
  image?: string;
  canonical?: string;
}

export function buildMetadata({ title, description, url, image, canonical }: PageSEO): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const ogImage = image || `${baseUrl}/default-og.jpg`;
  const canonicalUrl = canonical || url || baseUrl;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: canonicalUrl },
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
      locale: "es_MX",
    }
  };
}
