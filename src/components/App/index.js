import React from 'react';
import { SuspenseWithLazy } from "components/SuspenseWithLazy";

import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.container}>
      <SuspenseWithLazy />
    </div>
  );
}

export default App;
