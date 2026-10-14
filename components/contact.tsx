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

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="contacto"
      className="bg-[#f5f7fa] px-5 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0087FF]">
            Hablemos
          </p>
          <h2 className="max-w-xl text-4xl font-bold tracking-[-0.055em] text-[#003A7D] sm:text-6xl">
            Tu próximo
            <br />
            <span className="text-[#0087FF]">movimiento.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[#484949]">
            ¿Quieres conocer más sobre nuestros servicios u opciones de
            inversión? Déjanos tus datos y nos pondremos en contacto contigo.
          </p>
          <div className="mt-12 flex flex-col gap-6 border-t border-[#003A7D]/15 pt-7 text-sm text-[#484949]">
            <p className="flex items-center gap-4">
              <Mail className="text-[#0087FF]" />{" "}
              <span>ej.ventas@zemueve.com.mx</span>
            </p>
            <p className="flex items-center gap-4">
              <Phone className="text-[#0087FF]" /> <span>477 564 7671</span>
            </p>
            <p className="flex items-center gap-4">
              <MapPin className="text-[#0087FF]" />{" "}
              <span>León, Guanajuato, Mexico, 37669</span>
            </p>
            <p className="flex items-center gap-4">
              <Clock3 className="text-[#0087FF]" />{" "}
              <span>Lunes a Viernes: 8:00 a 18:00 <br />Sábado: 9:00 a 14:00</span>
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-white p-7 shadow-[0_20px_60px_rgba(0,58,125,0.08)] sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#003A7D]">
              Nombre completo
              <input
                required
                name="name"
                className="mt-2 w-full border-b border-[#003A7D]/25 bg-transparent px-0 py-3 text-sm font-normal outline-none transition-colors focus:border-[#0087FF]"
                placeholder="Tu nombre"
              />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-[#003A7D]">
              Empresa{" "}
              <span className="font-normal text-[#484949]">(opcional)</span>
              <input
                name="company"
                className="mt-2 w-full border-b border-[#003A7D]/25 bg-transparent px-0 py-3 text-sm font-normal outline-none transition-colors focus:border-[#0087FF]"
                placeholder="Tu empresa"
              />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-[#003A7D]">
              Correo electrónico
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full border-b border-[#003A7D]/25 bg-transparent px-0 py-3 text-sm font-normal outline-none transition-colors focus:border-[#0087FF]"
                placeholder="tu@correo.com"
              />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-[#003A7D]">
              Teléfono
              <input
                name="phone"
                className="mt-2 w-full border-b border-[#003A7D]/25 bg-transparent px-0 py-3 text-sm font-normal outline-none transition-colors focus:border-[#0087FF]"
                placeholder="Tu teléfono"
              />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-[#003A7D] sm:col-span-2">
              Motivo de contacto
              <select
                name="reason"
                className="mt-2 w-full border-b border-[#003A7D]/25 bg-white py-3 text-sm font-normal outline-none focus:border-[#0087FF]"
              >
                <option>Quiero conocer los servicios</option>
                <option>Me interesan las opciones de inversión</option>
                <option>Otro motivo</option>
              </select>
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-[#003A7D] sm:col-span-2">
              Mensaje
              <textarea
                required
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border-b border-[#003A7D]/25 bg-transparent px-0 py-3 text-sm font-normal outline-none transition-colors focus:border-[#0087FF]"
                placeholder="Cuéntanos cómo podemos ayudarte"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-9 inline-flex items-center gap-4 bg-[#0087FF] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#003A7D]"
          >
            {sent ? "Solicitud preparada" : "Enviar solicitud"}{" "}
            <ArrowRight size={16} />
          </button>
          {sent && (
            <p role="status" className="mt-4 text-xs text-[#0087FF]">
              Gracias. La integración de envío está pendiente de conectar.
            </p>
          )}
          <p className="mt-5 text-[10px] leading-5 text-[#484949]">
            Este formulario es una interfaz preparada. La integración de
            recepción de mensajes se conectará cuando ZEMUEVE defina su canal
            oficial.
          </p>
        </form>
      </div>
    </section>
  );
}

export { Contact };
