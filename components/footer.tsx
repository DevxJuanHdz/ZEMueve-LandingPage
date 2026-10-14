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

function Footer() {
  return (
    <footer className="bg-[#001b3d] px-5 py-12 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
            Transporte y logística para el siguiente movimiento.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#00E6FF]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-white/35">
          © {new Date().getFullYear()} ZEMUEVE
        </div>
      </div>
    </footer>
  );
}

export { Footer };
