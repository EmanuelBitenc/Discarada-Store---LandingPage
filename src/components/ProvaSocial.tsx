"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const depoimentos = [
  { src: "/depoimentos/depoimento1.jpg", alt: "Depoimento de cliente" },
  { src: "/depoimentos/depoimento2.jpg", alt: "Depoimento de cliente" },
  { src: "/depoimentos/depoimento3.jpg", alt: "Depoimento de cliente" },
];

export default function ProvaSocial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" ref={ref} className="relative w-full py-24 md:py-32 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Header left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 xl:w-[30%] text-center lg:text-left"
          >
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              O que estão falando da <span className="text-gold-gradient italic">Discarada?</span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg">
              Depoimentos de clientes reais em nossas redes sociais. 
              O acessório certo transforma tudo!
            </p>
          </motion.div>

          {/* Testimonials grid right side */}
          <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 lg:gap-6 mt-8 lg:mt-0">
            {depoimentos.map((d, i) => (
              <motion.div
                key={d.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative w-full max-w-[340px] mx-auto md:max-w-none"
              >
                {/* Gold frame effect like in the old design */}
                <div className="absolute -inset-2 bg-gold/10 border border-gold/20 rounded-xl transform translate-x-2 translate-y-2" />
                <div className="absolute -inset-2 bg-gold/5 border border-gold/10 rounded-xl transform -translate-x-1 -translate-y-1" />
                
                {/* The actual image */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-gold/40 shadow-2xl bg-dark-surface z-10">
                  <Image
                    src={d.src}
                    alt={d.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 33vw"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
