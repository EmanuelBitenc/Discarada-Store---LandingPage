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
            <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-dark-bg">
              
              {/* Imagem de Fundo (Efeito) */}
              <div className="absolute inset-0">
                <Image
                  src="/imgs/modelos2.png"
                  alt="Background effect"
                  fill
                  className="object-cover object-top opacity-20 scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Efeito de linhas douradas sutis (Grid) */}
                <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
                <div className="absolute left-[80%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
                <div className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                <div className="absolute top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                {/* Degradês para suavizar e mesclar com o fundo */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
              </div>

              {/* Imagem Principal */}
              <div className="absolute bottom-0 left-[10%] w-[80%] h-[85%] rounded-t-xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.8)] z-10 border-t border-x border-gold/5">
                <Image
                  src="/imgs/modelos2.png"
                  alt="Modelo com acessórios dourados Discarada"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

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

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/5"
            >
              <p className="text-sm md:text-[15px] text-text-muted font-light tracking-wide leading-relaxed">
                Você encontrou a loja de acessórios que <span className="text-gold/90">realça quem você é</span>. <br />
                <span className="italic text-text-secondary/80 mt-1 inline-block">
                  Perfeita para <span className="text-gold/90">mulheres autênticas</span>.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
