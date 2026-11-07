// app/api/contacto/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { renderToStaticMarkup } = await import("react-dom/server");
    const { AdminEmail } = await import("@/app/templates/AdminEmail");
    const { ClientEmail } = await import("@/app/templates/ClientEmail");

    // Campos que envía tu contact.tsx
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const reason = String(body.reason || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Nombre, correo y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "El correo electrónico no es válido." },
        { status: 400 }
      );
    }

    // Verificar variables de entorno
    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_SECURE,
      EMAIL_USER,
      EMAIL_PASS,
      EMAIL_TO,
    } = process.env;

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      console.error("Faltan variables de entorno necesarias");
      return NextResponse.json(
        { message: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    // Render de templates
    const adminHtml = renderToStaticMarkup(
      AdminEmail({ name, company, email, phone, reason, message })
    );
    const clientHtml = renderToStaticMarkup(
      ClientEmail({ name, reason, message })
    );

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: parseInt(EMAIL_PORT, 10),
      secure: EMAIL_SECURE === "true",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Verifica credenciales SMTP (opcional pero útil en dev)
    if (process.env.NODE_ENV !== "production") {
      try {
        await transporter.verify();
      } catch (verifyErr) {
        console.error("Verificación SMTP fallida:", verifyErr);
      }
    }

    // Correo al administrador
    await transporter.sendMail({
      from: `"Formulario Web" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `Nuevo contacto: ${name}${company ? ` (${company})` : ""}`,
      replyTo: email,
      html: adminHtml,
    });

    // Correo de confirmación al cliente
    let confirmationSent = true;
    try {
      await transporter.sendMail({
        from: `"ZEMUEVE" <${EMAIL_USER}>`,
        to: email,
        subject: "Hemos recibido tu solicitud",
        html: clientHtml,
      });
    } catch (clientErr) {
      console.error("Error al enviar confirmación al cliente:", clientErr);
      confirmationSent = false;
    }

    return NextResponse.json(
      {
        message: confirmationSent
          ? "Solicitud enviada. Te enviamos un correo de confirmación."
          : "Solicitud recibida correctamente.",
        received: true,
        confirmationSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}