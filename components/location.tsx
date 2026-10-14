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

function Location() {
  return (
    <section
      id="ubicacion"
      className="bg-[#f5f7fa] px-5 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="flex flex-col justify-between"
        >
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0087FF]">
              Punto de encuentro
            </p>
            <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-[#003A7D] sm:text-6xl">
              Dónde
              <br />
              <span className="text-[#0087FF]">encontrarnos.</span>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#484949]">
              Estamos listos para recibirte y hablar sobre el siguiente
              movimiento de tu operación.
            </p>
          </div>
          <div className="mt-10 border-t border-[#003A7D]/15 pt-6">
            <p className="flex items-start gap-4 text-sm leading-6 text-[#484949]">
              <MapPin className="mt-0.5 shrink-0 text-[#0087FF]" /> Blvrd Jose María Morelos 3546-B, San Miguel de Rentería, 37278 León de los Aldama, Gto.
              <br />
            </p>
            <a
              href="https://www.google.com/maps?cid=6428004980946594332&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSoqNcy"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0087FF] hover:text-[#003A7D]"
            >
              Abrir en Google Maps <ArrowRight />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="relative min-h-[360px] overflow-hidden bg-[#dce5ed] shadow-[0_20px_60px_rgba(0,58,125,0.1)] lg:min-h-[500px]"
        >
          <iframe
            title="Mapa de ubicación de ZEMUEVE"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.554099151411!2d-101.6302193!3d21.130336200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbebe3047f8cb%3A0x5934dc791fc36a1c!2sSalzillo!5e0!3m2!1ses-419!2smx!4v1791950849714!5m2!1ses-419!2smx"
            className="absolute inset-0 size-full border-0 grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 border-[10px] border-white/40" />
        </motion.div>
      </div>
    </section>
  );
}

export { Location };
