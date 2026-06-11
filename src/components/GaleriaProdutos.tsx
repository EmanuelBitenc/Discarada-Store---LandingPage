"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const produtos = [
  { src: "/produtos/bolsa.jpg", alt: "Detalhes que contam histórias", cat: "Exclusivos" },
  { src: "/produtos/brincos.jpg", alt: "Elegância Atemporal", cat: "Clássicos" },
  { src: "/produtos/brincos2.jpg", alt: "Reflexo da sua personalidade", cat: "Signature" },
  { src: "/produtos/oculos.jpg", alt: "Design que ilumina o olhar", cat: "Radiantes" },
];

export default function GaleriaProdutos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produtos" ref={ref} className="relative w-full py-24 md:py-32 scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-separator mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            Nossa <span className="text-gold-gradient italic">Coleção</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {produtos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded overflow-hidden bg-dark-card border border-dark-border group-hover:border-gold/40 transition-colors">
                <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs text-gold tracking-wider uppercase mb-1">{p.cat}</span>
                  <span className="text-sm font-medium">{p.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="https://www.instagram.com/discaradaacessorios/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="btn-ghost rounded">
            Ver Coleção Completa
          </a>
        </motion.div>
      </div>

    </section>
  );
}
