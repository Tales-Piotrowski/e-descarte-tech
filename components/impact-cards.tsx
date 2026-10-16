"use client";

import { useState } from "react";

type ImpactTopic = {
  id: string;
  title: string;
  subtitle: string;
  iconUrl?: string;
  emojiIcon?: string;
  imagePath: string;
  source: string;
  sections: {
    heading: string;
    text: string;
  }[];
};

const IMPACT_TOPICS: ImpactTopic[] = [
  {
    id: "acumulo",
    title: "1. O Ciclo do Consumo e o Acúmulo de Resíduos",
    subtitle: "A Problemática da Obsolescência",
    iconUrl: "https://img.icons8.com/color/96/process.png",
    imagePath: "/images/secao1.png",
    source: "Fonte: Global E-waste Monitor (UNITAR, 2024) & Abrelpe",
    sections: [
      {
        heading: "O Brasil no Liderança da América Latina",
        text: "De acordo com os relatórios do Global E-waste Monitor elaborados pela UNITAR, o Brasil gera mais de 2,4 milhões de toneladas de lixo eletrônico por ano. Esse montante impressionante consolida o país como o maior gerador absoluto de resíduos eletroeletrônicos (REEE) de toda a América Latina, exigindo políticas públicas urgentes e engajamento da sociedade.",
      },
      {
        heading: "A Cultura do 'Estoque Doméstico'",
        text: "Uma parcela expressiva dos eletrônicos substituídos no Brasil não chega aos centros de reciclagem devido ao hábito do 'estoque doméstico'. Consumidores frequentemente guardam celulares, cabos, notebooks e pequenos aparelhos quebrados ou obsoletos no fundo de gavetas e armários por anos, blocking o retorno de matérias-primas valiosas para a indústria.",
      },
      {
        heading: "A Realidade da Reciclagem Oficial no País",
        text: "Apesar do volume gigantesco de e-waste produzido anualmente, a infraestrutura oficial de coleta e reciclagem no Brasil ainda enfrenta grandes gargalos. Menos de 3% de todo o lixo eletrônico gerado no território nacional é formalmente descartado e processado por canais oficiais e entidades gestoras credenciadas.",
      },
      {
        heading: "Impactos e Sobrecarga na Gestão Urbana",
        text: "Quando os cidadãos não encontram ou desconhecem os pontos de coleta adequada, muitos acabam descartando eletrônicos diretamente no lixo comum doméstico. Essa prática sobrecarrega o sistema de coleta pública das prefeituras e ocupa espaço valioso em aterros sanitários, que deveriam ser reservados apenas a resíduos não recicláveis.",
      },
      {
        heading: "O Papel da Obsolescência Programada",
        text: "O rápido acúmulo de resíduos é intensificado pela obsolescência programada — a estratégia de mercado em que fabricantes projetam dispositivos com vida útil intencionalmente reduzida ou com atualizações de software que desaceleram o aparelho. Isso induz o consumidor a substituir equipamentos perfeitamente funcionais em prazos cada vez menores.",
      },
    ],
  },
  {
    id: "contaminacao",
    title: "2. Riscos Ambientais e Metais Pesados",
    subtitle: "A Toxicidade Escondida nos Circuitos",
    emojiIcon: "☣️",
    imagePath: "/images/secao2.png",
    source: "Fonte: Detering et al. (2021) & Alabi et al. (2021)",
    sections: [
      {
        heading: "O Processo de Lixiviação em Aterros e Lixões",
        text: "Quando um equipamento eletrônico é lançado inadequada em aterros sanitários ou lixões a céu aberto, ele fica exposto à ação contínua das intempéries. Sob sol e chuva intensa, ocorre o fenômeno da lixiviação: a água da chuva dissolve os componentes tóxicos dos circuitos, fazendo com que esses químicos penetrem no solo e atinjam os aquifers e lençóis freáticos.",
      },
      {
        heading: "O Fenômeno da Bioacumulação na Natureza",
        text: "Os metais pesados liberados pelo e-waste não se decompõem e não são eliminados pelos organismos vivos, resultando no fenômeno da bioacumulação. À medida que esses contaminantes entram nos rios e no solo, eles são absorvidos por plantas e pequenos animais, acumulando-se em concentrações cada vez maiores ao longo da cadeia alimentar.",
      },
      {
        heading: "A Composição Tóxica dos Eletrônicos",
        text: "Ao contrário dos resíduos orgânicos e plásticos comuns, as placas de circuito impresso, soldas e baterias dos eletrônicos contêm uma mistura complexa de metais pesados altamente nocivos à saúde e ao meio ambiente. Elementos como o chumbo, mercúrio, cádmio e bário estão presentes em grande parte dos dispositivos do nosso dia a dia.",
      },
      {
        heading: "Danos Severos à Saúde Humana",
        text: "A exposição ou ingestão indireta de metais pesados através de água ou alimentos contaminados traz consequências gravíssimas para o corpo humano. A contaminação por chumbo e mercúrio afeta diretamente o sistema nervoso central, provoca déficits cognitivos e causa lesões e falhas irreversíveis no sistema renal.",
      },
      {
        heading: "A Periculosidade Específica do E-Waste",
        text: "Os resíduos eletroeletrônicos são classificados como resíduos perigosos justamente por sua estabilidade química nociva na natureza. Enquanto resíduos orgânicos se degradam em meses, os metais pesados do lixo eletrônico permanecem ativos e poluindo o solo e os ecossistemas por séculos se não forem descontaminados.",
      },
    ],
  },
  {
    id: "mineracao",
    title: "3. Mineração Urbana e Economia Circular",
    subtitle: "O Valor Econômico do Reciclável",
    emojiIcon: "⛏️",
    iconUrl: "https://img.icons8.com/color/96/mobile-mining.png",
    imagePath: "/images/secao3.png",
    source: "Fonte: Journal of Cleaner Production (Xavier et al., 2019)",
    sections: [
      {
        heading: "Conceito e Significado da Mineração Urbana",
        text: "A Mineração Urbana consiste na recuperação industrial de matérias-primas e metais valiosos a partir do desmonte e processamento de produtos descartados nas cidades. Em vez de abrir novas minas na natureza e destruir vegetações, a indústria passa a enxergar o lixo eletrônico como uma rica 'jazida acima do solo'.",
      },
      {
        heading: "Eficiência Energética e Preservação Ambiental",
        text: "Reaproveitar metais refinados que já estão presentes em placas de circuito consome até 80% menos energia elétrica do que as etapas industriais de escavar, transportar e processar minério bruto na mineração tradicional. Essa economia de energia reduz expressivamente a pegada de carbono e preserva grandes extensões de áreas naturais.",
      },
      {
        heading: "O Valor Oculto das Placas de Circuito",
        text: "As placas de circuito impresso de computadores e smartphones contêm uma concentração extraordinária de metais nobres. A quantidade de ouro, prata e cobre encontrada em uma tonelada de placas de circuito usadas é significativamente maior do que a concentração presente em uma tonelada de minério bruto extraído de minas terrestres.",
      },
      {
        heading: "Como Funciona a Manufatura Reversa",
        text: "A Manufatura Reversa é o processo técnico inverso ao da linha de montagem de uma fábrica. Em centros especializados, os eletrônicos descartados são desmontados, descontaminados e separados por categorias de materiais (como plásticos, vidros e diferentes ligas metálicas) para que retornem com alta pureza às fundições.",
      },
      {
        heading: "A Transição para a Economia Circular",
        text: "A Mineração Urbana é o pilar fundamental para a transição do antigo modelo econômico linear — baseado no ciclo insustentável de 'extrair, usar e descartar' — para a Economia Circular, na qual os recursos são mantidos continuamente em ciclos de uso e reaproveitamento, eliminando o conceito de 'lixo'.",
      },
    ],
  },
  {
    id: "classificacao",
    title: "4. Classificação dos Resíduos (As 4 Linhas de REEE)",
    subtitle: "Guia Teórico para o Simulador de Triagem",
    iconUrl: "https://img.icons8.com/color/96/recycle-bin.png",
    imagePath: "/images/secao4.png",
    source: "Fonte: Decreto nº 10.240/2020, Recicla Sampa & ABREE",
    sections: [
      {
        heading: "🟢 Linha Verde (Tecnologia e Comunicação)",
        text: "Compreende equipamentos de informática e telecomunicações, como smartphones, celulares, notebooks, computadores desktop, tablets, monitores LCD, impressoras, mouses, teclados, roteadores e cabos. Possuem alto teor de placas de circuito e metais preciosos.",
      },
      {
        heading: "🔵 Linha Azul (Eletroportáteis, Ferramentas e Brinquedos)",
        text: "Reúne equipamentos domésticos portáteis de pequeno porte (como liquidificadores, batedeiras, ferros de passar, secadores e cafeteiras), além de ferramentas elétricas portáteis (furadeiras, parafusadeiras), brinquedos eletrônicos e dispositivos médicos de monitoramento.",
      },
      {
        heading: "🟤 Linha Marrom (Equipamentos de Áudio e Vídeo)",
        text: "Engloba eletrônicos voltados ao entretenimento e à comunicação audiovisual doméstica, incluindo televisores (CRT, LED e Plasma), aparelhos de som, caixas acústicas, home theaters, câmeras fotográficas e gravadores.",
      },
      {
        heading: "⚪ Linha Branca (Grandes Eletrodomésticos)",
        text: "Formada pelos grandes equipamentos da casa, como geladeiras, congeladores, máquinas de lavar roupa, lava-louças, fogões, micro-ondas e aparelhos de ar-condicionado, caracterizados pelo grande volume de aço, alumínio e cobre.",
      },
      {
        heading: "A Importância da Segregação nos PEVs",
        text: "Separar corretamente os aparelhos por linha nos Pontos de Entrega Voluntária (PEVs) é essencial para otimizar a logística de transporte e garantir que cada tipo de resíduo siga para a cadeia industrial de reciclagem adequada.",
      },
    ],
  },
  {
    id: "descarte",
    title: "5. Logística Reversa e Legislação Brasileira",
    subtitle: "Entenda os Seus Direitos e Deveres",
    emojiIcon: "♻️🏛️",
    imagePath: "/images/secao5.png",
    source: "Fonte: Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) & Agência Gov",
    sections: [
      {
        heading: "O Princípio da Responsabilidade Compartilhada",
        text: "A Política Nacional de Resíduos Sólidos (PNRS / Lei nº 12.305/2010) e o Decreto nº 10.240/2020 instituíram no Brasil a Responsabilidade Compartilhada. Esse princípio estabelece que a responsabilidade pelo ciclo de vida dos produtos é dividida entre fabricantes, importadores, distribuidores, comerciantes e consumidores finais.",
      },
      {
        heading: "A Gratuidade do Descarte para o Cidadão",
        text: "Muitas pessoas deixam de descartar eletrônicos por acreditarem que haverá alguma cobrança. No entanto, a legislação garante que o descarte de resíduos eletroeletrônicos em Pontos de Entrega Voluntária (PEVs) credenciados é um direito e um dever do cidadão inteiramente gratuito.",
      },
      {
        heading: "O Funcionamento dos Pontos de Entrega Voluntária (PEVs)",
        text: "A sigla PEV refere-se a Ponto de Entrega Voluntária. Tratam-se de coletores sinalizados e protegidos instalados em redes de supermercados, lojas de departamentos, postos de atendimento e parcerias públicas para receber aparelhos sem uso da população.",
      },
      {
        heading: "Recondicionamento e Inclusão Digital",
        text: "Nem todo eletrônico entregue em um PEV vira sucata imediatamente. Aparelhos que chegam aos centros de triagem com funcionamento parcial ou necessitando de pequenos reparos são recondicionados e doados para escolas públicas e projetos sociais de inclusão digital.",
      },
      {
        heading: "O Papel Ativo do Consumidor na Cadeia Reversa",
        text: "O consumidor é o elo inicial que ativa a Logística Reversa. Seu papel fundamental é tirar o aparelho que não usa mais da gaveta e levá-lo até o Ponto de Entrega Voluntária mais próximo, permitindo que a indústria recicle seus materiais.",
      },
    ],
  },
  {
    id: "prevencao",
    title: "6. Como Evitar e Ações Práticas de Prevenção",
    subtitle: "Hábitos Sustentáveis no Dia a Dia",
    iconUrl: "https://img.icons8.com/color/96/idea.png",
    imagePath: "/images/secao6.png",
    source: "Fonte: Recicla Sampa & Guias de TI Verde",
    sections: [
      {
        heading: "Manutenção Preventiva e Reparos Simples",
        text: "Antes de decidir pela compra de um novo celular ou computador que apresenta lentidão ou falha pontual, vale a pena avaliar se alternativas de manutenção não resolvem o problema. Trocar a bateria viciada, formatar o sistema ou fazer uma limpeza de memória estendem a vida útil do aparelho e economizam recursos.",
      },
      {
        heading: "Doação e Segunda Vida para Aparelhos Funcionais",
        text: "Quando você adquire um dispositivo novo e o antigo continua funcionando perfeitamente, a atitude mais sustentável é doar ou vender o aparelho usado. Repassar o equipamento para outra pessoa garante uma segunda vida útil ao produto, evita o acúmulo e promove o acesso à tecnologia.",
      },
      {
        heading: "Cuidados Críticos com Pilhas e Baterias Danificadas",
        text: "Pilhas e baterias que apresentarem deformações, estufamento ou vazamento de fluido químico nunca devem ser guardadas em gavetas e jamais devem ir para o lixo comum. Por conterem ácido corrosivo com risco real de incêndio, elas devem ser levadas imediatamente a coletores de baterias em farmácias ou PEVs.",
      },
      {
        heading: "Engajamento com Pontos de Coleta Locais e Universitários",
        text: "Utilizar pontos de coleta locais e iniciativas universitárias fortalece a Educação Ambiental na comunidade. Levar seus resíduos até postos acadêmicos e comunitários aproxima a população das pesquisas de TI Verde e apoia cooperativas locais de reciclagem.",
      },
      {
        heading: "Zelo e Dicas de Conservação Diária",
        text: "Adotar práticas simples de conservação no dia a dia reduz a necessidade de trocas prematuras de eletrônicos. Usar capas de proteção contra quedas, evitar carregar a bateria em locais abafados e manter as saídas de ar dos computadores limpas evitam o superaquecimento e aumentam expressivamente a durabilidade dos aparelhos.",
      },
    ],
  },
];

export function ImpactCards() {
  const [selectedId, setSelectedId] = useState<string>(IMPACT_TOPICS[0].id);

  const selectedTopic = IMPACT_TOPICS.find((t) => t.id === selectedId) || IMPACT_TOPICS[0];

  return (
    <section id="impactos" className="scroll-mt-16 border-t border-lime-200/10 bg-[#070a08] px-5 py-24 sm:px-10 lg:px-[8vw]">
      <div className="mx-auto max-w-5xl">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-10">
          <p className="mb-3 flex items-center gap-2 text-[.7rem] font-extrabold tracking-[.14em] text-[#7ef6bc]">
            <span className="h-px w-7 bg-current" /> APRENDIZADO APROFUNDADO
          </p>
          <h2 className="font-['Arial_Black','Segoe_UI',sans-serif] text-3xl font-black tracking-[-.05em] text-[#f5fbf7] sm:text-5xl">
            Fundamentos do <span className="text-[#c5ff5b]">Lixo Eletrônico</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#b0c0b6] sm:text-base">
            Navegue pelos 6 tópicos abaixo para dominar o ciclo de vida dos eletrônicos, entender a classificação oficial e aplicar hábitos sustentáveis no seu dia a dia.
          </p>
        </div>

        {/* Seletores Superiores de Abas */}
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {IMPACT_TOPICS.map((topic) => {
            const isSelected = topic.id === selectedId;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedId(topic.id)}
                className={`flex flex-col items-center justify-between rounded-2xl border p-4 text-center transition-all ${
                  isSelected
                    ? "border-[#c5ff5b] bg-[#c5ff5b]/10 shadow-[0_0_20px_rgba(197,255,91,0.15)] scale-[1.02]"
                    : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                {topic.emojiIcon ? (
                  <span className="mb-2 text-3xl leading-none">{topic.emojiIcon}</span>
                ) : topic.iconUrl ? (
                  <img src={topic.iconUrl} alt={topic.title} className="mb-2 size-10 object-contain" />
                ) : null}
                <h3 className="mt-1 text-xs font-bold text-white leading-tight">
                  {topic.title.split(":")[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Painel do Módulo Selecionado (Imagem Acima dos Textos) */}
        <div className="mt-8 rounded-3xl border border-lime-200/20 bg-[linear-gradient(135deg,rgba(255,255,255,.03),rgba(197,255,91,.02))] p-6 sm:p-10 shadow-2xl">
          
          {/* Cabeçalho do Cartão */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-4">
              {selectedTopic.emojiIcon ? (
                <span className="text-4xl leading-none">{selectedTopic.emojiIcon}</span>
              ) : selectedTopic.iconUrl ? (
                <img src={selectedTopic.iconUrl} alt={selectedTopic.title} className="size-12 object-contain" />
              ) : null}
              <div>
                <span className="text-xs font-bold text-[#7ef6bc] uppercase tracking-wider">{selectedTopic.subtitle}</span>
                <h3 className="text-xl font-bold text-[#c5ff5b] sm:text-2xl">{selectedTopic.title}</h3>
              </div>
            </div>
            <span className="text-[0.7rem] text-[#8ea096] italic sm:text-right">{selectedTopic.source}</span>
          </div>

          {/* Imagem Temática Posicionada Acima dos Textos */}
          <div className={`mb-8 overflow-hidden rounded-2xl bg-transparent p-0 shadow-none ${selectedTopic.id === "contaminacao" ? "sm:mx-10" : ""}`}>
            <img
              src={selectedTopic.imagePath}
              alt={selectedTopic.title}
              className={`mx-auto h-auto rounded-xl object-contain ${selectedTopic.id === "contaminacao" ? "max-h-[360px] w-full sm:max-w-[92%]" : "max-h-[280px] w-full"}`}
            />
          </div>

          {/* Subseções de Texto do Tópico */}
          <div className="space-y-6">
            {selectedTopic.sections.map((sec, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="text-sm font-bold text-white sm:text-base flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#c5ff5b]" />
                  {sec.heading}
                </h4>
                <p className="text-sm leading-relaxed text-[#d8e2dc] pl-3.5 border-l border-white/10 sm:text-base">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}