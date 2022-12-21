import React from 'react'

import styles from './Task3.module.css';

function Task3() {
  return (
    <>
      <h2>Task 3</h2>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.gridItem1}`}><div>One</div></div>
        <div className={`${styles.gridItem} ${styles.gridItem2}`}><div>Two</div></div>
        <div className={`${styles.gridItem} ${styles.gridItem3}`}><div>Three</div></div>
        <div className={`${styles.gridItem} ${styles.gridItem4}`}><div>Four</div></div>
      </div>
    </>
  )
}

export default Task3