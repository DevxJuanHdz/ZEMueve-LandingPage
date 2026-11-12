import { NextResponse } from "next/server";

async function getStaticRoutes() {
  return [
    { url: "", priority: 1.0 },
    { url: "aviso-de-privacidad", priority: 0.7 },
    { url: "terminos-y-condiciones", priority: 0.7 },
    
  ];
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zemueve.com.mx";
  const staticRoutes = await getStaticRoutes();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(({ url, priority }) => {
    const loc = `${baseUrl}/${url}`.replace(/\/$/,'');
    return `<url>
  <loc>${loc}</loc>
  <priority>${priority ?? 0.5}</priority>
  <changefreq>weekly</changefreq>
</url>`;
  })
  .join("\n")}
</urlset>`;
  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
