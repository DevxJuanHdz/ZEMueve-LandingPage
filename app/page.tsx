import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Investment } from "@/components/investment";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Fleet } from "@/components/fleet";
import { Partners } from "@/components/partners";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function ZemueveLanding() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Investment />
        <Services />
        <About />
        <Fleet />
        <Contact />
        <Partners />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export { ZemueveLanding };
