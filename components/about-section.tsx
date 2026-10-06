"use client";

export function AboutSection() {
  return (
    <section id="quem somos" className="scroll-mt-16 border-t border-white/10 bg-[#050706] px-5 py-24 sm:px-10 lg:px-[8vw]">
      <div className="mx-auto max-w-5xl">
        
        {/* 1. Título Centralizado e Parágrafo Explicativo */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Arial_Black','Segoe_UI',sans-serif] text-3xl font-black text-white sm:text-4xl">
            Quem somos nós
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c3d2c9] sm:text-base">
            O <strong>E-Descarte.tech</strong> é um projeto criado por estudantes do Instituto de Computação da UFF para revelar uma conexão que costuma passar despercebida: o quanto os dispositivos e serviços digitais que usamos todos os dias dependem de recursos naturais e geram resíduos que afetam o meio ambiente. Nossa missão é explicar esse tema de forma simples e acessível, ajudando as pessoas a entenderem os impactos do e-waste no mundo real e a usarem e descartarem a tecnologia com mais consciência.
          </p>
        </div>

        {/* 2. Os 3 Cards de Pilares / Objetivos */}
        <div className="grid gap-6 sm:grid-cols-3 mb-20">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-center flex flex-col items-center">
            <div className="size-12 rounded-full bg-[#c5ff5b]/10 grid place-items-center mb-4 text-2xl">
              🌱
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Conscientizar</h3>
            <p className="text-xs leading-relaxed text-[#8ea096]">
              Mostrar, de um jeito leve e direto, como o mundo digital também gera resíduos no mundo real — começando pelo lixo eletrônico.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-center flex flex-col items-center">
            <div className="size-12 rounded-full bg-[#c5ff5b]/10 grid place-items-center mb-4 text-2xl">
              🧠
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Explicar o REEE</h3>
            <p className="text-xs leading-relaxed text-[#8ea096]">
              Traduzir conceitos de logística reversa, metais pesados e mineração urbana em uma linguagem que qualquer pessoa consiga entender.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-center flex flex-col items-center">
            <div className="size-12 rounded-full bg-[#c5ff5b]/10 grid place-items-center mb-4 text-2xl">
              🌍
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Inspirar mudança</h3>
            <p className="text-xs leading-relaxed text-[#8ea096]">
              Incentivar escolhas mais conscientes no descarte e consumo de tecnologia, pensando no futuro do planeta e das próximas gerações.
            </p>
          </div>
        </div>

        {/* 3. Bloco Institucional 1: Instituto de Computação - UFF */}
        <div className="mt-12">
          <p className="text-[0.65rem] font-black uppercase tracking-widest text-[#7ef6bc] mb-2">
            UM PROJETO ACADÊMICO
          </p>
          
          <div className="grid gap-8 items-center lg:grid-cols-12 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8">
            {/* Card Branco com o Logo do IC-UFF */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] rounded-2xl bg-white p-6 shadow-xl flex items-center justify-center">
                <img
                  src="/images/ic-uff-logo.png"
                  alt="Instituto de Computação - UFF"
                  className="w-full h-auto object-contain max-h-[140px]"
                />
              </div>
            </div>

            {/* Texto do Instituto */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Instituto de Computação — UFF
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#b0c0b6]">
                Somos alunos dos cursos do Instituto de Computação (IC) da Universidade Federal Fluminense, em Niterói (RJ). Criado em 1998 e herdeiro do Departamento de Ciência da Computação fundado em 1974, o IC reúne ensino, pesquisa e extensão em computação — da graduação ao doutorado. O E-Descarte.tech nasceu desse ambiente, unindo tecnologia e responsabilidade ambiental.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Bloco Institucional 2: Projeto de Extensão RecicleTech UFF */}
        <div className="mt-8">
          <div className="grid gap-8 items-center lg:grid-cols-12 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8">
            {/* Card com o Logo do RECICLETECH UFF */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] rounded-2xl bg-[#0b1b38] p-6 shadow-xl flex items-center justify-center border border-white/10">
                <img
                  src="/images/recicletech-logo.png"
                  alt="Projeto RecicleTech UFF"
                  className="w-full h-auto object-contain max-h-[140px]"
                />
              </div>
            </div>

            {/* Texto Atualizado com os Dados Oficiais do RecicleTech */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Projeto RecicleTech UFF
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#b0c0b6]">
                O <strong>RecicleTech</strong> é um projeto de extensão oficial do Instituto de Computação da UFF. O projeto atua na promoção da conscientização socioambiental, na disponibilização e gestão de um ponto de coleta de resíduos eletroeletrônicos no IC-UFF e no direcionamento correto de materiais para reciclagem através de parcerias especializadas, unindo TI Verde, educação ambiental e responsabilidade social.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}