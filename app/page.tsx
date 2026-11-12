import { Hero } from "@/components/hero";
import { Investment } from "@/components/investment";
import { Services } from "@/components/services";
import { Insurance } from "@/components/insurance"
import { About } from "@/components/about";
import OurTransportsSection from "@/components/OurRoutes";
import { Fleet } from "@/components/fleet";
import { Partners } from "@/components/partners";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { buildMetadata } from "@/app/libs/seo";

export const metadata = buildMetadata({
  title: "ZEMUEVE | Transporte de Carga Terrestre y Servicios Logísticos",
  description: "ZEMUEVE ofrece transporte de carga terrestre y servicios logísticos confiables y eficientes en México.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.zemueve.com.mx",
  image: "/zemueve-hero.webp",
});

export default function ZemueveLanding() {
  return (
    <>
      <main>
        <Hero />
        <Investment />
        <Services />
        <Insurance />
        <About />
        <OurTransportsSection />
        <Fleet />
        <Contact />
        <Partners />
        <Location />
      </main>
    </>
  );
}

export { ZemueveLanding };
