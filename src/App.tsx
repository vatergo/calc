import { useState } from "react";
import styles from "./App.module.css";
import Selector from "./Components/Selector";
import Single from "./Components/Single";
import Range from "./Components/Range";

import { useDotNet } from "./utils";
import { Mode } from "./types";

function App() {
  const { dotnet, loading } = useDotNet(
    //"../browser-wasm/AppBundle/_framework/dotnet.js" // prod
    "../../../public/browser-wasm/AppBundle/_framework/dotnet.js" // dev
  );

  const [mode, setMode] = useState<Mode>("single");

  return (
    <div className={styles.container}>
      {loading && <>Loading...</>}
      <Selector mode={mode} onChange={(newMode) => setMode(newMode)} />
      {dotnet && (
        <>
          {mode === "single" && <Single dotnet={dotnet} />}
          {mode === "range" && <Range dotnet={dotnet} />}
        </>
      )}
    </div>
  );
}

export default App;
