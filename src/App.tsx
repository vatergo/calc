import styles from "./App.module.css";
import Input from "./Components/Input";
import Output from "./Components/Output";
import Selector from "./Components/Selector";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Selector />
        <Input />
      </div>
      <Output />
    </div>
  );
}

export default App;
