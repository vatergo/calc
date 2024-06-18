export type InputProps = {
  startFiltration: number;
  endFiltration: number;
  startSpreadability: number;
  endSpreadability: number;
  startViscosity: number;
  endViscosity: number;
  onSubmit: () => void;
  onChangeStartFiltartion: (filtration: number) => void;
  onChangeEndFiltartion: (filtration: number) => void;
  onChangeStartSpreadability: (spreadability: number) => void;
  onChangeEndSpreadability: (spreadability: number) => void;
  onChangeStartViscosity: (viscosity: number) => void;
  onChangeEndViscosity: (viscosity: number) => void;
  pricePF: number;
  pricePL: number;
  onChangePricePF: (pricePF: number) => void;
  onChangePricePL: (pricePL: number) => void;
};
