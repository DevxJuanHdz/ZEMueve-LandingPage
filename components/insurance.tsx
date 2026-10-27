"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { reveal } from "./shared";
import Image from "next/image";

const insuranceServices = [
  {
    icon: ShieldCheck,
    title: "Seguros empresariales",
    text: "Protección para activos, flotillas, transporte, responsabilidad civil y colaboradores.",
  },
  {
    icon: FileCheck2,
    title: "Fianzas empresariales",
    text: "Soluciones para licitaciones, anticipos, cumplimiento de contratos y necesidades comerciales.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Asesoría especializada",
    text: "Atención personalizada y acompañamiento durante la contratación y gestión de tus pólizas.",
  },
];

function Insurance() {
  return (
    <section
      id="seguros"
      className="relative overflow-hidden bg-[#003A7D] bg-cover bg-fixed bg-center px-5 py-24 lg:px-10 lg:py-32 max-md:bg-scroll"
      style={{ backgroundImage: "url('/parallax-zeseguros-hd.webp')" }}
    >
      <div className="absolute inset-0 bg-[#003A7D]/40" />
      <div className="pointer-events-none absolute -right-40 top-16 size-[28rem] rounded-full bg-[#00E6FF]/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
        >
          <div
            className="mb-8 inline-flex overflow-hidden border border-white/30 bg-white/10 backdrop-blur-sm"
            aria-label="Logo de ZE Seguros y Fianzas"
          >
            <Image
              src="/logos/zeguros-fianzas.png"
              alt="ZE Seguros y Fianzas"
              width={220}
              height={48}
              className="block h-16 w-auto object-cover"
              priority
            />
          </div>
          <h2 className="max-w-xl text-4xl font-bold tracking-[-0.055em] text-white sm:text-6xl">
            Protección y respaldo{" "}
            <span className="text-[#00E6FF]">para tu empresa.</span>
          </h2>
          <p className="mt-6 text-lg font-medium leading-7 text-white">
            Seguros y fianzas con asesoría especializada y atención
            personalizada.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 text-justify">
            ZE Seguros &amp; Fianzas ofrece soluciones para proteger empresas,
            colaboradores y operaciones. Su servicio incluye asesoría para
            seleccionar coberturas, acompañamiento en la gestión de siniestros y
            soluciones de fianzas para distintas necesidades empresariales.
          </p>
          <a
            href="https://www.zesegurosyfianzas.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-[#003A7D] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#0087FF]"
          >
            Conocer ZE Seguros &amp; Fianzas{" "}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          className="grid gap-4 sm:grid-cols-3"
        >
          {insuranceServices.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="group flex min-h-64 flex-col border border-white/40 bg-white/95 p-6 transition-colors hover:border-[#00E6FF] hover:bg-[#003A7D]"
            >
              <div className="flex items-center justify-between">
                <Icon
                  className="text-[#003A7D] transition-colors group-hover:text-[#00E6FF]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-auto text-xl font-bold tracking-[-0.04em] text-[#003A7D] transition-colors group-hover:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#484949] transition-colors group-hover:text-white/70">
                {text}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { Insurance };
