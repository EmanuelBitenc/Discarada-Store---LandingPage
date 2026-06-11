"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function SobreAMarca() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="w-full py-24 md:py-32 scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark-card">
              <Image
                src="/imgs/modelos2.png"
                alt="Modelo com acessórios dourados Discarada"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.25em] text-gold uppercase font-medium">Nossa Essência</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
              A <span className="text-gold-gradient italic">Discarada</span>
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed text-sm md:text-base">
              <p>
                Existe para acompanhar mulheres em diferentes fases da vida: no
                casamento de uma filha, na formatura, na primeira entrevista de
                emprego, no trabalho, nas viagens, nos dias comuns e nos dias
                inesquecíveis.
              </p>
              <p className="text-gold font-serif text-lg italic">
                &ldquo;Estamos nos detalhes que constroem lembranças.&rdquo;
              </p>
              <p>
                Acreditamos que acessórios são linguagem simbólica. Não servem
                apenas para enfeitar, mas para ancorar estados internos, reforçar
                identidade e sustentar presença.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-dark-border">
              {[
                { n: "4", l: "Lojas" },
                { n: "500+", l: "Produtos" },
                { n: "1000+", l: "Clientes" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-2xl text-gold-gradient">{s.n}</div>
                  <div className="text-xs tracking-wider text-text-muted mt-1 uppercase">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
