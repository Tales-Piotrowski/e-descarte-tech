"use client";

import { useState } from "react";

type ItemLine = "verde" | "azul" | "marrom" | "branca";

type WasteItem = {
  id: number;
  name: string;
  category: string;
  iconUrl: string;
  correctLine: ItemLine;
  lineName: string;
  explanation: string;
};

const ITEMS_BANK: WasteItem[] = [
  {
    id: 1,
    name: "Smartphone Velho",
    category: "Informática e Telefonia",
    iconUrl: "https://img.icons8.com/color/96/smartphone.png",
    correctLine: "verde",
    lineName: "Linha Verde",
    explanation: "Celulares, tablets, notebooks e computadores pertencem à Linha Verde (TI e Telecomunicações), caracterizada pelo alto teor de placas de circuito e metais nobres.",
  },
  {
    id: 2,
    name: "Ferro de Passar",
    category: "Eletroportátil",
    iconUrl: "https://img.icons8.com/color/96/iron.png",
    correctLine: "azul",
    lineName: "Linha Azul",
    explanation: "Ferros de passar, liquidificadores, batedeiras e secadores de cabelo são classificados como Linha Azul (Eletroportáteis de pequeno porte).",
  },
  {
    id: 3,
    name: "Televisor Antigo",
    category: "Áudio e Vídeo",
    iconUrl: "https://img.icons8.com/color/96/tv.png",
    correctLine: "marrom",
    lineName: "Linha Marrom",
    explanation: "Televisores, monitores, aparelhos de som e câmeras fazem parte da Linha Marrom (Equipamentos de Áudio e Vídeo).",
  },
  {
    id: 4,
    name: "Micro-ondas",
    category: "Grande Eletrodoméstico",
    iconUrl: "https://img.icons8.com/color/96/microwave.png",
    correctLine: "branca",
    lineName: "Linha Branca",
    explanation: "Micro-ondas, geladeiras, fogões e máquinas de lavar pertencem à Linha Branca (Grandes Eletrodomésticos).",
  },
  {
    id: 5,
    name: "Notebook sem uso",
    category: "Informática",
    iconUrl: "https://img.icons8.com/color/96/laptop.png",
    correctLine: "verde",
    lineName: "Linha Verde",
    explanation: "Computadores portáteis e periféricos pertencem à Linha Verde e são fontes prioritárias da mineração urbana de metais.",
  },
  {
    id: 6,
    name: "Liquidificador Quebrado",
    category: "Eletroportátil",
    iconUrl: "https://img.icons8.com/color/96/blender.png",
    correctLine: "azul",
    lineName: "Linha Azul",
    explanation: "Eletroportáteis de cozinha pertencem à Linha Azul. Seus motores de cobre e componentes plásticos são amplamente recicláveis.",
  },
  {
    id: 7,
    name: "Caixa de Som",
    category: "Áudio",
    iconUrl: "https://img.icons8.com/color/96/speaker.png",
    correctLine: "marrom",
    lineName: "Linha Marrom",
    explanation: "Equipamentos de som, home theaters e reprodutores de mídia pertencem à Linha Marrom.",
  },
  {
    id: 8,
    name: "Máquina de Lavar",
    category: "Grande Eletrodoméstico",
    iconUrl: "https://img.icons8.com/color/96/washer.png",
    correctLine: "branca",
    lineName: "Linha Branca",
    explanation: "Lavadoras, fogões e refrigeradores são da Linha Branca, contendo grandes estruturas de aço, alumínio e cobre.",
  },
];

const LINES_CONFIG = [
  {
    id: "verde" as ItemLine,
    title: "Linha Verde",
    subtitle: "Informática & Celulares",
    borderColor: "border-emerald-500",
    bgColor: "bg-emerald-500/10 hover:bg-emerald-500/20",
    textColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
  },
  {
    id: "azul" as ItemLine,
    title: "Linha Azul",
    subtitle: "Eletroportáteis",
    borderColor: "border-sky-500",
    bgColor: "bg-sky-500/10 hover:bg-sky-500/20",
    textColor: "text-sky-400",
    badgeColor: "bg-sky-500/20 text-sky-300",
  },
  {
    id: "marrom" as ItemLine,
    title: "Linha Marrom",
    subtitle: "Áudio, Vídeo & Telas",
    borderColor: "border-amber-600",
    bgColor: "bg-amber-600/10 hover:bg-amber-600/20",
    textColor: "text-amber-400",
    badgeColor: "bg-amber-600/20 text-amber-300",
  },
  {
    id: "branca" as ItemLine,
    title: "Linha Branca",
    subtitle: "Eletrodomésticos",
    borderColor: "border-slate-300",
    bgColor: "bg-slate-300/10 hover:bg-slate-300/20",
    textColor: "text-slate-200",
    badgeColor: "bg-slate-300/20 text-slate-100",
  },
];

export function SortingGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLine, setSelectedLine] = useState<ItemLine | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentItem = ITEMS_BANK[currentIndex];
  const isAnswered = selectedLine !== null;

  function handleSelectLine(line: ItemLine) {
    if (isAnswered) return;
    setSelectedLine(line);
    if (line === currentItem.correctLine) {
      setScore((prev) => prev + 10);
    }
  }

  function handleNextItem() {
    setSelectedLine(null);
    if (currentIndex + 1 < ITEMS_BANK.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedLine(null);
    setScore(0);
    setIsFinished(false);
  }

  return (
    <section id="triagem" className="scroll-mt-16 border-t border-white/10 bg-[#070a08] px-5 py-24 sm:px-10 lg:px-[8vw]">
      <div className="mx-auto max-w-4xl">
        
        {/* Cabeçalho do Jogo */}
        <div className="mb-10 text-center sm:text-left">
          <p className="mb-3 flex items-center justify-center sm:justify-start gap-2 text-[.7rem] font-extrabold tracking-[.14em] text-[#7ef6bc]">
            <span className="h-px w-7 bg-current" /> SIMULADOR DE TRIAGEM
          </p>
          <h2 className="font-['Arial_Black','Segoe_UI',sans-serif] text-3xl font-black tracking-[-.05em] text-[#f5fbf7] sm:text-5xl">
            Desafio de <span className="text-[#c5ff5b]">Classificação REEE</span>
          </h2>
          <p className="mt-3 text-sm text-[#b0c0b6]">
            Indique a linha de descarte correta para cada resíduo eletroeletrônico sorteado.
          </p>
        </div>

        {/* Card do Mini-Jogo */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-10 shadow-2xl">
          {!isFinished ? (
            <div>
              {/* Placar & Progresso */}
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="rounded-full bg-[#c5ff5b]/10 px-3.5 py-1 text-xs font-bold text-[#c5ff5b]">
                  Item {currentIndex + 1} de {ITEMS_BANK.length}
                </span>
                <span className="text-xs font-bold text-[#8ea096]">
                  Pontuação: <strong className="text-white text-sm">{score}</strong> pts
                </span>
              </div>

              {/* Item Sorteado */}
              <div className="flex flex-col items-center text-center py-4">
                <div className="relative size-24 mb-4 grid place-items-center rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                  <img
                    src={currentItem.iconUrl}
                    alt={currentItem.name}
                    className="size-full object-contain"
                  />
                </div>
                <span className="text-[0.65rem] font-black uppercase tracking-wider text-[#7ef6bc]">
                  {currentItem.category}
                </span>
                <h3 className="mt-1 text-2xl font-black text-white">
                  {currentItem.name}
                </h3>
                <p className="mt-2 text-xs text-[#8ea096]">
                  Para qual linha de reciclagem este item deve ser destinado?
                </p>
              </div>

              {/* 4 Lixeiras/Categorias em Grid */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {LINES_CONFIG.map((line) => {
                  let btnStyle = `border ${line.borderColor} ${line.bgColor} text-white`;

                  if (isAnswered) {
                    if (line.id === currentItem.correctLine) {
                      btnStyle = "border-emerald-400 bg-emerald-500/30 text-emerald-100 ring-2 ring-emerald-400 font-bold";
                    } else if (line.id === selectedLine) {
                      btnStyle = "border-rose-500 bg-rose-500/20 text-rose-200 opacity-80";
                    } else {
                      btnStyle = "border-white/5 bg-black/20 text-[#506056] opacity-40";
                    }
                  }

                  return (
                    <button
                      key={line.id}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectLine(line.id)}
                      className={`flex flex-col items-start justify-between rounded-2xl p-4 text-left transition-all ${btnStyle}`}
                    >
                      <div>
                        <span className={`inline-block rounded-md px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wider ${line.badgeColor}`}>
                          {line.title}
                        </span>
                        <p className="mt-2 text-sm font-bold">{line.subtitle}</p>
                      </div>
                      <span className="mt-3 text-[0.7rem] font-extrabold opacity-80">
                        {isAnswered && line.id === currentItem.correctLine ? "✓ Destino Correto" : "Clique para Selecionar"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explicativo ao Selecionar */}
              {isAnswered && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-5">
                  <p className={`text-xs font-black uppercase tracking-wider mb-1 ${selectedLine === currentItem.correctLine ? "text-emerald-400" : "text-rose-400"}`}>
                    {selectedLine === currentItem.correctLine ? "✓ Classificação Exata!" : `✕ Ops! O destino correto é a ${currentItem.lineName}`}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#d8e2dc]">
                    {currentItem.explanation}
                  </p>
                </div>
              )}

              {/* Botão Próximo Item */}
              {isAnswered && (
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextItem}
                    className="rounded-full bg-[#c5ff5b] px-6 py-3 text-xs font-black text-[#050706] transition hover:bg-[#d9ff9a]"
                  >
                    {currentIndex + 1 < ITEMS_BANK.length ? "Próximo Eletrônico →" : "Finalizar Triagem 🏆"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Tela de Conclusão do Jogo */
            <div className="py-8 text-center space-y-6">
              <span className="inline-block text-5xl">♻️</span>
              <h3 className="text-2xl font-black text-white sm:text-4xl">
                Triagem Concluída!
              </h3>
              <p className="text-base text-[#d8e2dc]">
                Sua pontuação total: <strong className="text-[#c5ff5b] text-3xl">{score}</strong> de <strong className="text-white text-3xl">{ITEMS_BANK.length * 10}</strong> pts
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 max-w-md mx-auto text-xs leading-relaxed text-[#b0c0b6]">
                {score >= 60
                  ? "Parabéns! Você domina a classificação oficial das 4 Linhas de REEE e saberia como encaminhar seus resíduos em um Ponto de Entrega Voluntária (PEV)."
                  : "Bom treino! Revise os tópicos educativos e tente novamente para acertar todos os itens da triagem."}
              </div>

              <button
                type="button"
                onClick={handleRestart}
                className="rounded-full bg-[#c5ff5b] px-8 py-3.5 text-xs font-black text-[#050706] transition hover:bg-[#d9ff9a]"
              >
                Jogar Novamente 🔄
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}