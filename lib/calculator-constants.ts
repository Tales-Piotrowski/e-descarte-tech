export type DeviceId =
  | "smartphone"
  | "notebook"
  | "tv_monitor"
  | "console"
  | "printer"
  | "tablet"
  | "wearables"
  | "small_appliance"
  | "accessories";

export type Device = {
  id: DeviceId;
  label: string;
  massKg: number;
  iconUrl: string;
  iconEmoji?: string;
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
    description: "Computadores portáteis ou desktops",
  },
  {
    id: "tv_monitor",
    label: "TV / Monitor",
    massKg: 7.0,
    iconUrl: "https://img.icons8.com/color/96/monitor.png",
    description: "Telas, monitores e televisores",
  },
  {
    id: "console",
    label: "Console / Videogame",
    massKg: 3.5,
    iconUrl: "https://img.icons8.com/color/96/controller.png",
    description: "Consoles de videogame e aparelhos de jogos",
  },
  {
    id: "printer",
    label: "Impressora",
    massKg: 6.0,
    iconUrl: "https://img.icons8.com/color/96/printer.png",
    iconEmoji: "🖨️",
    description: "Impressoras jato de tinta ou laser",
  },
  {
    id: "tablet",
    label: "Tablet",
    massKg: 0.5,
    iconUrl: "https://img.icons8.com/color/96/tablet.png",
    iconEmoji: "📱",
    description: "Tablets e leitores digitais",
  },
  {
    id: "small_appliance",
    label: "Eletroportátil",
    massKg: 2.5,
    iconUrl: "https://img.icons8.com/color/96/blender.png",
    description: "Cafeteiras, liquidificadores e batedeiras",
  },
  {
    id: "wearables",
    label: "Wearables / Fones",
    massKg: 0.05,
    iconUrl: "https://img.icons8.com/color/96/airpods.png",
    iconEmoji: "🎧",
    description: "Fones TWS, smartwatches e pulseiras digitais",
  },
  {
    id: "accessories",
    label: "Cabos e Carregadores",
    massKg: 0.1,
    iconUrl: "https://img.icons8.com/color/96/headphones.png",
    description: "Cabos, fontes, periféricos e adaptadores",
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
  rawOreSavedPerKg: 15,
};

export const CALCULATION_REFERENCES = [
  "UNITAR. The Global E-waste Monitor 2024. Genebra: United Nations Institute for Training and Research, 2024.",
  "AGÊNCIA GOV. Logística reversa: entenda como funciona o reaproveitamento de equipamentos eletrônicos. Brasília: EBC, 2026.",
  "BRASIL. Decreto nº 10.240, de 12 de fevereiro de 2020. Logística Reversa de Produtos Eletroeletrônicos. Brasília, 2020.",
];