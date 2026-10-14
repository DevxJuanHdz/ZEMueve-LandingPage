import { motion } from "framer-motion";
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
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Unidades", href: "#unidades" },
  { label: "Aliados", href: "#aliados" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    number: "01",
    icon: BadgeDollarSign,
    title: "Opciones de pago flexibles",
    text: "Métodos de pago que se ajustan a tus necesidades logísticas y a la operación de tu negocio.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Precios competitivos",
    text: "Tarifas justas y asequibles para recibir el mejor servicio de transporte sin sorpresas.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Camión completo",
    text: "Transporte exclusivo para tu carga, sin intermediarios ni retrasos en el camino.",
  },
  {
    number: "04",
    icon: DoorOpen,
    title: "Entrega puntual puerta a puerta",
    text: "Servicio puerta a puerta con tiempos garantizados para que tu carga llegue cuando debe.",
  },
];

export const fleet = [
  {
    type: "Unidad destacada",
    title: "Potencia que avanza contigo",
    detail: "Ficha técnica disponible próximamente",
    image: "/zemueve-fleet.png",
  },
  {
    type: "Operación en ruta",
    title: "Diseñada para grandes trayectos",
    detail: "Especificaciones editables",
    image: "/zemueve-hero.png",
  },
  {
    type: "Nueva unidad",
    title: "El siguiente movimiento",
    detail: "Información de flota por confirmar",
    image: "/zemueve-operations.png",
  },
];

export const partners = [
  { number: "01", name: "Salzillo", detail: "/logos/Salzillo.png" },
  { number: "02", name: "BullTrucking", detail: "/logos/BullTrucking.png" },
  { number: "03", name: "Espinardo", detail: "/logos/Espinardo.jpg" },
  { number: "04", name: "HastFreight", detail: "/logos/Hast.png" },
];

export const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className="flex items-center gap-2.5"
      aria-label="ZEMUEVE, inicio"
    >
      <img
        src="/ZEMueve-logo.png"
        alt="ZEMUEVE"
        className="h-10 w-auto object-contain"
      />
    </a>
  );
}
