import React from "react";

import styles from "./Task1.module.css";

function Task1() {
  return (
    <>
      <h2>Task 1</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div>One</div>
        </div>

        <div className={styles.gridItem}>
          <div>Two</div>
        </div>

        <div className={styles.gridItem}>
          <div>Three</div>
        </div>
        
        <div className={styles.gridItem}>
          <div>four</div>
        </div>
      </div>
    </>
  );
}

export default Task1;
