"use client";

import { useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "De acordo com dados internacionais, qual é a posição do Brasil na geração de lixo eletrônico na América Latina?",
    options: [
      "O Brasil é o país que menos produz lixo eletrônico na região.",
      "O Brasil é o maior gerador absoluto de e-waste da América Latina.",
      "O Brasil recicla oficialmente mais de 80% do lixo que gera.",
      "O Brasil não produz e-waste devido a leis de exportação.",
    ],
    correctIndex: 1,
    explanation: "O Brasil gera mais de 2,4 milhões de toneladas de lixo eletrônico por ano, liderando o ranking na América Latina. Infelizmente, menos de 3% desse montante é reciclado por canais oficiais.",
    source: "Fonte: Global E-waste Monitor (UNITAR, 2024)",
  },
  {
    id: 2,
    question: "O que acontece quando mantemos aparelhos eletrônicos antigos sem uso guardados em gavetas?",
    options: [
      "A bateria se regenera e o aparelho ganha mais valor comercial.",
      "Ocorre a perda de materiais valiosos que poderiam voltar para a indústria.",
      "O aparelho se transforma em minério bruto naturalmente.",
      "O fabricante recolhe o aparelho automaticamente por sinal de GPS.",
    ],
    correctIndex: 1,
    explanation: "Guardar eletrônicos sem uso impede a 'mineração urbana', que recupera metais nobres (como ouro e cobre) e plásticos para fabricar novos produtos sem degradar a natureza.",
    source: "Fonte: Agência Gov / EBC (2026)",
  },
  {
    id: 3,
    question: "Qual é o principal risco ambiental de descartar um eletrônico no lixo comum ou em lixões?",
    options: [
      "O aumento da poeira nos caminhões de coleta urbana.",
      "O vazamento de metais pesados tóxicos (chumbo, mercúrio) que contaminam solo e água.",
      "O surgimento de campos magnéticos que interferem no rádio.",
      "O desaparecimento imediato do plástico do aterro.",
    ],
    correctIndex: 1,
    explanation: "Sob sol e chuva (lixiviação), substâncias tóxicas presentes nos circuitos e baterias penetram na terra e atingem o lençol freático, contaminando rios e plantações.",
    source: "Fonte: Detering et al. (2021) / Xavier et al. (2019)",
  },
  {
    id: 4,
    question: "O que é o fenômeno da 'bioacumulação' associado ao lixo eletrônico?",
    options: [
      "O acúmulo de poeira sobre os monitores velhos.",
      "O acúmulo progressivo de metais pesados nos organismos vivos ao longo da cadeia alimentar.",
      "A capacidade de um celular funcionar sem carregar na tomada.",
      "O crescimento de plantas ao redor de placas de circuito jogadas fora.",
    ],
    correctIndex: 1,
    explanation: "Metais pesados tóxicos não são eliminados facilmente pelos seres vivos. Ao entrarem na água e no solo, eles passam para as plantas, peixes e animais, chegando acumulados ao nosso prato.",
    source: "Fonte: Detering et al. (2021)",
  },
  {
    id: 5,
    question: "O que define o conceito de 'Mineração Urbana' na gestão de resíduos?",
    options: [
      "Escavar túneis sob grandes cidades para procurar jazidas de ouro.",
      "A recuperação de metais nobres e preciosos a partir do desmonte de eletrônicos velhos.",
      "A construção de prédios utilizando apenas concreto de lixões.",
      "A proibição do uso de metais na fabricação de computadores.",
    ],
    correctIndex: 1,
    explanation: "Placas de computadores e celulares possuem uma concentração de ouro e cobre por tonelada muito maior do que o próprio minério bruto extraído de jazidas na natureza.",
    source: "Fonte: Journal of Cleaner Production (Xavier et al., 2019)",
  },
  {
    id: 6,
    question: "Qual é uma das maiores vantagens de reciclar metais de eletrônicos em vez de extraí-los da natureza?",
    options: [
      "Consome até 80% menos energia e evita a degradação de novas áreas naturais.",
      "Exige o dobro de combustível nos fornos industriais.",
      "Elimina a necessidade de utilizar eletricidade nas fábricas.",
      "Transforma plásticos em madeira sintética automaticamente.",
    ],
    correctIndex: 0,
    explanation: "Reaproveitar metais já refinados exige muito menos energia do que escavar, transportar e processar toneladas de rocha bruta na mineração tradicional.",
    source: "Fonte: Xavier et al. (2019) / UNITAR (2024)",
  },
  {
    id: 7,
    question: "Segundo a legislação brasileira (PNRS), quem é responsável pela destinação do lixo eletrônico?",
    options: [
      "Exclusivamente a prefeitura e os garis do município.",
      "Apenas o consumidor final que comprou o produto.",
      "Fabricantes, distribuidores, comerciantes e consumidores de forma compartilhada.",
      "Apenas as empresas internacionais que fabricam os microchips.",
    ],
    correctIndex: 2,
    explanation: "A Política Nacional de Resíduos Sólidos (PNRS) estabeleceu a 'Responsabilidade Compartilhada': empresas devem criar pontos de coleta e reciclagem, e o cidadão deve entregar o resíduo no local correto.",
    source: "Fonte: Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010)",
  },
  {
    id: 8,
    question: "Quanto o cidadão precisa pagar para descartar um eletrônico em um Ponto de Entrega Voluntária (PEV)?",
    options: [
      "Deve pagar uma taxa por quilo de lixo entregue.",
      "O descarte de eletrônicos em pontos credenciados (PEVs) é totalmente gratuito.",
      "É necessário pagar uma licença ambiental na prefeitura.",
      "Só é gratuito se o consumidor comprar um aparelho novo no local.",
    ],
    correctIndex: 1,
    explanation: "A logística reversa garante ao cidadão o direito de entregar celulares, cabos, computadores e eletrodomésticos velhos em postos de coleta sem nenhum custo.",
    source: "Fonte: Decreto nº 10.240/2020 / Agência Gov (2026)",
  },
];

export function QuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQ = QUESTIONS[currentIndex];
  const isAnswered = selectedOption !== null;

  function handleOptionSelect(index: number) {
    if (isAnswered) return;
    setSelectedOption(index);
    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNextQuestion() {
    setSelectedOption(null);
    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  }

  return (
    <section id="quiz" className="scroll-mt-16 border-t border-lime-200/10 bg-[#050706] px-5 py-24 sm:px-10 lg:px-[8vw]">
      <div className="mx-auto max-w-4xl">
        {/* Cabeçalho do Quiz */}
        <div className="mb-10 text-center sm:text-left">
          <p className="mb-3 flex items-center justify-center sm:justify-start gap-2 text-[.7rem] font-extrabold tracking-[.14em] text-[#7ef6bc]">
            <span className="h-px w-7 bg-current" /> GAMIFICAÇÃO & FIXAÇÃO
          </p>
          <h2 className="font-['Arial_Black','Segoe_UI',sans-serif] text-3xl font-black tracking-[-.05em] text-[#f5fbf7] sm:text-5xl">
            Desafio de <span className="text-[#c5ff5b]">Conhecimento</span>
          </h2>
          <p className="mt-3 text-sm text-[#b0c0b6]">
            Testes seus aprendizados sobre o ciclo de vida e a gestão dos resíduos eletrônicos no Brasil.
          </p>
        </div>

        {/* Card do Quiz */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.03),rgba(197,255,91,.02))] p-6 sm:p-10 shadow-2xl">
          {!showResult ? (
            <div>
              {/* Progresso estilo TemAgua.ai */}
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="rounded-full bg-[#c5ff5b]/10 px-3.5 py-1 text-xs font-bold text-[#c5ff5b]">
                  Pergunta {currentIndex + 1} de {QUESTIONS.length}
                </span>
                <span className="text-xs font-semibold text-[#8ea096]">
                  Pontuação atual: <strong className="text-white">{score}</strong> pts
                </span>
              </div>

              {/* Pergunta */}
              <h3 className="text-lg font-bold text-white sm:text-2xl leading-snug">
                {currentQ.question}
              </h3>

              {/* Lista de Opções */}
              <div className="mt-6 space-y-3">
                {currentQ.options.map((option, idx) => {
                  let btnStyle = "border-white/10 bg-black/40 text-[#d8e2dc] hover:border-white/20 hover:bg-white/[0.03]";
                  
                  if (isAnswered) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = "border-emerald-500 bg-emerald-500/20 text-emerald-200 font-bold";
                    } else if (idx === selectedOption) {
                      btnStyle = "border-rose-500 bg-rose-500/20 text-rose-200";
                    } else {
                      btnStyle = "border-white/5 bg-black/20 text-[#607066] opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleOptionSelect(idx)}
                      className={`w-full rounded-2xl border p-4 text-left text-sm transition-all sm:text-base flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-full border border-current text-xs font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Caixa Explicativa e Referência ao Responder */}
              {isAnswered && (
                <div className="mt-6 animate-in fade-in duration-300 rounded-2xl border border-lime-200/20 bg-black/60 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-black uppercase tracking-wider ${selectedOption === currentQ.correctIndex ? "text-emerald-400" : "text-rose-400"}`}>
                      {selectedOption === currentQ.correctIndex ? "✓ Resposta Correta!" : "✕ Resposta Incorreta"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#d8e2dc]">
                    {currentQ.explanation}
                  </p>
                  <p className="mt-3 text-[0.7rem] text-[#8ea096] italic border-t border-white/10 pt-2">
                    {currentQ.source}
                  </p>
                </div>
              )}

              {/* Botão Próxima Pergunta */}
              {isAnswered && (
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="rounded-full bg-[#c5ff5b] px-6 py-3 text-xs font-black text-[#050706] transition hover:bg-[#d9ff9a]"
                  >
                    {currentIndex + 1 < QUESTIONS.length ? "Próxima Pergunta →" : "Ver Resultado Final 🏆"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Tela de Resultado Final */
            <div className="text-center py-8 space-y-6">
              <span className="inline-block text-5xl">🏆</span>
              <h3 className="text-2xl font-black text-white sm:text-4xl">
                Desafio Concluído!
              </h3>
              <p className="text-base text-[#d8e2dc] max-w-md mx-auto">
                Você acertou <strong className="text-[#c5ff5b] text-2xl">{score}</strong> de <strong className="text-white text-2xl">{QUESTIONS.length}</strong> perguntas.
              </p>
              
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 max-w-md mx-auto text-xs text-[#b0c0b6] leading-relaxed">
                {score >= 6
                  ? "Excelente! Você demonstrou um ótimo conhecimento sobre o impacto dos resíduos eletrônicos e a importância da logística reversa."
                  : "Bom esforço! Que tal dar uma lida nos cards educativos acima e tentar novamente para gabaritar o desafio?"}
              </div>

              <button
                type="button"
                onClick={handleRestart}
                className="rounded-full bg-[#c5ff5b] px-8 py-3.5 text-xs font-black text-[#050706] transition hover:bg-[#d9ff9a]"
              >
                Refazer o Quiz 🔄
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}