import { Mode } from "../../types";

export type SelectorProps = {
  mode: Mode;
  onChange: (newMode: Mode) => void;
};
