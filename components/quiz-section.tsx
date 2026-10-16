"use client";

import { useState, useEffect } from "react";

type Question = {
  id: number;
  sectionId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
};

const QUESTIONS_BANK: Question[] = [
  // --- SEÇÃO 1: ACÚMULO E CONSUMO (5 PERGUNTAS) ---
  {
    id: 1,
    sectionId: "acumulo",
    question: "De acordo com o Global E-waste Monitor, qual é a posição do Brasil na geração de lixo eletrônico na América Latina?",
    options: [
      "O Brasil é o menor gerador de lixo eletrônico da região.",
      "O Brasil é o maior gerador absoluto de e-waste da América Latina.",
      "O Brasil recicla oficialmente mais de 80% de todo e-waste que produz.",
      "O Brasil é isento de lixo eletrônico devido a leis estaduais.",
    ],
    correctIndex: 1,
    explanation: "O Brasil gera mais de 2,4 milhões de toneladas de lixo eletrônico por ano, liderando o ranking na América Latina.",
    source: "Fonte: Global E-waste Monitor (UNITAR, 2024)",
  },
  {
    id: 2,
    sectionId: "acumulo",
    question: "O que caracteriza o fenômeno do 'estoque doméstico' na gestão de resíduos eletrônicos?",
    options: [
      "O armazenamento de lixo orgânico em lixeiras com tampa.",
      "A retenção de aparelhos obsoletos ou sem uso guardados em domicílios.",
      "A compra de eletrônicos em grandes quantidades em supermercados.",
      "O descarte imediato de computadores na lixeira pública.",
    ],
    correctIndex: 1,
    explanation: "Guardar aparelhos em gavetas impede que materiais valiosos retornem para a indústria através da reciclagem.",
    source: "Fonte: Agência Gov / EBC (2026)",
  },
  {
    id: 3,
    sectionId: "acumulo",
    question: "Qual é a porcentagem aproximada de lixo eletrônico coletada e reciclada por canais oficiais no Brasil?",
    options: [
      "Mais de 50% de todo o volume gerado.",
      "Cerca de 25% do total anual.",
      "Menos de 3% do volume total gerado.",
      "Aproximadamente 90% através das prefeituras.",
    ],
    correctIndex: 2,
    explanation: "Infelizmente, menos de 3% do e-waste brasileiro chega aos canais oficiais de reciclagem.",
    source: "Fonte: Global E-waste Monitor (UNITAR, 2024)",
  },
  {
    id: 4,
    sectionId: "acumulo",
    question: "Qual é a principal consequência urbana de descartar um eletrônico diretamente no lixo comum?",
    options: [
      "Aumenta a velocidade de decomposição do lixo orgânico.",
      "Sobrecarrega a coleta municipal e ocupa espaço valioso em aterros sanitários.",
      "Melhora a qualidade do solo dos aterros.",
      "Gera eletricidade automática para os caminhões de lixo.",
    ],
    correctIndex: 1,
    explanation: "O e-waste ocupa espaço precioso em aterros e perde a chance de ser reintroduzido na economia circular.",
    source: "Fonte: Abrelpe (2021)",
  },
  {
    id: 5,
    sectionId: "acumulo",
    question: "O que é a obsolescência programada no contexto dos dispositivos digitais?",
    options: [
      "Uma garantia estendida oferecida gratuitamente pelo fabricante.",
      "A redução planejada da vida útil do produto para induzir a compra de novos modelos.",
      "O conserto gratuito de celulares quebrados em postos autorizados.",
      "Um programa de doação de computadores para escolas.",
    ],
    correctIndex: 1,
    explanation: "A obsolescência induz a troca precoce de aparelhos funcionais, acelerando a geração de e-waste.",
    source: "Fonte: UNITAR (2024)",
  },

  // --- SEÇÃO 2: RISCOS AMBIENTAIS E METAIS PESADOS (5 PERGUNTAS) ---
  {
    id: 6,
    sectionId: "contaminacao",
    question: "Qual processo químico ocorre quando um eletrônico descartado em um lixão fica exposto à chuva?",
    options: [
      "Evaporação limpa dos circuitos.",
      "Lixiviação, infiltrando metais pesados na terra e no lençol freático.",
      "Fotossíntese das baterias.",
      "Purificação natural das placas de metal.",
    ],
    correctIndex: 1,
    explanation: "A água da chuva dissolve substâncias tóxicas dos circuitos (lixiviação), contaminando solos e rios.",
    source: "Fonte: Detering et al. (2021)",
  },
  {
    id: 7,
    sectionId: "contaminacao",
    question: "O que é o fenômeno da 'bioacumulação' provocado pelo lixo eletrônico?",
    options: [
      "A criação de plantas cibernéticas ao redor de lixões.",
      "O acúmulo progressivo de metais tóxicos no organismo dos seres vivos ao longo da cadeia alimentar.",
      "A reciclagem automática de plásticos no meio ambiente.",
      "O aumento do sinal de wi-fi em áreas rurais.",
    ],
    correctIndex: 1,
    explanation: "Metais pesados tóxicos passam da água e plantas para os animais e chegam acumulados ao ser humano.",
    source: "Fonte: Detering et al. (2021)",
  },
  {
    id: 8,
    sectionId: "contaminacao",
    question: "Quais são dois dos metais pesados altamente tóxicos encontrados em componentes de e-waste?",
    options: [
      "Oxigênio e Nitrogênio.",
      "Chumbo e Mercúrio.",
      "Cálcio e Potássio.",
      "Hélio e Hidrogênio.",
    ],
    correctIndex: 1,
    explanation: "O chumbo e o mercúrio são elementos químicos nocivos presentes em baterias e placas de circuito.",
    source: "Fonte: Alabi et al. (2021)",
  },
  {
    id: 9,
    sectionId: "contaminacao",
    question: "Quais sistemas do corpo humano são gravemente afetados pela exposição ao chumbo e ao mercúrio?",
    options: [
      "Apenas o crescimento dos cabelos e unhas.",
      "O sistema nervoso central e a função renal.",
      "Apenas o esmalte dos dentes.",
      "A visão noturna e o olfato.",
    ],
    correctIndex: 1,
    explanation: "A contaminação por metais pesados afeta gravemente o cérebro, nervos e os rins.",
    source: "Fonte: Alabi et al. (2021)",
  },
  {
    id: 10,
    sectionId: "contaminacao",
    question: "Por que os resíduos eletrônicos são considerados mais perigosos que o lixo orgânico comum?",
    options: [
      "Porque pesam o dobro do lixo comum.",
      "Porque contêm substâncias tóxicas que não se decompõem facilmente e contaminam o ecossistema.",
      "Porque ocupam menos espaço na lixeira.",
      "Porque atraem insetos com mais facilidade.",
    ],
    correctIndex: 1,
    explanation: "Sua composição físico-química contém elementos químicos tóxicos persistentes na natureza.",
    source: "Fonte: Detering et al. (2021)",
  },

  // --- SEÇÃO 3: MINERAÇÃO URBANA E ECONOMIA CIRCULAR (5 PERGUNTAS) ---
  {
    id: 11,
    sectionId: "mineracao",
    question: "O que define o conceito de 'Mineração Urbana'?",
    options: [
      "Escavar túneis abaixo dos prédios das cidades para buscar minério.",
      "A recuperação industrial de metais valiosos a partir do desmonte de eletrônicos velhos.",
      "A proibição do uso de ouro em placas de computadores.",
      "A construção de estradas utilizando plástico moído.",
    ],
    correctIndex: 1,
    explanation: "Mineração Urbana é a extração de metais nobres existentes no lixo eletrônico já descartado.",
    source: "Fonte: Xavier et al. (2019)",
  },
  {
    id: 12,
    sectionId: "mineracao",
    question: "Qual é a vantagem da Mineração Urbana em comparação à extração de minério na natureza?",
    options: [
      "Consome até 80% menos energia e evita a degradação de novas áreas vegetais.",
      "Exige mais combustível para escavação de rochas.",
      "Aumenta a poluição do ar nas fábricas.",
      "Não produz nenhum tipo de metal aproveitável.",
    ],
    correctIndex: 0,
    explanation: "Reciclar metais já processados exige significativamente menos energia do que extraí-los do solo.",
    source: "Fonte: Xavier et al. (2019)",
  },
  {
    id: 13,
    sectionId: "mineracao",
    question: "Qual metal nobre de alto valor comercial está presente nas placas de circuito impresso de celulares?",
    options: [
      "Carvão vegetal.",
      "Ouro.",
      "Mercúrio líquido puro.",
      "Gasolina.",
    ],
    correctIndex: 1,
    explanation: "Placas de circuito contêm frações de ouro, prata e cobre de alta pureza.",
    source: "Fonte: Xavier et al. (2019)",
  },
  {
    id: 14,
    sectionId: "mineracao",
    question: "O que é o processo de 'Manufatura Reversa'?",
    options: [
      "Montar computadores novos usando peças estragadas.",
      "O desmonte técnico e descontaminação de eletrônicos para separar materiais recicláveis.",
      "A devolução do dinheiro ao cliente que comprou um celular.",
      "A fabricação de aparelhos sem tela.",
    ],
    correctIndex: 1,
    explanation: "A manufatura reversa desmonta e separa plástico, vidro e metais dos aparelhos velhos.",
    source: "Fonte: Forti et al. (2020)",
  },
  {
    id: 15,
    sectionId: "mineracao",
    question: "Como a Economia Circular se contrapõe ao modelo econômico linear tradicional?",
    options: [
      "Ela incentiva o descarte diário de produtos.",
      "Ela mantém materiais no ciclo produtivo, evitando o modelo de 'extrair, usar e descartar'.",
      "Ela proíbe a venda de celulares novos.",
      "Ela obriga todas as pessoas a trabalharem em cooperativas.",
    ],
    correctIndex: 1,
    explanation: "A Economia Circular reutiliza os recursos infinitamente em vez de descartá-los no meio ambiente.",
    source: "Fonte: Forti et al. (2020)",
  },

  // --- SEÇÃO 5: LOGÍSTICA REVERSA E LEGISLAÇÃO (5 PERGUNTAS) ---
  {
    id: 16,
    sectionId: "descarte",
    question: "O que estabelece o princípio da 'Responsabilidade Compartilhada' na legislação brasileira (PNRS)?",
    options: [
      "Apenas a prefeitura deve pagar pela reciclagem do lixo.",
      "Fabricantes, comerciantes e consumidores compartilham o dever do ciclo de vida dos produtos.",
      "Apenas o consumidor final é culpado pelo lixo gerado.",
      "Empresas estrangeiras não precisam recolher seus produtos.",
    ],
    correctIndex: 1,
    explanation: "A PNRS estabelece que toda a cadeia (da fábrica ao consumidor) é responsável pela destinação.",
    source: "Fonte: Lei nº 12.305/2010 (PNRS)",
  },
  {
    id: 17,
    sectionId: "descarte",
    question: "Quanto o cidadão deve pagar para entregar um aparelho eletrônico em um Ponto de Entrega Voluntária (PEV)?",
    options: [
      "Uma taxa fixa de R$ 50,00 por aparelho.",
      "O descarte em PEVs credenciados é um direito totalmente gratuito do cidadão.",
      "O valor correspondente ao peso do aparelho.",
      "Apenas o imposto de transporte municipal.",
    ],
    correctIndex: 1,
    explanation: "A logística reversa garante o descarte gratuito para o consumidor final em pontos credenciados.",
    source: "Fonte: Decreto nº 10.240/2020",
  },
  {
    id: 18,
    sectionId: "descarte",
    question: "O que significa a sigla PEV no contexto do descarte sustentável?",
    options: [
      "Posto de Energia Vulcânica.",
      "Ponto de Entrega Voluntária.",
      "Programa Eletrônico de Vendas.",
      "Parque Ecológico Virtual.",
    ],
    correctIndex: 1,
    explanation: "PEV é o Ponto de Entrega Voluntária mantido por lojas, postos e parcerias para receber e-waste.",
    source: "Fonte: Agência Gov (2026)",
  },
  {
    id: 19,
    sectionId: "descarte",
    question: "O que pode acontecer com aparelhos que ainda funcionam parcialmente ao chegarem aos centros de triagem?",
    options: [
      "São imediatamente queimados em fornos industriais.",
      "Podem ser recondicionados e doados para projetos sociais e de inclusão digital.",
      "São jogados diretamente no oceano.",
      "São devolvidos obrigatoriamente para a casa do dono.",
    ],
    correctIndex: 1,
    explanation: "Eletrônicos com uso parcial são recondicionados para promover inclusão digital comunitária.",
    source: "Fonte: Agência Gov / EBC (2026)",
  },
  {
    id: 20,
    sectionId: "descarte",
    question: "Qual é o papel do consumidor na Logística Reversa de produtos eletrônicos?",
    options: [
      "Pagar uma taxa mensal para a fábrica do celular.",
      "Entregar o eletrônico sem uso no Ponto de Entrega Voluntária (PEV) mais próximo.",
      "Desmontar as peças com alicate em casa.",
      "Queimar o plástico do aparelho antes de jogar fora.",
    ],
    correctIndex: 1,
    explanation: "O papel do cidadão é levar o resíduo até o ponto de coleta credenciado.",
    source: "Fonte: Lei nº 12.305/2010",
  },

  // --- SEÇÃO 6: COMO EVITAR E AÇÕES PRÁTICAS (5 PERGUNTAS) ---
  {
    id: 21,
    sectionId: "prevencao",
    question: "O que é recomendado fazer antes de comprar um novo celular caso o atual apresente apenas lentidão?",
    options: [
      "Jogar o celular imediatamente na lixeira de lixo orgânico.",
      "Verificar se uma simples troca de bateria, formatação ou limpeza de memória resolve o problema.",
      "Guardar o celular em um cofre fechado.",
      "Molhar o celular para resfriar as peças.",
    ],
    correctIndex: 1,
    explanation: "Manutenção simples e troca de componentes estendem a vida útil do aparelho e economizam recursos.",
    source: "Fonte: Recicla Sampa (2026)",
  },
  {
    id: 22,
    sectionId: "prevencao",
    question: "Qual é a melhor atitude ao substituir um eletrônico que ainda funciona perfeitamente?",
    options: [
      "Deixá-lo guardado na gaveta até que estrague totalmente.",
      "Doar ou vender o aparelho para que outra pessoa lhe dê uma segunda vida útil.",
      "Jogá-lo no lixo comum de casa.",
      "Desmontar o aparelho e jogar as peças pela janela.",
    ],
    correctIndex: 1,
    explanation: "Doar ou repassar um aparelho funcional promove inclusão digital e evita que vira lixo precocemente.",
    source: "Fonte: Recicla Sampa (2026)",
  },
  {
    id: 23,
    sectionId: "prevencao",
    question: "Por que pilhas e baterias estufadas ou vazando NUNCA devem ser guardadas na gaveta ou jogadas no lixo comum?",
    options: [
      "Porque perdem o sinal de bluetooth.",
      "Devido ao risco real de vazamento de ácido corrosivo e incêndio.",
      "Porque ocupam o espaço de roupas.",
      "Porque mudam de cor no escuro.",
    ],
    correctIndex: 1,
    explanation: "Baterias danificadas contêm compostos químicos voláteis com alto risco de vazamento e degradação.",
    source: "Fonte: Ecobraz (2026)",
  },
  {
    id: 24,
    sectionId: "prevencao",
    question: "Qual é a vantagem de utilizar pontos de coleta universitários?",
    options: [
      "Ganhar nota automática em todas as matérias.",
      "Fortalecer projetos de extensão que aliam reciclagem correta e educação ambiental comunitária.",
      "Comprar celulares novos com 90% de desconto.",
      "Transformar o e-waste em brinquedos de plástico na hora.",
    ],
    correctIndex: 1,
    explanation: "Pontos de coleta acadêmicos conectam o descarte à pesquisa e extensão social.",
    source: "Fonte: PROEX UFF (2026)",
  },
  {
    id: 25,
    sectionId: "prevencao",
    question: "Qual destas é uma prática simples de conservação para aumentar a durabilidade de um computador portátil?",
    options: [
      "Usá-lo sempre sobre almofadas abafando as saídas de ar.",
      "Usar capas de proteção e manter as saídas de ar limpas para evitar superaquecimento.",
      "Deixá-lo exposto ao sol forte diariamente.",
      "Limpar a tela com água sanitária pura.",
    ],
    correctIndex: 1,
    explanation: "Cuidados de uso e conservação evitam a queima prematura de componentes eletrônicos.",
    source: "Fonte: TI Verde / Lunardi et al. (2011)",
  },
];

// Sorteia exatamente 2 perguntas de cada uma das 5 seções com perguntas (Total: 10 perguntas)
function getRandomizedQuiz(): Question[] {
  const sectionsWithQuestions = ["acumulo", "contaminacao", "mineracao", "descarte", "prevencao"];
  let selectedQuiz: Question[] = [];

  sectionsWithQuestions.forEach((secId) => {
    const secQuestions = QUESTIONS_BANK.filter((q) => q.sectionId === secId);
    const shuffled = [...secQuestions].sort(() => 0.5 - Math.random());
    selectedQuiz.push(...shuffled.slice(0, 2));
  });

  return selectedQuiz.sort(() => 0.5 - Math.random());
}

export function QuizSection() {
  const [activeQuiz, setActiveQuiz] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setActiveQuiz(getRandomizedQuiz());
  }, []);

  if (activeQuiz.length === 0) return null;

  const currentQ = activeQuiz[currentIndex];
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
    if (currentIndex + 1 < activeQuiz.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleRestart() {
    setActiveQuiz(getRandomizedQuiz());
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
            10 perguntas sorteadas aleatoriamente do nosso banco de dados a cada acesso. Com o objetivo de reforçar o aprendizado e fixar os conceitos apresentados nas seções anteriores. Boa sorte!
          </p>
        </div>

        {/* Card do Quiz */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.03),rgba(197,255,91,.02))] p-6 sm:p-10 shadow-2xl">
          {!showResult ? (
            <div>
              {/* Progresso estilo TemAgua.ai */}
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="rounded-full bg-[#c5ff5b]/10 px-3.5 py-1 text-xs font-bold text-[#c5ff5b]">
                  Pergunta {currentIndex + 1} de {activeQuiz.length}
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
                      btnStyle = "border-emerald-500 bg-emerald-500/20 text-emerald-200 font-bold scale-[1.01] ring-2 ring-emerald-400/80 ring-offset-2 ring-offset-transparent";
                    } else if (idx === selectedOption) {
                      btnStyle = "border-rose-500 bg-rose-500/20 text-rose-200 scale-[1.01] ring-2 ring-rose-400/80 ring-offset-2 ring-offset-transparent";
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
                    {currentIndex + 1 < activeQuiz.length ? "Próxima Pergunta →" : "Ver Resultado Final 🏆"}
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
                Você acertou <strong className="text-[#c5ff5b] text-2xl">{score}</strong> de <strong className="text-white text-2xl">{activeQuiz.length}</strong> perguntas.
              </p>
              
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 max-w-md mx-auto text-xs text-[#b0c0b6] leading-relaxed">
                {score >= 8
                  ? "Excelente! Você demonstrou um ótimo conhecimento sobre o impacto dos resíduos eletrônicos e a importância da logística reversa."
                  : "Bom esforço! Que tal dar uma lida nos cards educativos acima e tentar novamente para gabaritar o desafio?"}
              </div>

              <button
                type="button"
                onClick={handleRestart}
                className="rounded-full bg-[#c5ff5b] px-8 py-3.5 text-xs font-black text-[#050706] transition hover:bg-[#d9ff9a]"
              >
                Gerar Novo Quiz Aleatório 🔄
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}