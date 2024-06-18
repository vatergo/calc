import styles from "./index.module.css";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  const {
    filtration,
    spreadability,
    viscosity,
    onSubmit,
    onChangeFiltartion,
    onChangeSpreadability,
    onChangeViscosity,
  } = props;

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
        <input
          onChange={({ target }) => onChangeFiltartion(Number(target.value))}
          value={filtration}
          type="number"
          step={0.1}
          min={0}
        />
      </label>
      <label>
        Растекаемость (мм):
        <input
          onChange={({ target }) => onChangeSpreadability(Number(target.value))}
          value={spreadability}
          type="number"
          step={0.1}
          min={0}
        />
      </label>
      <label>
        Вязкость (мПа*с):
        <input
          onChange={({ target }) => onChangeViscosity(Number(target.value))}
          value={viscosity}
          type="number"
          step={0.1}
          min={0}
        />
      </label>
      <button type="submit">Рассчитать</button>
    </form>
  );
};

export default Input;
