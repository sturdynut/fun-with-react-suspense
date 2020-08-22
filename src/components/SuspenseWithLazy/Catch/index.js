import React from "react";
import styles from "./styles.module.css";

class Catch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.error("🔴", error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <div className={styles.error}>Boom! There was an error!</div>
          <a className={styles.link} href="/">
            Reload
          </a>
          <details className={styles.details}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Catch;
