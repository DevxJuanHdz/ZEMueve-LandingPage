"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white text-[#003A7D]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#003A7D] transition-colors hover:text-[#00E6FF]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden border border-[#003A7D] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#003A7D] transition-colors hover:bg-[#003A7D] hover:text-white md:block"
        >
          Solicitar información
        </a>
        <button
          className="text-[#003A7D] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/5 bg-white md:hidden"
          >
            <div className="flex flex-col gap-5 px-5 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold uppercase tracking-[0.15em] text-[#003A7D]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="w-fit bg-[#003A7D] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
              >
                Solicitar información
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Header };