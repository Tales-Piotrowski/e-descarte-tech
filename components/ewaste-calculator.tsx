"use client";

import { useState } from "react";
import {
  CALCULATION_COEFFICIENTS,
  CALCULATION_REFERENCES,
  DEVICES,
  USE_PERIOD_OPTIONS,
  type DeviceId,
} from "@/lib/calculator-constants";

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="size-5">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 10v6m0-9h.01" />
    </svg>
  );
}

export function EwasteCalculator() {
  const [selectedDeviceId, setSelectedDeviceId] = useState<DeviceId>("smartphone");
  const [quantity, setQuantity] = useState<number>(1);
  const [years, setYears] = useState<number>(2.5);
  const [infoOpen, setInfoOpen] = useState(false);

  const selectedDevice = DEVICES.find((d) => d.id === selectedDeviceId) || DEVICES[0];

  const annualWaste = (selectedDevice.massKg * quantity) / years;
  const co2Equivalent = annualWaste * CALCULATION_COEFFICIENTS.co2ePerKgEwaste;
  const recoverableGrams =
    annualWaste *
    CALCULATION_COEFFICIENTS.recoverableMaterialRate *
    CALCULATION_COEFFICIENTS.recoveryEfficiency *
    1000;
  
  const rawOreSavedKg = annualWaste * CALCULATION_COEFFICIENTS.rawOreSavedPerKg;

  return (
    <section id="calculadora" className="scroll-mt-16 border-t border-lime-200/10 bg-[#050706] px-5 py-20 sm:px-10 lg:px-[8vw]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[.7rem] font-extrabold tracking-[.14em] text-[#7ef6bc]">
              <span className="h-px w-7 bg-current" /> CALCULADORA SIMPLIFICADA
            </p>
            <h2 className="font-['Arial_Black','Segoe_UI',sans-serif] text-3xl font-black tracking-[-.05em] text-[#f5fbf7] sm:text-5xl">
              Descubra o seu <span className="text-[#c5ff5b]">impacto eletrônico</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="flex items-center gap-2 rounded-full border border-lime-200/30 px-4 py-2 text-xs font-bold text-[#c5ff5b] transition hover:border-[#c5ff5b] hover:bg-[#c5ff5b] hover:text-[#050706]"
            title="Como é feito este cálculo?"
          >
            <InfoIcon />
            <span className="hidden sm:inline">Entenda a conta</span>
          </button>
        </div>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#b0c0b6]">
          Selecione abaixo os dispositivos que você utiliza para calcular uma estimativa anual da sua geração de resíduos, pegada ambiental e o potencial de reciclagem e reuso desses materiais na indústria.
        </p>

        <div className="grid gap-8 rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <label className="mb-3 block text-xs font-bold tracking-wider text-[#7ef6bc] uppercase">
                1. Selecione o aparelho
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {DEVICES.map((device) => {
                  const isSelected = device.id === selectedDeviceId;
                  return (
                    <button
                      key={device.id}
                      type="button"
                      onClick={() => setSelectedDeviceId(device.id)}
                      className={`flex flex-col items-center justify-center rounded-2xl border p-3 transition ${
                        isSelected
                          ? "border-[#c5ff5b] bg-[#c5ff5b]/10 text-white shadow-[0_0_15px_rgba(197,255,91,0.15)]"
                          : "border-white/10 bg-white/[0.02] text-[#8ea096] hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <img
                        src={device.iconUrl}
                        alt={device.label}
                        width={40}
                        height={40}
                        className="size-10 object-contain"
                      />
                      <span className="mt-2 text-xs font-bold text-center">{device.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold tracking-wider text-[#7ef6bc] uppercase">
                2. Quantos aparelhos deste tipo você costuma ter/trocar?
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="grid size-11 place-items-center rounded-xl border border-white/20 bg-white/5 text-xl font-bold text-white transition hover:bg-white/10 active:scale-95"
                >
                  -
                </button>
                <span className="w-12 text-center text-2xl font-black text-[#c5ff5b]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="grid size-11 place-items-center rounded-xl border border-white/20 bg-white/5 text-xl font-bold text-white transition hover:bg-white/10 active:scale-95"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold tracking-wider text-[#7ef6bc] uppercase">
                3. Com qual frequência você costuma trocar?
              </label>
              <div className="flex flex-wrap gap-2">
                {USE_PERIOD_OPTIONS.map((option) => {
                  const isSelected = years === option.years;
                  return (
                    <button
                      key={option.years}
                      type="button"
                      onClick={() => setYears(option.years)}
                      className={`rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                        isSelected
                          ? "border-[#c5ff5b] bg-[#c5ff5b] text-[#050706]"
                          : "border-white/10 bg-white/5 text-[#d8e2dc] hover:border-white/20"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-lime-200/20 bg-[linear-gradient(135deg,rgba(197,255,91,.08),rgba(0,0,0,.4))] p-6 lg:col-span-5">
            <div>
              <span className="rounded-full bg-[#c5ff5b]/20 px-3 py-1 text-[0.65rem] font-black uppercase tracking-wider text-[#c5ff5b]">
                O seu resultado
              </span>
              
              <div className="mt-4 space-y-4">
                <p className="text-xs leading-relaxed text-[#d8e2dc]">
                  Mantendo <strong className="text-white">{quantity} {selectedDevice.label}(s)</strong> por cerca de <strong className="text-white">{years === 1 ? "1 ano" : `${years} anos`}</strong>, sua estimativa de descarte é:
                </p>

                <div className="rounded-xl border border-white/10 bg-black/40 p-3.5">
                  <span className="text-[0.7rem] text-[#8ea096]">Lixo eletrônico gerado:</span>
                  <strong className="mt-0.5 block text-2xl font-black text-[#c5ff5b]">
                    {annualWaste.toFixed(2)} kg <span className="text-xs font-normal text-white">por ano</span>
                  </strong>
                </div>

                <div className="space-y-1.5 text-xs leading-relaxed text-[#b0c0b6]">
                  <p>
                    🌱 <strong>Emissões:</strong> Cerca de <strong className="text-white">{co2Equivalent.toFixed(1)} kg de gases poluentos</strong> na fabricação.
                  </p>
                  <p>
                    ♻️ <strong>Materiais:</strong> <strong className="text-white">{recoverableGrams.toFixed(0)} g de metais valiosos</strong> (como cobre e ouro) em circulação.
                  </p>
                </div>

                <div className="rounded-xl border border-[#c5ff5b]/30 bg-[#c5ff5b]/10 p-3.5 text-xs leading-relaxed text-[#d8e2dc]">
                  <p className="font-bold text-[#c5ff5b] mb-1">🔄 Reintrodução no Mercado (Logística Reversa):</p>
                  <p>
                    Em vez de descartar no lixo comum, encaminhar este aparelho para a reciclagem permite recuperar matéria-prima para novos produtos e poupa a natureza de extrair cerca de <strong className="text-white">{rawOreSavedKg.toFixed(1)} kg de minério bruto do solo</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {infoOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-5 backdrop-blur-sm"
          onClick={() => setInfoOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-lime-200/25 bg-[#0b100d] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[.68rem] font-extrabold tracking-[.14em] text-[#7ef6bc]">TRANSPARÊNCIA METODOLÓGICA</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Demonstração e Fórmulas do Cálculo</h3>
              </div>
              <button
                type="button"
                onClick={() => setInfoOpen(false)}
                className="grid size-9 place-items-center rounded-full border border-white/15 text-lg text-white hover:border-[#c5ff5b]"
              >
                ×
              </button>
            </div>
            
            <div className="mt-6 space-y-5 text-sm leading-6 text-[#bdc9c1]">
              <div>
                <strong className="text-white block mb-1">1. Fórmula da Análise de Fluxo de Massa (MFA):</strong>
                <p className="rounded-xl border border-white/10 bg-black/50 p-3 font-mono text-xs text-[#c5ff5b]">
                  Lixo Eletrônico Anual (kg/ano) = (Massa Média do Aparelho × Quantidade) ÷ Anos de Uso
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">2. Exemplo Prático com Números Reais:</strong>
                <div className="rounded-xl border border-lime-200/20 bg-lime-200/[0.03] p-4 text-xs space-y-2 text-[#d8e2dc]">
                  <p>• <strong>Entrada:</strong> 1 Smartphone (peso médio global de 0,18 kg) trocado a cada 2 anos.</p>
                  <p>• <strong>Cálculo do Lixo:</strong> (0,18 kg × 1) ÷ 2 anos = <strong>0,09 kg/ano</strong> de e-waste gerado.</p>
                  <p>• <strong>Pegada de Poluição:</strong> 0,09 kg × 1,8 factor CO₂ = <strong>0,16 kg de CO₂e</strong> associados.</p>
                  <p>• <strong>Minério Salvo:</strong> 0,09 kg × 15 = <strong>1,35 kg de minério bruto preservado</strong> na natureza se reciclado.</p>
                </div>
              </div>

              <div>
                <strong className="text-white block mb-1">3. Parâmetros e Pesos Padrões Utilizados:</strong>
                <ul className="list-disc space-y-1 pl-5 text-xs">
                  <li><strong>Smartphone:</strong> 0,18 kg | <strong>Notebook/PC:</strong> 2,00 kg</li>
                  <li><strong>TV/Monitor:</strong> 7,00 kg | <strong>Acessórios:</strong> 0,10 kg</li>
                  <li><strong>Fator CO₂e:</strong> 1,8 kg CO₂ por kg de resíduo (Ciclo de Vida E-waste)</li>
                  <li><strong>Minério Bruto Evitado:</strong> 15 kg por kg reciclado (Estudos EBC/UNITAR)</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-3">
                <strong className="text-white block mb-1">Fontes e Referências:</strong>
                <ul className="list-disc space-y-1 pl-5 text-xs text-[#8ea096]">
                  {CALCULATION_REFERENCES.map((ref, idx) => (
                    <li key={idx}>{ref}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}