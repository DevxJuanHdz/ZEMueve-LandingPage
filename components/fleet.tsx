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

function Fleet() {
  const [active, setActive] = useState(0);
  const item = fleet[active];
  return (
    <section
      id="unidades"
      className="bg-[#001b3d] px-5 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#00E6FF]">
              Nuestras unidades
            </p>
            <h2 className="text-4xl font-bold tracking-[-0.055em] sm:text-6xl">
              Hechas para
              <br />
              <span className="text-[#00E6FF]">seguir.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/55">
            Una mirada a las unidades que hacen posible cada movimiento.
            Información técnica disponible próximamente.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">
          <motion.div
            key={item.image}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[16/9] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001b3d] via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#00E6FF]">
                {item.type}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-white/60">{item.detail}</p>
            </div>
          </motion.div>
          <div className="flex items-center justify-between border-t border-white/20 pt-5 lg:block lg:border-t-0 lg:pt-0">
            <div className="flex gap-3 lg:mb-16">
              <button
                aria-label="Unidad anterior"
                onClick={() =>
                  setActive((active - 1 + fleet.length) % fleet.length)
                }
                className="flex size-12 items-center justify-center border border-white/30 transition-colors hover:border-[#00E6FF] hover:text-[#00E6FF]"
              >
                <ChevronLeft />
              </button>
              <button
                aria-label="Siguiente unidad"
                onClick={() => setActive((active + 1) % fleet.length)}
                className="flex size-12 items-center justify-center border border-white/30 transition-colors hover:border-[#00E6FF] hover:text-[#00E6FF]"
              >
                <ChevronRight />
              </button>
            </div>
            <div>
              <span className="font-mono text-5xl text-[#00E6FF]">
                0{active + 1}
              </span>
              <span className="ml-3 text-xs text-white/35">
                / 0{fleet.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Fleet };
