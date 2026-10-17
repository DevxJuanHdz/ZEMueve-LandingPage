"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners, reveal } from "./shared";

function Partners() {
  return (
    <section id="aliados" className="bg-white px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0087FF]">
              Nuestro ecosistema
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-[#003A7D] sm:text-6xl">
              Empresas hermanas
              <br />
              <span className="text-[#0087FF]">y aliadas.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#484949]">
            Una red de empresas que comparte nuestra visión y fortalece cada
            movimiento.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              transition={{ delay: index * 0.1 }}
              className="group flex h-44 items-center justify-center border border-[#003A7D]/15 bg-[#f5f7fa] px-8 py-6 transition-colors duration-300 hover:border-[#0087FF]"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={partner.detail}
                  alt={`Logo de ${partner.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Partners };