export type InputProps = {
  filtration: number;
  spreadability: number;
  viscosity: number;
  onSubmit: () => void;
  onChangeFiltartion: (filtration: number) => void;
  onChangeSpreadability: (spreadability: number) => void;
  onChangeViscosity: (viscosity: number) => void;
};
