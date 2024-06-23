import { useMemo, useState } from "react";
import styles from "./index.module.css";
import { OutputProps, SearchField } from "./types";
import Help from "../../../assets/Help";

const Output = (props: OutputProps) => {
  const { data, minPrice, minPriceData, minSumData } = props;

  const [searchField, setSearchField] = useState<SearchField>("filtration");
  const [range, setRange] = useState<number>(0);
  const [aroundValue, setAroundValue] = useState<number>(0);
  const [searchData, setSearchData] = useState<number[][] | null>(null);

  const cards = useMemo(() => {
    const array = searchData ?? data;

    if (array.length === 0) {
      return <span style={{ textAlign: "center" }}>Нет данных</span>;
    }

    return array.map((item) => {
      const label = `Ф: ${item[5].toFixed(4)}, Р: ${item[6].toFixed(
        4
      )}, В: ${item[7].toFixed(4)}`;
      return (
        <div key={label} className={styles.card}>
          <span>{label}</span>
          <span>ПФ: {item[3].toFixed(4)}</span>
          <span>ПЛ: {item[4].toFixed(4)}</span>
          <span>Ф: {item[0].toFixed(4)}</span>
          <span>Р: {item[1].toFixed(4)}</span>
          <span>В: {item[2].toFixed(4)}</span>
        </div>
      );
    });
  }, [data, searchData]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.block}>
          <span>
            <strong>Минимум по сумме: </strong>
          </span>
          <table>
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
                <td>{minSumData[3].toFixed(4)}</td>
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
                <td>{minSumData[4].toFixed(4)}</td>
              </tr>
              <tr>
                <td>Фильтрация:</td>
                <td>{minSumData[0].toFixed(4)}</td>
              </tr>
              <tr>
                <td>Растекаемость:</td>
                <td>{minSumData[1].toFixed(4)}</td>
              </tr>
              <tr>
                <td>Вязкость:</td>
                <td>{minSumData[2].toFixed(4)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.block}>
          <span>
            <strong>Минимум по цене: {minPrice.toFixed(2)}</strong>
          </span>
          <table>
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
                <td>{minPriceData[3].toFixed(4)}</td>
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
                <td>{minPriceData[4].toFixed(4)}</td>
              </tr>
              <tr>
                <td>Фильтрация:</td>
                <td>{minPriceData[0].toFixed(4)}</td>
              </tr>
              <tr>
                <td>Растекаемость:</td>
                <td>{minPriceData[1].toFixed(4)}</td>
              </tr>
              <tr>
                <td>Вязкость:</td>
                <td>{minPriceData[2].toFixed(4)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.search}>
          <span>
            <strong>Поиск значений: </strong>
          </span>
          <label>
            Выберите свойство:
            <select
              name="select"
              onChange={({ target }) => {
                setSearchField(target.value as SearchField);
              }}
              value={searchField}
            >
              <option value="filtration">Фильтрация</option>
              <option value="spreadability">Растекаемость</option>
              <option value="viscosity">Вязкость</option>
            </select>
          </label>
          <label>
            Выберите диапазон значений:
            <input
              value={range}
              onChange={({ target }) => setRange(Number(target.value))}
              type="number"
              step={0.1}
              min={0}
            />
          </label>
          <label>
            Введите значение, около которого производить поиск:
            <input
              value={aroundValue}
              onChange={({ target }) => setAroundValue(Number(target.value))}
              type="number"
              step={0.1}
              min={0}
            />
          </label>
          <button
            disabled={range === 0 || aroundValue === 0}
            onClick={() => {
              if (aroundValue && range) {
                setSearchData(
                  data.filter((item) => {
                    if (searchField === "filtration") {
                      return (
                        item[0] >= aroundValue - range &&
                        item[0] <= aroundValue + range
                      );
                    } else if (searchField === "spreadability") {
                      return (
                        item[1] >= aroundValue - range &&
                        item[1] <= aroundValue + range
                      );
                    } else if (searchField === "viscosity") {
                      return (
                        item[2] >= aroundValue - range &&
                        item[2] <= aroundValue + range
                      );
                    }
                  })
                );
              }
            }}
          >
            Поиск
          </button>
          <button
            disabled={searchData === null}
            onClick={() => {
              setRange(0);
              setAroundValue(0);
              setSearchData(null);
            }}
          >
            Сбросить
          </button>
        </div>
      </div>
      <div className={styles.right}>{cards}</div>
    </div>
  );
};

export default Output;
