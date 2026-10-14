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

function About() {
  return (
    <section
      id="nosotros"
      className="overflow-hidden bg-white px-5 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="relative min-h-[450px]"
        >
          <div className="absolute bottom-0 left-0 h-[86%] w-[82%] bg-[#003A7D]" />
          <Image
            src="/zemueve-operations.png"
            alt="Operación de transporte en carretera"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="relative z-10 object-cover object-center p-5 lg:p-7"
          />
          <div className="absolute bottom-6 right-0 z-20 bg-[#00E6FF] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#003A7D]">
            Visión en movimiento
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0087FF]">
            Sobre ZEMUEVE
          </p>
          <h2 className="max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-[#003A7D] sm:text-6xl">
            La ruta se construye
            <br />
            <span className="text-[#0087FF]">en equipo.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-7 text-[#484949]">
            Somos una empresa enfocada en el transporte y la logística. Creamos
            caminos más claros para que las operaciones y las oportunidades
            puedan seguir avanzando.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-[#484949]">
            Este espacio está listo para contar la historia, experiencia y
            diferenciadores de ZEMUEVE con información confirmada por la
            empresa.
          </p>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-[#003A7D]/15 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#003A7D]">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-[#0087FF]" /> Compromiso
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-[#0087FF]" /> Claridad
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-[#0087FF]" /> Cercanía
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { About };
