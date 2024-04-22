import { useCallback, useState } from "react";
import styles from "./index.module.css";

const Input = () => {
  const [value, setValue] = useState("0.0");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      setValue(Number(target.value).toFixed(1));
    },
    []
  );

  return (
    <div className={styles.container}>
      <label>
        Фильтрация
        <input onInput={onChange} value={value} type="number" step=".1" />
      </label>
      <label>
        Растекаемость
        <input onInput={onChange} value={value} type="number" step=".1" />
      </label>
      <label>
        Вязкость
        <input onInput={onChange} value={value} type="number" step=".1" />
      </label>
      <button>Рассчитать</button>
    </div>
  );
};

export default Input;
