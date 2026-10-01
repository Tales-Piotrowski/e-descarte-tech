import { Header } from "@/components/header";
import { EwasteCalculator } from "@/components/ewaste-calculator";
import { ImpactCards } from "@/components/impact-cards";
import { QuizSection } from "@/components/quiz-section";

const statistics = [
  { value: "62 mi", label: "de toneladas de lixo eletrônico geradas no mundo em 2022" },
  { value: "22,3%", label: "foi oficialmente coletado e reciclado no mesmo ano" },
  { value: "2,4 mi", label: "de toneladas foram geradas no Brasil em 2022" },
];

export default function Home() {
  return (
    <main id="inicio" className="site-shell">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-vignette" aria-hidden="true" />
        <div className="fireflies" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => (
            <span className={`firefly firefly-${index + 1}`} key={index} />
          ))}
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            <span /> EDUCAÇÃO PARA O DESCARTE CONSCIENTE
          </p>
          <h1 id="hero-title">
            A tecnologia não termina <em>quando você para de usar.</em>
          </h1>
          
          <div className="my-6 max-w-2xl space-y-4 text-left text-sm leading-relaxed text-[#c3d2c9] sm:text-base">
            <p>
              A aceleração das inovações tecnológicas transformou celulares, computadores e eletrodomésticos em itens indispensáveis na sociedade moderna. Contudo, a busca constante por modelos mais novos e a obsolescência acelerada criaram uma das correntes de resíduos que mais cresce no planeta: o <strong>Lixo Eletrônico (REEE)</strong>.
            </p>
            <p>
              Diferente do lixo orgânico, um dispositivo eletrônico carrega uma dualidade crítica: por um lado, possui substâncias tóxicas perigosas que contaminam o solo e a água; por outro, guarda elementos nobres como ouro, prata e cobre de altíssimo valor para a indústria.
            </p>
            <p className="font-medium text-white">
              A plataforma <strong>E-Descarte.tech</strong> foi criada para guiar você nessa jornada de conscientização. Aqui você entenderá os riscos ambientais, calculará o impacto anual do seu consumo e aprenderá como a reciclagem e a logística reversa transformam descartes em novos recursos.
            </p>
          </div>

          <a className="cta" href="#impactos">
            Começar a explorar <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="stats" aria-label="Dados sobre resíduos eletroeletrônicos">
          {statistics.map((stat) => (
            <article className="stat" key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
        <p className="source-note">Dados: Global E-waste Monitor 2024 (UNITAR)</p>
      </section>

      <ImpactCards />
      <EwasteCalculator />
      <QuizSection />
    </main>
  );
}