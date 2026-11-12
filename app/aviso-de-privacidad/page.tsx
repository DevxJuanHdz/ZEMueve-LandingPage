import { buildMetadata } from "@/app/libs/seo";

export const metadata = buildMetadata({
  title: "Política de Privacidad | ZEMUEVE | Transportes de Carga Terrestre",
  description: "Consulta nuestra Política de Privacidad y conoce cómo ZEMUEVE protege y utiliza la información personal de sus clientes y visitantes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.zemueve.com.mx",
  image: "/zemueve-hero.webp",
});

export default function AvisoDePrivacidad() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-20 max-w-5xl mx-auto">
      <h1 className="bg-gray-200 p-8 text-3xl md:text-4xl font-bold mb-10 text-[#010091] mt-6">
        AVISO DE PRIVACIDAD
      </h1>

      <div className="space-y-6 text-justify">
        <h2 className="text-2xl font-semibold">1 – ¿Qué Hacemos Con Tu Información?</h2>
        <p>
          Cuando entras en nuestra página, como parte del proceso de contacto, nosotros recolectamos la información personal que nos das tales como nombre, dirección y correo electrónico.
        </p>
        <p>
          Cuando navegas en nuestra página, también recibimos de manera automática la dirección de protocolo de internet de tu computadora (IP) con el fin de proporcionarnos información que nos ayuda a conocer acerca de su navegador y sistema operativo.
        </p>
        <p>
          Email marketing: Con tu permiso, podremos enviarte correos electrónicos acerca de nuestros nuevos productos y otras actualizaciones.
        </p>

        <h2 className="text-2xl font-semibold">2 – Consentimiento</h2>
        <p className="font-semibold">¿Cómo obtienen mi consentimiento?</p>
        <p>
          Cuando nos provees tu información personal para enviar un formulario e iniciar un contacto, accedes a la casilla de aviso legal y de consentimiento, esto solamente quiere decir que nosotros te podremos contactar de manera directa y no podremos proporcionar tus datos a terceros. Si te pedimos tu información personal por una razón secundaria, como marketing, te pediremos directamente tu expreso consentimiento, o te daremos la oportunidad de negarte.
        </p>

        <p className="font-semibold">¿Cómo puedo anular mi consentimiento?</p>
        <p>
          Si luego de haber aceptado cambias de opinión, puedes anular tu consentimiento para que te contactemos, por la recolección, uso o divulgación de tu información, en cualquier momento, contactándonos a <a href="mailto:direccion@zemueve.com.mx" className="text-blue-600 underline">direccion@zemueve.com.mx</a> o escribiéndonos a: ZEMUEVE ubicados en Blvd. Jose María Morelos 3546-B, Col. San Miguel de Rentería, León, Gto. México C.P. 37278, o comunicándote a los teléfonos: +52 477 764 1540  +52 477 239 8706.
        </p>

        <h2 className="text-2xl font-semibold">3 – Divulgación</h2>
        <p>
          Podemos divulgar tu información personal si se nos requiere por ley o si violas nuestros Términos de Servicio.
        </p>

        <h2 className="text-2xl font-semibold">4 – Servicios De Terceras Partes</h2>
        <p>
          En general, los proveedores de terceras partes utilizados por nosotros solo recopilarán, usarán y divulgarán tu información en la medida que sea necesaria para que les permita desempeñar los servicios que nos proveen. Sin embargo, algunos proveedores de servicios de terceros, tales como pasarelas de pago y otros procesadores de transacciones de pago, tienen sus propias políticas de privacidad con respecto a la información que estamos obligados a proporcionarles para las transacciones relacionadas con las compras. Para estos proveedores, te recomendamos que leas las políticas de privacidad para que puedas entender la manera en que tu información personal será manejada.
        </p>
        <p>
          En particular, recuerda que algunos proveedores pueden estar ubicados o contar con instalaciones que se encuentran en una jurisdicción diferente a ti o nosotros. Así que si deseas proceder con una transacción que involucra los servicios de un proveedor a terceros, tu información puede estar sujeta a las leyes de la jurisdicción en que se encuentra el proveedor de servicios o sus instalaciones.
        </p>
        <p>
          Una vez que abandonas nuestro sitio web o te re-diriges a un sitio o aplicación de terceros, ya no estás siendo regulado por la presente Política de Privacidad o los Términos de Servicio de nuestra página web.
        </p>

        <h3 className="text-xl font-semibold">Enlaces</h3>
        <p>
          Cuando haces clic en enlaces de nuestra página, puede que seas re-dirigido fuera de nuestro sitio. No somos responsables por las prácticas de privacidad de otros sitios y te recomendamos leer sus normas de privacidad.
        </p>

        <h2 className="text-2xl font-semibold">5 – Seguridad</h2>
        <p>
          Para proteger tu información personal, tomamos precauciones razonables y seguimos las mejores prácticas de la industria para asegurarnos de que no haya pérdida de manera inapropiada, mal uso, acceso, divulgación, alteración o destrucción de la misma.
        </p>
        <p>
          Si nos proporcionas la información de tu tarjeta de crédito, dicha información es encriptada mediante la tecnología Secure Socket Layer (SSL) y se almacena con un cifrado AES-256. Aunque ningún método de transmisión a través de Internet o de almacenamiento electrónico es 100% seguro, seguimos todos los requisitos de PCI-DSS e implementamos normas adicionales aceptadas por la industria.
        </p>

        <h3 className="text-xl font-semibold">Cookies</h3>
        <p>
          Aquí tienes una lista de cookies que utilizamos. Las enlistamos para que puedas elegir si quieres optar por quitarlas o no.
        </p>
        <h4 className="font-semibold">Google Analytics</h4>
        <p>
          Nuestra página utiliza cookies de desempeño de tercera parte de Google Analytics (servicio ofrecido por Google, Inc.) para permitirle recoger de forma anónima y de analizar el comportamiento de los visitantes durante la permanencia dentro del sitio, con el fin de mejorar su experiencia y utilizo.
        </p>
        <p>
          A través del uso del panel de control de Google Analytics, es posible entender si las visitas de los usuarios fueron de visitantes nuevos o que regresaron a la página, verificando la modalidad de navegación de la página (link de ingreso, de salida, navegación entre la página, tiempo de permanencia, lugar de procedencia geográfica, etc.).
        </p>
        <p>
          Para más información con respecto a Google Analytics es posible consultar los sitios:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><a href="https://www.google.it/policies/privacy/partners/" target="_blank" className="text-blue-600 underline">https://www.google.it/policies/privacy/partners/</a></li>
          <li><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" className="text-blue-600 underline">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a></li>
        </ul>
        <p>
          También resulta posible deshabitar las acciones de Google Analytics a través de los instrumentos que ofrece las plataformas de Google. Para mayor información conforme a este tema, consultar la página:{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-blue-600 underline">https://tools.google.com/dlpage/gaoptout</a>.
        </p>

        <h2 className="text-2xl font-semibold">6 – Edad De Consentimiento</h2>
        <p>
          Al utilizar este sitio, declaras que tienes al menos la mayoría de edad en tu estado o provincia de residencia y que nos has dado tu consentimiento para permitir que cualquiera de tus dependientes menores use este sitio.
        </p>

        <h2 className="text-2xl font-semibold">7 – Cambios A Esta Política De Privacidad</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, así que por favor revísala frecuentemente. Los cambios y aclaraciones entrarán en vigencia inmediatamente después de su publicación en el sitio web. Si hacemos cambios materiales a esta política, notificaremos aquí que ha sido actualizada, por lo que cual estás enterado de qué información recopilamos, cómo y bajo qué circunstancias, si las hubiere, la utilizamos y/o divulgamos.
        </p>
        <p>
          Si nuestra página es adquirida o fusionada con otra empresa, tu información puede ser transferida a los nuevos propietarios, para que podamos seguir ofreciéndote productos.
        </p>

        <h2 className="text-2xl font-semibold">Preguntas E Información De Contacto:</h2>
        <p>
          Si quieres: acceder, corregir, enmendar o borrar cualquier información personal que poseamos sobre ti, registrar una queja, o simplemente quieres más información contacta a nuestro Oficial de Cumplimiento de Privacidad{" "}
          <a href="mailto:direccion@espinardo.com.mx" className="text-blue-600 underline">direccion@zemueve.com.mx</a> o escribiéndonos a: ZEMUEVE ubicados en la calle Blvd. Jose María Morelos 3546-B, Col. San Miguel de Rentería, León, Gto. México C.P. 37278, o comunicándote a los teléfonos: +52 477 764 1540  +52 477 239 8706.
        </p>
      </div>
    </section>
  )
}
