"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

type Feedback = {
  type: "success" | "warning" | "error";
  message: string;
} | null;

function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setFeedback(null);
    const form = event.currentTarget;
    const values = new FormData(form);
    const payload = Object.fromEntries(
      ["name", "company", "email", "phone", "reason", "message"].map((key) => [
        key,
        String(values.get(key) || "").trim(),
      ]),
    );

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: {
        message?: string;
        received?: boolean;
        confirmationSent?: boolean;
      } = await response.json();
      if (!response.ok)
        throw new Error(
          result.message || "No fue posible enviar tu solicitud.",
        );
      setFeedback({
        type: result.confirmationSent === false ? "warning" : "success",
        message: result.message || "Solicitud recibida correctamente.",
      });
      if (result.received) form.reset();
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrió un error inesperado.",
      });
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "mt-2 w-full border-b border-[#003A7D]/25 bg-transparent px-0 py-3 text-sm font-normal outline-none transition-colors focus:border-[#0087FF]";
  const labelClass =
    "text-xs font-bold uppercase tracking-wider text-[#003A7D]";

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
              <Mail className="text-[#0087FF]" />
              <span>direccion@zemueve.com.mx</span>
            </p>
            <p className="flex items-center gap-4">
              <Phone className="text-[#0087FF]" />
              <span>477 239 8706</span>
            </p>
            <p className="flex items-center gap-4">
              <MapPin className="text-[#0087FF]" />
              <span>León, Guanajuato, Mexico, 37669</span>
            </p>
            <p className="flex items-center gap-4">
              <Clock3 className="text-[#0087FF]" />
              <span>
                Lunes a Viernes: 8:00 a 18:00 <br />
                Sábado: 9:00 a 14:00
              </span>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-7 shadow-[0_20px_60px_rgba(0,58,125,0.08)] sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className={labelClass}>
              Nombre completo
              <input
                required
                maxLength={120}
                name="name"
                autoComplete="name"
                className={fieldClass}
                placeholder="Tu nombre"
              />
            </label>
            <label className={labelClass}>
              Empresa{" "}
              <span className="font-normal text-[#484949]">(opcional)</span>
              <input
                maxLength={150}
                name="company"
                className={fieldClass}
                placeholder="Tu empresa"
              />
            </label>
            <label className={labelClass}>
              Correo electrónico
              <input
                required
                type="email"
                maxLength={254}
                name="email"
                autoComplete="email"
                className={fieldClass}
                placeholder="tu@correo.com"
              />
            </label>
            <label className={labelClass}>
              Teléfono
              <input
                type="tel"
                maxLength={40}
                name="phone"
                autoComplete="tel"
                className={fieldClass}
                placeholder="Tu teléfono"
              />
            </label>
            <label className={`${labelClass} sm:col-span-2`}>
              Motivo de contacto
              <select
                name="reason"
                required
                className="mt-2 w-full border-b border-[#003A7D]/25 bg-white py-3 text-sm font-normal outline-none focus:border-[#0087FF]"
              >
                <option value="Quiero conocer los servicios">
                  Quiero conocer los servicios
                </option>
                <option value="Me interesan las opciones de inversión">
                  Me interesan las opciones de inversión
                </option>
                <option value="Otro motivo">Otro motivo</option>
              </select>
            </label>
            <label className={`${labelClass} sm:col-span-2`}>
              Mensaje
              <textarea
                required
                maxLength={5000}
                name="message"
                rows={4}
                className={`${fieldClass} resize-none`}
                placeholder="Cuéntanos cómo podemos ayudarte"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-9 inline-flex items-center gap-4 bg-[#0087FF] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#003A7D] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
            <ArrowRight size={16} />
          </button>
          {feedback && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-sm ${feedback.type === "error" ? "text-red-600" : feedback.type === "warning" ? "text-amber-700" : "text-[#0087FF]"}`}
            >
              {feedback.message}
            </p>
          )}
          <p className="mt-5 text-[10px] leading-5 text-[#484949]">
            Usaremos tus datos únicamente para atender tu solicitud de contacto.
          </p>
        </form>
      </div>
    </section>
  );
}

export { Contact };
