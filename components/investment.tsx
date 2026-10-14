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
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
            Conoce el modelo ZEMUEVE y descubre cómo participar en una industria
            que mantiene al mundo en movimiento.
          </p>
        </div>
        <a
          href="#contacto"
          className="relative flex shrink-0 items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-[#00E6FF]"
        >
          Conoce las opciones <ArrowDownRight className="text-[#00E6FF]" />
        </a>
      </motion.div>
    </section>
  );
}

export { Investment };
