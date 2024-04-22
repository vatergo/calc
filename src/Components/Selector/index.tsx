import styles from "./index.module.css";

const Selector = () => {
  return (
    <div className={styles.container}>
      <div>
        <input
          type="radio"
          id="specific"
          name="type"
          value="specific"
          checked
        />
        <label htmlFor="specific">Конкретные значения</label>
      </div>
      <div>
        <input type="radio" id="range" name="type" value="range" checked />
        <label htmlFor="range">Диапазон значений</label>
      </div>
    </div>
  );
};

export default Selector;
