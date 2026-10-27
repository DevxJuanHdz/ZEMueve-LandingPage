"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeDollarSign,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  DoorOpen,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import { fleet, navItems, partners, reveal, services, Logo } from "./shared";

function Investment() {
  return (
    <section className="bg-[#003A7D] px-5 py-5 lg:px-10">
      <motion.div
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 overflow-hidden bg-[#002e67] px-7 py-10 sm:px-12 lg:flex-row lg:items-center lg:px-16"
      >
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,#0087ff55,transparent_65%)]" />

        <div className="relative max-w-2xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#00E6FF]">
            Una nueva forma de avanzar
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
            ¿Quieres invertir en transporte?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 text-justify">
            Nosotros te asesoramos para que obtengas grandes beneficios. El
            transporte de carga es el presente y es el futuro; la demanda
            crecerá un 15% anual en México por nearshoring, es decir por la
            ubicación de las empresas por los próximos 10 años. El reto que
            enfrenta nuestro país es la producción de camiones y el número de
            empresas operadoras que aprovechen esta oportunidad de negocios.
          </p>
        </div>

        {/* Logo encima del botón, ambos centrados */}
        <div className="relative flex shrink-0 flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm">
            <img
              src="/logos/IET.png"
              alt="Logo de IET"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>

          <a
            href="https://inversionentransporte.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-[#00E6FF]/60 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#00E6FF] transition-colors hover:bg-[#00E6FF] hover:text-[#002e67]"
          >
            Más información <ArrowDownRight className="shrink-0" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export { Investment };
