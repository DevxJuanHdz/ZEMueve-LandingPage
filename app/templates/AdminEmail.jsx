export function AdminEmail({ name, company, email, phone, reason, message }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", padding: "30px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,58,125,0.08)" }}>
        <div style={{ backgroundColor: "#003A7D", padding: "24px 30px" }}>
          <h1 style={{ color: "#ffffff", margin: 0, fontSize: "20px" }}>Nueva solicitud de contacto</h1>
          <p style={{ color: "#c7d8eb", margin: "6px 0 0", fontSize: "13px" }}>
            Recibida desde el formulario web
          </p>
        </div>

        <div style={{ padding: "30px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <tbody>
              <Row label="Nombre" value={name} />
              <Row label="Empresa" value={company || "—"} />
              <Row label="Correo" value={email} />
              <Row label="Teléfono" value={phone || "—"} />
              <Row label="Motivo" value={reason || "—"} />
            </tbody>
          </table>

          <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#f5f7fa", borderLeft: "4px solid #0087FF", borderRadius: "4px" }}>
            <p style={{ margin: 0, fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", color: "#003A7D", letterSpacing: "1px" }}>Mensaje</p>
            <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#333", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
          </div>

          <p style={{ marginTop: "24px", fontSize: "12px", color: "#888" }}>
            Puedes responder directamente a este correo y la respuesta llegará a <strong>{email}</strong>.
          </p>
        </div>

        <div style={{ backgroundColor: "#003A7D", padding: "16px 30px", textAlign: "center" }}>
          <p style={{ color: "#c7d8eb", margin: 0, fontSize: "11px" }}>
            © {new Date().getFullYear()} ZEMUEVE · Notificación automática
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <tr>
      <td style={{ padding: "10px 0", borderBottom: "1px solid #eef1f5", fontWeight: "bold", color: "#003A7D", width: "130px", verticalAlign: "top" }}>{label}:</td>
      <td style={{ padding: "10px 0", borderBottom: "1px solid #eef1f5", color: "#333" }}>{value}</td>
    </tr>
  );
}