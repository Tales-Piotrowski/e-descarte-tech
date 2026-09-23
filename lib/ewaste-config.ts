export const E_WASTE_FACTORS = {
  co2KgPerKgWaste: 4.3,
  recyclableMaterialRate: 0.42,
} as const;

export const DEVICES = [
  { id: "smartphone", name: "Smartphone", unitWeightKg: 0.19, defaultQuantity: 1, defaultYears: 3, accent: "01" },
  { id: "notebook", name: "Notebook", unitWeightKg: 2.1, defaultQuantity: 1, defaultYears: 5, accent: "02" },
  { id: "tvMonitor", name: "TV / Monitor", unitWeightKg: 6.8, defaultQuantity: 1, defaultYears: 7, accent: "03" },
  { id: "accessories", name: "Fones / Acessórios", unitWeightKg: 0.12, defaultQuantity: 2, defaultYears: 2, accent: "04" },
] as const;

export type DeviceId = (typeof DEVICES)[number]["id"];

// Fórmulas: kg/ano = (quantidade × peso médio do item) ÷ anos de uso.
// CO₂ e materiais recuperáveis usam as taxas acima e podem ser recalibrados aqui.
