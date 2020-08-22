import React from "react";
import styles from "./styles.module.css";
import Catch from "./Catch";

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

const ThrowButton = ({ onClick }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    Throw Error
  </button>
);

const Loader = () => <div className={styles.loader}>Loading...</div>;

const LazyThing = React.lazy(() =>
  import(
    /* webpackChunkName: "thing" */
    "./Thing"
  )
);

export const SuspenseWithLazy = () => {
  const [error, setError] = React.useState(null);

  return (
    <Catch>
      <React.Suspense fallback={<Loader />}>
        <Container>
          <LazyThing error={error} />
          <ThrowButton onClick={() => setError(true)} />
        </Container>
      </React.Suspense>
    </Catch>
  );
};
