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

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 80]);
  return (
    <section
      id="inicio"
      className="relative flex min-h-[720px] items-end overflow-hidden bg-[#003A7D] pb-20 pt-32 text-white lg:min-h-[830px] lg:pb-28"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src="/zemueve-hero.webp"
          alt="Camión ZEMUEVE avanzando por carretera"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#001b3dcc_0%,#003a7d99_42%,#003a7d22_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#001b3d 0%,transparent 30%)]" />
      <div className="absolute right-[8%] top-1/3 hidden h-px w-48 bg-[#00E6FF]/60 lg:block" />
      <div className="absolute right-[8%] top-1/3 mt-3 text-[10px] uppercase tracking-[0.3em] text-white/70">
        19° 25' 42.1&quot; N / 99° 07' 39.8&quot; W
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#00E6FF]"
          >
            <span className="h-px w-10 bg-[#00E6FF]" /> Movimiento que construye
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.12 }}
            className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[104px]"
          >
            Cada ruta es una
            <br />
            <span className="text-[#00E6FF]">oportunidad.</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.24 }}
            className="mt-8 max-w-md text-base leading-7 text-white/75"
          >
            Impulsamos soluciones de transporte y logística con una mirada
            clara: hacer que las cosas sucedan.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.36 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-5 bg-[#0087FF] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-[#00E6FF] hover:text-[#003A7D]"
            >
              Hablemos{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-3 border border-white/35 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-white"
            >
              Explorar servicios
            </a>
          </motion.div>
        </div>
        <div className="mt-20 flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-white/55">
          <span className="h-px w-12 bg-[#00E6FF]" /> Conectamos destinos ·
          Movemos posibilidades
        </div>
      </div>
    </section>
  );
}

export { Hero };
