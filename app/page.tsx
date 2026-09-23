import { Header } from "@/components/header";
import { EwasteCalculator } from "@/components/ewaste-calculator";
import { ImpactCards } from "@/components/impact-cards";

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
          <p className="hero-copy">
            Celulares, computadores e outros eletrônicos carregam materiais valiosos — e também riscos.
            Entenda o impacto dos REEE e descubra como fazer parte da mudança.
          </p>
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
        <p className="source-note">Dados: Global E-waste Monitor 2024</p>
      </section>

      <ImpactCards />
      <EwasteCalculator />
    </main>
  );
}