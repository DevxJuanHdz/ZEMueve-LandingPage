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

function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#f5f7fa] px-5 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0087FF]">
            Lo que hacemos
          </p>
          <h2 className="text-4xl font-bold tracking-[-0.055em] text-[#003A7D] sm:text-6xl">
            Servicios de transporte
            <br />
            <span className="text-[#0087FF]">y logística.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#484949]">
            En ZEMUEVE, ofrecemos soluciones integrales en transporte y
            logística. Nuestro enfoque está en la eficiencia y la satisfacción
            del cliente.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-0 border-t border-[#003A7D]/15 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.12 }}
                key={service.number}
                className="group border-b border-[#003A7D]/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-[#0087FF]">
                    {service.number}
                  </span>
                  <Icon className="text-[#003A7D] transition-colors group-hover:text-[#0087FF]" />
                </div>
                <h3 className="mt-16 text-2xl font-bold tracking-[-0.04em] text-[#003A7D]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#484949]">
                  {service.text}
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0087FF]"
                >
                  Saber más <ArrowRight size={14} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Services };
