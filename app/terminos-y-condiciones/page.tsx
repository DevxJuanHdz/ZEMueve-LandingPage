import { buildMetadata } from "@/app/libs/seo";

export const metadata = buildMetadata({
  title: "Términos y Condiciones | ZEMUEVE | Transportes de Carga Terrestre",
  description: "Consulta los Términos y Condiciones de uso del sitio web de ZEMUEVE. Conoce las responsabilidades, derechos y políticas aplicables a nuestros servicios de transporte de carga terrestre.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.zemueve.com.mx",
  image: "/zemueve-hero.webp",
});

export default function TerminosYCondiciones() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-20 max-w-5xl mx-auto">
      <h1 className="bg-gray-200 p-8 text-3xl md:text-4xl font-bold text-center mb-10 text-[#010091] mt-6">
        TÉRMINOS Y CONDICIONES DEL SERVICIO
      </h1>

      <ol className="space-y-8 list-decimal list-inside text-justify">
        <li>
          <strong>Condiciones Generales</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>La presente cotización sustituye cualquier propuesta anterior. </li>
            <li>Vigencia de la cotización: 6 meses. </li>
            <li>Tarifas expresadas en moneda nacional, más IVA. </li>
            <li>En caso de cancelación del servicio o falsa solicitud de posicionamiento, se cobrará el 50% del valor del flete.</li>
            <li>Las tarifas incluyen peajes y consideran tránsito únicamente por carreteras de cuota. </li>
          </ul>
        </li>

        <li>
          <strong>Condiciones de Pago</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Los primeros tres servicios deberán ser pagados por anticipado.</li>
            <li>El otorgamiento de crédito estará sujeto a validación y autorización administrativa.</li>
            <li>El incumplimiento en pagos podrá generar cargos por mora.</li>
            <li>Se realizará una <strong>investigación crediticia</strong> antes de autorizar cualquier crédito. El departamento de administración podrá autorizar un crédito de hasta <strong>15 días</strong> a partir de la fecha de la factura.</li>
          </ul>
        </li>

        <li>
          <strong>Alcance del Servicio</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>La cotización contempla una sola entrega por viaje.</li>
            <li>Cualquier servicio adicional será cotizado por separado.</li>
            <li>Las unidades cuentan con monitoreo satelital y atención logística 24/7.</li>
            <li>Los operadores cuentan con comunicación empresarial; por seguridad, no se comparte contacto directo.</li>
          </ul>
        </li>

        <li>
          <strong>Maniobras y Tiempos de Carga/Descarga</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>El cliente será responsable de las maniobras de carga y descarga.</li>
            <li>Tiempo libre incluido:
              <ul className="list-disc ml-6">
                <li>Carga: 3 horas.</li>
                <li>Descarga: 3 horas.</li>
              </ul>
            </li>
            <li>A partir de la hora 3:01 se generarán cargos por demora:
              <ul className="list-disc ml-6">
                <li>$300 + IVA para Rabón y Torton.</li>
                <li>$400 + IVA para Tractocamión 53 ft.</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Seguro y Responsabilidad</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>El servicio no incluye seguro de mercancía.</li>
            <li>El cliente será responsable de contratar y mantener vigente el seguro correspondiente para la protección total de su mercancía.</li>
            <li>La mercancía se recibe en bultos cerrados y sin verificación de contenido, peso, estado, cantidad o cubicaje.</li>
            <li>La responsabilidad del transportista se limitará conforme a lo expresamente establecido en el presente documento y demás acuerdos aplicables entre las partes.</li>
            <li>En caso de siniestro, robo, accidente, caso fortuito o fuerza mayor, la atención y seguimiento se realizará conforme a los procedimientos establecidos entre las partes y, en su caso, ante la aseguradora correspondiente.</li>
            <li>La entrega de la mercancía y evidencia digital correspondiente acreditará la conclusión del servicio.</li>
          </ul>
        </li>

        <li>
          <strong>Evidencias y Documentación</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Las evidencias de entrega serán emitidas exclusivamente en formato digital (POD).</li>
          </ul>
        </li>

        <li>
          <strong>Cumplimiento Normativo</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>El servicio se realiza conforme a las disposiciones aplicables al autotransporte federal y Normas Oficiales Mexicanas vigentes.</li>
          </ul>
        </li>

        <li>
          <strong>Restricciones Operativas</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Restricciones nocturnas en determinadas zonas y estados, incluyendo de manera enunciativa mas no limitativa Guanajuato, Querétaro, Ciudad de México, Estado de México, Morelos, Michoacán y Zacatecas.</li>
            <li>En estos casos, la unidad podrá ser resguardada en instalaciones seguras autorizadas.</li>
            <li>No se presta servicio para el transporte de materiales o residuos peligrosos.</li>
            <li>La cotización considera disponibilidad de unidad en origen. Cualquier movimiento en vacío a origen se cotiza por evento.</li>
          </ul>
        </li>

        <li>
          <strong>Condiciones Especiales</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>El equipo de sujeción estándar es el siguiente:
              <ul className="list-disc ml-6">
                <li>T3: 2 bandas, 2 gatas.</li>
                <li>C2 y C3: 2 bandas, 1 red logística.</li>
              </ul>
            </li>
            <li>Si la ubicación de origen o destino no es apta para la llegada de la unidad, podrá ser reubicada o posicionada en un punto seguro y operativo, generándose los cargos correspondientes.</li>
            <li>No se permite realizar modificaciones estructurales a las unidades o remolques, incluyendo la colocación de taquetes, polines o cualquier sistema de anclaje no autorizado.</li>
          </ul>
        </li>

        <li>
          <strong>Restricciones Adicionales</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>No se permite el acceso al AIFA.</li>
            <li>Por motivos de seguridad operativa, podrán aplicarse restricciones de circulación en determinadas rutas y horarios.</li>
            <li>Puebla, Puebla: restricción de circulación de 18:00 a 07:00 horas.</li>
            <li>Nuevo Laredo, Matamoros y Reynosa, Tamaulipas: restricción de circulación de 17:00 a 07:00 horas.</li>
            <li>Carretera Libre 40 Matehuala – Monterrey: circulación prohibida.</li>
            <li>Carretera 57 tramo Huachichil – Puerto México: circulación prohibida.</li>
            <li>Autopista 40D Arco Norte: circulación prohibida.</li>
            <li>Autopista 80D / Carretera 80 Lagos de Moreno – San Luis Potosí: circulación prohibida.</li>
            <li>Unidades no disponibles para exportación.</li>
            <li>Cumplimiento estricto de plazos: El cliente reconoce que cualquier incumplimiento de los tiempos de entrega o recepción, o la no disponibilidad de personal para carga/descarga, generará cargos adicionales.</li>
            <li>El cliente será responsable del correcto embalaje, aseguramiento y protección de la mercancía transportada.</li>
          </ul>
        </li>

        <li>
          <strong>DOCUMENTACIÓN DE LA MERCANCÍA:</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>EL CLIENTE se obliga a contar y exhibir, cuando la autoridad competente lo requiera, la documentación que acredite la legal procedencia de la mercancía, incluyendo factura(s), Carta Porte y, en su caso, pedimento(s) de importación. La falta, negativa o irregularidad en dicha documentación será responsabilidad exclusiva de EL CLIENTE, quien, como contratante del servicio, se obliga a mantener indemne a ZEMUEVE y, en su caso, a cubrir los daños, costos, sanciones o perjuicios que se deriven.</li>
          </ul>
        </li>

        <li>
          <strong>Caso Fortuito y Seguridad Operativa</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>El prestador del servicio podrá suspender, reprogramar o modificar rutas, horarios o condiciones de operación cuando existan riesgos de seguridad, bloqueos, condiciones climatológicas, hechos de violencia, disposiciones de autoridad o cualquier situación que pueda comprometer la integridad del operador, unidad o mercancía, sin que ello genere responsabilidad adicional.</li>
          </ul>
        </li>
      </ol>
    </section>
  )
}
