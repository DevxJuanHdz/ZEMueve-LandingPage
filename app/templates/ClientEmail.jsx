export function ClientEmail({ name, reason, message }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", padding: "30px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,58,125,0.08)" }}>
        <div style={{ backgroundColor: "#003A7D", padding: "32px 30px", textAlign: "center" }}>
          <h1 style={{ color: "#ffffff", margin: 0, fontSize: "22px" }}>¡Gracias por escribirnos, {name}!</h1>
          <p style={{ color: "#c7d8eb", margin: "10px 0 0", fontSize: "14px" }}>
            Hemos recibido tu solicitud correctamente
          </p>
        </div>

        <div style={{ padding: "30px" }}>
          <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.7" }}>
            Hola <strong>{name}</strong>, tu mensaje fue recibido. Nuestro equipo lo revisará y te responderá a la brevedad.
          </p>

          <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#f5f7fa", borderLeft: "4px solid #0087FF", borderRadius: "4px" }}>
            <p style={{ margin: 0, fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", color: "#003A7D", letterSpacing: "1px" }}>
              Tu mensaje
            </p>
            <p style={{ margin: "10px 0 0", fontSize: "13px", color: "#555", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
            <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#888" }}>
              <strong>Motivo:</strong> {reason}
            </p>
          </div>

          <div style={{ marginTop: "28px", padding: "20px", backgroundColor: "#f0f7ff", borderRadius: "6px" }}>
            <p style={{ margin: 0, fontSize: "13px", color: "#003A7D", fontWeight: "bold" }}>¿Necesitas contactarnos antes?</p>
            <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#484949", lineHeight: "1.6" }}>
              📧 direccion@zemueve.com.mx<br />
              📞 477 239 8706<br />
              📍 León, Guanajuato, México
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "#003A7D", padding: "16px 30px", textAlign: "center" }}>
          <p style={{ color: "#c7d8eb", margin: 0, fontSize: "11px" }}>
            © {new Date().getFullYear()} ZEMUEVE · Este es un correo automático, por favor no responder.
          </p>
        </div>
      </div>
    </div>
  );
}