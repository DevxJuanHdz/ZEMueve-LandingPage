const coveredStates = [
    "Nuevo León",
    "Coahuila",
    "San Luis Potosí",
    "Aguascalientes",
    "Ciudad de México",
    "Estado de México",
    "Jalisco",
    "Querétaro",
    "Guanajuato",
    "Chihuahua",
    "Sonora",
]

export default function OurTransportsSection() {
    return (
        <section className="relative overflow-hidden bg-[#001b3d] px-5 py-24 text-white lg:px-10 lg:py-32" id="nuestros-transportes">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,#0087ff40,transparent_32%),radial-gradient(circle_at_90%_80%,#00e6ff1c,transparent_26%)]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
                    <div>
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#00E6FF]">
                            Cobertura nacional
                        </p>
                        <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                            Donde tu carga
                            <br />
                            <span className="text-[#00E6FF]">necesita avanzar.</span>
                        </h2>
                        <p className="mt-7 max-w-md text-sm leading-6 text-white/65">
                            Nuestra red de operación tiene presencia en los estados señalados, conectando tus envíos con destinos clave en México.
                        </p>
                    </div>

                    <div className="border border-white/20 bg-[#003A7D]/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-7">
                        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
                                Estados con cobertura
                            </h3>
                            <span className="size-2 rounded-full bg-[#00E6FF] shadow-[0_0_14px_#00E6FF]" aria-hidden="true" />
                        </div>

                        <div className="mt-5 aspect-[4/3] bg-[#002e67] p-3 sm:p-5">
                            <img
                                src="/mexico-states.svg"
                                alt="Mapa de México con los estados de cobertura destacados en color turquesa"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {coveredStates.map((state) => (
                                <span
                                    key={state}
                                    className="border border-[#00E6FF]/35 bg-[#00E6FF]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#B9F8FF]"
                                >
                                    {state}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
