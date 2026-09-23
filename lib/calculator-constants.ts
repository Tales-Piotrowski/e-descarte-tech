export type DeviceId = "smartphone" | "notebook" | "tv_monitor" | "accessories";

export type Device = {
  id: DeviceId;
  label: string;
  massKg: number;
  iconUrl: string;
  description: string;
};

export const DEVICES: Device[] = [
  {
    id: "smartphone",
    label: "Smartphone",
    massKg: 0.18,
    iconUrl: "https://img.icons8.com/color/96/smartphone.png",
    description: "Celulares e telefones móveis",
  },
  {
    id: "notebook",
    label: "Notebook / PC",
    massKg: 2.0,
    iconUrl: "https://img.icons8.com/color/96/laptop.png",
    description: "Computadores portáteis ou de mesa",
  },
  {
    id: "tv_monitor",
    label: "TV / Monitor",
    massKg: 7.0,
    iconUrl: "https://img.icons8.com/color/96/monitor.png",
    description: "Telas, monitores e televisores",
  },
  {
    id: "accessories",
    label: "Acessórios",
    massKg: 0.1,
    iconUrl: "https://img.icons8.com/color/96/headphones.png",
    description: "Fones de ouvido, carregadores e periféricos",
  },
];

export const USE_PERIOD_OPTIONS = [
  { label: "1 ano ou menos", years: 1 },
  { label: "2 a 3 anos", years: 2.5 },
  { label: "4 anos ou mais", years: 4 },
];

export const CALCULATION_COEFFICIENTS = {
  co2ePerKgEwaste: 1.8,
  recoverableMaterialRate: 0.2,
  recoveryEfficiency: 0.85,
  // Para cada 1 kg de e-waste reciclado, evita-se a extração de ~15 kg de minério bruto do solo
  rawOreSavedPerKg: 15,
};

export const CALCULATION_REFERENCES = [
  "AGÊNCIA GOV. Logística reversa: entenda como funciona o reaproveitamento de equipamentos eletrônicos. Brasília: EBC, 2026.",
  "UNITAR. The Global E-waste Monitor 2024. Genebra: UNITAR, 2024.",
  "BRASIL. Decreto nº 10.240, de 12 de fevereiro de 2020 (Logística Reversa de REEE).",
];