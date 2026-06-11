"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre", external: false },
    { label: "Lojas", href: "#lojas", external: false },
    { label: "Coleção", href: "#produtos", external: false },
    { label: "Depoimentos", href: "#depoimentos", external: false },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo/logoCurta.png"
            alt="Discarada"
            width={scrolled ? 24 : 32}
            height={scrolled ? 30 : 40}
            className="brightness-0 invert transition-all"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="text-xs uppercase tracking-[0.2em] font-medium text-foreground hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#lojas"
          className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-medium text-gold hover:text-gold-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Nossas Lojas
        </a>
      </div>
    </nav>
  );
}
