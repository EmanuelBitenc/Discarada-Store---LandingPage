"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-dark-border bg-background">
      <div className="h-[2px] gold-shimmer" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo/logoCurta.png" alt="Discarada" width={32} height={40} className="brightness-0 invert opacity-90" />
              <span className="font-serif text-lg tracking-[0.15em] text-foreground/90">DISCARADA</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Nos detalhes que constroem lembranças. Acessórios que reforçam identidade e sustentam presença.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-sm tracking-widest text-gold uppercase mb-6">Navegação</h3>
            <ul className="space-y-3">
              {[
                { l: "Sobre", h: "#sobre" },
                { l: "Nossas Lojas", h: "#lojas" },
                { l: "Produtos", h: "#produtos" },
                { l: "Depoimentos", h: "#depoimentos" },
              ].map((link) => (
                <li key={link.h}>
                  <a href={link.h} className="text-sm text-text-secondary hover:text-gold transition-colors">{link.l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm tracking-widest text-gold uppercase mb-6">Conecte-se</h3>
            <div className="space-y-4">
              <a href="https://www.instagram.com/discaradaacessorios/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors group">
                <div className="w-9 h-9 rounded bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-gold/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                @discaradaacessorios
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} Discarada Acessórios — Todos os direitos reservados.</p>
          <p className="text-xs text-text-muted/50">Feito com ♥ para mulheres que brilham</p>
        </div>
      </div>
    </footer>
  );
}
