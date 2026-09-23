"use client";

import { useState } from "react";

type Impact = {
  title: string;
  summary: string;
  icon: "signal" | "warning" | "planet" | "loop" | "scale";
};

// Conteúdo temporário: alterar este array atualiza título, texto e ícone de cada card.
const impacts: Impact[] = [
  { title: "Panorama do E-Waste", summary: "Template de conteúdo sobre o crescimento da geração de resíduos eletroeletrônicos, hábitos de consumo e o ciclo de vida cada vez mais curto dos dispositivos.", icon: "signal" },
  { title: "Componentes e Toxicidade", summary: "Template de conteúdo sobre metais pesados e outras substâncias presentes em equipamentos eletrônicos que exigem cuidado no descarte.", icon: "warning" },
  { title: "Impactos Socioambientais", summary: "Template de conteúdo sobre os riscos de contaminação do solo e da água, além dos efeitos sociais associados ao descarte inadequado.", icon: "planet" },
  { title: "Mineração Urbana", summary: "Template de conteúdo sobre recuperação, reutilização e retorno de materiais valiosos para novos ciclos produtivos.", icon: "loop" },
  { title: "Legislação e PNRS", summary: "Template de conteúdo sobre descarte responsável, logística reversa e o papel compartilhado de consumidores, empresas e poder público.", icon: "scale" },
];

function ImpactIcon({ name }: { name: Impact["icon"] }) {
  const paths = {
    signal: <><path d="M4 17v-2M8 17v-5M12 17V9M16 17V5M20 17V2" /></>,
    warning: <><path d="m12 3 10 18H2L12 3Z" /><path d="M12 9v4M12 17h.01" /></>,
    planet: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12s1.1 6.6 3.3 9" /></>,
    loop: <><path d="M20 11a8 8 0 0 0-14.9-4L3 10" /><path d="M3 5v5h5M4 13a8 8 0 0 0 14.9 4L21 14" /><path d="M21 19v-5h-5" /></>,
    scale: <><path d="M12 3v18M5 7h14M5 7l-3 6h6L5 7ZM19 7l-3 6h6l-3-6ZM8 21h8" /></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function ImpactCards() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="impactos" className="relative overflow-hidden border-t border-lime-200/10 bg-[#090d0b] px-5 py-24 sm:px-10 lg:px-[8vw]" aria-labelledby="impactos-title">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_72%_0%,rgba(197,255,91,0.10),transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-5 flex items-center gap-2 text-[.7rem] font-extrabold tracking-[.14em] text-[#7ef6bc]"><span className="h-px w-7 bg-current" /> MÓDULO EDUCATIVO</p>
          <h2 id="impactos-title" className="font-['Arial_Black','Segoe_UI',sans-serif] text-4xl font-black leading-[.95] tracking-[-.07em] text-[#f5fbf7] sm:text-6xl">Impactos do <span className="text-[#c5ff5b]">Lixo Eletrônico</span></h2>
          <p className="mt-6 text-base leading-7 text-[#aeb9b2]">Explore os temas abaixo. Cada card reúne um espaço preparado para os conteúdos educativos que serão aprofundados nas próximas revisões.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {impacts.map((impact, index) => {
            const isExpanded = expanded === index;
            const bodyId = `impact-card-${index}`;
            return (
              <article key={impact.title} className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${isExpanded ? "border-lime-200/35 bg-lime-200/[.07] shadow-[0_0_38px_rgba(197,255,91,.08)] md:col-span-2" : "border-white/10 bg-white/[.025] hover:-translate-y-1 hover:border-lime-200/30 hover:bg-white/[.05]"}`}>
                <button className="flex w-full items-center gap-4 p-5 text-left sm:p-6" type="button" aria-expanded={isExpanded} aria-controls={bodyId} onClick={() => setExpanded(isExpanded ? null : index)}>
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl transition-colors ${isExpanded ? "bg-[#c5ff5b] text-[#050706]" : "bg-white/[.07] text-[#c5ff5b] group-hover:bg-[#c5ff5b] group-hover:text-[#050706]"}`}><ImpactIcon name={impact.icon} /></span>
                  <span className="min-w-0 flex-1"><span className="mb-1 block text-[.65rem] font-bold tracking-[.12em] text-[#7ef6bc]/80">TEMA 0{index + 1}</span><span className="block text-lg font-bold text-[#f5fbf7] sm:text-xl">{impact.title}</span></span>
                  <span className={`grid size-8 place-items-center rounded-full border border-white/15 text-lg text-[#c5ff5b] transition-transform duration-300 ${isExpanded ? "rotate-45" : "group-hover:rotate-90"}`} aria-hidden="true">+</span>
                </button>
                <div id={bodyId} className={`grid transition-[grid-template-rows] duration-500 ease-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="max-w-2xl px-5 pb-6 pl-20 text-sm leading-6 text-[#bdc9c1] sm:px-6 sm:pb-7 sm:pl-[5.75rem]">{impact.summary}</p></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
