"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  {
    title: "Instagram",
    desc: "Novidades e lançamentos",
    href: "https://www.instagram.com/discaradaacessorios/?hl=pt-br",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    title: "Cliente Oculto",
    desc: "Programa exclusivo",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdBPobJ787Emq4yHvzMM29Ga4PCY0H59Uf_rCFf-3b9SHj_wg/viewform",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
  },
  {
    title: "Faça Parte da Equipe",
    desc: "Junte-se ao nosso time",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfhZUyPnYBIirBtyUacxDhcryxSQvSDkP4jtYC0t00KzHbOlw/viewform",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  },
];

export default function LinksUteis() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-16 md:py-20">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="section-separator mb-5" />
          <h2 className="font-serif text-2xl md:text-3xl">
            Links <span className="text-gold-gradient italic">Rápidos</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-gold mb-3 group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                {link.icon}
              </div>
              <h3 className="font-medium text-sm mb-1 group-hover:text-gold transition-colors">{link.title}</h3>
              <p className="text-xs text-text-muted">{link.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
