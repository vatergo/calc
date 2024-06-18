export type OutputProps = {
  filtration: number;
  spreadability: number;
  viscosity: number;
  PF: number;
  PL: number;
  onChange: (PF: number, PL: number) => void;
};
