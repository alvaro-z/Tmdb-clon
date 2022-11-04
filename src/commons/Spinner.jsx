import React from "react";
import { ImSpinner3 } from "react-icons/im";
import styles from "./Spinner.module.css"

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner3 className={styles.spinning} size={60} />
    </div>
  );
};

export default Spinner;
