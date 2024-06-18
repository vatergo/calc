import styles from "./index.module.css";
import { SelectorProps } from "./types";

const Selector = ({ mode, onChange }: SelectorProps) => {
  return (
    <div className={styles.container}>
      <span>Тип ввода значений:</span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={mode === "range"}
          onChange={() => {
            if (mode === "single") {
              onChange("range");
            } else {
              onChange("single");
            }
          }}
        />
        <div className={styles.slider}>
          <div className={styles.dot}>
            <span>Диапазон</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Selector;
