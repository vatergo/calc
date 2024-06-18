import { useMemo } from "react";
import styles from "./index.module.css";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  const {
    startFiltration,
    endFiltration,
    startSpreadability,
    endSpreadability,
    startViscosity,
    endViscosity,
    onChangeStartFiltartion,
    onChangeEndFiltartion,
    onChangeStartSpreadability,
    onChangeEndSpreadability,
    onChangeStartViscosity,
    onChangeEndViscosity,
    onSubmit,
    pricePF,
    pricePL,
    onChangePricePF,
    onChangePricePL,
  } = props;

  const submitDisabled = useMemo(() => {
    return (
      endFiltration - startFiltration < 0 ||
      endFiltration - startFiltration > 20 ||
      endSpreadability - startSpreadability < 0 ||
      endSpreadability - startSpreadability > 20 ||
      endViscosity - startViscosity < 0 ||
      endViscosity - startViscosity > 20
    );
  }, [
    endFiltration,
    endSpreadability,
    endViscosity,
    startFiltration,
    startSpreadability,
    startViscosity,
  ]);

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label>
        Фильтрация (см
        <sup>
          <small>3</small>
        </sup>
        /30мин):
        <div className={styles.inputs}>
          <input
            onChange={({ target }) =>
              onChangeStartFiltartion(Number(target.value))
            }
            value={startFiltration}
            type="number"
            step={0.1}
            min={0}
          />
          <span>-</span>
          <input
            onChange={({ target }) =>
              onChangeEndFiltartion(Number(target.value))
            }
            value={endFiltration}
            type="number"
            step={0.1}
            min={0}
          />
        </div>
      </label>
      <label>
        Растекаемость (мм):
        <div className={styles.inputs}>
          <input
            onChange={({ target }) =>
              onChangeStartSpreadability(Number(target.value))
            }
            value={startSpreadability}
            type="number"
            step={0.1}
            min={0}
          />
          <span>-</span>
          <input
            onChange={({ target }) =>
              onChangeEndSpreadability(Number(target.value))
            }
            value={endSpreadability}
            type="number"
            step={0.1}
            min={0}
          />
        </div>
      </label>
      <label>
        Вязкость (мПа*с):
        <div className={styles.inputs}>
          <input
            onChange={({ target }) =>
              onChangeStartViscosity(Number(target.value))
            }
            value={startViscosity}
            type="number"
            step={0.1}
            min={0}
          />
          <span>-</span>
          <input
            onChange={({ target }) =>
              onChangeEndViscosity(Number(target.value))
            }
            value={endViscosity}
            type="number"
            step={0.1}
            min={0}
          />
        </div>
      </label>
      <div className={styles.actions}>
        <label>
          Цена ПФ (руб):
          <input
            onChange={({ target }) => onChangePricePF(Number(target.value))}
            value={pricePF}
            type="number"
            step={0.1}
            min={0}
          />
        </label>
        <label>
          Цена ПЛ (руб):
          <input
            onChange={({ target }) => onChangePricePL(Number(target.value))}
            value={pricePL}
            type="number"
            step={0.1}
            min={0}
          />
        </label>
        <button type="submit" disabled={submitDisabled}>
          Рассчитать
        </button>
      </div>
    </form>
  );
};

export default Input;
