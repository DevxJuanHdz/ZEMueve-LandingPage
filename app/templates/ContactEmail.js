export function ContactEmail({ nombre, correo, mensaje }) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <title>Nuevo Mensaje de Contacto</title>
            </head>
            <body style={{
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f4f4f4",
                padding: "20px"
            }}>
                <div style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}>
                    <h2 style={{ color: "#2c3e50", textAlign: "center" }}>📬 Nuevo Mensaje de Contacto</h2>

                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Correo:</strong> {correo}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p style={{ whiteSpace: "pre-wrap", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "4px" }}>
                        {mensaje}
                    </p>

                    <p style={{ fontSize: "12px", color: "#888", marginTop: "20px", textAlign: "center" }}>
                        Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
                    </p>
                </div>
            </body>
        </html>
    );
}
