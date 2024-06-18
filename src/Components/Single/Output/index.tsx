import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { OutputProps } from "./types";

const Output = (props: OutputProps) => {
  const { filtration, spreadability, viscosity, onChange } = props;
  const [PF, setPF] = useState(props.PF);
  const [PL, setPL] = useState(props.PL);

  useEffect(() => {
    onChange(PF, PL);
  }, [onChange, PF, PL]);

  return (
    <>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>ПФ:</td>
            <td className={styles.input}>
              <input
                value={PF}
                type="number"
                max={1}
                min={0}
                step={0.0001}
                onChange={({ target }) => setPF(Number(target.value))}
              />
            </td>
            <td className={styles.input}>
              <input
                value={PF}
                type="range"
                max={1}
                min={0}
                step={0.0001}
                onChange={({ target }) => setPF(Number(target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>ПЛ:</td>
            <td className={styles.input}>
              <input
                value={PL}
                type="number"
                max={1}
                min={0}
                step={0.0001}
                onChange={({ target }) => setPL(Number(target.value))}
              />
            </td>
            <td className={styles.input}>
              <input
                value={PL}
                type="range"
                max={1}
                min={0}
                step={0.0001}
                onChange={({ target }) => setPL(Number(target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>Фильтрация:</td>
            <td>{filtration.toFixed(4)}</td>
          </tr>
          <tr>
            <td>Растекаемость:</td>
            <td>{spreadability.toFixed(4)}</td>
          </tr>
          <tr>
            <td>Вязкость:</td>
            <td>{viscosity.toFixed(4)}</td>
          </tr>
        </tbody>
      </table>
      <span>
        Плотность тампонажного раствора: 1.87 ± 0.02 г/см
        <sup>
          <small>3</small>
        </sup>
      </span>
    </>
  );
};

export default Output;
