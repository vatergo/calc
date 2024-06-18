export type Mode = "single" | "range";

export type Dotnet = {
  App: {
    Calculation: (
      filtration: number,
      spreadability: number,
      viscosity: number,
      PF?: number,
      PL?: number
    ) => Promise<string>;
    CalculationRange: (
      startFiltrationValue: number,
      endFiltrationValue: number,
      startSpreadabilityValue: number,
      endSpreadabilityValue: number,
      startViscosityValue: number,
      endViscosityValue: number
    ) => Promise<string>;
  };
} | null;
