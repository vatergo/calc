import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { OutputProps } from "./types";
import Help from "../../../assets/Help";

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
            <td>
              <div className={styles.label}>
                Понизитель фильтрации:
                <span className={styles.help}>
                  <Help />
                  <div className={styles.tooltip}>
                    на основе гидроксиэтилцеллюлозы (ГЭЦ)
                  </div>
                </span>
              </div>
            </td>
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
            <td>
              <div className={styles.label}>
                Пластификатор:
                <span className={styles.help}>
                  <Help />
                  <div className={styles.tooltip}>
                    на основе поликарбоксилатного сополимера
                  </div>
                </span>
              </div>
            </td>
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
    </>
  );
};

export default Output;
