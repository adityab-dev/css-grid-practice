import React from 'react'

import styles from './Task2.module.css'

function Task2() {
  return (
    <>
    <h2>Task 2</h2>
    <div className={styles.gridContainer}>
      <div className={styles.gridItem1}><div>item 1</div></div>
      <div className={styles.gridItem2}><div>item 2</div></div>
    </div>
    </>
    
  )
}

export default Task2