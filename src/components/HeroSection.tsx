"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/modelos.png"
          alt="Modelos Discarada"
          fill
          className="object-contain object-center scale-95 opacity-15 mix-blend-luminosity"
          priority
          sizes="100vw"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">
        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-[2px] mx-auto mb-10 gold-shimmer origin-center"
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Image
            src="/logo/logoCurta.png"
            alt="DS - Discarada"
            width={110}
            height={140}
            className="mx-auto brightness-0 invert drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.12em] mb-4 drop-shadow-xl"
        >
          <span className="text-gold-gradient">DISCARADA</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-serif text-base md:text-lg text-text-secondary italic tracking-wide mb-12 drop-shadow-md"
        >
          Nos detalhes que constroem lembranças
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#lojas" className="btn-ghost rounded-full bg-background/50 backdrop-blur-sm">
            Escolha sua Loja
          </a>
          <a
            href="https://www.instagram.com/discaradaacessorios/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider text-text-secondary hover:text-gold transition-colors uppercase flex items-center gap-2 bg-background/30 px-6 py-2 rounded-full backdrop-blur-sm border border-transparent hover:border-gold/20"
          >
            Ver Coleção
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-9 border border-gold/30 rounded-full flex justify-center pt-2 bg-background/50 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
