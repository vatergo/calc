import styles from "./index.module.css";

const Output = () => {
  return (
    <div className={styles.container}>
      <span>ПФ:</span>
      <span>ПЛ:</span>
      <span>Фильтрация:</span>
      <span>Растекаемость:</span>
      <span>Вязкость:</span>
      <span>Плотность тампонажного раствора:</span>
    </div>
  );
};

export default Output;
