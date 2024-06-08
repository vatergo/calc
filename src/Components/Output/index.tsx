import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useDotNet } from "./utils";

const Output = () => {
  const [PF, setPF] = useState(0);
  const [PL, setPL] = useState(0);
  const [filtration, setFiltration] = useState(0);
  const [spreadability, setSpreadability] = useState(0);
  const [viscosity, setViscosity] = useState(0);
  const [field, setField] = useState<unknown>("loading");

  const { dotnet, loading } = useDotNet(
    "./assets/browser-wasm/AppBundle/_framework/dotnet.js"
  );

  useEffect(() => {
    setField(loading);
    if (!loading) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dotnet?.App?.Calculation(80, 220, 130).then(setField).catch(setField);
    }
  }, [loading, dotnet]);

  console.log();

  return (
    <table className={styles.container}>
      <tbody>
        <tr>
          <td>ПФ:</td>
          {loading}
          {String(field)}
          <td>
            <input
              value={PF}
              type="number"
              max={1}
              min={0}
              step={0.0001}
              onChange={({ target }) => setPF(Number(target.value))}
            />
          </td>
          <td>
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
          <td>
            <input
              value={PL}
              type="number"
              max={1}
              min={0}
              step={0.0001}
              onChange={({ target }) => setPL(Number(target.value))}
            />
          </td>
          <td>
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
          <td>
            <input
              value={filtration}
              type="number"
              onChange={({ target }) => setFiltration(Number(target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Растекаемость:</td>
          <td>
            <input
              value={spreadability}
              type="number"
              onChange={({ target }) => setSpreadability(Number(target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Вязкость:</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Плотность тампонажного раствора:</td>
          <td>
            <input
              value={viscosity}
              type="number"
              onChange={({ target }) => setViscosity(Number(target.value))}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Output;
